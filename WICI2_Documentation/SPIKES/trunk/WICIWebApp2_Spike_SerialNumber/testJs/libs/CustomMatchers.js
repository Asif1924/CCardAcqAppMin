beforeEach(function() {
	this.addMatchers({

		toBeTypeOf: function(expected) {
			return this.actual.constructor === expected;
		},

		toContainElement: function(expectedContainedObject) {
			if (!$.isArray(this.actual))
				throw "toContainElement() called with object that is not an Array";

			var actualContainerArray = this.actual;
			var foundArray = $.grep(actualContainerArray, function(actualContainerObject, index) {
				return JSON.stringify(expectedContainedObject) === JSON.stringify(actualContainerObject);
			});
			return foundArray.length >= 1;
		}
	});
});