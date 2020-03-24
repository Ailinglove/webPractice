/**
 * this对象的指向
 * 1. 在全局函数中，this指向window
 * 2. 当函数被当作某个对象的方法时，this等于那个对象
 * 3. 匿名函数的执行环境具有全局性，因此this指向window
 */
var name="window"
var obj={
  name:'obj',
  getName:function(){
    var that=this
    return function(){
      console.log(that.name)
    }
  }
}


// 有些情况下this的指针会改变
var name = "The Window";

var obj1 = {
  name : "My Object",
  getName: function(){
    return this.name;
  }
};
console.log(obj1.getName());//my object
console.log(obj1.getName());//window
console.log((obj1.getName=obj1.getName)()) ;//window



let a={}
let fn=function(){
  console.log(this)
}
fn.bind().bind(a)()  //this指window

// 如果对一个函数多次调用bind,那么函数的this永远由第一次bind决定
