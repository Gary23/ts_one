// 1. enum是枚举类型，js中不存在的类型，用于处理数据的字典

// 定义Gender类的枚举
enum Gender{
  Male = 0,
  Female = 1
}

let a: { name:string, gender:Gender }

a = { name: '小明', gender: Gender.Male }    // 最后gender会转为 '0'，但是开发中这样写很明确 0 和 1 对应的值
// 也可以直接用枚举直接进行判断 
if (a.gender === Gender.Male) {
  // do something
  console.log('性别是男');
}