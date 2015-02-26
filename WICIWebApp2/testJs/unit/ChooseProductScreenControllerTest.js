describe("ChooseProductScreenController", function() {
	
	describe("Inner Model", function() {

		var chooseProductController = null;	
	    var chooseProductModel = null;

		beforeEach(function() {
			chooseProductController = new WICI.ChooseProductScreenController({getModel: sinon.stub().returns({ get:sinon.stub()}) });
			if (chooseProductController) {
				chooseProductModel = chooseProductController.innerModel;
			}
		});
		
	    it("will ensure correct can pass", function() {
    		chooseProductModel.set('productCard', 'OMC');
    		chooseProductModel.set('agencyProgram', 'other');
    		chooseProductModel.set('agencyPromoCode', '12345');
    		chooseProductModel.set('province', 'ON');

    		expect(_.isEmpty(chooseProductModel.validate())).toEqual(true);
	    });
	    
	    it("will ensure 'productCard' cannot be empty", function() {
    		chooseProductModel.set('productCard', '');
    		chooseProductModel.set('agencyProgram', 'other');
    		chooseProductModel.set('agencyPromoCode', '12345');
    		chooseProductModel.set('province', 'ON');

    		expect(_.isEmpty(chooseProductModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'agencyProgram' cannot be empty", function() {
    		chooseProductModel.set('productCard', 'OMC');
    		chooseProductModel.set('agencyProgram', '');
    		chooseProductModel.set('agencyPromoCode', '12345');
    		chooseProductModel.set('province', 'ON');

    		expect(_.isEmpty(chooseProductModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'agencyPromoCode' cannot be empty", function() {
    		chooseProductModel.set('productCard', 'OMC');
    		chooseProductModel.set('agencyProgram', 'other');
    		chooseProductModel.set('agencyPromoCode', '');
    		chooseProductModel.set('province', 'ON');

    		expect(_.isEmpty(chooseProductModel.validate())).toEqual(false);
	    });
	    
	    it("will ensure 'province' cannot be empty", function() {
    		chooseProductModel.set('productCard', 'OMC');
    		chooseProductModel.set('agencyProgram', 'other');
    		chooseProductModel.set('agencyPromoCode', 'S.O.');
    		chooseProductModel.set('province', '');

    		expect(_.isEmpty(chooseProductModel.validate())).toEqual(false);
	    });
	    
	   
	});
	
	
});