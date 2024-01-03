//================= 1、number、string、boolean =================
// 变量类型设置为number，那以后就只能赋值number类型
let a:number 
a = 22
// a = '22'   // 错误的赋值

// 如果声明时直接赋值，可以省略类型，自动判断类型
let b = true
// b = 22    // 错误的赋值

// 函数的类型声明
function sum(a:number, b:number):number {
  return a + b
}
sum(1,2);
// sum(1,'2');    // 错误的传参
// sum(1,);     // 错误的传参


// 定义联合类型，可以是数值或字符串
let a1:number | string    
a1 = 22
a1 = 'hello'

// 定义字面量类型，限制b1的赋值只能是'main'或'sub'
let b1: "main" | "sub"
b1 = 'main'
b1 = 'sub'
// b1 = "other"    // 错误的赋值

//================= 2、any、unknown =================
// any 任意类型，等于关闭ts的类型检测，
let c:any
// 默认any类型，等价于let c2:any
let c2    
// unknown 也是任意类型，但是有类型检测
let d:unknown
c = 11
c = 'c'
d = 22
d = 'd'

let c1:string, d1:string
c1 = c    // 正确的赋值，c1也变成了any类型，any可以污染其他变量
// d1 = d    // 错误的赋值，unknown类型无法通过赋值的方式定义给其他变量

// 类型断言，可以通过类型断言的方式，将unknown类型定义给其他变量，要确保d真的string类型，否则会赋值为其他类型
d1 = d as string    
// 另一种写法
d1 = <string>d    
// 也可以不使用断言，用if的写法，确保d是string类型
if (typeof d === 'string') {
  d1 = d
}


//================= 3、void、never =================
// void 定义没有返回值的函数，没有返回值等于返回的undefined
function e():void {
  return
}
function e1():void {
  console.log('e1函数')
}

// never 定义函数不能有任何返回值，包括undefined
function f():never {
  throw new Error('error')
}







