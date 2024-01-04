/**
1. any，任意类型，设置后相当于对这个变量关闭了ts的类型检测，如果只声明变量不定义类型也不赋值，默认就是any类型
2. unknown 未知类型的值，可以赋值任意类型
3. 断言类型，用来告诉ts，变量的实际类型，这样unknown可以赋值给其他类型的变量了
4. unknown和any的区别是
   - any类型的变量，可以赋值给任何类型的变量，等于把赋值的变量的类型检测也关闭了
   - unknown类型的变量，不能赋值给其他器类型的变量，通过断言赋值后，被赋值的变量类型也是正常的
   - unknown实际上就是一个类型安全的any
 */

// any 任意类型，等于关闭ts的类型检测，
let a:any
// 默认any类型，等价于let a2:any
let a2    
// unknown 也是任意类型，但是有类型检测
let b:unknown
a = 11
a = 'a'
b = 22
b = 'b'

let a1:string, b1:string
a1 = a    // 正确的赋值，a1也变成了any类型，any可以污染其他变量
// b1 = b    // 错误的赋值，unknown类型无法通过赋值的方式定义给其他变量

// 类型断言，可以通过类型断言的方式，将unknown类型定义给其他变量，要确保b真的string类型，否则会赋值为其他类型
b1 = b as string    
// 另一种写法
b1 = <string>b    
// 也可以不使用断言，用if的写法，确保b是string类型
if (typeof b === 'string') {
  b1 = b
}