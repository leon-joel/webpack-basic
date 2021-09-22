const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 後ろから順に（css-loader -> style-loader の順に）処理が行われる
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}