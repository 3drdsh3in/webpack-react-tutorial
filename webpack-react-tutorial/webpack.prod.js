var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    // Can add vendors below
  },
  mode: "production",
  module: {
    rules: [
      // Instantiate Javascript/JSX loader with babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // Instantiate HTML loader
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  // Initialize the plugins
  plugins: [
    new HtmlWebPackPlugin({
      // Template that is used for injection's name:
      template: "./src/index.html",
      // Bundled Name:
      filename: "./index.html",
      minify: {
        collapseWhitespace: true, // collapses any spaces in b/w code.
        removeComments: true // removes any comments from the final bundle [note it is comments for HTML,CSS AND JS]
      }
    })
  ]
};