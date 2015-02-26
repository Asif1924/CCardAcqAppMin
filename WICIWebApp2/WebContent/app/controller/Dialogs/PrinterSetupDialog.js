ensureNamespaceExists();

WICI.PrinterSetupDialog = function(lastMacAddress, title, yesCallback, noCallback, yesButton, noButton, translate) {
    var dialogViewHelper = new WICI.DialogViewHelper(),
        answerIsYes = false,
        showing = false,
        printerMacAddress = lastMacAddress;

    this.isShowing = isShowing;
    this.show = show;

    function show(showNextDialogCallback) {
        appendDialog();
        dialogViewHelper.showDialog();
        addEvents(showNextDialogCallback);
        init();
        showing = true;
        // if we need the autoClose
        dialogViewHelper.startAutoCloseTimer(this);
    }

    function init() {
        setUIElementsMasks();
        setPrinterMacAddress(printerMacAddress);
    }

    function setUIElementsMasks() {
        // Set phone fields mask
        for (var index = 1; index <= 6; index++) {
            $("#printerMacAddress" + (index)).mask('hh', {placeholder:""});
        }
    }

    function isShowing() {
        return showing;
    }

    function appendDialog(){
        $("#printerSetupDialog-template").template("dialogTemplate");
        $.tmpl("dialogTemplate", {
            title : title,
            mainLabel: translate.translateKey("printerSetupDialog_macLabel"),
            ieLabel: translate.translateKey("printerSetupDialog_ie"),
            yesButton : yesButton,
            noButton : noButton
        }).appendTo("body");
    }

    function addEvents(showNextDialogCallback) {
        // DANGER, we use .one( but remember to make sure the events don't stack up if making changes
        $("#confirm_confirmButton").one("click", function(event) {
            printerMacAddress = getPrinterMacAddress();
            answerIsYes = true;
        });

        for (var index = 1; index <= 6; index++) {
            $("#printerMacAddress" + (index)).keyup(onMacAddressChanged);
        }

        $("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
            dialogViewHelper.removeDialog();
            try {
                if (answerIsYes) {
                    yesCallback(printerMacAddress);
                }
                else {
                    noCallback();
               }
            } catch (e) {
                console.log("Internal WICI error after PrinterSetup dialog box");
            }

            showing = false;
            showNextDialogCallback();
        });
    }

    function validateMacAddress () {
        return ($("#printerMacAddress1").val() && $("#printerMacAddress1").val().length == 2 ) &&
            ($("#printerMacAddress2").val() && $("#printerMacAddress2").val().length == 2) &&
            ($("#printerMacAddress3").val() && $("#printerMacAddress3").val().length == 2) &&
            ($("#printerMacAddress4").val() && $("#printerMacAddress4").val().length == 2) &&
            ($("#printerMacAddress5").val() && $("#printerMacAddress5").val().length == 2) &&
            ($("#printerMacAddress6").val() && $("#printerMacAddress6").val().length == 2);
    }

    function showApplyBtn () {
        $("#confirm_confirmButton").show();
        $('#confirm_confirmButton').css('display', '');
    }

    function hideApplyBtn () {
        $("#confirm_confirmButton").hide();
    }

    function onMacAddressChanged () {
        // if we need the autoClose
        dialogViewHelper.resetAutoCloseTimer();

        if (validateMacAddress ()) {
            showApplyBtn ();
        } else {
            hideApplyBtn ();
        }
    }

    function getPrinterMacAddress (){
        var returnValue = $("#printerMacAddress1").val() + ":" + $("#printerMacAddress2").val() + ":" + $("#printerMacAddress3").val() +
                          ":" + $("#printerMacAddress4").val() + ":" + $("#printerMacAddress5").val() + ":" + $("#printerMacAddress6").val();

        return returnValue;
    }

    function setPrinterMacAddress (newMacAddress){
        if(newMacAddress === null || newMacAddress === '')
        {
            hideApplyBtn ();
            return;
        }

        var addressParts = newMacAddress.split(":");

        if(addressParts.length == 6)
        {
            $.each(addressParts, function(index, item) {
                $("#printerMacAddress" + (index + 1)).val(item);
            });
        }

        if (validateMacAddress ()) {
            showApplyBtn ();
        } else {
            hideApplyBtn ();
        }
    }
};
