function loadUsers(userIds, load, done) {
	var users = [];

	userIds.forEach(function(id, index) {
		load(id, function(user) {
			users[index] = user;
		});
	});

	done(users);
}

module.exports = loadUsers

// //Promise
// function loadUsers(userIds, load, done) {
// 	var users = [],
// 			promise;

// 	promise = new Promise(function(resolve, reject) {
// 		userIds.forEach(function(id, index) {
// 			load(id, function(user) {
// 				users[index] = user;
// 			});
// 		});

// 		resolve(users);
// 	});

// 	promise.then(done);
// 	return promise;
// }

// module.exports = loadUsers