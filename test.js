var arr = [1,2,3,4,5,1,2,3];

const findDuplicate = (arr = []) => {
	let duplicateAr = [];
	arr = arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) duplicateAr.push(arr[i]);
	}
	console.log(duplicateAr);
};

findDuplicate([1, 2, 3, 4, 5, 1, 2, 3]);

// // let obj1 = {
// // 	name: "Nilesh",
// // 	getFullName: () => console.log(this.name),
// // };

// // let obj2 = {
// // 	name: "Laxmi",
// // };

// // obj1.getFullName.call(obj2, "Hello");

// // IBM

// (function abc() {
// 	for (var i = 1; i <= 5; i++) {
		
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 100);
// 	}
// })();

// // Solution::
// // 1
// (function abc() {
// 	for (var i = 1; i <= 5; i++) {
// 		(function (num) {
// 			setTimeout(function () {
// 				console.log(num);
// 			}, 100);
// 		})(i);
// 	}
// })();

// // 2
// (function abc() {
// 	for (var i = 1; i <= 5; i++) {
// 		loopValue(i)
// 	}
// })();

// function loopValue(num){
// 	setTimeout(function () {
// 		console.log(num);
// 	}, 100);
// }

// // 3

// (function abc() {
// 	for (let i = 1; i <= 5; i++) {
		
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 100);
// 	}
// })();

// Tic Tac Toe game

var b = 1;
function outer() {
  var b = 5;
  function inner() {
    console.log(this.b); // 1
    b++;
    console.log(b); // 6
    var b = 3;
    console.log(b); // 3
  }
  inner();
}
outer();

// CASE 1:

// x = 10;
// console.log(x);
// delete x;
// console.log(x);


// // CASE 2:

// var output = (function(x) {
// delete x;
//   console.log(x)
// return x;
// })(10);
// console.log(output)


// const arrange = () => {
// 	const ar = [1, 1, 2, 5, 6, 0, 0, 9];
// 	let newAr0 = [],
// 		newAr1 = [],
// 		newAr = [];
// 	// ar.forEach(i => {
// 	// 	if(i===0){
// 	// 		newAr0.push(i)
// 	// 	} else if(i===1){
// 	// 		newAr1.push(i)
// 	// 	} else {
// 	// 		newAr.push(i)
// 	// 	}
// 	// })
// 	// console.log([...newAr0, ...newAr, ...newAr1]);

// 	ar.forEach((i) => {
// 		if (i) {
// 			if (i !== 1) {
// 				newAr.push(i);
// 			}
// 		} else newAr.unshift(i);
// 	});
// 	newAr1 = ar.filter(item => item===1)
// 	console.log([...newAr, ...newAr1]);
// };

// arrange();

// (function () {
// 	var a = (b = "42");
// })();
// console.log(typeof (a));

// function x(){
// 	a()
// 	function a() {console.log('m')}
// 	a()
// 	function a() {console.log('n')}
// 	a()
// }

// x()

// var x=21
// var g = function(){
// 	console.log(x)
// 	var x = 20
// }
// g();

// function foo(ar) {
// 	return Object.freeze(
// 		ar.reduce((obj, item, index) => {
// 			if (typeof item === "string") {
// 				obj[(obj[index] = item.toUpperCase())] = index;
// 			}
// 			return obj;
// 		}, {})
// 	);
// }

// const bar = foo(['a', 'B', 'C'])
// console.log(bar.A + '|' + bar.b + '|' + bar.C)

// function constfuncs() {
// 	var funcs = [];
// 	for (var i = 0; i < 10; i++) {
// 		funcs[i] = function () {
// 			return i;
// 		};
// 	}
// 	return funcs;
// }

// var funcs = constfuncs();
// console.log(funcs[5]());


// import React, { useState, useEffect } from 'react';
// import './style.css';

// const Counter = ({ initial }) => {
//   const [count, setCount] = useState(initial);
//   let timer;
//   const incrementFn = () => {
//     timer && clearInterval(timer);
//     timer = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1);
//   };

//   const decrementFn = () => {
//     clearInterval(count);
//     timer = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1);
//   };

//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={incrementFn}>Start</button>
//       <button onClick={decrementFn}>Stop</button>
//     </>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <Counter initial={1} />
//     </div>
//   );
// }

// var b = 1;
// function outer() {
//   var b = 5;
//   function inner() {
//     console.log(this.b); // 1
//     b++;
//     console.log(b); // 6
//     var b = 3;
//     console.log(b); // 3
//   }
//   inner();
// }
// outer();

// Person(Name) -> Employee(companyName) 


// const Person = {
//   name: 'Nilesh'
// }
// let Employee = Person
// Employee.prototype = Person

// Employee = {
//   companyName: 'Telus'
// }

// console.log(Employee);


// const VAL = `org_uid=191Lh4NqAVigSt9R4klxMLmo05Z; session=MTYzODE1NTQ5N3xwaVhodmJpcnFrSXYxdVRvV2RXZ1lqYUtYVWxXcFN4M2xNdFdpd05sd0ZGTXdUOTBJOF9qV19tbTJYeEtiSUxuWm5SLWE0Q2g3VjdEeDZXbkhKY3AyLWc4THpqWHBtSU183wBorvVsHgB99cYuVY_9Jc_kFOI-FtSPEnpi9RS3wdc=;`
// `session=MTYzODIwMDUyNXxCa3FwQTI2cTRSNjVoOU9FN0xfYmpySHZ0RzhkZ3JrcHVZbEcxNHZOdVBocFlZblZpX3lNZURaQ0dTOGtDdC12blF1Skk2ZWxfSmxwZUxBckdYUXNhOW5NNDZoZEd5T2J8TjUTNqc1pzZr74M0f9ttj96rXV4guZ4OuymoNA-TU2s=`

// const getCookie = (name='org_uid') => {
//   const value = VAL;
// const parts = value.split(`; ${name}=`);
// console.log('parts', parts);
// if (parts.length === 2)
//   return parts
//     .pop()
//     .split(';')
//     .shift();

//       let cookie = {};
//       value.split(';').forEach(function(el) {
//         let [k,v] = el.split('=');
//         cookie[k.trim()] = v;
//       })
//       console.log(cookie[name]);
//       return cookie[name];
// };

// console.log("getCookie", getCookie());

// function getCookie(name) {
//   let cookie = {};
//   document.cookie.split(';').forEach(function(el) {
//     let [k,v] = el.split('=');
//     cookie[k.trim()] = v;
//   })
//   return cookie[name];
// }

// myNAme();
// var x = 5;

// function myNAme() {
// console.log("ravi")
// console.log(x)
// }

//////////////
console.log(x);
console.log(myNAme);
myNAme();
var x = 5;


function myNAme() {
console.log("ravi")
}