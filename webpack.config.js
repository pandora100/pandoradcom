module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
       {
       test: /\.(jpe?g|png|PNG|gif|GIF|svg)$/i,
        use: {
          loader: "file-loader",
            options: {
              query: {
                name:'assets/[name].[ext]'
              }
            }
            }
          },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
        ]
      }
    
 
};