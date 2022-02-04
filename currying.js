// function add(){
// 	let args = [].slice.apply(arguments);
// 	console.log("arguments", arguments, "args", args)
// 	function resultFn(){
// 			args = args.concat([].slice.apply(arguments));
// 			console.log("args sliced", args)
// 			if(args.length>=4){
// 					return args.slice(0,4).reduce(function(acc,next){ return acc+next},0); //will only sum first 3 arguments
// 			}
// 			return resultFn;
// 	}
// 	return resultFn();
// }

function add(x) {
  let sum = x;
  return function resultFn(y) {
    if (arguments.length) {
      //not relying on falsy value
      sum += y;
      return resultFn;
    }
    return sum;
  };
}

console.log(add(2)(3)(4)(5));
