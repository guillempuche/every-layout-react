# Publish The Package

To guide you through committing changes along with bumping the version of the root monorepo's `package.json` (e.g., from `"version": "0.1.2-beta"` to `"0.1.3-beta"`), then publishing a GitHub tag and release, and finally, only npm publishing the package considering the `dist` location in an Nx monorepo, here's a structured approach:

## Version Bumping and Committing Changes

1. **Bump Version in Root `package.json`**

   First, manually update the version in the root `package.json` or use a versioning tool compatible with your project setup. Nx offers commands that can help automate this process, but for manual changes, directly edit the `version` field.

2. **Commit Changes**

   Utilize the script defined in your `package.json` to lint and then commit your changes using Commitizen for a conventional commit message:

   ```sh
   yarn commit
   ```

   This command will lint your changes and then guide you through creating a conventional commit message.

## Publishing a GitHub Tag and Release

1. **Create a Git Tag**

   After committing, create a Git tag corresponding to your new version:

   ```sh
   git tag v0.1.3-beta
   ```

2. **Push the Tag to GitHub**

   Push the tag to GitHub to facilitate tracking versions and potentially automating releases:

   ```sh
   git push origin v0.1.3-beta
   ```

3. **Create a GitHub Release**

   - Navigate to your repository's **Releases** section on GitHub.
   - Click on **Draft a new release**.
   - Use the tag you've pushed as the target for this release.
   - Fill in the release title and description, detailing the changes or improvements made.
   - Publish the release.

## NPM Publishing

Since your `dist` directory is located at the root of the Nx monorepo and you wish to publish only a specific package (`@every-layout/react-tamagui`), follow these steps:

1. **Build the Specific Package**

   If not already done, build the specific package to ensure the `dist` directory is up to date:

   ```sh
   yarn build
   ```

2. **Navigate to the Package's Dist Directory**

   Change your current working directory to the package's distribution directory within the `dist`:

   ```sh
   cd dist/packages/react-tamagui
   ```

3. **Publish the Package**

   Use npm or Yarn to publish the package. Since your `package.json` within the `dist/packages/react-tamagui` directory already contains `"publishConfig": {"access": "public"}`, you can publish directly:

   ```sh
   npm publish
   ```

   or if you're using Yarn:

   ```sh
   yarn publish
   ```

## Additional Notes

- Ensure you're logged into npm or Yarn with an account that has permissions to publish under the namespace you're using.
- Review the `npm publish` or `yarn publish` documentation for additional flags or configurations that might be relevant to your specific needs, such as using a tag with `npm publish --tag beta` to publish under a specific distribution tag.
- Automating some of these steps can streamline your workflow. Consider using CI/CD pipelines or Nx capabilities to automate version bumping, tagging, and publishing processes based on conventional commits and other triggers.
