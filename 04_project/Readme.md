webpack项目，参考webpack编译ts部分的配置

增加css的处理能力

安装less  less-loader  css-loader  style-loader
配置less文件的处理
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}
处理样式兼容性，兼容旧版本和非chrome内核的浏览器，增加css前缀
安装 postcss postcss-loader postcss-preset-env
修改配置文件
use: [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              // 和babel类似，配置需要兼容的浏览器
              browsers: 'last 2 versions'    // 兼容所有浏览器最新的两个版本
            }
          ]
        ]
      }
    }
  }
  'less-loader'
]



项目界面
main主界面
stage游戏主窗口    score-panel记分牌---score、level
snake蛇的容器
food食物