const package = require('./package.json');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  env: {
    APP_VERSION: package.version,
  },
};
