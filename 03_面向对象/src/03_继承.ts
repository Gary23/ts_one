(function() {
  class Person{
    constructor(country: string) {
      this.country = country
      this.sayHello()
    }
    country: string
    sayHello() {
      console.log('hello');
    }
  }

  class Man extends Person {
    constructor(name:string, country: string) {
      // 直接调用super相当于调用父类的构造函数，因为子类的constructor会覆盖父类的constructor，所以要重新调用父类的构造函数
      super(country)
      this.name = name
      this.gender = '男'
    }
    name: string
    gender: string
  }
  
  const xiaoming = new Man('小明', 'china')

  console.log(xiaoming);
  
}())

