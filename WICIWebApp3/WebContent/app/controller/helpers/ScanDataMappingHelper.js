ensureNamespaceExists();

WICI.ScanDataMappingHelper = function (messageDialog, translate) {
    // Should be LOADED at the application level.
    // Something similar may already exist

    // JS Object based lookup map
    var genderLookupMap = {
        M : 'M',
        F : 'F',
        1 : 'M',
        2 : 'F'
    };

    var idTypeLookupMap = {
        DL : 'DR',
        ID : 'ID'
    };

    // JS Object based lookup map
    var provinceCodeLookupMap = {
        636012 : 'ON',
        636048 : 'MB',
        604426 : 'PE',
        636028 : 'BC',
        604428 : 'QC',
        636044 : 'SK',
        636017 : 'NB',
        636016 : 'NL',
        990876 : 'AB',
        999999 : 'NT',
        123456 : 'NU',
        604429 : 'YT',
        636013 : 'NS',
    };

    // http://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1418655
    // ['Postal Box number – The # symbol or the French equivalent no should not be used.
    // Punctuation should not be used either.']
    // Should not see half of these on DLs but will add some common sense ones anyway
    var poBoxSearchArray = [
        'PO BOX',
        'POBOX',
        'P.O. BOX',
        'P.O.BOX',
        'BOX'
    ];

    // http://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1418668
    // ['Rural route identifier – Should use the two-letter symbol RR followed by the route number
    // placed one space to the right.The # symbol or the French equivalent no should not be used.
    // Punctuation should not be used either.']
    // Should not see half of these on DLs but will add some common sense ones anyway
    var rrNumberSearchArray = [
        'RR',
        'RR#',
        'R.R'
    ];

    // http://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1382084
    var unitPostfixSearchArray = [
        'APARTMENT',
        'APT',
        'APPARTEMENT',
        'APP',
        'SUITE',
        'BUREAU',
        'UNIT',
        'UNITÉ',
        'UNITE'
    ];

    var exports = {};
    exports.parse = parse;
    exports.checkSupportedID = checkSupportedID;
    exports.parseNewDL = parseNewDL;
    return exports;

    // Lets go!!!!
    function parse(data) {
        var dataModel, personModel, arrLines, x;

        try {
            dataModel = returnBaseIDDataModel();
            //var headerModel = returnBaseHeaderModel();
            personModel = returnBasePersonModel();

            // HERE IS WHERE WE WOULD START WORKING WITH
            // RETURNED VALUE FROM pdf417 PhoneGap plugin
            // hopefully PDF417 plugin returns similar string value

            // **********************************************************
            // BEFORE We start Line Processing
            // Check entire string for supported format,
            // simply check for majority of interested fields for now.
            // Else Unsupported, this needs to be in ID Scan feature
            // **********************************************************

            // This will throw an exception...
            checkSupportedID(data, dataModel.validationArray);
            // If no exception above, continue on...
            // Could have returned TRUE and processed on that...

            // Split on newline (hopefully PDF417 plugin returns similar string value)
            arrLines = data.split('\n');

            for (x = 0; x < arrLines.length; x++) {
                // Match the line with the data model

                matchDataModels(arrLines[x], dataModel);
            }

            // now we should have fully populated models, both data and header
            // lets add the header to the main model we will work with
            //dataModel.headerModel = headerModel;

            // Mary the ID Data and Header Models to the Cleaner Person Model
            mergeModels(dataModel, personModel);

            finishPersonModel(personModel);
        } catch (e) {
            console.log('could not parse the scan data, got ' + e);
        }

        return personModel;
    }
    
    // US4451
    function parseNewDL(data) {
    	 var personNewDLModel;
    	 
         try {
             personNewDLModel = returnBasePersonModel();
             
             // HERE IS WHERE WE WOULD START WORKING WITH
             // RETURNED VALUE FROM pdf417 PhoneGap plugin
             // hopefully PDF417 plugin returns similar string value

             finishNewDLPersonModel(personNewDLModel, data);
         } catch (e) {
             console.log('could not parse the New DL scan data, got ' + e);
         }

         return personNewDLModel;
    }

    function returnBaseIDDataModel() {
        // Define the data Model
        // Will use object so that we can access via name (JS has no Associative Arrays)
        return {
            // Assume if it finds ALL these data elements CDN DL/ID
            // We will at least attempt parsing. try/catch
            validationArray : ['PDF417','ANSI','DAQ','DBA','DCS','DBB'],
            headerModel : {
                fields : [
                    // [value] will be added to all fields programatically during parsing
                    {
                        'name': 'idProvince',
                        'start': 0,
                        'end' : 6
                    },
                    {
                        'name': 'idAAMVAVersion',
                        'start': 6,
                        'end' : 2
                    },
                    {
                        'name': 'idType',
                        'start': 12,
                        'end' : 2
                    }
                ]
            },
            fields : [
                // [value] will be added to all fields programatically during parsing
                {
                    'name': 'ansi',
                    'searchkey': 'ANSI',
                },
                {
                    'name': 'idNumber',
                    'searchkey': 'DAQ'
                },
                {
                    'name': 'expiryDate',
                    'searchkey': 'DBA'
                },
                {
                    'name': 'lastName',
                    'searchkey': 'DCS'
                },
                {
                    'name': 'firstName',
                    'searchkey': 'DAC'
                },
                {
                    'name': 'middleName',
                    'searchkey': 'DAD'
                },
                {
                    'name': 'givenNames',
                    'searchkey': 'DCT'
                },
                {
                    'name': 'dateOfBirth',
                    'searchkey': 'DBB'
                },
                {
                    'name': 'gender',
                    'searchkey': 'DBC'
                },
                {
                    'name': 'addressLine1',
                    'searchkey': 'DAG'
                },
                {
                    'name': 'addressCity',
                    'searchkey': 'DAI'
                },
                {
                    'name': 'addressProvince',
                    'searchkey': 'DAJ'
                },
                {
                    'name': 'addressPostal',
                    'searchkey': 'DAK'
                },
                {
                    'name': 'doesNotExistTest',
                    'searchkey': 'XYZ'
                }
            ]
        };
    }

    // Programmer Friendly Model
    // Will also refine the details in finishPersonModel function
    // could sub-object things like address,but no real need right now
    function returnBasePersonModel() {
        // Define the data Model
        return {
            idProvince : '',
            idType : '',
            idNumber : '',
            idAAMVAVersion : '',
            expiryDate : '',
            firstName : '',
            middleName : '',
            middleName_Initial : '', // -- Will populate in parser for easier implementaion
            givenNames : '', // -- Will populate seperate properties, but will keep this as well
            lastName : '',
            dateOfBirth : '',
            gender : '',
            addressLine1 : '', // -- Including for future use
            addressLine1_Unit : '', // -- Will populate in parser for easier implementaion
            addressLine1_CivicStreetNumber : '', // -- Will populate in parser for easier implementaion
            addressLine1_StreetName : '', // -- Will populate in parser for easier implementaion
            addressCity : '',
            addressProvince : '',
            addressPostal : '',
            flagPOBoxFound : false,
            flagRRNumberFound : false
        };
    }

    function checkSupportedID(inp, arrVal) {
        var valItemsFound = 0,
            i;

        for (i = 0; i < arrVal.length; i++) {
            if (inp.indexOf(arrVal[i]) > -1) {
                valItemsFound++;
            }
        }
        
        return valItemsFound;

        // if found is not = to search array throw an exception.
        // Could have not thrown exception but this is easiest.
        // if (valItemsFound !== arrVal.length) {
        //     throw ('ERROR_UNSUPPORTEDIDFOUND, validationArray = ' + arrVal.toString());           //disabled this, however this can be mandatory
        // }
    }

    function matchDataModels(line, dModel) {
        var i, f, index, val;

        // Match the line against the entire model
        // Choosing to loop model second as there are less values
        for (i = 0; i < dModel.fields.length; i++) {
            f = dModel.fields[i];

            // I should limit to starting position for the search
            // AB seems to mess things up because DCS in on the header line...
            // Need more AB licenses to test this thoughly
            // The DOWNSIDE of this approach could be a BUG when a line has an
            // UPPERCASE format of one of our capital search keys
            // See returnBaseIDDataModel.fields.searchkeys
            // This should be very very rare
            index = line.indexOf(f.searchkey);
            if (index > -1) {
                // Found something in this line we  are interested in...
                // Get the value
                // add it to this fields model
                // Put everything in UPPERCASE
                val = line.substr(index + f.searchkey.length).trim().toUpperCase();
                // Add a [value] to our field (this is why folks love JS)
                f.value = val;

                // May as well check for the HEADER row while we are looping in here...
                if (f.name.toUpperCase() === 'ANSI') {
                    // This is the ANSI header..
                    // Process the header now...
                    matchHeaderModel(val, dModel.headerModel);
                }
            }
        }
    }

    function matchHeaderModel(value, hModel) {
        var i, f, val;

        for (i = 0; i < hModel.fields.length; i++) {
            f = hModel.fields[i];
            // Put everything in UPPERCASE
            val = value.substr(f.start, f.end).trim().toUpperCase();
            f.value = val;
        }
    }

    function mergeModels(dModel, pModel) {
        var i;

        // Parse the header fields
        for (i = 0; i < dModel.headerModel.fields.length; i++) {
            insertDataItemInPersonModel(dModel.headerModel.fields[i], pModel);
        }
        // Parse the data fields
        for (i = 0; i < dModel.fields.length; i++) {
            insertDataItemInPersonModel(dModel.fields[i], pModel);
        }
    }

    function insertDataItemInPersonModel(f, m) {
        var p;

        // f = current field
        // m = model (Person)
        if ((typeof f !== 'undefined') && (typeof f.value !== 'undefined')) {
            // Try and pull item value from the pModel (Person)
            p = m[f.name];
            if (typeof p !== 'undefined') {
                m[f.name] = f.value;
            }

            // TODO else ??
        }

        // TODO else ??
    }

    function finishPersonModel(pModel) {
        var arrGivenNames, tmpAdd1, location1, location2, i, foundPreUnit;

        // This function will finish ther person model
        // Expand Name sections
        // Set province code of ID instead of IIN
        // etc....

        // Clean the last name
        pModel.lastName = cleanFinalString(pModel.lastName);

        // Add a given name if not found
        if (pModel.givenNames === '') {
            // hope for fName, mName
            // If not, all is lost with names :-)
            pModel.givenNames = cleanFinalString(pModel.firstName + ' ' + pModel.middleName);
        }

        // Some provinces seem to put comma, some space, eg: Ontario
        // replace the comma's with a space for certainty
        if (pModel.givenNames !== '') {
            pModel.givenNames = cleanFinalString(pModel.givenNames.replace(',', ' '));
        }

        // If no firstName found, grab one from the given names
        if (pModel.firstName === '') {
            arrGivenNames = pModel.givenNames.split(' ');
            // We are only going to worry about the first 2 values
            pModel.firstName = cleanFinalString(arrGivenNames[0]);
            // Assume middlename was not present as well
            // But check to make sure one was split out on the above attempt
            if (arrGivenNames.length > 1) {
                pModel.middleName = cleanFinalString(arrGivenNames[1]);
            }
            else {
                pModel.middleName = '';
            }
        }
        if (pModel.middleName !== '') {
            pModel.middleName_Initial = cleanFinalString(pModel.middleName.substr(0, 1));
        }

        tmpAdd1 = pModel.addressLine1;
        location1 = -1;
        location2 = -1;

        // Address Finishing
        // Logic Reference: http://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp
        // Address Glossary: http://www.canadapost.ca/tools/pg/manual/PGaddress-e.asp#1417666

        // This is the tricky part
        // TODO Dive into hell!!!

        // Check for PO FIRST, wont need civic address parsing if found.
        // POBox Finishing
        for (i = 0; i < poBoxSearchArray.length; i++) {
            location1 = tmpAdd1.indexOf(poBoxSearchArray[i]);
            // Only if found at begining of line
            if (location1 === 0) {
                // Found PO BOX
                // Copy addressLine1 to for addressLine1_StreetName
                // for simplified WICI Purposes
                pModel.addressLine1_StreetName = cleanFinalString(pModel.addressLine1);
                pModel.flagPOBoxFound = true;
                break;
            }
        }
        location1 = -1;

        // Check for RR Second, wont need civic address parsing if found.
        // RR Finishing
        for (i = 0; i < rrNumberSearchArray.length; i++) {
            location1 = tmpAdd1.indexOf(rrNumberSearchArray[i]);
            // Only if found at begining of line
            if (location1 === 0) {
                // Found PO BOX
                // Copy addressLine1 to for addressLine1_StreetName
                // for simplified WICI Purposes
                pModel.addressLine1_StreetName = cleanFinalString(pModel.addressLine1);
                pModel.flagRRNumberFound = true;
                break;
            }
        }

        // Unit/Suite Finishing

        // Civic Address Finishing
        foundPreUnit = false;

        // ONLY if we never found a POBox or RR# above should we attempt the CIVIC Address parsing
        if ((pModel.flagPOBoxFound === false) && (pModel.flagRRNumberFound === false)) {
            // Look for Suite at the begining of the AddLine1
            // Should be before ANY spaces... just to be safe
            location1 = tmpAdd1.indexOf('-', 0);
            location2 = tmpAdd1.indexOf(' ', 0);
            if ((location1 > -1) && (location1 < location2)) {
                // FOUND, check to ensure that it is before the first space...
                // ASSUME it is Suite at the begining
                // Extract it into the pModel
                // Use slice over substring
                // http://www.bennadel.com/blog/2159-using-slice-substring-and-substr-in-javascript.htm
                // http://ariya.ofilabs.com/2014/02/javascript-string-substring-substr-slice.html
                pModel.addressLine1_Unit = cleanFinalString(tmpAdd1.slice(0, location1));

                // Remove that section from the tmpAdd1 string now...
                // Assume only adding 1 as we only looked for 1 char above
                tmpAdd1 = tmpAdd1.slice((location1 + 1));

                foundPreUnit = true;
            }
            // else, not a proper unit prefix, not sure what it is...

            // cursory check for unit on the end.
            if (foundPreUnit === false) {
                for (i = 0; i < unitPostfixSearchArray.length; i++) {
                    location1 = tmpAdd1.lastIndexOf(unitPostfixSearchArray[i]);
                    //
                    if (location1 > -1) {
                        // Found Trailing Unit
                        pModel.addressLine1_Unit = cleanFinalString(tmpAdd1.slice((location1 /*+ unitPostfixSearchArray[i].length*/)));

                        // Remove that UNIT section from the tmpAdd1 string now...
                        tmpAdd1 = tmpAdd1.slice(0, location1);
                        break;
                    }
                }
            }

            // Street/Civc Number Parsing, if a PreFix or PostFix suite was found it would be removed form tmpAdd1 by now
            location1 = tmpAdd1.indexOf(' ');

            if (location1 > -1) {
                // FOUND / Expected
                // Grab the item before the first space, ASSUME CivicStreetNumber
                pModel.addressLine1_CivicStreetNumber = cleanFinalString(tmpAdd1.slice(0, location1).trim());
                // Grab the section after the first space, put it in StreetName
                pModel.addressLine1_StreetName = cleanFinalString(tmpAdd1.slice((location1 + 1)));
            } else {
                // Not expected do not addtoCivicStreetNumber, just add everything to StreetName
                pModel.addressLine1_StreetName = cleanFinalString(tmpAdd1);
            }
        }

        // Now that all parsing is done with addressLine1,
        // DO NOT clean it up
        pModel.addressLine1 = cleanFinalString(pModel.addressLine1);

        // Remove spaces from postal code
        pModel.addressPostal = cleanFinalString(pModel.addressPostal.replace(' ', ''));

        // idProvince finishing - get desirted value from object map
        pModel.idProvince = provinceCodeLookupMap[pModel.idProvince];

        // Change ID Type from AAMVA Standard to WICI Standard
        pModel.idType = idTypeLookupMap[pModel.idType];

        // gender finishing - get desirted value from object map
        pModel.gender = genderLookupMap[pModel.gender];
        pModel.dateOfBirth = transformDate(pModel.dateOfBirth, '-');
        // US4365
        pModel.expiryDate = transformDate(pModel.expiryDate, '-');
    }
    // US4451
    function finishNewDLPersonModel(pModel, data) {
    	var sMethod = "finishNewDLPersonModel() : ";

        var arr = data.split("?");
        for (var i=0; i<1; i++) {
          var trackOne = arr[0];
          if(trackOne.substr(3,13).indexOf(["^"]) == -1) {
            trackOne = trackOne.substr(0,16) + "^" + trackOne.substr(16,trackOne.lastIndexOf(''));    
          }  
          var trackOneArr = trackOne.split("^");
          for (var j=0; j<1; j++) {
            var stateCity = trackOneArr[0];
            var province = stateCity.substr(1,2);
            var city = stateCity.substr(3,stateCity.lastIndexOf(''));
            //console.log("Province : " + province + "\n" + "City : " + city);
            
            var middleName = "";
            var names = trackOneArr[1];
            var arrNames = names.split("$");
            for(var l=0; l<1; l++) {
              var lastName = arrNames[0];
              var firstName = arrNames[1];
              if(arrNames[2] != undefined) {
                  middleName = arrNames[2];
              }
              if(lastName.substr(lastName.lastIndexOf('')-1, lastName.lastIndexOf('')).includes(",")) {
                lastName = lastName.substr(0, lastName.lastIndexOf('')-1);
              }
              //console.log("LastName : " + lastName + "\n" + "FirstName : " + firstName + "\n" + "MiddleName : " + middleName);
            }    
            
            var address = trackOneArr[2];            
            var arrAddress = address.split("$");
            var unitNumber = "";
            for(var l=0; l<1; l++) {
              var houseNumberandStreet = arrAddress[0];      
              var houseNumber = houseNumberandStreet.substr(0,houseNumberandStreet.indexOf(" "));
              var streetName = houseNumberandStreet.substr(houseNumberandStreet.indexOf(" ")+1, houseNumberandStreet.lastIndexOf(''));
              var cityStatePostalcode = arrAddress[1];
              var postalCode = cityStatePostalcode.substr(cityStatePostalcode.lastIndexOf('')-7,cityStatePostalcode.lastIndexOf(''));
              if(houseNumber.includes("/")) {
					var unitNumberArray =  houseNumber.split("/");
					unitNumber = unitNumberArray[0];
					houseNumber = unitNumberArray[1];
			  } else if(houseNumber.includes("-")) {
					var unitNumberArray =  houseNumber.split("-");
					unitNumber = unitNumberArray[0];
					houseNumber = unitNumberArray[1];
			  }
              //console.log("Unit Number : " + unitNumber + "\n" + "Street Number : " + houseNumber + "\n" + "Street Name : " + streetName + "\n" + "Postal Code : " + postalCode.replace(' ', ''));
            }   
          }
          
          var trackTwo = arr[1];  
          var trackTwoArr = trackTwo.split("=");
          for(k=0; k<1;k++) {
            var idNumber = trackTwoArr[0];
            var expiryDOB = trackTwoArr[1];
            if(idNumber.substr(0, 1).includes(";")) {
            	idNumber = idNumber.substr(1, idNumber.lastIndexOf(''));
            }
            var provinceCode = idNumber.substr(0,6);
            var idNumberVal = idNumber.substr(6, idNumber.lastIndexOf('')); 
            //console.log("ID Number : " + idNumberVal + "\n" + "Province Code : " + provinceCode);    
          }
          var year = new Date().getFullYear().toString().substr(0,2);            
          var expiryDate = year+expiryDOB.substr(0,4)+expiryDOB.substr(expiryDOB.lastIndexOf('')-2,expiryDOB.lastIndexOf(''));
          var DOB = expiryDOB.substr(4,12);
          //console.log("Expiry Date : " + expiryDate + "\n" + "DOB : " + DOB);
        }                       
        
        // Last name
        pModel.lastName = cleanFinalString(lastName);
        // First name
        pModel.firstName = cleanFinalString(firstName);
        // Middle name
        if (middleName != '') {
            pModel.middleName_Initial = cleanFinalString(middleName);
        }

        // Address Finishing
        // Logic Reference: https://en.wikipedia.org/wiki/Magnetic_stripe_card#cite_note-14 
        // Go through the United States and Canada driver's licenses section.  We would need to look at track1 and track2 data

        // Street Name
        pModel.addressLine1_StreetName = streetName;               
        // Unit/Suite
        if(unitNumber != '') {
        	pModel.addressLine1_Unit = cleanFinalString(unitNumber);
        }
        
        // Street Number
        pModel.addressLine1_CivicStreetNumber = cleanFinalString(houseNumber);            
        // Now that all parsing is done with addressLine1,
        pModel.addressLine1 = cleanFinalString(streetName);
        // Postal code
        pModel.addressPostal = cleanFinalString(postalCode.replace(' ', ''));
        // Province
        pModel.idProvince = provinceCodeLookupMap[provinceCode];
        pModel.addressProvince = province;
        // IdNumber
        pModel.idNumber = idNumberVal;        
        // City
        pModel.addressCity = city;

        // ID Type in WICI Standard
        pModel.idType = "DR";
        // Gender
        pModel.gender = "";
        // Date Of Birth
        pModel.dateOfBirth = transformDate(DOB, '-');
        // Expiry Date
        pModel.expiryDate = transformDate(expiryDate, '-');
        
    }

    // Function to clean a string
    // Can't decide if this should be a function or a new method on String using prototype.
    // http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/
    // Will sitck with what I understand....
    function cleanFinalString(s) {
        // http://stackoverflow.com/questions/4374822/javascript-regexp-remove-all-special-characters
        // http://www.asciitable.com/
        // Only allow a whitelist
        return s.replace(/[^\w\s\-\']/gi, '').trim();
    }

    function transformDate(date, separator) {
        //from YYYYMMDD to YYYY-MM-DD
        if (date) {
            return date.substring(0, 4) + separator + date.substring(4, 6) + separator + date.substring(6, 8);
        }

        return '';
    }
};
