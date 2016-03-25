function curryN(fn, n) {
	n = typeof n === 'number' ? n : fn.length;

	return function(arg) {
		if(n <= 1) {
			return fn(arg);
		}else {
			return curryN(fn.bind(this, arg), n - 1);
		}
	}
}

module.exports = curryN


// function curryN(fn, n) {
// 	n = typeof n === 'number' ? n : fn.length;

// 	function genCurry(prev) {
// 		return function(arg) {
// 			var args = prev.concat(arg);

// 			if(args.length < n) {
// 				return genCurry(args);
// 			}else {
// 				return fn.apply(this, args);
// 			}
// 		}
// 	}

// 	return genCurry([]);
// }

// module.exports = curryN




// //chrome would work
// function curryN(fn, n) {
// 	n = typeof n === 'number' ? n : fn.length;

// 	function genCurry(args) {
// 		return function(arg) {
// 			args.push(arg);
// 			if(args.length < n) {
// 				return genCurry(args);
// 			}else {
// 				return fn.apply(this, args);
// 			}
// 		}
// 	}

// 	return genCurry([]);
// }

// module.exports = curryN