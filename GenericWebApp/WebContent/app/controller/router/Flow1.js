ensureNamespaceExists();

GENERICWEBAPP.Flow1 = function( argAccumulatedScreenData, argTranslate, argMessageDialog) {
    var builtFlow = null;
    
    var rules = GENERICWEBAPP.ReusableFlowDefinitions;
    
    var screensDefinitions = {
        'start': {
            'screenConstructor': null,
            'transitionOut': function () {
                return 'Page0';
            },
        },
        'Page0': {
            'screenConstructor': GENERICWEBAPP.Screen1Controller,
            'transitionOut': function () {
                return 'Page1';
            },
            'transitionOnFailure': function () {
                return 'done';
            },
        },
        'Page1': {
            'screenConstructor': GENERICWEBAPP.Screen2Controller,
            'transitionOut': function () {
                return 'Page2';
            },
            'transitionOnFailure': function () {
                return 'done';
            },
        },
        'Page2': {
            'screenConstructor': GENERICWEBAPP.Screen3Controller,
            'transitionOut': function () {
                return 'Page3';
            },
            'transitionOnFailure': function () {
                return 'done';
            },
        }
 
    };

    builtFlow = new GENERICWEBAPP.SPARouter(argAccumulatedScreenData, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, argTranslate, argMessageDialog);

    return builtFlow;
};

