ensureNamespaceExists();

WICI.ValidationDecorator = function(config) {
	var logPrefix = '[WICI.ValidationDecorator]::';
	var errCss = 'errorField';
	var valid = true;
	// ---------------------------------------------------------------
	this.clearErrArrtibute = function() {
		var sMethod = 'clearErrArrtibute() ';
		console.log(logPrefix + sMethod);

		$('.' + errCss).removeClass(errCss);
	};
	// ---------------------------------------------------------------
	this.applyErrAttribute = function(validationRez, skeepFocus) {
		var sMethod = 'applyErrAttribute() ';
		console.log(logPrefix + sMethod);

		if (!validationRez || validationRez.lenght <= 0) {
			return;
		}

		$.each(validationRez, function(index, item) {
			$(item.uiid).addClass(errCss);
		});

		try {
			if (validationRez.length > 0 && !skeepFocus) {
				this.focusControl(validationRez[0].uiid);
			}
		} catch (error) {
			console.log(logPrefix + 'ERORR!!! ' + error);
		}
	};
	// ---------------------------------------------------------------

	this.focusControl = function(controlId) {
		var sMethod = 'focusControl() ';
		console.log(logPrefix + sMethod);

		console.log(controlId + ' type: ' + $(controlId).prop('tagName'));

		$.mobile.silentScroll($(controlId).offset().top - 120);
		$(controlId).focus();

		if ($(controlId).prop('tagName') == 'SELECT') {
			$(controlId).trigger('click');
		}

	};

	// US4112
	// ---------------------------------------------------------------------------------------
	this.idNumberValidation = function(currModel, numberId) {
		var sMethod = 'idNumberValidation()';
		console.log(logPrefix + sMethod );
		
		var province = currModel.get('placeofissue');
		var idType = currModel.get('idtype');
		var lastName = currModel.get('lastName');
		var dateofBirth = currModel.get('birthDate');
	    var inputNumber = this.replaceAll($(numberId).val().toUpperCase(), '-', ''); 
	    inputNumber =  inputNumber.replace(/\s/g, '');
	    
	    valid = this.idLengthValidation(numberId, province, idType,dateofBirth);
		
		if (province === "MB" && idType === "DR" && lastName.length >= 5) {
			if(inputNumber.length >= 6){
			if ( ! (this.isAlpha(inputNumber.substring(0, 6)))) {
				this.applyNumberIdError(numberId);
			}
			}
			else{
				this.applyNumberIdError(numberId);
			}
		}
		if ( province === "NS"  && idType === "DR" && lastName.length < 5) {
			this.clearErrArrtibute();
			$(numberId).removeClass(errCss);
			valid = true;
			if( this.hasRepeatedLetters(inputNumber)){
				  this.applyNumberIdError(numberId);
				   return 
		    }
			if(inputNumber.length >=5 ){
				if(inputNumber.substring(0,5) === 'ABCDE' || inputNumber.substring(0,5) === '12345'){
					 this.applyNumberIdError(numberId);
					  return 
					 }
				}	
		   if(inputNumber.length >=2){
			if (!(this.isAlpha(inputNumber.substring(0, 2)))  ) {
				this.applyNumberIdError(numberId);
			   }
		     }
		   else{
			   this.applyNumberIdError(numberId);
			   return 
		      }
		}
		if ( province === "MB" && idType === "DR" && lastName.length < 5) {
			if (!(this.isAlpha(inputNumber.substring(0, 3)))) {
				this.applyNumberIdError(numberId);
			}
		}
	      return valid;
	 };

	// ---------------------------------------------------------------------------------------
	this.idLengthValidation = function(numberId, province, idType,dateofBirth) {
		var sMethod = 'idLengthValidation()';
		valid=true;
		console.log(logPrefix + sMethod);
		var idNumberRule = new WICI.IdNumberValidation();
		
		// US4112
		var idValue = this.replaceAll($(numberId).val().toUpperCase(), '-', '');
		idValue =  idValue.replace(/\s/g, '');
		
		if ( $.trim(idValue).length === 0 || this.hasRepeatedLetters(idValue) ) {
	    	this.applyNumberIdError(numberId);
	    	return;
	     } 
		if(idValue.length >=5 ){
		if( idValue.substring(0,5) === 'ABCDE' || idValue.substring(0,5) === '12345'){
			  this.applyNumberIdError(numberId);
			   return 
			 }
		}	
		
		var idTypesFilter = [];
		$.each(idNumberRule.data, function(index, item) {
			if (item.prov === province) {
				idTypesFilter = item.idTypes;
				for ( var i = 0; i < idTypesFilter.length; i++) {

					if (idTypesFilter[i] === idType) {
						if (!((item.regExp).test(idValue))) {
							app.validationDecorator.applyNumberIdError(numberId);
						    return 
                        }
						if(item.idPostion != null){
							var obj = item.idPostion;
						  for(var i=0; i<obj.length; i++){
						  if( ! (""+idValue.charAt(obj[i].firstChar) + idValue.charAt(obj[i].secondChar) === app.validationDecorator.dateofBirthParsing(dateofBirth , obj[i].datePostion))){ 
							  app.validationDecorator.applyNumberIdError(numberId);
						    return
						  }
						  }	
							
						}
						
					}
				}
			}
		});
		return valid;
	};
	// ---------------------------------------------------------------------------------------
	this.applyNumberIdError = function(numberId) {
		$(numberId).addClass(errCss);
		$(numberId).focus();
		valid = false;
		return	};
  // -------------------------------------------------
	this.isAlpha = function(toTest) {
		var reg = new RegExp("^[a-zA-Z]+$");
		return (reg.test(toTest));
	};
// ----------------------------------------
	this.dateofBirthParsing = function (dateString, dateSubstring)
	{
		
		var dateArray = [];
		dateArray = dateString.split("-");
		switch (dateSubstring) {
		case 'Y':
			text = dateArray[0].slice(-2);
			break;
		case 'M':
			text = dateArray[1];
			break;
		case 'D':
			text = dateArray[2];
			break;
		}
		return text;
	};
// ----------------------------------------
	this.replaceAll = function (value, find, replace)
	{
		return value.replace(new RegExp(find, 'g'), replace);
	};
	
	// ----------------------------------------
	this.hasRepeatedLetters = function hasRepeatedLetters(str) {
	    var patt = /^([A-Z0-9])\1+$/;
	    var result = patt.test(str);
	    return result;
	};


};