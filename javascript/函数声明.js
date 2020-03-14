/*
fun()
function fun(){
  console.log('可以运行哦！')
}
fun1()
var fun1=function(){
  console.log('不可以在此之前调用函数fun1哦')
}*/

function fib(n){
  if(n===1 || n===2){
    return n
  }else{
    return arguments.callee(n-1)+arguments.callee(n-2)
  }
}
var fib1=(fib)
fib=null
console.log(fib1(9))

// 使用命名函数解决这一问题
var fib2=(function f(n){
  if(n===1 || n===2){
    return n
  }else{
    return f(n-1)+f(n-2)
  }
})
console.log(fib2(9))