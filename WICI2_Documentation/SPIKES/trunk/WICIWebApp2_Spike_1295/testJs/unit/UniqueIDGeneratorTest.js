describe("UniqueIDGenerator Test", function() {

	var sut = null;
	var clock; 
	beforeEach(function() {
		sut = new WICI.UniqueIDGenerator();
	});	
	
	afterEach(function() {
		if (clock)
			clock.restore();
	});
	
	it(" will confirm that we can get a unique ID", function() {
		var time1 = new Date().getTime();			
		clock = sinon.useFakeTimers(time1);
		
		var id1 = sut.getUniqueID( "agent1" );

		var time2 = new Date().getTime();			
		clock = sinon.useFakeTimers(time2);

		var id2 = sut.getUniqueID( "agent1" );
		
		expect(id1 == id2).toEqual(false);
		expect(id1 === id2).toEqual(false);
	});	
	
	/*
	it(" will confirm that we will know what is the unique ID", function() {
		var time1 = new Date().getTime();			
		clock = sinon.useFakeTimers(time1);
		var id1 = sut.getUniqueID( "agent1" );
		
		var time2 = new Date().getTime();			
		clock = sinon.useFakeTimers(time2);

		var id2 = sut.getUniqueID( "agent1" );
		expect(id1).toEqual(id2);
	});	
	*/
	it(" will confirm that the time component of the unique ID is always unique", function() {
		var id1 = sut.getUniqueID( "agent1" );

		var time1 = new Date().getTime();			
		clock = sinon.useFakeTimers(time1);
		
		var id2 = sut.getUniqueID( "agent1" );

		var time2 = new Date().getTime();			
		clock = sinon.useFakeTimers(time2);
		
		expect(id1).not.toEqual(id2);
	});	

	it(" will confirm a unique ID contains the agentID whatever it is", function() {
		var id1 = sut.getUniqueID( "bond007" );
		
		expect(id1.indexOf("bond007")).not.toEqual(-1);
	});	

	it(" will confirm a unique ID contains the WICI prefix", function() {
		var id1 = sut.getUniqueID( "bond007" );
		
		expect(id1.indexOf("WICI")).not.toEqual(-1);
	});	

	it(" will confirm a unique ID starts with the WICI prefix", function() {
		var id1 = sut.getUniqueID( "bond007" );
		
		expect(id1.indexOf("WICI")).toEqual(0);
	});	

});