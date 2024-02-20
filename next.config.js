/** @type {import('next').NextConfig} */
const NextConfig = {};
module.exports = NextConfig;
const withVideos = require("next-videos")

module.exports = withVideos();

//next.config.js


module.exports = withVideos({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/media/',
          },
        },
      ],
    });

    return config;
  },
});
