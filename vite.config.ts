import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  base: process.env.BASE_PATH ?? (isGitHubActions && repositoryName ? `/${repositoryName}/` : "/"),
  plugins: [solid()]
});
