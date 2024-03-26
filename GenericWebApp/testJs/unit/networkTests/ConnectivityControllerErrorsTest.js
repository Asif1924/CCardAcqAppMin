describe("ConnectivityControllerErrors  Test", function() {
    var sut;

    beforeEach(function() {
        realDictionary_en = EASYFINANCIAL.dictionary_en;
        realDictionary_fr = EASYFINANCIAL.dictionary_fr;

        EASYFINANCIAL.dictionary_en = {
            language : "en"
        };
        EASYFINANCIAL.dictionary_fr = {
            language : "fr"
        };

        EASYFINANCIAL.AppConfig = {
            LanguageEnum: {english: "en", french: "fr"}
        }
    });

    it("ConnectivityControllerErrors will test hideLoadingScreenAndShowUnableToConnectError with 3 params", function() {
        sut = new EASYFINANCIAL.ConnectivityControllerErrors(false,{},false);
        sut.hideLoadingScreenAndShowUnableToConnectError();
        expect(sut).toBeDefined();
    });

    it("ConnectivityControllerErrors will test hideLoadingScreenAndShowUnableToConnectError with 2 params", function() {
        sut = new EASYFINANCIAL.ConnectivityControllerErrors(false,{});
        sut.hideLoadingScreenAndShowUnableToConnectError();
        expect(sut).toBeDefined();
    });

    it("ConnectivityControllerErrors will test hideLoadingScreenAndShowUnableToConnectError and hide loading screen", function() {
        sut = new EASYFINANCIAL.ConnectivityControllerErrors(false,{});
        sut.hideLoadingScreenAndShowUnableToConnectError(true);
        expect(sut).toBeDefined();
    });

});