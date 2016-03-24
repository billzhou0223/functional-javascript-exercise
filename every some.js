function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(submitteduser) {
			return goodUsers.some(function(goodUser) {
				return goodUser.id === submitteduser.id;
			});
		});
	};
}

module.exports = checkUsersValid