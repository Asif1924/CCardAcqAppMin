ensureNamespaceExists();

WICI.ConnectionStatus = function() {

	function healthy() {		
		if (navigator.network && navigator.network.connection.type === Connection.NONE) {
			console.log("ConnectionStatus:App is offline");
			return false;
		}
		console.log("ConnectionStatus:App is online");
		return navigator.onLine;
	}
	this.healthy = healthy;
};