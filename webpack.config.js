const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',

    /*ource maps para que seja possível debugar o código escrito da aplicação durante o desenvolvimento mesmo com o bundle deixando o nosso código confuso. */
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',

    /*entry -> fala onde fica o arquivo principal */
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
     
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    /*como a aplicação vai se comportar */
    module: {
        rules:[
            {
                /*test recebe uma expressão regular pra dizer se o arquivo é js ou não */
                test: /\.jsx$/,
                exclude: /node_modules/,
                /*babel-loade faz a integração do babel e webapck */
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};