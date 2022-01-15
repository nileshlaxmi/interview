/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
	for(let i=0; i<nums.length-1; i++){
			let x = nums[i], y=target-x, indexX=i;
			let indexY = nums.indexOf(y)
			console.log([indexX, indexY])
			if (indexY) return [indexX, indexY]
			
	}
};

console.log(twoSum([3,3], 6))