import { m1 } from './m1';

console.log(m1);

const sum = (a:number, b:number):number => {
  console.log(a + b);
  return a + b
}

sum(1,2)
sum(3,4)
sum(5,4)

// 当babel的配置比较低版本浏览器时，打印Promise会引入很多模拟Promise的代码
// console.log(Promise);