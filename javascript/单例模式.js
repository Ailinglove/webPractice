function sington(name) {
  if(typeof sington.instance==='object'){
    return sington.instance
  }
  this.instance=name
  sington.instance=this
  return this

}

var a=new sington('ll')
console.log(a)
var b=new sington('lkkk')
console.log(b)

console.log(a===b)
