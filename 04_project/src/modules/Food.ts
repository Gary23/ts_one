/**
属性：
element:HTMLElement 元素
存取器
获取食物的x坐标 offsetLeft
获取食物的y坐标 offsetTop
方法：
修改食物的位置  修改left和top的值，随机数，范围：最小是0；最大是stage部分的宽高；每次移动是10；坐标必须是整10。  
 */
import Stage from './Stage'

export default class Food {
  element: HTMLElement;
  stage: Stage
  stageWidth: number;
  elementWidth: number;
  constructor() {
    this.stage = new Stage()
    this.stageWidth = this.stage.stageWidth;
    this.elementWidth = this.stage.elementWidth
    this.element = document.getElementById('food')!;   // 最后加!标识这个值一定不会为空
  }
  change() {
    const randomX = Math.floor(Math.random() * ( this.stageWidth - this.elementWidth ) / 10) * 10
    const randomY = Math.floor(Math.random() * ( this.stageWidth - this.elementWidth ) / 10) * 10
    this.element.style.left = randomX + 'px'
    this.element.style.top = randomY + 'px'
  }
  get x(): number {
    return this.element.offsetLeft
  }
  get y(): number {
    return this.element.offsetTop
  }
}