var lengthOfLastWord = function(str) {
    str=str.trim();
    let lastStr='';
    let isStrValid = str.match('/[^a-zA-Z\s]/g')
    if(str && !isStrValid){
        let lastIndexOfSpace = str.lastIndexOf(' ');
        lastStr = str.substring(lastIndexOfSpace+1);
    }
    return lastStr.length;
};

console.log(lengthOfLastWord("Hello World"));