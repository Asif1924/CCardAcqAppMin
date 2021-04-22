ensureNamespaceExists();

WICI.ScanFailedErrorMessageDialog = function (
		scanFiledtitle,scanFailedMessage1,scanFailedMessage2, okCallback, scanFailedYesButton,
    translate
) {
    var dialogViewHelper = new WICI.DialogViewHelper(),
        showing = false;

    this.isShowing = isShowing;
    this.show = show;

    function show(showNextDialogCallback) {
        appendDialog();
        dialogViewHelper.showDialog();
        addEvents(showNextDialogCallback);
        showing = true;
    }

    function isShowing() {
        return showing;
    }

    function appendDialog() {
        $('#scanFailedErrorMessageDialog-template').template('dialogTemplate');
        $.tmpl('dialogTemplate', {
        	scanFiledtitle: translate.translateKey('scanFaildErrorMessageTitle'),
            scanFailedMessage1: translate.translateKey('scanFaildErrorMessageOne'),
            scanFailedMessage2: translate.translateKey('scanFaildErrorMessageTwo'),
            scanFailedYesButton: translate.translateKey('scanFaildErrorMessageOkButton')
        }).appendTo('body');
    }

    function addEvents(showNextDialogCallback) {
        $('#' + dialogViewHelper.getMessageDialogId()).one(
            'pagehide.DART',
            function () {
                dialogViewHelper.removeDialog();
                try {
    				callback();
    			} catch (e) {
    				console.log("WICI.ScanFailedErrorMessageDialog.addEvents: Internal DART error after ScanFailedErrorMessageDialog");
    			}
    			showing = false;
    			showNextDialogCallback();
            }
        );
    }
};
