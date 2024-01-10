(function () {
    class Person {
        constructor(name, age) {
            // new Person()的时候，会调用constructor构造函数，this就是man实例
            this.name = name;
            this.age = age;
            // this.country = 'china'    // 报错，因为this上没有声明country属性
            this.sayHello();
        }
        sayHello() {
            console.log('hello');
        }
    }
    const man = new Person('小明', 23);
    console.log(man);
}());
