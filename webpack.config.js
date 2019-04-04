var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var STYLE_DIR = path.resolve(__dirname, 'src/client/styles');
var IMAGE_DIR = path.resolve(__dirname, 'src/client/images');

var config = {
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.js',
	STYLE_DIR + '/main.scss'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
	sourceMapFilename: '[file].map'
  },
  devtool: 'eval',
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loaders : [
          'react-hot-loader/webpack',
          'babel-loader'
        ]
      },
	  {
        test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000&name=fonts/[name].[ext]',
        include: [
          APP_DIR,
          path.resolve(__dirname, 'node_modules/bootstrap/fonts'),
        ],
        exclude: [
          IMAGE_DIR
        ]
      },
	  {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
		  use: [
			'file-loader',
			{
			  loader: 'image-webpack-loader',
			  options: {
				mozjpeg: {
				  progressive: true,
				  quality: 65
				},
				// optipng.enabled: false will disable optipng
				optipng: {
				  enabled: false,
				},
				pngquant: {
				  quality: '65-90',
				  speed: 4
				},
				gifsicle: {
				  interlaced: false,
				},
				// the webp option will enable WEBP
				webp: {
				  quality: 75
				}
			  }
			},
		  ],
        include: IMAGE_DIR,
        exclude: [
          path.resolve(__dirname, 'node_modules/bootstrap/fonts')
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ]
};

module.exports = config;