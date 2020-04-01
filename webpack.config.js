var path = require('path');

module.exports = {
entry: './src/index.js',
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
module: {
rules: [
    { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
]
},
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'public')
}
};