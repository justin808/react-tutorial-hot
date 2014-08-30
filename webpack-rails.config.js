
module.exports = {
  devtool: "source-map",
  entry: [
    './scripts/example',
    './scripts/rails_shims'
  ],
  output: {
    path: __dirname + "/railsbuild",
    filename: 'rails-bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        loaders: ['react-hot', 'es6', 'jsx?harmony'] }
    ]
  }
};