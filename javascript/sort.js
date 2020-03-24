let arr=[5,1,2]

arr=arr.sort((a,b)=>{
  return a-b
})


function swap(arr,i,j){
  var tmp=arr[i]
  arr[i]=arr[j]
  arr[j]=tmp
}

function quickSort(arr,start,end){
  var key=arr[start]
  var i=start
  var j=end
  if(i>=j){
    return
  }
  while(i<j){
    while(arr[j]>key && i<j){j--}
    while(arr[i]<=key && i<j){i++}
    if(i<j){ swap(arr,i,j)}

  }
  swap(arr,start,i)
  quickSort(arr,start,i-1)
  quickSort(arr,i+1,end)


}

quickSort(arr,0,arr.length-1)
console.log(arr)
