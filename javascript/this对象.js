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
    return function(){
      console.log(this.name)
      /**
       * 注意这段代码如果在node环境下运行时，会输出undefined
       */
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
