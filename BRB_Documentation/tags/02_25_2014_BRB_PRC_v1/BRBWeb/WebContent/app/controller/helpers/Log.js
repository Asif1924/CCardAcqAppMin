ensureNamespaceExists();

BRB.Log = function(message) {
	if (typeof console === "undefined" || typeof console.log === "undefined") {
	} else {
		console.log(message);
	}
};
