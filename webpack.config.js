const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Where to start bundling
  entry: path.resolve(__dirname, 'src'),
  // Where to output
  output: {
    // Output to the same directory
    path: path.resolve(__dirname, 'dist'),
    // Capture name from the entry using a pattern
    filename: "main.js",
  },
  // How to resolve encountered imports
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  // This is for webpack-dev-server
  devServer: {
    // Serve index.html as the base
    contentBase: path.resolve(__dirname, 'public'),

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    port: 8080,

    // Public path is root of content base
    publicPath: '/',

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
    new CopyWebpackPlugin([
      // configurations here, for example, copy all image resources to the dist folder
      // {from: 'src/images', to: 'images'}
    ])
  ],
  mode: 'development',
}