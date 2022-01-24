let flattenAr={}

const flattenObj = (inputObj) => {
  if(typeof inputObj !== "object") return;
  else {
    for(const item in inputObj){
      if(typeof inputObj[item] !== "object") {
        flattenAr = {...flattenAr, [item]: inputObj[item]}
      } else {
        flattenObj(inputObj[item])
      }
    }
    return flattenAr;
    
  }
  
}

const ar = flattenObj({
  "id": 123,
  "name": "abc",
  "address": {
    "hno": "1",
    "state": "Delhi",
    "country": "India",
    "phone": {
      "primaryPhone" : "111111",
      "alternatePhone" : "222222"
    },
    "email": {
      "primaryEmail" : "a@b.com",
      "alternateEmail" : "c@d.com"
    }
  }
})

console.log(ar)

let flatArray = [].concat.apply([], arr);
let flatArray = [].concat(...arr);
let flatArray = arr.reduce((acc, curVal) => {
  return acc.concat(curVal)
}, []);