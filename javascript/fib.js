function fib(n){
  var arr=[1,1]
  if(n<2){
    return arr[n]
  }
  for(let i=2;i<=n;i++){
    arr[i]=arr[i-1]+arr[i-2]
  }
  return arr[n]
}
console.log(fib(50))
