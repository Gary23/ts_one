## 02_webpack编译ts

### 01_webpack.config_基本配置.js

1. 初始化最基本的webpack配置，安装webpack、webpack-cli、typescript、ts-loader
2. 定义入口文件、输出目录、打包使用的模块
3. package增加build命令，执行webpack

### tsconfig.json

1. 创建ts编译文件tsconfig.json，这里仅配置es版本

### 02_webpack.config_html模板.js

1. 安装html-webpack-plugin
2. src创建一个html模板，在webpack配置html-webpack-plugin模板位置，自动引入ts

### 热更新.js

1. 安装webpack-dev-server
3. 在package增加start命令，`webpack serve`

### 03_webpack.config_删除dist.js

1. 安装clean-webpack-plugin
2. webpack配置文件引入clean-webpack-plugin的CleanWebpackPlugin方法，在plugins调用，每次打包前先删除dist目录的文件

### 04_webpack.config_模块扩展名.js

1. webpack配置文件指定ts和js文件可以作为模块引入，只有配置之后才可以正常作为模块引入

### 05_webpack.config_配置babel.js

1. 安装@babel/core、@babel/preset-env、babel-loader、core-js
2. webpack的plugins配置项中增加babel-loader的配置
3. webpack的output的配置关闭箭头函数