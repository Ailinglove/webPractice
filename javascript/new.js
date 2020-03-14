function person(name) {
  this.name=name
}
function new_() {

  var obj = {};

  Constructor = [].shift.call(arguments); //取传入的第一个参数即构造函数

  obj.__proto__ = Constructor.prototype;

  Constructor.apply(obj, arguments); //将构造函数的this指向新创建的对象

  return obj; //return 这边可以进行判断

};
var a=new_(person,'ll')
console.log(a)
