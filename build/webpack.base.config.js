const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { DefinePlugin } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, '../dist')
    },
    cache: {
        type: 'filesystem' // 持久化缓存
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    'vue-loader',
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 指定特定的ts编译配置，为了区分脚本的ts配置
                            configFile: path.resolve(__dirname, '../tsconfig.json'),
                            // 对应文件添加个.ts或.tsx后缀
                            appendTsSuffixTo: [/\.vue$/],
                            transpileOnly: true // 关闭类型检测，即值进行转译
                        },
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[hash][ext]'
                }
            },
        ]
    },
    optimization: {
        minimize: true, // 可省略，默认最优配置：生产环境，压缩 true。开发环境，不压缩 false
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: '[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            title: 'Vue3 + Wp5 + TS',
            minify: {
                collapseWhitespace: true, // 去掉空格
                removeComments: true // 去掉注释
            }
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_OPTIONS_API__: false,
        }),
        new ESLintPlugin({
            extensions: ['js', 'ts', 'vue'],
            exclude: ['node_modules'],
            context: path.resolve(__dirname, '../src'),
            fix: true,
        }),
        new StylelintPlugin({
            files: ['**/*.{html,vue,css,sass,scss}'],
            context: path.resolve(__dirname, '../src'),
            fix: true,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js', 'json'],
        alias: {
            '@': srcPath,
            '@api': path.join(srcPath, 'api'),
            '@components': path.join(srcPath, 'components'),
            '@views': path.join(srcPath, 'views'),
            '@assets': path.join(srcPath, 'assets'),
            '@hooks': path.join(srcPath, 'hooks'),
            '@router': path.join(srcPath, 'router'),
            '@store': path.join(srcPath, 'store'),
            '@utils': path.join(srcPath, 'utils'),
        },
    },
};
