var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname + "/src"),
    entry: "./js/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"        
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'MARC Editor',
        template: 'src/assets/index.html',
        inject: 'body'
      }),
      new CopyWebpackPlugin([
          { from: './assets/lib', to: './lib/'},
          { from: './assets/css', to: './css/'}
      ])
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        contentBase: "./dist"
    }
};
