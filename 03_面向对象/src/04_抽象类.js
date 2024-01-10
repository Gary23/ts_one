(function () {
    // 抽象类
    class Person {
        constructor(country) {
            this.country = country;
        }
    }
    // let man = new Person()   // 报错，抽象类不能被实例化
    class Man extends Person {
        constructor(name, country) {
            // 直接调用super相当于调用父类的构造函数，因为子类的constructor会覆盖父类的constructor，所以要重新调用父类的构造函数
            super(country);
            this.name = name;
            this.gender = '男';
            console.log(this.country);
        }
        sayHello() {
            console.log('hello');
        }
    }
    const xiaoming = new Man('小明', 'china');
    console.log(xiaoming);
}());
