import * as core from "@actions/core";

import { VersionResolver } from "../version";

import { newCliInstaller } from "./cli-installer";

// Installs the 1Password CLI on a GitHub Action runner.
export const installCliOnGithubActionRunner = async (
	version?: string,
): Promise<void> => {
	try {
		const versionResolver = new VersionResolver(
			version ?? core.getInput("version"),
		);
		await versionResolver.resolve();
		const installer = newCliInstaller(versionResolver.get());
		await installer.installCli();
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error("error:", error);
			core.setFailed(error.message);
		} else {
			console.error("Unknown error:", error);
			core.setFailed("Unknown error occurred");
		}
	}
};
