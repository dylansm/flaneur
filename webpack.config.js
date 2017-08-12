const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss|\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.ico$|\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css')
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static')
  }
}
