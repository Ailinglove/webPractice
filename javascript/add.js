/**
 * 实现大数相加
 * @param a
 * @param b
 */
function add(a,b="0",c="0"){
   a=a.split("")
   b=b.split("")
  c=c.split("")
  var res=[]
  var jin=0

  while(a.length>0||b.length>0||c.length>0){

     var aend=a.pop()
    var bend=b.pop()
    var cend=c.pop()
    var sum=~~aend+~~bend+~~cend

    if(sum>9){
      res.unshift(sum%10)+jin
      jin=parseInt(sum/10)
    }else{
      res.unshift(sum%10)+jin
      jin=0
    }

  }
  return res.join("")
}
console.log(add('1111122','1111111111111111111111111111111111111'))
var a=[1,2]
a.unshift('b')
console.log(a)
