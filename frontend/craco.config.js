
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "process": 'process/browser.js',
        "vm": require.resolve("vm-browserify")
      };

      webpackConfig.plugins = webpackConfig.plugins || [];

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        })
      );

      return webpackConfig;
    }
  }
};