const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'none',
  // 入口文件
  entry: './src/index.ts',
  // 打包输出目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // webpack打包时要使用的模块
  module: {
    rules: [
      {
        // 指定哪些文件生效
        test: /\.ts$/,
        // 要使用的render
        use: 'ts-loader',
        // 排除的文件
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    // 每次先删除dist目录
    new CleanWebpackPlugin(),
    // 指定html模板文件
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
