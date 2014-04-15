ensureNamespaceExists();

BRB.ConnectionStatus = function() {

	function healthy() {		
		if (navigator.network && navigator.network.connection.type === Connection.NONE) {
			BRB.Log("ConnectionStatus:App is offline");
			return false;
		}
		BRB.Log("ConnectionStatus:App is online");
		return navigator.onLine;
	}
	this.healthy = healthy;
};