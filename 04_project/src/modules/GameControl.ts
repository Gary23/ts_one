/**
属性
snake  food  scorePanel三个对象属性
按键的方向
记录游戏是否gameover
方法
初始化游戏----监听键盘事件
键盘事件响应函数----修改按键方向
蛇移动的方法----根据方向，使蛇的位置改变，修改snake对象的x和y的值，每次移动10，最后定时器调用函数本身，毫秒数根据level计算
检测是否吃到食物----接收参数蛇的坐标x和y，如果食物的坐标和蛇的坐标一致就是吃到了，在蛇移动的方法中调用，如果吃到：1.增加分数、2.改变Food的位置、3.蛇增加一节
 */
import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = 'ArrowRight'
  gameOver: Boolean = false
  constructor(maxLevel: number, upgrade: number) {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(maxLevel, upgrade)
  }
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.snakeMove()
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }
  checkFood(x:number, y:number) {
    if (this.food.x === x && this.food.y === y) {
      // 吃到了
      this.scorePanel.addScore()
      this.food.change()
      this.snake.addBodies()
      // this.snake.moveBodies()
    }
  }
  snakeMove() {
    let x = this.snake.x
    let y = this.snake.y
    // console.log('snakeMove',  x, y);

    switch (this.direction) {
      case 'ArrowUp':
      case 'up':
        y -= 10
        break;
      case 'ArrowDown':
      case 'down':
        y += 10
        break;
      case 'ArrowLeft':
      case 'left':
        x -= 10
        break;
      case 'ArrowRight':
      case 'right':
        x += 10
        // console.log('right', x);
        break;
    }

    // console.log('snakeMove',  x, y);
    this.checkFood(x, y)

    // 在GameControl类中try这个存取器的赋值，异常捕获里设置gameover
    try {
      this.snake.x = x
      this.snake.y = y
    } catch (error) {
      this.gameOver = true
      alert('gameover')
    }

    if (!this.gameOver) {
      window.setTimeout(this.snakeMove.bind(this), 500 - (this.scorePanel.level - 1) * 30)
    }
  }
}