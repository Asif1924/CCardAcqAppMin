ensureNamespaceExists();

WICI.AccountProfileHelper = function (messageDialog, translate) {
    var adminRoleMark = "WICI-ADMIN";
    var logPrefix = ' ---- [WICI.AccountProfileHelper]::';
    var isAdminUser = false;
    var isSuperOrAdminRole = false;
    var messageDialogInstance = messageDialog;
    var translator = translate;
    
    //---------------------------------------------------------------------------------------
    this.initialize = function (accountProfiles, argRoleId) {
    	var sMethod = 'initialize() ';
    	if(argRoleId == "1001" || argRoleId == "1002") {
    		isSuperOrAdminRole = true;
        }else if(argRoleId == "1003") {
        	isSuperOrAdminRole = false;
        }
    	console.log(logPrefix + sMethod + " isSuperOrAdminRole : " + isSuperOrAdminRole);
        isAdminUser = findAdminRoleInProfileCollection(accountProfiles);
    };    
    //---------------------------------------------------------------------------------------
    this.isAdminProfile = function () {          
       return isAdminUser;
    };
  //---------------------------------------------------------------------------------------
    this.isAdminRole = function () {          
        return isSuperOrAdminRole;
     };
    //---------------------------------------------------------------------------------------
    this.showNoPrinterSetupWarning = function (callbackHandler) {  
        var sMethod = 'showNoPrinterSetupWarning() ';
        console.log(logPrefix + sMethod);
        
        messageDialogInstance.info(
                translator.translateKey("infoDialog_noPrinterSetupped"), 
                translator.translateKey("errorDialog_noticeTitle"),
                callbackHandler ? callbackHandler : $.noop);
    };
    //---------------------------------------------------------------------------------------
    function findAdminRoleInProfileCollection (userProfileCollection) {
        var sMethod = 'findAdminRoleInProfileCollection() ';
        console.log(logPrefix + sMethod);       
        
        try {
            // Convert JSON string to Javascript array
            var userProfilesCollection = JSON.parse(userProfileCollection);
            
            return $.inArray(adminRoleMark, userProfilesCollection) >= 0;
        } catch (err) {
            console.log(logPrefix + sMethod + "::Initiate ERROR::"  + err);
        }
        
        return false;        
    };
};