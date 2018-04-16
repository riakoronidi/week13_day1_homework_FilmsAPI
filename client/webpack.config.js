const path = require("path");
const config = {
  entry: "./src/models/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  devtool: 'source-map'
};

module.exports = config;
