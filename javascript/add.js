/**
 * 实现大数相加
 * @param a
 * @param b
 */
function add(a,b){
   a=a.split("")
   b=b.split("")
  var res=[]
  var jin=0
  console.log(a,b)
  while(a.length>0||b.length>0){

     var aend=a.pop()
    var bend=b.pop()
    console.log(aend,bend)
    var sum=~~aend+~~bend
    console.log(sum)
    if(sum>9){
      res.unshift(sum%10)+jin
      jin=parseInt(sum/10)
    }else{
      res.unshift(sum%10)+jin
      jin=0
    }

  }
  console.log(res.join(""))
}
add('1111122','1111111111111111111111111111111111111')
