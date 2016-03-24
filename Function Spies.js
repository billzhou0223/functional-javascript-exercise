function Spy(target, method) {
	var spy = {count: 0},
			originFunc = target[method];
	
	target[method] = function() {
		spy.count++;
		return originFunc.apply(target, arguments);
	};

	return spy;
}

module.exports = Spy

