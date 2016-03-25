//no helper
function getDependencies(tree, result) {
	var result = result || [],
			dependency = tree.dependencies || {};

	Object.getOwnPropertyNames(dependency).forEach(function(name) {
		var dep = name + '@' + dependency[name].version;

		if(result.indexOf(dep) === -1) {
			result.push(dep);
		}

		getDependencies(dependency[name], result);
	});

	return result.sort();
}

module.exports = getDependencies

// //helper
// function getDependencies(tree) {
// 	var result = [];

// 	function helper(root, result) {
// 		Object.getOwnPropertyNames(root).forEach(function(moduleName) {
// 			var dependency = moduleName + '@' + root[moduleName].version,
// 					subDependency = root[moduleName].dependencies;

// 			if(result.indexOf(dependency) === -1) {
// 				result.push(dependency);
// 			}

// 			if(subDependency) {
// 				helper(subDependency, result);
// 			}

// 		});
// 	}

// 	Object.getOwnPropertyNames(tree).forEach(function(name) {
// 		if(name === 'dependencies') {
// 			helper(tree[name], result);
// 		}
// 	});

// 	return result.sort();
// }

// module.exports = getDependencies