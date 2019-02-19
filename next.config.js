const nextMDX = require("@zeit/next-mdx");
const withOffline = require("next-offline");
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

  console.log(Object.keys(typescriptConfig));

  return withTypescript(
    withMDX(
      withOffline({
        target: "serverless",
        pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
        generateInDevMode: true,
        workboxOpts: {
          swDest: "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "networkFirst",
              options: {
                cacheName: "mike-engel-v1",
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      })
    )
  );
};
