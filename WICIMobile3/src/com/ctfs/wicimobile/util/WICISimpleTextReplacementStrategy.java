package com.ctfs.wicimobile.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Locale;

public class WICISimpleTextReplacementStrategy implements ReplacementStrategy {
	private String _correspondenceLanguage;
    private Hashtable<String, String> _mappingTable;
    private FrenchForZPLAdapter _frenchForZPLAdapter = null;
    private static final String EMPTY_STRING = "";

	public WICISimpleTextReplacementStrategy(
			String correspondenceLanguage, 
			String firstName,
			String middleInitial, 
			String lastName, 
			String apr, 
			String cashAPR,
			String creditProtectorYesNo, 
			String completeOrLifeDisability,
			String cpProductTradmarkMD, // VZE-673
			String cpProductTradmarkCPCMC, // VZE-673
			String cpProductTradmarkCPLMC,  // VZE-673
			String aptNumber,
			String streetNumber,
			String streetName,
			String city,
			String province,
			String postalCode) {
		
		// Initialize MappingTable
		_mappingTable = new Hashtable<String, String>();

		if ((_correspondenceLanguage = correspondenceLanguage).equalsIgnoreCase("F")) {
			_frenchForZPLAdapter = new FrenchForZPLAdapter();
		}
		
        // TODO: Improve below logic
        if (middleInitial.isEmpty()) {
            middleInitial = lastName;
            lastName = " ";
        }
        _mappingTable.put("#[FirstName]", firstName);
        _mappingTable.put("#[MiddleInitial]", middleInitial);
        _mappingTable.put("#[LastName]", lastName);
        _mappingTable.put("#[Apr]", applyDecimalFormat(apr));
        _mappingTable.put("#[CashAPR]", applyDecimalFormat(cashAPR));
        _mappingTable.put("#[CouponNowDate]", getCouponNowDateTimeStamp());
        _mappingTable.put("#[CouponNextDate]", getCouponNextDateTimeStamp());
        _mappingTable.put("#[CouponNextTwoWeeksDate]", getCouponNextTwoWeeksDateTimeStamp());
        _mappingTable.put("#[CPYesNo]", creditProtectorYesNo);
        _mappingTable.put("#[AptNumber]", aptNumber);
        _mappingTable.put("#[StreetNum]", streetNumber);
        _mappingTable.put("#[StreetName]", streetName);
        _mappingTable.put("#[City]", city);
        _mappingTable.put("#[Province]", province);
        _mappingTable.put("#[PostalCode]", postalCode);
        _mappingTable.put("#[CPOffered]", completeOrLifeDisability);
        _mappingTable.put("#[CPMD]", cpProductTradmarkMD);
        _mappingTable.put("#[CPCMC]", cpProductTradmarkCPCMC);
        _mappingTable.put("#[CPLMC]", cpProductTradmarkCPLMC);
        
    }

    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()) {
            // Get all search patterns
            Enumeration<String> enumKeys = _mappingTable.keys();
            while (enumKeys.hasMoreElements()) {
                String key = enumKeys.nextElement();
                source = source.replace(key, _mappingTable.get(key));
            }
        }

        return source;
    }
    
    private Locale getCurrentLocale() {
    	Locale currentLocale = null;
    	if (_correspondenceLanguage != null) {
    		if (_correspondenceLanguage.equalsIgnoreCase("F")) {
    			currentLocale = Locale.CANADA_FRENCH;
    		} else if (_correspondenceLanguage.equalsIgnoreCase("E")) {
    			currentLocale = Locale.CANADA;
    		} else {
    			currentLocale = Locale.CANADA;
    		}
    	} else {
    		currentLocale = Locale.CANADA;
    	}
    	
    	return currentLocale;
    }
    
    private String applyDecimalFormat(String value) {
    	if (_correspondenceLanguage.equalsIgnoreCase("F")) {
   			value = value.replace('.', ',');
    	}
    	
    	return value;
    }

    private String getCouponNowDateTimeStamp() {
        try {
            String currentDate = new SimpleDateFormat("MMM dd, yyyy", getCurrentLocale()).format(Calendar.getInstance().getTime());
            currentDate = currentDate.substring(0, 1).toUpperCase(getCurrentLocale()) + currentDate.substring(1);
            
            if (_frenchForZPLAdapter != null) {
            	return _frenchForZPLAdapter.prepareForZPL(currentDate);
            } else {
            	return currentDate;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }

    private String getCouponNextDateTimeStamp() {
        try {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DAY_OF_YEAR, 1);

            String nextDate = new SimpleDateFormat("MMM dd, yyyy", getCurrentLocale()).format(calendar.getTime());
            nextDate = nextDate.substring(0, 1).toUpperCase(getCurrentLocale()) + nextDate.substring(1);

            if (_frenchForZPLAdapter != null) {
            	return _frenchForZPLAdapter.prepareForZPL(nextDate);
            } else {
            	return nextDate;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }

    private String getCouponNextTwoWeeksDateTimeStamp() {
        try {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DAY_OF_YEAR, 14);

            String nextDate = new SimpleDateFormat("MMM dd, yyyy", getCurrentLocale()).format(calendar.getTime());
            nextDate = nextDate.substring(0, 1).toUpperCase(getCurrentLocale()) + nextDate.substring(1);

            if (_frenchForZPLAdapter != null) {
            	return _frenchForZPLAdapter.prepareForZPL(nextDate);
            } else {
            	return nextDate;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }
}
