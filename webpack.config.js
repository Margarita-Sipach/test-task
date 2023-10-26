const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const clientPath = path.resolve(__dirname, "client")

module.exports = {
	mode: 'development',
   	entry: {
    	app: path.resolve(clientPath, "js", "index.js"),
   	},
   	output: {
    	path: path.resolve(__dirname, "dist")
   	},
	devServer: {
		port: 5000,
    	open: true,
    	historyApiFallback: true,
    	hot: true,
	},
   	resolve: {
    	extensions: ['.js'],
    	preferAbsolute: true,
    	modules: [clientPath, 'node_modules'],
    	mainFiles: ['index'],
    	alias: {},
	},
   	plugins: [
      	new HtmlWebpackPlugin({
      	   	filename: "index.html",
      	   	template: path.resolve(clientPath, "index.html"),
      	}),
   	],
   	module: {
      	rules: [{  
           	test: /\.(sa|sc|c)ss$/i,
           	exclude: /(node_modules|bower_components)/,
           	include: clientPath,
           	use: [ "style-loader", "css-loader", "postcss-loader", "sass-loader"],
        }],
   	},
};