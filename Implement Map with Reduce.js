module.exports = function arrayMap(arr, fn, thisArg) {
	return arr.reduce(function(prev, curt, index, arr) {
		prev.push(fn.call(thisArg, curt, index, arr));
		return prev;
	}, []);
}