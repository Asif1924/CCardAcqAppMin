ensureNamespaceExists();

WICI.PrinterSetupDialog = function(lastMacAddress, title, yesCallback, noCallback, yesButton, noButton, translate) {
    var dialogViewHelper = new WICI.DialogViewHelper(),
        answerIsYes = false,
        showing = false,
        printerMacAddress = lastMacAddress;
 
    console.log("printerMacAddress :: " + printerMacAddress);
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
    
    // US3827
    function focusPrinterMacAddress4() {
    	console.log("Focus Fourth text field by default");
    	setTimeout(function() { $('#printerMacAddress4').focus(); }, 1000);
    }

    function init() {
        // setUIElementsMasks();
        setPrinterMacAddress(printerMacAddress);
        // US3827        
        bindEvents();
        focusPrinterMacAddress4();
    }
    
    // US3827
    function bindEvents() {
		$( "#printerMacAddress1" ).keyup( function() { onMacAddressChanged(1); } );		
		$( "#printerMacAddress2" ).keyup( function() { onMacAddressChanged(2); } );		
		$( "#printerMacAddress3" ).keyup( function() { onMacAddressChanged(3); } );		
		$( "#printerMacAddress4" ).keyup( function() { onMacAddressChanged(4); } );		
		$( "#printerMacAddress5" ).keyup( function() { onMacAddressChanged(5); } );		
		// $( "#printerMacAddress6" ).keyup( function() { onMacAddressChanged(6); } );
		
		$("#printerMacAddress6").live('paste, input', function(e) {
            var self = $(this);

            setTimeout(function(){
                if(self.val().indexOf(' ') != -1 || self.val().length > 2) {
                    self.val(self.val().replace(' ', '').substring(0, 2));
                    showHideApplyButton();
                }
            },100);
        });
		
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

    function onMacAddressChanged (value) {
        // if we need the autoClose
        dialogViewHelper.resetAutoCloseTimer();
        
        // US3827 - Start
        if (($("#printerMacAddress1").val() && $("#printerMacAddress1").val().length == 2 && value == 1)) {			
			setTimeout(function() { $('#printerMacAddress2').focus(); }, 100);
		} 
        else if (($("#printerMacAddress2").val() && $("#printerMacAddress2").val().length == 2 && value == 2)) {
			setTimeout(function() { $('#printerMacAddress3').focus(); }, 100);
		} 
        else if (($("#printerMacAddress3").val() && $("#printerMacAddress3").val().length == 2 && value == 3)) {
			setTimeout(function() { $('#printerMacAddress4').focus(); }, 100);
		} 
        else if (($("#printerMacAddress4").val() && $("#printerMacAddress4").val().length == 2 && value == 4)) {
			setTimeout(function() { $('#printerMacAddress5').focus(); }, 100);
		} 
        else if (($("#printerMacAddress5").val() && $("#printerMacAddress5").val().length == 2 && value == 5)) {
			setTimeout(function() { $('#printerMacAddress6').focus(); }, 100);
		} 
        else if (($("#printerMacAddress6").val() && $("#printerMacAddress6").val().length == 2 && value == 6)) {
        	setTimeout(function() { $('#confirm_confirmButton').focus(); }, 100);
		}        
		showHideApplyButton();
		// End
    }       

    function getPrinterMacAddress (){
        var returnValue = $("#printerMacAddress1").val() + ":" + $("#printerMacAddress2").val() + ":" + $("#printerMacAddress3").val() +
                          ":" + $("#printerMacAddress4").val() + ":" + $("#printerMacAddress5").val() + ":" + $("#printerMacAddress6").val();

        return returnValue;
    }

    function setPrinterMacAddress (newMacAddress){
    	var sMethod="setPrinterMacAddress :: ";
        if(newMacAddress === null || newMacAddress === '')
        {
            hideApplyBtn ();
            $("#printerMacAddress1").val('ac');
            $("#printerMacAddress2").val('3f');
            $("#printerMacAddress3").val('a4');
            return;
        }

        var addressParts = newMacAddress.split(":");
        console.log(sMethod + " addressParts length: " + addressParts.length);
        if(addressParts.length == 6) {
	        $.each(addressParts, function(index, item) {
	            $("#printerMacAddress" + (index + 1)).val(item);
	        });
        }
        // US3827
        showHideApplyButton();
    }
    
    // US3827
    function showHideApplyButton () {
    	if (validateMacAddress ()) {
    		showApplyBtn ();
    	} else {
    		hideApplyBtn ();
    	}
    }
};
