// function parent(){
// 	let outerVar=9;
// 	function child(){
// 		let innerVar;
// 		console.log("outerVar", outerVar);
// 		console.log("innerVar", innerVar);
// 	}
// 	child();
// }

// parent();

function opAr(ar) {
	let ar1 = ar.slice();
	ar1[2] = 4;
	console.log(ar1, ar);
}

opAr([1, 2, 3]);

const Btn = ({ label, backgroundColor, onClick }) => {
	return (
		<button style={{ backgroundColor: backgroundColor }} onClick={onClick}>
			{label}
		</button>
	);
};

export default Btn;