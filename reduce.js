function countWords(inputWords) {
	return inputWords.reduce(function(prev, curt) {
		if(prev.hasOwnProperty(curt)) {
			prev[curt] += 1;
		}else {
			prev[curt] = 1;
		}

		return prev;
	}, {});
}

module.exports = countWords