(function () {
    class Person {
        constructor(country) {
            this.country = country;
            this.sayHello();
        }
        sayHello() {
            console.log('hello');
        }
    }
    class Man extends Person {
        constructor(name, country) {
            // 直接调用super相当于调用父类的构造函数，因为子类的constructor会覆盖父类的constructor，所以要重新调用父类的构造函数
            super(country);
            this.name = name;
            this.gender = '男';
        }
    }
    const xiaoming = new Man('小明', 'china');
    console.log(xiaoming);
}());
