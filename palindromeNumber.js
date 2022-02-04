var isPalindrome = function (x) {
  let revX = x.toString().split().reverse().join();
  if (x < 0) {
    return false;
  } else {
    console.log(revX, x)
    if (parseInt(revX) === x) return true;
    else return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


