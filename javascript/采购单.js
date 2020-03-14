function sort(arr){
  arr.sort(function(a,b){
    if(a>b){
      return -1
    }else{
      return 1
    }
  })
}

function minmax(flag=true,price,objvalue){  // 默认求最小值
  res=0
  if(flag){
    for(let i=0;i<objvalue.length;i++){
      res+=objvalue[i]*price[price.length-1-i]
    }
  }else{
    for(let i=0;i<objvalue.length;i++){
      res+=objvalue[i]*price[i]
    }
  }
  return res
}
while((n=readInt())!=null && (m=readInt())!=null){
  var price=[]
  var obj={}
  for(let i=0;i<n;i++){
    price.push(readInt())
  }
  sort(price)
  for(let j=0;j<m;j++){
    var a=read_line()

    if(obj[a]==undefined){
      obj[a]=1
    }else{
      obj[a]+=1}

  }
  var objvalue=[]

  for(let key in obj){
    objvalue.push(obj[key])
  }
  sort(objvalue)

  print(minmax(flag=true,price,objvalue),minmax(flag=false,price,objvalue))
}
