/* Scope::
* Question: Explain this and optimize it.
*/
var myCar = {
	color: "Blue",
	logColor: function() {
			var self = this;
			console.log("In logColor - this.color: " + this.color);
			console.log("In logColor - self.color: " + self.color);
			(function() {
					console.log("In IIFE - this.color: " + this.color);
					console.log("In IIFE - self.color: " + self.color);
			})();
	}
};

myCar.logColor();

// Solution
// this.color = 'red'
// var myCar = {
// 	color: "Blue",
// 	logColor: function() {
// 			var self = this;
// 			console.log("In logColor - this.color: " + this.color);
// 			console.log("In logColor - self.color: " + self.color);
// 			(function() {
// 					console.log("In IIFE - this.color: " + this.color);
// 					console.log("In IIFE - self.color: " + self.color);
// 			})();
// 	}
// };

// myCar.logColor();
