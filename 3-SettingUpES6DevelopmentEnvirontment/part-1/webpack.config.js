module.exports = {
    entry: ['./app/index.js'],
    output: {
        // https://www.udemy.com/es6-in-depth/learn/v4/t/lecture/6573996?start=0
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
}