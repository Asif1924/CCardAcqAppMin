ensureNamespaceExists();
//US3625 Loyalty Scanner
WICI.ScanLoyaltyDialog = function (
    title, onScanSuccessCallback, onScanErrorCallback, yesButton, noButton,
    translate
) {
    var dialogViewHelper = new WICI.DialogViewHelper(),
        answerIsYes = false,
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
 // US3625 Loyalty Scanner
    function appendDialog() {
        $('#ScanLoyaltyDialog-template').template('dialogTemplate');
        $.tmpl('dialogTemplate', {
            title: title,
            holdText: translate.translateKey('scanLoyaltyDialog_holdText'),
            pressText: translate.translateKey('scanLoyaltyDialog_pressText'),
            yesButton: yesButton,
            noButton: noButton
        }).appendTo('body');
    }

    function addEvents(showNextDialogCallback) {
        // DANGER, we use .one() but remember to make sure the events don't
        // stack up if making changes.
        $('#confirm_confirmButton').one('click', function () {
            answerIsYes = true;
        });

        $('#' + dialogViewHelper.getMessageDialogId()).one(
            'pagehide.DART',
            function () {
                dialogViewHelper.removeDialog();
                try {
                    if (answerIsYes) {
                        WICI.BarcodeHelper.scan()
                            .then(onScanSuccessCallback, onScanErrorCallback);
                    } else {
                        onScanErrorCallback();
                   }
                } catch (e) {
                    console.log(
                        'Internal WICI error after Scan dialog box: ', e
                    );
                }

                showing = false;
                showNextDialogCallback();
            }
        );
    }

    function showApplyBtn() {
        $('#confirm_confirmButton').show();
        $('#confirm_confirmButton').css('display', '');
    }

    function hideApplyBtn() {
        $('#confirm_confirmButton').hide();
    }
};
