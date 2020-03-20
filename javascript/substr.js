function setSubStr(str){
  str=str.split("")
  var minLength=0
  var strsub=[]

  for(let i=0;i<str.length;i++){
    console.log(strsub,str.indexOf(str[i]))
    if(strsub.indexOf(str[i])===-1){
      strsub.push(str[i])

    }else{

      minLength=minLength===0?strsub.length:Math.max(minLength,strsub.length)

      strsub=[]
      strsub.push(str[i])
    }

  }

  return minLength
}

var str='pwwkewpa'
console.log(setSubStr(str))
