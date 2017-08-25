const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
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
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file-loader?name=../images/[name].[ext]'  // <-- retain original file name
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css')
    // new WebpackShellPlugin({
      // onBuildEnd: ['docker run --rm -it --name hugo -e HUGO_BUILDDRAFTS=true -e HUGO_BASEURL=/ -v /Users/dylan/Dropbox/sites/dylansmith.com/src:/src -v /Users/dylan/Dropbox/sites/dylansmith.com/output:/output jojomi/hugo']
    // })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'static')
  }
}
