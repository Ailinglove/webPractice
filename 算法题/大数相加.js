function add(a,b){
  var aArr=a.split("")
  var bArr=b.split("")
  var jin=0
  var res=[]
  while(aArr.length>0|| bArr.length>0){
    var sum=~~aArr.pop()+~~bArr.pop()+jin
    console.log(sum)
    if(sum>9){
      res.unshift(sum%10)
      jin=parseInt(sum/10)
    }else{
      res.unshift(sum)
      jin=0
    }
}
console.log(res.join(""))
}
var a='123345257787889'
var b='12456789433211111111'
add(a,b)
