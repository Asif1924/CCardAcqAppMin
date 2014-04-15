ensureNamespaceExists();

//luk: this class helps to highlight fields which are not passed validation
//note: this class is working with BaseModel.validate() so most of input params comes from this method!
//
WICI.ValidationDecorator = function(config) {
    var logPrefix = '[WICI.ValidationDecorator]::';
    var errCss = 'errorField';
  //---------------------------------------------------------------
    //luk: goes through the fields and removes 'errCss' class
    this.clearErrArrtibute = function(){
        var sMethod = 'clearErrArrtibute() ';
        console.log(logPrefix + sMethod);
        
        $('.'+errCss).removeClass(errCss);
    };
  //---------------------------------------------------------------
    this.applyErrAttribute = function(validationRez){
        var sMethod = 'applyErrAttribute() ';
        console.log(logPrefix + sMethod);
        
        if(!validationRez || validationRez.lenght<=0){
            return;
        }
        
        $.each(validationRez, function(index, item) {
            $(item.uiid).addClass(errCss);
        });
    };
  //---------------------------------------------------------------
};