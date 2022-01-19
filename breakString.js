
const someStr = 'i am a software guy';
var breakString = 3;
//output: iam aso ftw are guy

const breakStringFn = (str, len) => {
  const regex=/\s/g
  str=str.replace(regex, "");
  let newAr=[]
  
  while(str.length > 0){
    newAr.push(str.substring(0, len));
    str = str.substring(len, str.length);
    console.log(str)
  }
  
  str = newAr.join(" ")
  console.log(str)
}

breakStringFn('i am a software guy', 3)
