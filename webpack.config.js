module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          { 
            loader: 'css-loader',
          }, 
          { 
            loader: 'sass-loader' 
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public'
  }
};