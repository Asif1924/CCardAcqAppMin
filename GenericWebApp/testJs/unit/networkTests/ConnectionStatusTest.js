describe("ConnectionStatus  Test", function() {

    var sut;

    beforeEach(function() {

        sut = new EASYFINANCIAL.ConnectionStatus();
    });

    it("ConnectionStatus will test healthy", function() {

        expect(sut.healthy()).toBe(true);
    });
});