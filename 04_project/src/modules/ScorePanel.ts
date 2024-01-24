/**
属性：
分数、等级、element、scoreElement、levelElement、maxLevel(传参)、upgrade多少份升级(传参)
方法：
加分方法，累加分数，调用升价方法、每到一定分数就升级
升级方法，需要设定一个上限，maxLevel
 */
export default class ScorePanel {
  element: HTMLElement;
  score: number = 0;
  level: number = 1;
  scoreElement: HTMLElement = document.getElementById('score')!;
  levelElement: HTMLElement = document.getElementById('level')!;
  maxLevel: number;
  upgrade: number;
  constructor(maxLevel: number, upgrade: number) {
    this.element = document.getElementById('score_panel')!;
    this.scoreElement = document.getElementById('score')!;
    this.levelElement = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upgrade = upgrade;
  }
  addScore() {
    this.score += 10;
    // if (this.score % this.upgrade > 1) {
    //   this.addLevel();
    // }
    this.addLevel();
    this.scoreElement.innerHTML = `score：${this.score + ''}`;
  }
  addLevel() {
    if (this.level >= this.maxLevel) {
      return;
    }
    this.level = Math.floor(this.score / this.upgrade);
    this.levelElement.innerHTML = `level：${this.level + ''}`;
  }
}