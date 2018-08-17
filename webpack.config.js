const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const APP_SRC = path.resolve(__dirname,'./app/src');


module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    'react-hot-loader/patch',
    path.join(APP_SRC,'./index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'svg-react-loader',
          }
        ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new webpack.EnvironmentPlugin({
      SG_AUTH_AUTHORITY: 'http://localhost:8000/openid/',
      SG_AUTH_CLIENT_ID: 'secret',
      SG_AUTH_RESPONSE_TYPE: 'id_token token',
      SG_AUTH_REDIRECT_URI: 'http://localhost:8080/auth',
      SG_AUTH_SCOPE: [
        'openid',
        'profile',
        'email',
        'onlineweb4'
      ].join(' '),
      SG_APPLICATION_BACKEND: 'http://localhost:8000',
      SG_APPLICATION_ENDPOINT: '/api/v1/committeeapplications/',
      SG_GA_TRACKING_ID: '',
      SG_SENTRY_URL: '',
      NODE_ENV: 'development',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (
        module.context && module.context.indexOf('node_modules') !== -1
      ),
    }),
    new FaviconsWebpackPlugin('./app/favicon.png'),
    new webpack.NamedModulesPlugin()
  ],
};
