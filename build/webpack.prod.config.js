const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.base.config');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
});
