FlowState = function() {
	var pagesCreatedSoFarInOrder = [];
	var finished = false;
	var backedOut = false;
	var halted = false;

	function isFinished() {
		return finished;
	}
	this.isFinished = isFinished;
	
	function isBackedOut() {
		return backedOut;
	}
	this.isBackedOut = isBackedOut;

	function isHalted() {
		return halted;
	}
	this.isHalted = isHalted;
		
	function finish() {
		finished = true;
	}
	this.finish = finish;
	
	function halt() {
		halted = true;
	}
	this.halt = halt;

	function backOut() {
		backedOut = true;
	}
	this.backOut = backOut;

	function page(index) {
		return pagesCreatedSoFarInOrder[index];
	}
	this.page = page;

	function getNumberOfPagesCreated() {
		return pagesCreatedSoFarInOrder.length;
	}
	this.getNumberOfPagesCreated = getNumberOfPagesCreated;
	
	function onlyIndexedPageIsVisible(index){
		var ret = pagesCreatedSoFarInOrder[index].isShowing();
		for ( var i = 0; i < pagesCreatedSoFarInOrder.length; i++) {
			ret = ret && (!pagesCreatedSoFarInOrder[i].isShowing() || i === index);
		}
		return ret;
	}
	this.onlyIndexedPageIsVisible = onlyIndexedPageIsVisible;
	
	function noPagesAreShowing(index){
		var ret = true;
		for ( var i = 0; i < pagesCreatedSoFarInOrder.length; i++) {
			ret = ret && !(pagesCreatedSoFarInOrder[i].isShowing());
		}
		return ret;
	}
	this.noPagesAreShowing = noPagesAreShowing;
	
	function addToPagesCreatedSoFar(page) {
		var pageSeen = false;
		for ( var i = 0; i < pagesCreatedSoFarInOrder.length; i++) {
			pageSeen = pageSeen
					|| (pagesCreatedSoFarInOrder[i].getIndicator() === page.getIndicator());
			
			if(pagesCreatedSoFarInOrder[i].getIndicator() === page
					.getIndicator()) {
				pagesCreatedSoFarInOrder[i] = page;
			}
		}
		if (!pageSeen) {
			pagesCreatedSoFarInOrder.push(page);
		}
	}
	this.addToPagesCreatedSoFar = addToPagesCreatedSoFar;
};