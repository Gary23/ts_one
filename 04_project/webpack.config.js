const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    targets: {
                      chrome: '50',
                      ie: '10'
                    }
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: '/node_modules/'
      },
      // 处理
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions:{
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 3 versions'
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.less']
  }
}