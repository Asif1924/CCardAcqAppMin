ensureNamespaceExists();

GENERICWEBAPP.DynamicFlow = function( argScreenDefinitions, argAccumulatedScreenData, argTranslate, argMessageDialog) {
    var builtFlow = null;
    
    var rules = GENERICWEBAPP.ReusableFlowDefinitions;
    
    var screensDefinitions = argScreenDefinitions

    builtFlow = new GENERICWEBAPP.SPARouter(argAccumulatedScreenData, rules.defaultBackOut, screensDefinitions, rules.defaultFinish, rules.defaultFinish, argTranslate, argMessageDialog);

    return builtFlow;
};

