ensureNamespaceExists();

//luk: base model class with validation process

//refs : {
//        idtype:         '#personalData_IDType_TextField',
//        placeofissue:   '#personalData_PlaceOfIssue_TextField',
//        }
//data:[
//      {name: 'placeofissue',  value: null, validation: {type: 'presence', group:[1],  canBeEmpty: true,   message: 'Place of Issue is not selected'} },
//      {name: 'firstName',     value: null, validation: {type: 'format',                                   message: 'Enter valid First Name', matcher: /^[a-zA-Z0-9_\-]{1,30}/ } },
//      {name: 'idnumbers',     value: null, validation: {type: 'format',               canBeEmpty: true,   message: 'Invalid ID Numbers value', matcher: /^[A-Z0-9\,\_\'\-\.\~\@\[\]\}\{\)\(]{1,20}$/}}
//		]
//notes:
// canBeEmpty: true - means that if the field is left empty - no validation required!


WICI.BaseModel = function(config) {
    this.name = config.name; //luk: used to identify the model - use unique value
    this.data = config.data;
    this.refs = config.refs; //list of ui ids: names are the same as fields
    var refs = this.refs; //luk: just to be able dont think about 'this' 
    var validator = new WICI.Validator();
    //---------------------------------------------------------------
    this.toString=function(){
        var rez="";
        $.each(this.data, function(index, item) {
            //rez += "[ name:"+item.name+", value:"+item.value+"]";
            rez += "[ "+item.name+": "+item.value+"]\n";
        });
        return rez;
    };
    //---------------------------------------------------------------
    this.set = function(name, value){
        
        //luk: we dont need 'string' null value... so if any - fix it here:
        if(value==='null'){
            value = null;
        }
        
        $.each(this.data, function(index, item) {
           if(item.name===name){
               item.value = value;
               return item;
           } 
        });
    };
    //---------------------------------------------------------------
    this.get = function(name){
        var value=null;
        $.each(this.data, function(index, item) {
           if(item.name===name){
               value = item.value;
               return;
           } 
        });
        return value;
    };
    //---------------------------------------------------------------  
    //luk: 'validation' is an object from BaseModel item like: validation: {type: 'presence', message: 'Place of Issue is not selected'}
    var isValid = function(validation, name, value){
        var rez = null;
        var isError = false;
        
        //luk: no validation required for this field!
        if(!validation){
            return null;
        }
        
        //luk: if field can be left empty and no value entered - dont validate it:
        if(validation.canBeEmpty && !value){
            return null;
        }
            
        switch(validation.type){
            case 'presence':
                isError = !value;
                break;
            case 'format':
                if(value===null){
                    isError=true;
                }
                else{
                    var regRez = value.trim().match(validation.matcher);
                    isError = !regRez;
                }
                break;
            case 'email':
                isError=!validator.emailAddress(value);
                break;
            case 'phone':
                isError=!validator.phone(value);
                break;
            case 'postal':
                isError=!validator.postalCode(value);
                break;
            case 'personName':
                isError=!validator.personName(value);
                break;
            case 'city':
                isError=!validator.city(value);
                break;
            case 'termsAndConditions':
                isError=!validator.termsAndConditions(value);
                break;
            case 'streetNumber':
                isError=!validator.streetNumber(value);
                break;
            case 'addressLine':
                isError=!validator.addressLine(value);
                break;
                
        }

        if(isError){
            rez= {name: name, err: validation.message, uiid: refs[name]};
            console.log('WICI.BaseModel::isValid() name:'+rez.name+'  err:'+rez.err+'  uiid:'+rez.uiid);
        }
        return rez;
    };
    //---------------------------------------------------------------  
    //luk: validates all fields in a model where 'validation' is not null
    // 'groupName' if specified - validation will be done only for the fields with 'group'===groupName
    this.validate = function(groupName) {
        console.log('WICI.BaseModel::isGroupValid(' + groupName + ')');

        var rez = []; // name, error, uiid
        $.each(this.data, function(index, item) {

            //luk: if any group specified - check whether this field is in group!
            if (!groupName || (item.validation && $.inArray(groupName, item.validation.group) != -1)) {

                var fieldValidationRez = isValid(item.validation, item.name, item.value);

                if (fieldValidationRez !== null) {
                    rez.push(fieldValidationRez);
                }
            }

        });
        return rez;
    };
  // ---------------------------------------------------------------
  //---------------------------------------------------------------
};
