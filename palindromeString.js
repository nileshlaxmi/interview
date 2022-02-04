var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  let desiredString = s.replace(/[^a-zA-Z0-9]/gi, "");
  let revS = desiredString.split("").reverse().join("").toLowerCase();
  if (revS == s) return true;
  else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
