// //外部定义helper函数
// function reduceHelper(arr, fn, prev, index) {
// 	if(index >= arr.length) {
// 		return prev;
// 	}

// 	return reduceHelper(arr, fn, fn(prev, arr[index], index, arr), index + 1);
// }

// function reduce(arr, fn, initial) {
// 	return reduceHelper(arr, fn, initial, 0);
// }

// module.exports = reduce;

//函数自调用
function reduce(arr, fn, initial) {
	return function reduceHelper(prev, index) {
		if(index >= arr.length) {
			return prev;
		}

		return reduceHelper(fn(prev, arr[index], index, arr), index + 1);
	}(initial, 0);
}

module.exports = reduce