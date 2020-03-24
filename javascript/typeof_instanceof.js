/**
 * typeof 对于基本数据类型，除了null 都可以正确判断
 *        对于null 和引用数据类型，除了function,都是显示object
*  此时可以通过instanceof判断，因为instanceof是根据原型链进行判断的
 */
console.log(typeof 12)
console.log(typeof 12.3)
console.log(typeof true)
console.log(typeof '')
console.log(typeof undefined)

console.log(typeof null)
console.log(typeof [])
console.log(typeof {})


console.log([] instanceof Array)
console.log({} instanceof Object)

// 实现一个instanceof

function instanceOf(data,type){
  while(true){
    var o=data.__proto__
    var t=type.prototype

    if(o==null){
      return false
    }
    if(o===t){
      console.log(o,t)
      return true
    }else{
      data=data.__proto__
    }

  }

}
var a=[1,2,3]
console.log(instanceOf(a,String))
