(function() {
  // 抽象类
  abstract class Person{
    constructor(country: string) {
      this.country = country
    }
    country: string
    // 抽象方法，只定义方法的名称，不定义方法的实现，子类中必须对抽象方法进行实现
    abstract sayHello():void
  }
  // let man = new Person()   // 报错，抽象类不能被实例化

  class Man extends Person {
    constructor(name: string, country: string) {
      // 直接调用super相当于调用父类的构造函数，因为子类的constructor会覆盖父类的constructor，所以要重新调用父类的构造函数
      super(country)
      this.name = name
      this.gender = '男'

      console.log(this.country);
    }
    name: string
    gender: string
    sayHello() {
      console.log('hello');
    }
  }
  
  const xiaoming = new Man('小明', 'china')

  console.log(xiaoming);
  
}())

