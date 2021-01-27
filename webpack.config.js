var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(gql|graphql)$/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    port: 8080,
    public: 'http://localhost:8080'

  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

new WebpackDevServer(webpack(WebpackDevConfig), {
    https: true,
    hot: true,
    watch: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
}).listen(1337, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Dev server running at https://localhost:1337');
}),


  ])
}
