module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:  /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    output: {
        path: __dirname + "/static/dist",
        filename: "bundle.js"
    },
    entry: "./static/src/js/index.jsx"
}