function fun(arr){
  var dp=new Array(arr.length).fill(1)
  for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++){
      if(arr[i]>arr[j]){
        dp[i]=Math.max(dp[i],dp[j]+1)
      }
    }
  }
  console.log(dp)
}

fun([2,1,3,2,5,8,2,1,4,3,])

