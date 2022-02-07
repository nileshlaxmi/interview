var runningSum = function(nums) {
    let sumAr = [];
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        for(let j=0; j<=i; j++){
            sum=sum+nums[j]
        }
        if(i===0){
            sumAr.push(nums[0])
        } else sumAr.push(sum)
    }
    return sumAr;
};

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))