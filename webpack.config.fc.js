const path = require("path");

module.exports = {
  mode: "production",
  entry: { app: `./src/fc.js` },
  plugins: [],
  output: {
    filename: "fc.js",
    path: path.resolve(__dirname, "dist"),
  },
};
