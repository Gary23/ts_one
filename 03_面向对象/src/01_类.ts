class Person{
  name: string = '小明'
  age: number = 23
  static type:string = 'person'
  readonly country:string = 'china'
}

const man = new Person()

// 实例属性 age，只能通过实例来获取，不能通过类来获取
console.log(man.age);
// console.log(Person.age);   // 报错

// static关键字静态属性type，是类的属性，不是实例的属性
console.log(Person.type);
// console.log(man.type);    // 报错


// readonly关键字只读属性country，是实例属性，但是不能修改
console.log(man.country);
// console.log(Person.country);   报错
man.age = 30
// man.country = 'usa'   // 报错
