// function foo(i) {
// 	if (i < 0)
// 		return;
// 	console.log ('begin: ' + i);
// 	foo (i - 1);
// 	console.log ('end: ' + i);
// }
// foo(2);
/**
 * Call function foo and pass it a starting value of 2.
First version of foo is added to call stack.
2 is not less than 0, so continue running the code
log begin: 2 to the console
Call function foo and pass it a starting value of 1 (2 - 1 = 1)
Second version of foo is added to call stack.
1 is not less than 0, so continue running the code
log begin: 1 to the console.
Call function foo and pass it a starting value of 0 (1 - 1 = 0)
Third version of foo is added to call stack
0 is not less than 0, so continue running the code
log begin: 0 to the console
Call function foo and pass it a starting value of -1 (0 - 1 = -1)
Fourth version of foo is added to call stack.
-1 is less than 0, return (it is here where we break out of the recursion loop)
Fourth version of foo is removed from call stack and cleaned up.
Look at top of call stack, is there any remaining work in the function? YES
Log end: 0 (current value of third version of i) to the console
Now we’ve reached the end of the function. Remove third version from call stack and clean up.
Look at top of call stack, is there any remaining work in the function? YES
Log end: 1 (current value of the second version of i) to the console
Now we’ve reached the end of the function. Remove second version from the call stack and clean up.
Look at top of call stack, is there any remaining work in the function? YES
Log end: 2 (current value of the first version of i) to the console
Now we’ve reached the end of the function. Remove first version from the call stack and clean up.
Look at the top of the call stack, is there anything remaining? NO
End program here and clean up anything that remains.
 * 
 */

// How come 0.1 + 0.2 == 0.3 is false in JS?

// const arr = [4,13,15,55,1,2,15,3,21, 20]
// const newArr = arr.slice().sort((a, b) => a-b)
// console.log(arr)
// console.log(newArr)

const newSortArrays = (arr1, arr2) => {
	let output = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0])
			output.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
	}
	return ([...output, ...arr1, ...arr2]);
};

const ar = newSortArrays([1,2,3], [4,5,6]);

console.log(ar)