var slice = Array.prototype.slice

function logger(namespace) {
	return function() {
		var arr = slice.call(arguments);
		arr.unshift(namespace);
		return console.log.apply(null, arr);
	};
}

module.exports = logger

// var slice = Array.prototype.slice

// function logger(namespace) {
// 	return function() {
// 		console.log.apply(console, [namespace].concat(slice.call(arguments)))
// 	}
// }

// module.exports = logger