ensureNamespaceExists();

BRB.DummyPageLauncher = function() {
	var dummyPageProperty = 'true';
	this.setDummyPageProperty = function( argDummyPageProperty ){
		dummyPageProperty = argDummyPageProperty;
	};
	
	this.getDummyPageProperty = function(){
		return dummyPageProperty == 'true';
	};
};