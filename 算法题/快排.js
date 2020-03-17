function swap(arr,i,j){
  var tmp=arr[i]
  arr[i]=arr[j]
  arr[j]=tmp
}
function quickSort(arr,low,high){
  /**
   * 每一趟排序都会找到一个地方使得其左边都小于该值，右边都大于该值
   */
var i=low
  var j=high
  var key=arr[low]
  if(i>=j){ return}
  while(i<j){
    while(i<j && arr[j]>key){j--}
    while(i<j && arr[i]<=key){i++}
    if(i<j){swap(arr,i,j)}
}
  swap(arr,low,i)
  quickSort(arr,low,i-1)
  quickSort(arr,i+1,high)
}
arr=[3,4,5,7,0,1,9]
quickSort(arr,0,arr.length-1)
console.log(arr,)
