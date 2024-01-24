### 01_构建项目

1. 整体参照之前的 02_webpack编译ts
2. 本项目增加less的处理能力，安装less、less-loader、css-loader、style-loader，在rules中增加less文件的配置
3. 处理css兼容性，增加样式前缀，安装postcss、postcss-loader、postcss-preset-env，在less的loader处理中增加postcss的配置

### 02_项目界面

#main：主界面
#stage：游戏主窗口    
#score_panel：记分牌
#score：分数
#level：等级
#snake：蛇的容器
#food：食物

### Stage类

1. 属性
  - stageWidth 游戏界面宽度
  - stageHeight 游戏界面高度
  - elementWidth 一格的宽度
  - elementHeight 一格的高度

### Food类

1. 属性
  - food元素
  - stage Stage类的实例
  - stageWidth Stage的stageWidth
  - elementWidth Stage的elementWidth
2. 存取器
  - 获取食物的x坐标
  - 获取食物的y坐标
3. 方法
  - 随机修改食物的位置

### ScorePanel类

1. 属性
  - 分数
  - 等级
  - score_panel元素
  - score元素
  - level元素
2. 接收参数
  - 等级最大值
  - 多少分进行升级
3. 方法
  - 加分方法
  - 升级方法

### Snake类

1. 属性
  - snakeElement
  - headElement(蛇头)、
  - bodiesElement(蛇的身体，包含蛇头)、
  - stage Stage类的实例
  - stageWidth Stage的stageWidth
  - stageHeight Stage的stageHeight
  - elementWidth Stage的elementWidth
2. 存取器
  - 蛇头的X坐标获取和设置、蛇头的Y坐标获取和设置
3. 方法
  - 增加身体的方法
  - 蛇移动身体的方法
  - 检查蛇头和身体有没有相撞

### GameControl类  

1. 控制其他所有类
2. 属性
  - snake Snake类的实例
  - food Food类的实例
  - scorePanel ScorePanel类的实例
  - 按键的方向
  - 记录游戏是否gameover
2. 方法
  - 初始化游戏
  - 键盘事件响应函数
  - 蛇移动的方法
  - 检测是否吃到食物

