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
    return fib(n-1)+fib(n-2)
  }
}
var fib1=fib

console.log(fib1(9))