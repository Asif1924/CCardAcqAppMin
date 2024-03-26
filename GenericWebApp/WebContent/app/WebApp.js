ensureNamespaceExists();

GENERICWEBAPP.WebApp = function() {
    var logPrefix = ' ----- [GENERICWEBAPP.WebApp]::';

    this.messageDialog=null;
    this.translator = null;
    this.validationsOn = true;

    //---------------------------------------------------------------------------------------
    this.init = function() {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        this.translator = new GENERICWEBAPP.Translate($.i18n, GENERICWEBAPP.AppConfig.LanguageEnum);
        this.translator.init();

        this.messageDialog = new GENERICWEBAPP.MessageDialog(this.translator);

        disableFormSubmission();
        makeEnterTabulation();

        this.validationsOn = true;

        var screenData = new GENERICWEBAPP.ScreenToScreenAccumulatedData();
        
        var loginScreen = new GENERICWEBAPP.LoginScreenController(screenData,this.translator,this.messageDialog);
        loginScreen.init();
        loginScreen.show();
    };

    function disableFormSubmission() {
        var sMethod = 'disableFormSubmission() ';
        console.log(logPrefix + sMethod);

        //.on(eventType, selector, function)
        //$('#parentElement').on('click', '.myButton', function)
        //$("form").live("submit", function(event) {
        //    event.preventDefault();
        //});
    };

    function makeEnterTabulation() {
        var sMethod = 'makeEnterTabulation() ';
        console.log(logPrefix + sMethod);
        /*
        $('input').live('keydown', function(e){
            if(e.which === 9 || e.which === 13) {
                e.preventDefault();
                var tabIndex = parseInt($(this).prop('tabindex'));
                if(!isNaN(tabIndex) ) {
                    var nextInput = $(this).parents('.ScreenLayout').find(':input:visible:not([readonly])').filter(function() {
                        return  $(this).attr("tabindex") > tabIndex;
                    }).first();
                    if(nextInput.length === 1) {
                        $(this).blur();
                        nextInput.focus();
                        nextInput.trigger('click');
                    }
                }
            }
        });
        */
    }
       
};
