const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : "development";

module.exports = {
    mode: mode,
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //without additional settings, this will reference .babelrc
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, //css , scss, sass files
                use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
            },
        ]
    },


    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    }
}