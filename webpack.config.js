const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html", 
  filename: "./index.html"
});
// "./client/index.js"
module.exports = {
  entry: "./client/index.js",
  output: { // NEW
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  }, // NEW Ends
  plugins: [htmlPlugin],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        loader: "file-loader",
        // options: { name: '/static/[name].[ext]' }
      }
    ]
  },
  devServer: {
    static: {     //this static is very new and is required to nest publicPath
      publicPath: '/dist/',
    },
    port: 8080,
    proxy: {
      '*': 'http://localhost:3000'
    },
  },
};