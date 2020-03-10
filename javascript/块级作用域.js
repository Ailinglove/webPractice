// 匿名函数可以模仿块级作用域
for(var i=0;i<10;i++){
  console.log(i)
}
console.log(i) //此处也可以正常的访问i

// 如果使用匿名函数的话，就可以构成块级作用域
;(function(){
  for(var j=0;j<10;j++){
  }
})()
console.log(j) //会报错，j is not defined


var fun=function(){ //创建块级作用域
  for(var i=0;i<10;i++){
    console.log("...")
  }
}
