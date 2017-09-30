module.exports = {
    entry: ['./app/index.js'],
    output: {
        // https://www.udemy.com/es6-in-depth/learn/v4/t/lecture/6573996?start=0
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3002,
        contentBase: './build',
        inline: true
    }
}


