const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, './dist'),
		compress: true,
		port: 8001
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
            presets:[
                '@babel/react'
            ]
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            },
            "sass-loader"
          ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      { 
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css"
    })
  ],
  resolve:{
    extensions: ['*', '.js', '.jsx']
  }
};