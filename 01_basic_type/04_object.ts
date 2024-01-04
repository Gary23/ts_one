/**
1. object本身一个js对象，但是js中一切复杂类型皆为对象，所以本身没什么意义，对于对象的限制通常是限制其内部结构
2. 限制结构的方式，可以限制固定有哪些属性、可选属性、任意属性以及属性值的类型
3. 同样限制Function类型也没什么意义，Function也要限制结构，限制参数类型和返回值类型
 */

// 只限制object类型没有意义
let a: object
a = {}
a = function() {}

// 应该限制对象内都有哪些属性，属性是什么类型
let b: { name:string }
b = { name: '小明' }
// b = {}   // 报错
// b = { name: '小明', age: 19 }   // 报错
// b = { name: 13 }    //报错

// 可选属性
let c: { name:string, age?:number }
c = { name: '小明' }
c = { name: '小明', age: 19 }

// 不限制其他属性
// [propName: string]:any表示任意字符串类型的属性名（js中属性名默认就是字符串类型）且属性值是任意类型
let d: { name:string, age?:number, [propName: string]:any }
d = { name: '小明', age: 19 }
d = { name: '小明', age: 19, gender: '1' }

// 想限制类型为函数写Function也没什么意义，通常希望限制的是函数的结构
let e: Function

// 表示f是一个函数，这个函数接收2个参数类型为number，函数返回值也是number
let f: (a:number, b:number) => number
f = function(n1:number, n2:number):number { return n1 + n2 }
// f = function(n1:number, n2:number, n3:number):number { return n1 + n2 + n3 }   // 报错
// f = function(n1:number, n2:string):number { return n1 + Number(n2) }   // 报错