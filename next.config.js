const nextMDX = require("@zeit/next-mdx");
const withOffline = require("next-offline");

const withMDX = nextMDX();

module.exports = withMDX(
	withOffline({
		target: "serverless",
		pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
		generateInDevMode: false,
		workboxOpts: {
			swDest: "static/service-worker.js",
			runtimeCaching: [
				{
					urlPattern: /^https?.*/,
					handler: "NetworkFirst",
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
);
