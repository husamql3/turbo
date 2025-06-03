const path = require("node:path")

module.exports = {
	reactStrictMode: true,
	output: "standalone",
	experimental: {
		outputFileTracingRoot: path.join(__dirname, "../../"),
	},
}
