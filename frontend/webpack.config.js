var path = require("path")
var webpack = require("webpack")
const { VueLoaderPlugin } = require("vue-loader")
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        port: 9000,
    },
    devtool: "#eval-source-map",
    plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
    externals: {
        config: JSON.stringify({
            README_URL:
                "https://raw.githubusercontent.com/ar0ne/blog-app/master/readme.md",
            BASE_API_URL:
                process.env.BASE_API_URL || "http://localhost:8000/api/v1",
        }),
    },
}

if (process.env.NODE_ENV === "production") {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
                BASE_API_URL: JSON.stringify(process.env.BASE_API_URL),
            },
        }),
    ])
}
