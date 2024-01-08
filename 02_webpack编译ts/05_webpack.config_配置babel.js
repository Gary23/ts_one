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
    // 不使用箭头函数
    // webpack打包编译后的文件是一个箭头函数的自动用，在老版本浏览器箭头函数会报错，这个不能通过babel修改，这是webpack的实现所以在webpack的配置中设定开关
    environment: {
      arrowFunction: false
    }
  },
  // webpack打包时要使用的模块
  module: {
    rules: [
      {
        // 指定哪些文件生效
        test: /\.ts$/,
        // 要使用的render
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  // 指定环境插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 按需加载
                    useBuiltIns: 'usage',
                    // 指定corejs版本
                    corejs: 3,
                    // 指定兼容到哪个版本的浏览器
                    targets: {
                      // chrome: '80',
                      chrome: '50',
                      ie: '10'
                    },
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 简略的写法
        // use: 'ts-loader',
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
  ],
  resolve: {
    // 以js和ts后缀的文件是引用的模块
    extensions: ['.ts', '.js']
  }
}
