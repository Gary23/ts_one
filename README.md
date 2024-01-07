npm全局安装typscript，tsc命令编译，可以编译为任意版本的js，默认es3

## 01_basic_type

### 类型声明

所有类型

  |  类型   |       例子        |              描述              |
  | :-----: | :---------------: | :----------------------------: |
  | number  |    1, -33, 2.5    |            任意数字            |
  | string  | 'hi', "hi", `hi`  |           任意字符串           |
  | boolean |    true、false    |       布尔值true或false        |
  | 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
  |   any   |         *         |            任意类型            |
  | unknown |         *         |         类型安全的any          |
  |  void   | 空值（undefined） |     没有值（或undefined）      |
  |  never  |      没有值       |          不能是任何值          |
  | object  |  {name:'孙悟空'}  |          任意的JS对象          |
  |  array  |      [1,2,3]      |           任意JS数组           |
  |  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
  |  enum   |    enum{A, B}     |       枚举，TS中新增类型       |


### 01_number、string、boolean

1. 声明变量可以同时定义一个类型，比如变量类型设置为number，那以后就只能赋值number类型
2. 如果声明时直接赋值，可以省略类型的定义，ts会自动判断类型
3. 函数中参数和函数的返回值，也可以声明类型类型定义，


### 02_any、unknown

1. any，任意类型，设置后相当于对这个变量关闭了ts的类型检测，如果只声明变量不定义类型也不赋值，默认就是any类型
2. unknown 未知类型的值，可以赋值任意类型
3. 断言类型，用来告诉ts，变量的实际类型，这样unknown可以赋值给其他类型的变量了
4. unknown和any的区别是
   - any类型的变量，可以赋值给任何类型的变量，等于把赋值的变量的类型检测也关闭了
   - unknown类型的变量，不能赋值给其他器类型的变量，通过断言赋值后，被赋值的变量类型也是正常的
   - unknown实际上就是一个类型安全的any

### 03_void、never  
1. void用于定义没有具体返回值的函数
2. never用于定义永不返回结果的函数，通常用于抛出异常的函数(比如`throw new Error()`)，也就是函数不能执行完，如果函数执行完默认返回的是undefined，而never不能有任何返回值

### 04_object

1. object本身一个js对象，但是js中一切复杂类型皆为对象，所以本身没什么意义，对于对象的限制通常是限制其内部结构
2. 限制结构的方式，可以限制固定有哪些属性、可选属性、任意属性以及属性值的类型
3. 同样限制Function类型也没什么意义，Function也要限制结构，限制参数类型和返回值类型

### 05_array、tuple

1. js中数组存什么都可以，ts中一个数组内通常存储相同类型的值，所以要定义数组元素的类型
2. tuple是元组类型，js中不存在的类型，作用是固定数组的长度，也就是固定元素数量的数组

### 06_enum

1. enum是枚举类型，js中不存在的类型，用于处理数据的字典

### 07_连接类型

1. 连接类型使用 `|`、`&` 分割类型，`|` 同 `||`，`&` 同 `&&`
2. 如果变量可能是多个类型可以用 `|` 连接，还可以用于连接字面量类型，限制变量的值的范围。
3. 数组或者对象需要同时满足多个结构条件可以使用 `&` 连接
  
### 08_类型别名

1. 类似于函数的封装，有的类型定义很长且要多处使用，可以定义一个别名
定义k和l值都在1-4的范围内
let k: 1 | 2 | 3 | 4
let l: 1 | 2 | 3 | 4
但是每次都写两遍很麻烦，所以可以像函数封装一样创建一个类型别名
type myType = 1 | 2 | 3 | 4
let m:myType 

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



引入babel
-D安装 @babel/core  @babel/preset-env  babel-loader  core-js
webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        // 指定哪些文件生效
        test: /\.ts$/,
        // 要使用的render
        use: [
          {
            // 配置babel-loader
            loader: 'babel-loader',
            options: {
              // 设定预定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 指定浏览器版本
                    targets: {
                      chrome: "58",
                      ie: "10"
                    },
                    // 指定corejs的版本，处理一些复杂的新语法比如Promise
                    "corejs": '3',
                    // 使用corejs的方式，usage表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          }, 
          'ts-loader'
        ],
        // 排除的文件
        exclude: '/node-modules/'
      }
    ]
  }
}

```



webpack打包编译后的文件是一个箭头函数的自动用，在老版本浏览器箭头函数会报错，这个不能通过babel修改，这是webpack的实现所以在weboack.config.js中设定开关
```js
outpur: {
  //.....
  // 告诉webpack不使用箭头函数
  environment: {
    arrowFunction: false
  }
}
```


