var romanToInt = function (romanNumber) {
  const romanToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let str = romanNumber.split("");
  console.log(str);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let _roman = str[i];
    sum = sum + romanToNumber[_roman];
  }
  // console.log(sum)
  return sum;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));


