// [2,3,4,5,4,3,4,5,6,7,8,7,6,7,5,4,32,5]

// const findOccurrence = (ar) => {
// 	ar = ar.sort((a, b) => a - b);
// 	console.log("ar", ar);
// 	const uniqueAr = [...new Set(ar)];
// 	let newAr = [];
// 	for (let i = 0; i < uniqueAr.length; i++) {
// 		let obj = {},
// 			c = 0;
// 		for (let j = 0; j < ar.length; j++) {
// 			if (uniqueAr[i] === ar[j]) {
// 				c++;
// 			}
// 		}
// 		obj.number = uniqueAr[i];
// 		obj.occurrence = c;
// 		newAr.push(obj);
// 	}
// 	return newAr;
// };

// console.log(
// 	findOccurrence([2, 3, 4, 5, 4, 3, 4, 5, 6, 7, 8, 7, 6, 7, 5, 4, 32, 5])
// );

let s = 'hello'; // it will work for array also
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log(result); // {h: 1, e: 1, l: 2, o: 1}
