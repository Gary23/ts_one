/**
1. js中数组存什么都可以，ts中一个数组内通常存储相同类型的值，所以要定义数组元素的类型
2. tuple是元组类型，js中不存在的类型，作用是固定数组的长度，也就是固定元素数量的数组
 */

// f是一个数组，并且存的都是字符串
let a: string[]
// a = [1,2,3,4]   // 错误
a = ['1', '2', '3']

let b: Array<string>  // 和 g: string[] 是同样的意思
b = ['1', '2', '3']


// h数组只能有两个元素且是字符串
let c: [ string, string ]
c = ['a', 'b']
// c = ['a', 'b', 'c']   // 报错
// c = []    // 报错