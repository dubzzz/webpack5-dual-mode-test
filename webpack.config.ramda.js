const path = require("path");

module.exports = {
  mode: "production",
  entry: { app: `./src/ramda.mjs` },
  plugins: [],
  output: {
    filename: "ramda.js",
    path: path.resolve(__dirname, "dist"),
  },
};
