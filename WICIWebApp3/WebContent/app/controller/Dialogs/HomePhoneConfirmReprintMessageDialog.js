// US4282
ensureNamespaceExists();

WICI.HomePhoneConfirmReprintMessageDialog = function(messageOne, messageTwo, title, yesCallback, noCallback, yesButton, noButton){
	var dialogViewHelper = new WICI.DialogViewHelper();
	var logPrefix = '[WICI.HomePhoneConfirmReprintMessageDialog]::';
	var answerIsYes = false;
	var showing = false;
	var homePhone = "";
	
	this.isShowing = isShowing;
	this.show = show;
	
	function show(showNextDialogCallback) {
		appendDialog();
		dialogViewHelper.showDialog();
		addEvents(showNextDialogCallback);
		showing = true;
		// if we need the autoClose
        dialogViewHelper.startAutoCloseTimer(this);
	}
	
	function isShowing() {
		return showing;
	}	 
	
	function focusHomePhoneNumber() {
    	setTimeout(function() { $('#homePhone').focus(); }, 1000);
    }
	
	function appendDialog(){
		$("#homePhoneConfirmMessageDialog-template").template("dialogTemplate");
		$.tmpl("dialogTemplate", {
			title : title,
			mainLabel_one : messageOne,
            mainLabel_two : messageTwo,
			yesButton : yesButton
		}).appendTo("body");
	}
	
	function addEvents(showNextDialogCallback){
	      var sMethod = "addEvents()";
          console.log(logPrefix+" "+sMethod); 
          
         focusHomePhone();
		$( "#homePhone1" ).keyup( function() { onHPChanged(1); } );		
		$( "#homePhone2" ).keyup( function() { onHPChanged(2); } );		
		// $( "#homePhone3" ).keyup( function() { onHPChanged(3); } );	
		
        showHideOkButton();
        
        $("#homePhone3").live('paste, input', function(e) {
            var self = $(this);

            setTimeout(function(){
                if(self.val().indexOf(' ') != -1 || self.val().length > 4) {
                    self.val(self.val().replace(' ', '').substring(0, 4));
                    showHideOkButton();
                }
            },100);
        });
        
         $("#confirm_confirmButton").one("click", function(event) {
            homePhone = getHomePhone();
            console.log(" confirm_confirmButton :: homePhone " + homePhone);
            var checkHomePhon = checkHomePhone(homePhone);
            console.log(" confirm_confirmButton :: checkHomePhon " + checkHomePhon);
            if(checkHomePhon){
                  answerIsYes = true;
            }else{
                  answerIsYes = false;
            }
        });
        
        for (var index = 1; index <= 3; index++) {
            $("#homePhone" + (index)).keyup(onHPChanged);
             homePhone = getHomePhone(); 
        }
        
		$("#" + dialogViewHelper.getMessageDialogId()).one('pagehide.DART', function(){
			try {
				  if (answerIsYes){
				       dialogViewHelper.removeDialog();
				       yesCallback(homePhone);
				       showing = false;
			   		   showNextDialogCallback();
				  } else {
				  	   showing = false;				  
				  	   dialogViewHelper.removeDialog();
				  }
			}catch(e){
				console.log("Internal WICI error after Confirm dialog box ::"+ e.message);
			}
		});
	}
	
     function onHPChanged (value) {
       var sMethod = "onHPChanged()";
       console.log(logPrefix+" "+sMethod);
        // if we need the autoClose
        dialogViewHelper.resetAutoCloseTimer();
        
        if (($("#homePhone1").val() && $("#homePhone1").val().length == 3 && value == 1)) {			
			setTimeout(function() { $('#homePhone2').focus(); }, 100);
		} 
        else if (($("#homePhone2").val() && $("#homePhone2").val().length == 3 && value == 2)) {
			setTimeout(function() { $('#homePhone3').focus(); }, 100);
		} 
        else if (($("#homePhone3").val() && $("#homePhone3").val().length == 4 && value == 3)) {
			setTimeout(function() { $('#confirm_confirmButton').focus(); }, 100);
		} 
    	showHideOkButton();
    }       
	
	 function getHomePhone(){
	   var sMethod = "getHomePhone()";
	   console.log(logPrefix+" "+sMethod);
       var returnValue = $("#homePhone1").val() + $("#homePhone2").val() + $("#homePhone3").val();
       if(returnValue.length!==null){
           return returnValue;
       }
    }
    
    function focusHomePhone() {
    	console.log("Focus Fourth text field by default");
    	setTimeout(function() { $('#homePhone1').focus(); }, 1000);
    }
    
    function checkHomePhone( homePhone ){
      if( homePhone.length === 0 || homePhone.length<10 ){
	           $("#homePhone1").addClass("errorField");
		       $("#homePhone2").addClass("errorField");
	           $("#homePhone3").addClass("errorField");
		       $("#homePhone1").focus();
		       // return false;
		 }else {
		       return true;
		 }
    }
    
    function showHideOkButton(){
         if($("#homePhone1").val() !== null && $("#homePhone2").val() !== null && $("#homePhone3") !== null){
                 if($("#homePhone1").val().length == 3 && $("#homePhone2").val().length == 3 && $("#homePhone3").val().length == 4){
                     showOkBtn();
                 }else {
                    hideOkBtn();
                 }
          }  
    }
     
     function showOkBtn () {
        $("#confirm_confirmButton").show();
        $('#confirm_confirmButton').css('display', '');
    }

    function hideOkBtn () {
        $("#confirm_confirmButton").hide();
    }
 
};