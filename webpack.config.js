var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname + "/lib",
    entry: "./index.jsx",
    output: {
        path: "./build",
        filename: "app.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'MARC Editor',
        template: 'assets/index.html',
        inject: 'body'
      })
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
            }
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
        contentBase: "./build"
    }
};
