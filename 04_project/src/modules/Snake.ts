/**
属性：
snakeElement、headElement(蛇头)、bodiesElement(蛇的身体，包含蛇头)、
存取器：
蛇头的X坐标获取和设置、蛇头的Y坐标获取和设置
方法
增加身体的方法
 */
import Stage from './Stage'

export default class Snake {
  snakeElement: HTMLElement;
  headElement: HTMLElement;
  bodiesElement: HTMLCollection;
  stageWidth: number;
  stageHeight: number;
  elementWidth: number;
  stage: Stage
  constructor() {
    this.stage = new Stage()
    this.stageWidth = this.stage.stageWidth;
    this.stageHeight = this.stage.stageHeight;
    this.elementWidth = this.stage.elementWidth

    this.snakeElement = document.getElementById('snake')!;
    this.headElement = document.querySelector('#snake div')!;
    this.bodiesElement = document.getElementById('snake').children!;
  }
  addBodies() {
    this.snakeElement.append(document.createElement('div'));
  }
  // 蛇移动身体的方法，遍历所有身体，后面的蛇设置为前面身体的位置，蛇头位置不需要在这改，这里只改身体的位置
  moveBodies() {
    for (let index = this.bodiesElement.length - 1; index > 0; index--) {
      const bdc = this.bodiesElement[index] as HTMLElement
      const bdp = this.bodiesElement[index - 1] as HTMLElement
      // const element = array[index];
      bdc.style.left = bdp.offsetLeft + 'px'
      bdc.style.top = bdp.offsetTop + 'px'
    }
  }
  // 检查蛇头和身体有没有相撞，获取所有身体检查其是否和蛇头坐标发生重叠
  checkBodies() {
    for (let index = 1; index < this.bodiesElement.length; index++) {
      const bdc = this.bodiesElement[index] as HTMLElement
      if (this.x === bdc.offsetLeft && this.y === bdc.offsetTop) {
        throw new Error('蛇撞到自己了');
      }
    }
  }
  // set中新值不发生变化则不进行修改；判断x和y的合法范围0-元素宽高之间是合法值，不合法throw一个错误，不能往相反方向移动
  set x(x: number) {
    if (this.x === x) {
      return
    }
    if (x < 0 || x > (this.stageHeight - this.elementWidth)) {
      throw new Error('蛇撞墙了');
    }

    // 判断蛇头的坐标和第二节身体的坐标是否一样，一样则代表按了相反方向
    const bd2 = this.bodiesElement[1] as HTMLElement
    if (bd2 && x === bd2.offsetLeft && this.y === bd2.offsetTop) {     // 回头了
      if (this.x > bd2.offsetLeft) {    // 向右移动中
        x += 20
      }
      if (this.x < bd2.offsetLeft) {    // 向左移动中
        x -= 20
      }
    }
    this.moveBodies()
    this.headElement.style.left = x + 'px';
    this.checkBodies()
  }
  set y(y: number) {
    if (this.y === y) {
      return
    }

    if (y < 0 || y > (this.stageWidth - this.elementWidth)) {
      throw new Error('蛇撞墙了');
    }

    const bd2 = this.bodiesElement[1] as HTMLElement
    if (bd2 && this.x === bd2.offsetLeft && y === bd2.offsetTop) {     // 回头了
      if (this.y > bd2.offsetTop) {    // 向下移动中
        y += 20
      }
      if (this.y < bd2.offsetTop) {    // 向上移动中
        y -= 20
      }
    }
    this.moveBodies()
  
    this.headElement.style.top = y + 'px';

    this.checkBodies()
  }
  get x(): number {
    return this.headElement.offsetLeft;
  }
  get y(): number {
    return this.headElement.offsetTop;
  }
}