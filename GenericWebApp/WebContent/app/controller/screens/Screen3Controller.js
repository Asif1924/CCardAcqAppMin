ensureNamespaceExists();

GENERICWEBAPP.Screen3Controller = function(argLoanApplicationData, argTranslator, argMessageDialog) {
    var logPrefix = '[GENERICWEBAPP.Screen3Controller]::';
    var $screenContainer = $("#Screen3");
    var translator = null;
    var messageDialog = null;
    var loanApplicationData = null;
    var flow = null;
    var commonScreenMethods = null;

    this.show = show;
    this.hide = hide;
    this.init = init;
    this.syncUserData = syncUserData;

    var model = new GENERICWEBAPP.BaseModel({
        name: 'Screen3',
        refs: {},
        data: []
    });

    function init(argFlow) {
        var sMethod = 'init() ';
        console.log(logPrefix + sMethod);

        loanApplicationData = argLoanApplicationData;
        translator = argTranslator;
        messageDialog = argMessageDialog;
        flow = argFlow;

        createView();
        bindEvents();
    }


    // ---------------------------------------------------------------------------------------
    function syncUserData() {
        var sMethod = 'syncUserData() ';
        console.log(logPrefix + sMethod);

        console.log(logPrefix + sMethod + ' model data: \n' + model.toString());
    }

    function show() {
        $screenContainer.show();
        //translator.run("Screen1");
    }

    function hide() {
        $screenContainer.hide();
    }

    function createView() {
        $screenContainer.empty();
        assembleHTML($screenContainer, "#Screen3-template");
    }

    function assembleHTML($element, templateName) {
        var template = $.templates(templateName);   // Get compiled template
        var html = template.render({});             // Render template using data - as HTML string
        $element.prepend( html );                   // Insert HTML string into DOM
    }

    function bindEvents() {
        var sMethod = 'bindEvents() ';
        console.log(logPrefix + sMethod);
        
        $('#screen3Next').click(function(){
        	app.flow.next();
        });
        $('#screen3Back').click(function(){
        	app.flow.back();
        });    
    }
};