import { createTamagui } from "@tamagui/core";

// /**
//  * This avoids shipping themes as JS. Instead, Tamagui will hydrate them from CSS.
//  */
// const themes = process.env.TAMAGUI_IS_SERVER
//   ? themesIn
//   : ({} as typeof themesIn);

export const tamaguiComponentsConfig = createTamagui({});

export type ITamaguiComponentsConfig = typeof tamaguiComponentsConfig;

// /// Customized Tamagui. This replace the import of `tamagui` package for our customization.
// declare module "tamagui" {
// 	interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
// }

export default tamaguiComponentsConfig;
