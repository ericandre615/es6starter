const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
  ],
  options: {
    browsers: ["last 3 versions", "safari 5", "ie 9", "ie 8", "opera 12 1", "ios 6", "android 4"]
  }
};
