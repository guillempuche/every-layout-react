import * as path from "path";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react-swc";
/// <reference types='vitest' />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	root: __dirname,
	cacheDir: "../../node_modules/.vite/react",

	plugins: [
		react(),
		nxViteTsPaths(),
		dts({
			entryRoot: "src",
			tsConfigFilePath: path.join(__dirname, "tsconfig.lib.json"),
			skipDiagnostics: true,
		}),
		viteStaticCopy({
			targets: [
				{
					src: "README.md",
					dest: ".",
				},
			],
		}),
	],

	// Configuration for building the library.
	// See: https://vitejs.dev/guide/build.html#library-mode
	build: {
		outDir: "../../dist/packages/react-tamagui",
		reportCompressedSize: true,
		commonjsOptions: { transformMixedEsModules: true },
		lib: {
			entry: "src/index.ts",
			name: "react",
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			// External packages that should not be bundled into the library.
			external: ["react", "react-dom"],
		},
	},
});
