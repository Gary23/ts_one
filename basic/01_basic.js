// 变量类型设置为number，那以后就只能赋值number类型
var a;
a = 22;
// a = '22'   // 错误的赋值
// 如果声明时直接赋值，可以省略类型，自动判断类型
var b = true;
// b = 22    // 错误的赋值
var c;
c = 22;
console.log(typeof c);
