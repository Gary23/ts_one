### 面向对象

1. 面向对象：所有操作都是通过对象操作的
2. 程序就是对现实事物的抽象，而一个真实的事物抽象到程序里就是以对象的形式存在的，所以每一个对象背后都对应着一个实物，实物的数据就是属性，实物的功能就是方法

### 01_类

1. 类是对象的模型，通过通过类来创建对象
2. 类定义属性和方法
   - 无关键字，实例的属性和方法，也就是new调用后获取到的实例上的属性和对象
   - static，静态的属性和方法，静态指的是类本身的属性和方法
   - readonly，只读属性和方法：定义的是实例的属性和方法，但是不能修改

### 02_构造函数

1. 构造函数constructor，在实例对象被创建时调用
2. constructor中的this表示当前创建的实例
3. 属性通常是在构造函数中进行赋值的

### 03_继承 

1. 用extends继承父类，子类拥有所有父类的属性和方法
2. 在类中，super表示的是父类的构造函数
3. 子类中如果写构造函数constructor，会覆盖父类的构造函数，那父类的构造函数就不执行了，必需对父类的构造函数进行手动调用，所以子类的constructor必须写super()

### 04_抽象类

1. 用abstract定义抽象类
2. 抽象类和其他类区别不大，只是不能用来创建实例对象
3. 抽象类就是专门用来被继承的类
4. 抽象类可以添加抽象方法，抽象类的方法只定义，不写函数体，子类必需对抽象方法进行重写函数体

### 05_接口

1. 用interface定义接口，声明类时使用implements实现接口
2. 定义一个类结构，用来定义一个类中应该包含哪些属性和方法
3. 使用方式和对象结构声明很像，但是接口可以重复声明，最后会合并
4. 接口的所有属性和方法都不能有实际的值，只能定义结构，和抽象类比较类似


属性的封装

属性可以任意被修改，可能会导致对象中的数据变得非常不安全
ts可以在属性前添加属性关键字，比如static和readonly
还有public和private这个关键字，public是默认关键字，不写就是public，private是私有属性

private私有属性：在类的内部可以访问，在实例对象上不可以访问，在子类中也不可以访问，可以通过在类中添加getter方法让实例对象可以访问私有属性，如果要通过实例对象设置可以在类中添加一个setter方法
这样的好处是，设置属性和获取属性时是可控的，数据更安全

setter和getter是存取器，

ts中设置getter的方式可以直接写
get name() {
   return this.name
}
可以直接写实例.name获取属性    person.name

setter也是一样的  



protected 受保护的属性，不能在实例对象访问，只能在当前类和当前类的子类中使用和修改，属于public和private的中间状态


可以直接将属性定义在构造函数中
constructor(public name: string, public age: number){

}






泛型

这里函数的返回值是由参数确定的，如果参数的类型未知，那函数的类型也是未知，这种情况除使用泛型是比any更好的选择
function fn(a: number): number {
   return a
}

在定义函数或者类时，如果遇到类型不明确的，除了使用any，还可以使用泛型

指定了一个泛型K
function fn<K>(a: K): K {
   return a
}

可以直接调用具有泛型的函数
fn(10)    // 相当于把number赋值给K
fn('hello')    // 相当于把string赋值给K

fn<string>('hello')    // 手动指定K是string


两个泛型
function fn2<T, H>(a: T, b: H):T {
   console.log(b)
   return a
}
fn2<number, string>(123, 'hello')


定义接口限制泛型的结构
interface Inter{
   length: number
}
T实现inter接口
function fn3<T extends Inter>(a: T):T {
   return a.length
}

fn3(112)   // 报错，number没有length属性
fn3('113')


泛型用在类中
class MyClass<T>{
   name: T
   constructor(name: T) {
      this.name = name
   }
}
const mc = new MyClass<string>(name: '小明')










