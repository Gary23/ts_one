/**
1. void用于定义没有具体返回值的函数
2. never用于定义永不返回结果的函数，通常用于抛出异常的函数(比如`throw new Error()`)，也就是函数不能执行完，如果函数执行完默认返回的是undefined，而never不能有任何返回值
 */


// void 定义没有返回值的函数，没有返回值等于返回的undefined
function a():void {
  return
}
function a1():void {
  console.log('a1函数')
}

// never 定义函数不能有任何返回值，包括undefined
function f():never {
  throw new Error('error')
}
