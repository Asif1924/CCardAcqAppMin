describe("BRB.PrintHelper", function() {
	var logPrefix = "[TEST::BRB.PrintHelperTest::] ";
	var helper;

	beforeEach(function() {
		helper = new BRB.PrintHelper();
		$('<div id="div1"><input id="overview_PromoCode_TextField" type="text"></input><div>Unit</div></div>').appendTo('body');
	});
	
	it(	"will ensure that PrintHelper will get checkBoxes state",function() {
		expect($('#div1').length).toEqual(1);
		var printSpy = sinon.spy(helper, 'getDataState');
		helper.print();
		expect(printSpy.callCount).toEqual(1);
	});
	
	it(	"will ensure that PrintHelper will create iFrame for printing page",function() {
		expect($('#div1').length).toEqual(1);
		var printSpy = sinon.spy(helper, 'createIframe');
		helper.print();
		expect(printSpy.callCount).toEqual(1);
		expect($('iframe').length).toEqual(1);
	});
	it(	"will ensure that PrintHelper will not create more then one iFrame",function() {
		expect($('#div1').length).toEqual(1);
		helper.print();
		expect($('iframe').length).toEqual(1);
		helper.print();
		expect($('iframe').length).toEqual(1);
		helper.print();
		expect($('iframe').length).toEqual(1);
		helper.print();
		expect($('iframe').length).toEqual(1);
	});
	
	it(	"will ensure that PrintHelper will create header for printing document",function() {
		expect($('#div1').length).toEqual(1);
		var printSpy = sinon.spy(helper, 'getHead');
		helper.print();
		expect(printSpy.callCount).toEqual(1);
	});

	it(	"will ensure that PrintHelper will create body for printing document",function() {
		expect($('#div1').length).toEqual(1);
		var printSpy = sinon.spy(helper, 'getBody');
		helper.print();
		expect(printSpy.callCount).toEqual(1);
	});
});
