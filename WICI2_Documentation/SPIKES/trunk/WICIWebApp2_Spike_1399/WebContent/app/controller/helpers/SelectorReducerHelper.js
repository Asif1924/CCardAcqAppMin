ensureNamespaceExists();

WICI.SelectorReducerHelper = function(translator) {
	var logPrefix = ":::SelectorReducerHelper--->> ";
	this.init = init;
	function init(){
		if(isPixelRatioBiggerThanOne()){
		 var newSize = Math.round(14 / parseFloat(getSelectorReduceFactor()));
		 // will decrease all size for selectors buttons
		 $(".sizeSelector").css("font-size", newSize + "pt");
		}
	}

	function isPixelRatioBiggerThanOne() {
		var sMethod = "isPixelRatioBiggerThanOne";
		if (window && window.devicePixelRatio) {
			console.log(logPrefix + sMethod + " " + window.devicePixelRatio);
			return window.devicePixelRatio > 1;
		} else {
			console.log(logPrefix + sMethod + "returned false");
			return false;
		}
	}

	function getSelectorReduceFactor() {
		var sMethod = "getSelectorReduceFactor";
		if (window && window.devicePixelRatio) {
			console.log(logPrefix + sMethod + " was retunrned "
					+ window.devicePixelRatio);
			return window.devicePixelRatio;
		} else {
			console.log(logPrefix + sMethod + "returned 1");
			return 1;
		}
	}
}