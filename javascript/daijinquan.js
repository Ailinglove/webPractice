function isValid(num,lines){
  var sum=0
  console.log(lines)
  var arr=[]
  for(let i=0;i<lines.length;i++){
    var res=num-lines[i]
    sum=1
    var j=0
    while(j<lines.length){
      if(lines[j]<=res){
        res=res-lines[j]
        console.log(res,lines[j])
        sum++
      }else{
        j++
      }
      if(res===0){
        arr.push(sum)

      }

    }
    }
  if(arr!=[]){console.log( Math.min.apply(null,arr))}
  else{console.log("Impossible")}

}
lines=[4 ,50 ,30 ,20 ,5]
lines.sort(function(a,b){
  if(a>b){
    return -1
  }else{
    return 1
  }
})
isValid(65,lines)



