(function() {
  // 如果函数的返回值是由参数确定的，但是参数的类型未知，那函数的类型也是未知，这种情况除使用泛型是比any更好的选择
  function fn(a: any): any {
    console.log(a);
    return a
  }
  fn(1)

  // 指定了一个泛型 K
  function fn2<K>(a: K): K {
    console.log(a)
    return a
  }
  fn2(2)   //相当于把number赋值给K
  fn2('2')    // 相当于把string赋值给K
  fn2<string>('hello')   // 也可以手动指定泛型的类型

  // 泛型可以指定多个
  function fn3<T, K>(a:T, b:K): T {
    console.log(a, b);
    return a
  }
  fn3(11, '22')    // T被number赋值，K被string赋值
  fn3<string, number>('hello', 22)   // 手动指定泛型的类型


  // 通过定义接口限制泛型
  interface Inter {
    length: number
  }
  function fn4<T extends Inter>(o: T): T {
    console.log(o);
    return o
  }
  // fn4(111)   // 报错，number没有length属性
  fn4('111')
  fn4({length: 111})



  // 泛型在类中的应用
  class Person<T, K> {
    name: T
    age: K
    constructor(name: T, age: K) {
      console.log(name, age);
      this.name = name
      this.age = age
    }
  }

  new Person<string, number>('张三', 25)
  new Person('李四', 34)
}())


