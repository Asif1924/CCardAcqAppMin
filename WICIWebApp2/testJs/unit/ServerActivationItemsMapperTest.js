describe("ServerActivationItemsMapperTest", function() {

	var sut;

	beforeEach(function() {
		sut = new WICI.ServerActivationItemsMapper();
	});	

	/*
                [activationItems.getModel('chooseProductModel').get('productCard'),
                 activationItems.getModel('personalData').get('firstName') ? activationItems.getModel('personalData').get('firstName') : "",
                 activationItems.getModel('personalData').get('initial') ? activationItems.getModel('personalData').get('initial') : "",
                 activationItems.getModel('personalData').get('lastName') ? activationItems.getModel('personalData').get('lastName') : "",
                 applicationResponse.accountNumber ? applicationResponse.accountNumber : "",
                 applicationResponse.expiryDate ? applicationResponse.expiryDate : "",
                 applicationResponse.creditLimit ? applicationResponse.creditLimit : "",
                 applicationResponse.apr ? applicationResponse.apr : "",
                 applicationResponse.cashAPR ? applicationResponse.cashAPR : "",
                 activationItems.getModel('signatureModel').get('userSingnature'),
                 applicationResponse.appStatus,
                 activationItems.getModel('chooseProductModel').get('province') ? activationItems.getModel('chooseProductModel').get('province') : "",
                 activationItems.getModel('personalData').get('correspondence') ? activationItems.getModel('personalData').get('correspondence') : "",
                 prepareCreditProtectorYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//creditProtectoryYesNo
                 prepareIdentityWatchYesNo(activationItems.getModel('OptionalProductsModel').get('insuranceCode'), activationItems.getModel('personalData').get('correspondence')),//identityWatchYesNo
                 activationItems.getModel('loginScreen').get('locationFieldID'),""]
	 */
	
	it("can map ActivationItems from Server to In-Memory ActivationItems", function() {
		var serverActivationItems = {"models":[{"model":"chooseProductModel","data":[{"name":"productCard","value":"OMC"},{"name":"province","value":"MB"}]},{"model":"personalData","data":[{"name":"firstName","value":"DEO"},{"name":"initial","value":""},{"name":"lastName","value":"GESINGHAUS"},{"name":"correspondence","value":"E"}]},{"model":"signatureModel","data":[{"name":"userSingnature","value":"/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q=="}]},{"model":"OptionalProductsModel","data":[{"name":"insuranceCode","value":"N"}]},{"model":"loginScreen","data":[{"name":"locationFieldID","value":"1"}]}]};
		
		var mappedActivationItems = sut.mapToActivationItems(serverActivationItems);
		
		//expect(serverActivationItems.models[]).toEqual("OMC");
		
		expect(mappedActivationItems.getModel('chooseProductModel')).not.toEqual(null);
		expect(mappedActivationItems.getModel('chooseProductModel').get('productCard')).toEqual("OMC");
		expect(mappedActivationItems.getModel('personalData').get('firstName')).toEqual("DEO");
		expect(mappedActivationItems.getModel('personalData').get('initial')).toEqual("");
		expect(mappedActivationItems.getModel('personalData').get('lastName')).toEqual("GESINGHAUS");
		
		expect(mappedActivationItems.getModel('signatureModel').get('userSingnature')).toEqual("/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAsALEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aioZLZJLiKdmlDw7toWVlU5GDuUHDe2QcdsVNQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABUcwmZAIJERs8l0LDH0BFSUUAVfL1D/AJ+rb/wHb/4ujy9Q/wCfq2/8B2/+Lq1RQBV8vUP+fq2/8B2/+Lo8vUP+fq2/8B2/+Lq1RQBV8vUP+fq2/wDAdv8A4ujy9Q/5+rb/AMB2/wDi6tUUAVfL1D/n6tv/AAHb/wCLo8vUP+fq2/8AAdv/AIurVFAFXy9Q/wCfq2/8B2/+Lo8vUP8An6tv/Adv/i6tUUAVfL1D/n6tv/Adv/i6PL1D/n6tv/Adv/i6tUUAVfL1D/n6tv8AwHb/AOLo8vUP+fq2/wDAdv8A4urVFAFXy9Q/5+rb/wAB2/8Ai6PL1D/n6tv/AAHb/wCLq1RQBV8vUP8An6tv/Adv/i6PL1D/AJ+rb/wHb/4urVFAEUKzqD58kbntsjK4/MmpaKKACiiigD//2Q==");
		expect(mappedActivationItems.getModel('chooseProductModel').get('province')).toEqual("MB");
		expect(mappedActivationItems.getModel('personalData').get('correspondence')).toEqual("E");
		expect(mappedActivationItems.getModel('OptionalProductsModel').get('insuranceCode')).toEqual("N");
		expect(mappedActivationItems.getModel('loginScreen').get('locationFieldID')).toEqual("1");
	});	

	
	
	
});