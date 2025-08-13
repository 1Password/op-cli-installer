import * as core from "@actions/core";

import { ReleaseChannel, VersionResolver } from "../version";

import { newCliInstaller } from "./cli-installer";

// Installs the 1Password CLI on a GitHub Action runner.
export const installCliOnGithubActionRunner = async (
	version: string = ReleaseChannel.latest,
): Promise<void> => {
	const versionResolver = new VersionResolver(
		version ?? core.getInput("version"),
	);
	await versionResolver.resolve();
	const installer = newCliInstaller(versionResolver.get());
	await installer.installCli();
};
