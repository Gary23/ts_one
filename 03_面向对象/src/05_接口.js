(function () {
    // 类中必须有name age country sayHello
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.country = 'china';
        }
        sayHello() {
            console.log('hello');
        }
    }
    const xiaoming = new Person('小明', 18);
    console.log(xiaoming);
}());
