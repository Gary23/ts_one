### 01_构建项目

1. 整体参照之前的 02_webpack编译ts
2. 本项目增加less的处理能力，安装less、less-loader、css-loader、style-loader，在rules中增加less文件的配置
3. 处理css兼容性，增加样式前缀，安装postcss、postcss-loader、postcss-preset-env，在less的loader处理中增加postcss的配置

### 02_项目界面

项目界面
main主界面
stage游戏主窗口    score-panel记分牌---score、level
snake蛇的容器
food食物


Food类
属性：
element:HTMLElement    最后加!标识这个值一定不会为空
存取器
获取食物的x坐标 offsetLeft
获取食物的y坐标 offsetTop
修改食物的位置  修改left和top的值，随机数，范围：最小是0；最大是stage部分的宽高 - 食物的宽高；每次移动是10；坐标必须是整10。   




ScorePanel类
属性：
分数、等级、scoreElement、levelElement、maxlength(传参)、多少份升级(传参)
方法：
加分方法，累加分数，调用升价方法、每到一定分数就升级
升级方法，需要设定一个上限，maxlength


Snake类
属性：
snakeElement、headElement(蛇头)、bodiesElement(蛇的身体，包含蛇头)、
存取器：
蛇头的X坐标获取和设置、蛇头的Y坐标获取和设置
方法
增加身体的方法



GameControl类   游戏控制类
控制其他所有类
属性
snake  food  scorePanel三个对象属性
按键的方向
记录游戏是否gameover
方法
初始化游戏----监听键盘事件
键盘事件响应函数----修改按键方向
蛇移动的方法----根据方向，使蛇的位置改变，修改snake对象的x和y的值，每次移动10，最后定时器调用函数本身，毫秒数根据level计算




蛇撞墙检测
在snake类中，设置x和y的存取器中，增加判断：新值不发生变化则不进行修改；判断x和y的合法范围0-元素宽高之间是合法值，不合法throw一个错误，在GameControl类中try这个存取器的赋值，异常捕获里设置gameover



吃食检测
GameControl类增加方法
检测是否吃到食物，接收参数蛇的坐标x和y，如果食物的坐标和蛇的坐标一致就是吃到了，在蛇移动的方法中调用，如果吃到：1.了增加分数、2.改变Food的位置、3.蛇增加一节






