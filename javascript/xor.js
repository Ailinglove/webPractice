var a=[1,2,1,3,2,[1,2,3,[222]]]
var tmp=a[0]
for(let i=1;i<a.length;i++){
  tmp^=a[i]
  console.log(tmp)
}
console.log(tmp)

// a=a.join(',').split(',')
// console.log(a)
console.log(a.flat(Infinity))
