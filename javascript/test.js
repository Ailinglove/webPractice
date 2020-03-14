/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 Example:
 Given nums =[2, 7, 11, 15, 6], target =9,
 because nums [0]+ nums[1]=2+7=9,
 Return [0, 1]
 /**
 * @param {number[]} nums
 * @param {number}target
 * @return {number []}
 * */

function add(arr,target){
  var res=[]
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if((arr[i]+arr[j]===target)&&i!==j){
        res.push(i)
        res.push(j)
        return res
      }
    }
  }
  return res
}
let ums =[2, 7, 11, 15, 6]
let target =1
console.log(add(ums,target))
