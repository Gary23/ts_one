class Person {
    constructor() {
        this.name = '小明';
        this.age = 23;
        this.country = 'china';
    }
}
Person.type = 'person';
const man = new Person();
// 实例属性 age，只能通过实例来获取，不能通过类来获取
console.log(man.age);
// console.log(Person.age);   // 报错
// static关键字静态属性type，是类的属性，不是实例的属性
console.log(Person.type);
// console.log(man.type);    // 报错
// readonly关键字只读属性country，是实例属性，但是不能修改
console.log(man.country);
// console.log(Person.country);   报错
man.age = 30;
// man.country = 'usa'   // 报错
