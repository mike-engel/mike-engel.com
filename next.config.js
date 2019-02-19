const nextMDX = require("@zeit/next-mdx");
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? require("next/constants")
    : require("next-server/constants");

const withMDX = nextMDX({
  extension: /\.mdx?$/
});

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return withMDX({ target: "serverless" });
  }

  const withTypescript = require("@zeit/next-typescript");
  const typescriptConfig = withTypescript();

  return withMDX({
    ...typescriptConfig,
    target: "serverless",
    pageExtensions: [...typescriptConfig.pageExtensions, "mdx"]
  });
};
