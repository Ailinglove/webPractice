/**
 * 数据类型转换的3中情况
 * 1. 再条件判断的时候，除了undefined，null,false, NaN, "", 0,-0 转为false，其它均转为true
 * 2. 对象转原始类型
 *    - 如果已经是原始类型，就不需要转换
 *    - 调用x.valueOf()
 *    - 调用x.toString()
 *    - 如果都没有返回原始类型就报错
 * @type {number}
 */
let a={
  valueOf(){
    return '0'
  },
  toString(){
    return '1'
  },
  // [Symbol.toPrimitive](){
  //   return 2
  // }
}
/**
 * ==判断规则
 * 1. 如果有一个boolean值，会把boolean转换为对应的0，1
 * 2. 如果一个是string，一个是number,则回把string转为number
 * 3. Boolean和string，会将string转为Boolean
 * 4. number 和object ，会讲object转为number
 */

console.log([1,1]+a)
var undefined

console.log(undefined==null)  // true
console.log(1==true)          // true
console.log(2==true)          // false
console.log(0==false)         // true
console.log(0=='')            // true
console.log(NaN==NaN)         // false
console.log([]==![])          // true, ![]==false-->[]==false-->[]==0-->0==0
console.log([]==false)        // true
console.log([]==[])           // false
console.log({}=={})           // false
console.log([]=={})           //false
console.log('1'=={name:'ll'}) // false '1'=='[object object]'


for(var i=0;i<10;i++){
  (function(i){
    setTimeout(()=>{
      console.log(i)
    },1000)
  })(i)

  setTimeout(()=>{
    console.log(i)
  },1000,i)


}
