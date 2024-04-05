function ensureNamespaceExists() {
	namespace('GENERICWEBAPP');
}

function namespace(namespace) {
	var currentSpace = window;

	var spaces = namespace.split('.');
	for (var i = 0; i < spaces.length; i++) {
		var space = spaces[i];
		if (currentSpace[space] === undefined) {
			currentSpace[space] = {};
		}
		currentSpace = currentSpace[space];
	}
}
