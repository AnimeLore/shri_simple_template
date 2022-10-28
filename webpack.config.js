const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const webpack = require('webpack');

const config = {
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
        index: "./src/index.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveReportTo: 'report.html',
            saveOnlyStats: false,
            open: false,
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                options: {presets: ['@babel/env', ["@babel/preset-react", {"runtime": "automatic"}]]},
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

        ],
    },
    optimization: {
        usedExports: true,
        concatenateModules: true,
        minimize: true,
        moduleIds: "deterministic",
        innerGraph: true,
        splitChunks: {
            minSize: 20000,
            minRemainingSize: 0,
            maxAsyncRequests: 25,
            enforceSizeThreshold: 50000,
            minChunks: 1,
            chunks: "all",
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node modules[\\]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: {
            name: "runtime"
        },

    },
    target: "web",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            'buffer': require.resolve('buffer'),
            'stream': require.resolve("stream-browserify"),
            'crypto': require.resolve('crypto')
        },
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'node_modules/ui/node_modules'),
        ]
    },
    stats: {
        children: true
    }

};

module.exports = config;
