// var a =[2, 5, 12, 16, 23, 35];

// var c = function abc(val, index, array){
//   return val > 20;
// }

// var b = a.find(abc)

// console.log(b);

// var ar = [2, -2, 1, 5, 3]

// function abc(ar){
  
// }

let x=[1,2,3,1,2];

let y=x.filter((data,index,self)=> self.indexOf(data)==index)

console.log(y)