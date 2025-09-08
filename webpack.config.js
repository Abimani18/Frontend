const webpack = require('webpack');

module.exports = {
  // other webpack configurations...
     ignoreWarnings: [
    {
      module: /node_modules\/html-entities/,
    },
  ],
  resolve: {
    alias: {
      http: 'stream-http',
      https: 'https-browserify',
      zlib: 'browserify-zlib',
      stream: 'stream-browserify',
    },
  },
  

  // other webpack configurations...
};


