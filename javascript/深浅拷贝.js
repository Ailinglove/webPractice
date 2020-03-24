/**
 * 浅拷贝，只能解决第一层的问题，即如果你的数组或者对象只有一层的话，是可行的，如果
 * 对象中有对象就不行了，需要进行深拷贝
 * @type {{age: number, info: {tel: number}}}
 */
let a={age:1,info:{
  tel:123
  }}
let b=Object.assign({},a)
a.age=2
console.log(b.age)


let c={...a}
c.age=32



let d=JSON.parse(JSON.stringify(a))
c.info.tel=222
console.log(a,b,c,d)
// 该方法的局限性，不能解决循环引用对象，会忽略undefined，symbol


let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e:undefined,
    f:[1,2,3]
  },
}

let newObj = JSON.parse(JSON.stringify(obj))
console.log('newobj',newObj)


function deepClone(obj){
  var res=Array.isArray(obj)?[]:{}
  for(var key in obj){
    if(typeof obj[key]==='object'){
      res[key]=deepClone(obj[key])
    }else{
      res[key]=obj[key]
    }
  }
  return res
}

let newObj2 =deepClone(obj)
newObj2.b.e='existed'
newObj2.b.f.push('top')
console.log('newObj2',newObj2)


