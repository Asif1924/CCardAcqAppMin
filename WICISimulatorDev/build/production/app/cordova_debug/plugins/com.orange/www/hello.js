cordova.define("com.orange.Hello", function(require, exports, module) { var hello = {
    createEvent: function(input, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Hello', // mapped to our native Java class called "CalendarPlugin"
            'addToastNative', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "input": input
            }]
        ); 
    }
}
module.exports = hello;
});
