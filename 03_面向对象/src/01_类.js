class Person {
    constructor() {
        this.name = '小明';
        this.age = 23;
        this.country = 'china'; // 只读属性
        this.mobile = '12345678901'; // 私有属性
        this.school = '小学'; // 受保护属性
    }
    // private 的存取器，也就是getter和setter，在存取器中可以添加条件限制
    get getMobile() {
        return this.mobile;
    }
    set setMobile(value) {
        this.mobile = value;
    }
}
Person.type = 'person'; // 静态属性
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
// private，实例不能访问私有属性，只能通过存取器访问和修改
// console.log(man.mobile);    // 报错
console.log(man.getMobile);
man.setMobile = '18711223344';
console.log(man.getMobile);
// protected，实例不能访问受保护属性
// man.school = '中学'   // 报错
// console.log(man.school);   // 报错
class Student extends Person {
    constructor() {
        super();
        // private，子类不能访问私有属性，只能通过存取器访问和修改
        // console.log(this.mobile);   // 报错
        man.setMobile = '13288889999';
        console.log(man.getMobile);
        // protected，子类可以访问受保护属性
        this.school = '中学';
        console.log(this.school);
    }
}
new Student();
