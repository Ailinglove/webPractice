var nums = [2,7,11,15];
var target = 9;
//两层循环
function twoSum(nums, target){
  var res = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        res.push(i, j);
      }
    }
  }
  return res;
}
console.log(twoSum(nums,target))
var b=new Map([[1,23],['a','v']])

console.log(b)
