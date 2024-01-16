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
  // set中新值不发生变化则不进行修改；判断x和y的合法范围0-元素宽高之间是合法值，不合法throw一个错误
  set x(x: number) {
    if (this.x === x) {
      return
    }
    if (x < 0 || x > this.stageHeight - this.elementWidth) {
      throw new Error('蛇撞墙了');
    }
    this.headElement.style.left = x + 'px';
  }
  set y(y: number) {
    if (this.y === y) {
      return
    }
    if (y < 0 || y > this.stageWidth - this.elementWidth) {
      throw new Error('蛇撞墙了');
    }
    this.headElement.style.top = y + 'px';
  }
  get x(): number {
    return this.headElement.offsetLeft;
  }
  get y(): number {
    return this.headElement.offsetTop;
  }
}