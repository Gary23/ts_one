(function() {
  // 接口
  interface myInterface{
    country: string
    sayHello(): void
  }
  // 可以重复声明，最后会进行合并
  interface myInterface{
    name: string
    age: number
  }
  // 类中必须有name age country sayHello
  class Person implements myInterface{
    country: string
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
      this.country = 'china'
    }
    sayHello() {
      console.log('hello')
    }
  }

  const xiaoming = new Person('小明', 18)

  console.log(xiaoming);
  
}())

