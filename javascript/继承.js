function SuperType(name){
  this.name=name
  this.colors=["red"]
}
SuperType.prototype.sayName=function(){
  console.log(this.name)
}

function SubType(name,age){
  // 通过构造函数实现对实例属性的继承
  SuperType.call(this,name)
  this.age=age
}

//原型链继承方法
SubType.prototype=new SuperType()
SubType.prototype.constructor=SubType
SubType.prototype.sayAge=function(){
  console.log(this.age)
}
var o1=new SubType('ll',23)
o1.colors.push('black')

console.log(o1.colors)
o1.sayName()
o1.sayAge()

var o2=new SubType('eee',33)
o2.colors.push('blue')

console.log(o2.colors)
o2.sayName()
o2.sayAge()
