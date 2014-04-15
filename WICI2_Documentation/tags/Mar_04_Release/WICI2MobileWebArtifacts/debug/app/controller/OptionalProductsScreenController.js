/**
 * @author Oleksandr_Moroziuk
 */

ensureNamespaceExists();

WICI.OptionalProductsScreenController = function(activationItems, argTranslator, argMessageDialog) {
    var logPrefix = '[WICI.OptionalProductsScreenController]::';
    var definingObject = this;
    var $screenContainer = $('#OptionalProductsScreen');
    var previousScreen;
    var translator =    null; //luk: see 'init()'
    var messageDialog = null; //luk: see 'init()'

    this.show = show;
    this.init = init;
    this.hide = hide;
    
    var	flow = null;
    
    this.syncUserData = syncUserData; //luk: get user entered data here...
    var refs = {
            idtype					:  	'#personalData_IDType_TextField',
            placeofissue			:  	'#personalData_PlaceOfIssue_TextField',
            idnumbers				:  	'#personalData_IDNumber_TextField',
            
            title					:  	'input[name=personalData_title]',
            
            firstName				:  	'#personalData_FirstName_TextField',
            initial					:  	'#personalData_Initial_TextField',
            lastName				:	'personalData_LastName_TextField',
            
            birthDate				: 	'#personalData_DatOfBirth_TextField',
            
            email					: 	'#personalData_EmailAddress_TextField',
            homePhone				: 	'#personalData_HomePhone_TextField',
            cellPhone				: 	'#personalData_CellPhone_TextField',
            
            correspondence			: 	'input[name=personalData_correspondence]',
            
            flipCreditProtector 	: '#flipCreditProtector'
    };
    
    var model =new WICI.BaseModel({
        refs: refs, //luk: with this model can return 'uiid' of the vaidated item!
        data:[
                {name: 'placeofissue',  value: null, validation: {type: 'presence', message: 'Place of Issue is not selected'} },
                {name: 'idtype',        value: null, validation: {type: 'presence', message: 'ID Type is not selected'}},
                {name: 'idnumbers',     value: null, validation: {type: 'format',   message: 'Invalid ID Numbers value', matcher: /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/}},
                
                {name: 'title',         value: null, validation: { type: 'presence', message: 'Select valid Title' } },
                {name: 'firstName',     value: null, validation: { type: 'format', message: 'Enter valid First Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/ } },
                {name: 'lastName',      value: null, validation: { type: 'format', message: 'Enter valid Last Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/ } },
                {name: 'initial',       value: null, validation: { type: 'format', message: 'Enter valid Last Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/, isRequired: 'false' } },
               
                {name: 'birthDate',     value: null, validation: { type: 'presence', message: 'Enter valid Date Of Birth' } },
                {name: 'email',         value: null, validation: { type: 'email', message: 'Enter a valid Email Address', isRequired: 'false' } },
                {name: 'homePhone',     value: null, validation: { type: 'phone', message: 'Enter valid Home Phone' } },
                {name: 'cellPhone',     value: null, validation: null },
                {name: 'correspondence',  value: null, validation: { type: 'presence', message: 'Select valid Correspondence'} }
                ]
    });

    
    //---------------------------------------------------------------------------------------
    function init( argFlow ) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);
        
        flow = argFlow;        
        messageDialog = argMessageDialog; 	//(AA)Dependency Injection Principle: Allows for proper unit testing
        translator = argTranslator; 		//(AA)Dependency Injection Principle: Allows for proper unit testing
        
        createView();
        
        bindEvents();
        
        $("#creditProtectorYesOption").hide();
        
        var currentDate = Date.now();
        $("#optionalProducts_DateNow").html(currentDate.toString('MMMM dd yyyy'));
        
        createFlips();
        
    }
    //---------------------------------------------------------------------------------------
    function createFlips (){
    	$(refs.flipCreditProtector).slider();
    }
    //---------------------------------------------------------------------------------------
    function show() {
        $screenContainer.show();
        translator.run('OptionalProductsScreen');
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();
        assembleNavigationBarAtTop();
        assemblePageHTML($screenContainer, '#WICIOptionalProductsScreen-template');
		$screenContainer.addClass("breadcrumbPadding");		        
    }

	function assembleNavigationBarAtTop(){
		$("#pageHeader-template").template("pageHeader");
		$.tmpl("pageHeader", 
			{ 													
				"previousButtonId" 		: "OptionalProductsScreen_PrevButton", 
				"nextButtonId" 			: "OptionalProductsScreen_NextButton"			
			}
		).appendTo("#OptionalProductsScreen");
	}    
    
    function assemblePageHTML($element, templateName) {
        var html = $(templateName).tmpl();
        $element.append(html);
    }
    
    //---------------------------------------------------------------------------------------
    //luk: collect user data from UI to this.data obj
    function syncUserData(){
/*        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);
        
        model.set('placeofissue', $(refs.placeofissue).val());
        
        model.set('idtype',     $(refs.idtype).val());
        model.set('idnumbers',  $(refs.idnumbers).val().toUpperCase());
        
        model.set('title',      $(refs.title+':checked').val());
        
        model.set('firstName',  $(refs.firstName).val().toUpperCase());
        model.set('initial',    $(refs.initial).val().toUpperCase());
        model.set('lastName',   $(refs.lastName).val().toUpperCase());

        model.set('birthDate',  $(refs.birthDate).val());
        model.set('email',      $(refs.email).val());
        model.set('homePhone',  $(refs.homePhone).val());
        model.set('cellPhone',  $(refs.cellPhone).val());
        
        model.set('correspondence', $(refs.correspondence+':checked').val());
        
        console.log(logPrefix + sMethod +' model data: '+model.toString());*/
    }
    //---------------------------------------------------------------------------------------
    function validateFields( argSuccessCallback, argFailureCallback ){
/*        var sMethod = 'validateFields() ';
        console.log(logPrefix + sMethod);
        
        var validator = new WICI.Validator();
        syncUserData();
        
        if(!validator.notEmpty(agentIDTextField)){
            argFailureCallback(translator.translateKey("loginScreen_AgentID_Label"));
        }else{
            argSuccessCallback();
        }*/
        
    }
    //---------------------------------------------------------------------------------------
    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
        $('#OptionalProductsScreen_NextButton').click(function() {
            showNextScreen();
        });
        $('#OptionalProductsScreen_PrevButton').click(function() {
        	showPrevScreen();
        });        
        
        
        $('select#flipCreditProtector').change(function() {
            if("Yes"==$(this).val()){
            	$("#creditProtectorYesOption").show();
            }
            else
            {
            	$("#creditProtectorYesOption").hide();
            }
        });
    }
    //---------------------------------------------------------------------------------------
    
	function showPrevScreen(){
		flow.back();
		/*
		$screenContainer.empty();		
		var signature = new WICI.SignatureScreenController();
		signature.init(definingObject, translator);
		signature.show();
		*/
	}    
    function showNextScreen() {
        /*syncUserData();
        
        var rez = model.validate();
        if(rez.length>0){
            $.each(rez, function(index, item) {
                //luk: TODO: use 'item.uiid' to highlight the field
                
                messageDialog.error(translator.translateKey(item.err, item.uiid));
            });
            return; //luk: cannot pass untill all errors are fixed
        }*/
        
    }
    //---------------------------------------------------------------------------------------
};