function trim(str){
  if(!String.prototype.trim){
    str=str.replace(/^\s*/,"").replace(/\s*$/,"")
  }
else{
  str=str.trim()
  }
  return str
}
var str="  fhfhiqu grihh  "

trim(str)
console.log(str.trim())
