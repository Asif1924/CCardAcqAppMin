ensureNamespaceExists();

WICI.SignatureDialog = function(message, okCallback, cancelCallback, resetCallback, title, okButton, cancelButton, resetButton){
    var dialogViewHelper = new WICI.DialogViewHelper();
    
    var answerIsYes = false;
    var showing = false;
    
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
    
    function appendDialog(){
        $("#signatureDialog-template").template("dialogTemplate");
        $.tmpl("dialogTemplate", {
            title : title,
            message : message,
            okButton : okButton,
            cancelButton : cancelButton,
            resetButton : resetButton
        }).appendTo("body");
    }
    
    function addEvents(showNextDialogCallback){
        // DANGER, we use .one( but remember to make sure the events don't stack up if making changes
        $("#signature_okButton").one("click", function(event){
            answerIsYes = true;
        });
        
        $("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
            dialogViewHelper.removeDialog();
            try {
                if (answerIsYes)
                    okCallback();
                else
                    cancelCallback();
            } catch (e) {
                console.log("Internal DART error after Confirm dialog box");
            }
            showing = false;
            showNextDialogCallback();
        });
    }
    
};