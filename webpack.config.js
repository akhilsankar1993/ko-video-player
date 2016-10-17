module.exports = {
  entry: './app/main',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true
}
