function getShortMessages(messages) {
	return messages.filter(function(item) {
		if(item.message.length < 50) {
			return true;
		}
		return false;
	}).map(function(item) {
		return item.message;
	});
}

module.exports = getShortMessages