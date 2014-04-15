ensureNamespaceExists();

WICI.CreditCardApplicationData = function() {

	//Choose Product Screen
    this.chooseProduct_Card											=	"";
	this.chooseProduct_PromoCode									=	"";
	this.chooseProduct_Province										=	"";
	
	//Personal Data Screen1
	this.personalData_PlaceOfIssue									=	"";
	this.personalData_IDType										=	"";
	this.personalData_IDNumber										=	"";
	this.personalData_Title											=	"";
	this.personalData_FirstName										=	"";
	this.personalData_Initial										=	"";
	this.personalData_LastName										=	"";
	this.personalData_DatOfBirth									=	"";
	this.personalData_EmailAddress									=	"";
	this.personalData_HomePhone										=	"";
	this.personalData_CellPhone										=	"";
	this.personalData_Correspondence								=	"";
	
	
	//Personal Data Screen2 	
	this.personalData2_Address_PostalCode							=	"";
	this.personalData2_Address_StreetNumber							=	"";
	this.personalData2_Address_AddressLine1							=	"";
	this.personalData2_Address_AddressLine2							=	"";
	this.personalData2_Address_SuiteUnit							=	"";
	this.personalData2_Address_City									=	"";
	this.personalData2_Address_Province								=	"";
	
	this.personalData2_Address_HousingStatus						=	"";
	
	this.personalData2_Address_MonthlyPayment						=	"";
	this.personalData2_Address_Duration_Years						=	"";				
	this.personalData2_Address_Duration_Months						=	"";
	
	this.personalData2_PreviousAddress_PostalCode					=	"";
	this.personalData2_PreviousAddress_StreetNumber					=	"";
	this.personalData2_PreviousAddress_AddressLine1					=	"";
	this.personalData2_PreviousAddress_AddressLine2					=	"";
	this.personalData2_PreviousAddress_SuiteUnit					=	"";
	this.personalData2_PreviousAddress_City							=	"";
	this.personalData2_PreviousAddress_Province						=	"";
	
	//---------------------------------------------------------------
    var logPrefix = '[WICI.CreditCardApplicationData]';
    var models = [];    //luk: models stack

    //luk: TODO:
    //luk: returns list of name/value of all models in the stack
    this.getAllData=function(){
        var sMethod = 'getAllData() ';
        console.log(logPrefix + sMethod + 'NOT IMPLEMENTED!');
        
        return [];
    };
    //---------------------------------------------------------------
    // luk: get model by name
    this.getModel = function(name) {
        var sMethod = 'getModel() ';
        console.log(logPrefix + sMethod + 'model name:' + name);
        
        var rez = null;
        $.each(models, function(index, item) {
            if(item.name===name){
                rez = item;
                return;
            }
        });
        
        return rez;
    };
    //---------------------------------------------------------------
    // luk: add model to the stack if it is not exists
    this.addModel = function(model) {
        if (model === null) {
            return;
        }

        var sMethod = 'addModel() ';
        console.log(logPrefix + sMethod + 'model name:' + model.name);

        if (this.getModel(model.name) === null) {
            models.push(model);
            return;
        }
    };
    //---------------------------------------------------------------
};
