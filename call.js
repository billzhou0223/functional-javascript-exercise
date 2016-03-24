// //reduce
// function duckCount() {
// 	var argArr = Array.prototype.slice.call(arguments);
	
// 	return argArr.reduce(function(prev, curt) {
// 		if(Object.prototype.hasOwnProperty.call(curt, 'quack')) {
// 			return prev + 1;
// 		}else {
// 			return prev;
// 		}
// 	}, 0);
// }

// module.exports = duckCount

//filter
function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(item) {
		return Object.prototype.hasOwnProperty.call(item, 'quack');
	}).length;
}

module.exports = duckCount