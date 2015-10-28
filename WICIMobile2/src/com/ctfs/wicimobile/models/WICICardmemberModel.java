package com.ctfs.wicimobile.models;

import org.json.JSONArray;
import org.json.JSONException;

import android.text.format.Time;
import android.util.Log;

import com.ctfs.wicimobile.enums.ServerResponseStatus;

public class WICICardmemberModel {
    private String _cardType; 
    private String _firstName; 
    private String _middleInitial;
    private String _lastName; 
    private String _accountNumber;
    private String _maskedPAN;
    private String _expiryDate;
    private String _creditLimit;
    private String _apr;
    private String _cashAPR;
    private String _signture;
    private ServerResponseStatus _responseStatus; 
    private String _province;
    private String _correspondenceLanguage;
    private String _creditProtectorYesNo;
	private String _identityWatchYesNo;

	private String _todayDate;
	private String _storeNumber;
	private String _employeeId;
	
	public WICICardmemberModel(){
        _cardType = "";
        _firstName = "";
        _middleInitial = "";
        _lastName = "";
        _accountNumber = "";
        _maskedPAN = "";
        _expiryDate = "";
        _creditLimit = "";
        _apr = "";
        _cashAPR = "";
        _signture = "";     
        _responseStatus = ServerResponseStatus.DECLINED;
        _province = "";
        _correspondenceLanguage = "";
        _creditProtectorYesNo = "N";
        _identityWatchYesNo = "N";
        
        _todayDate = "";
    	_storeNumber = "";
    	_employeeId = "";
    }   
    
    public void initializeModel(JSONArray source) {
        try {
            _cardType = source.getString(0);
            _firstName = source.getString(1);
            _middleInitial = source.getString(2);            
            _lastName = source.getString(3);            
            _accountNumber = source.getString(4); 
            _maskedPAN = source.getString(5);
            Log.i("WICICardmemberModel", "_accountNumber : " + _accountNumber );
            Log.i("WICICardmemberModel", "_maskedPAN : " + _maskedPAN );
            _expiryDate = source.getString(6);            
            _creditLimit = source.getString(7);
            _apr = source.getString(8);
            _cashAPR = source.getString(9);
            _signture = source.getString(10);
            _responseStatus = ServerResponseStatus.valueOf(source.getString(11));
            _province = source.getString(12);
            _correspondenceLanguage = source.getString(13);
            _creditProtectorYesNo = source.getString(14);
            _identityWatchYesNo = source.getString(15);
            _storeNumber = source.getString(16);
            _todayDate = source.getString(17);
            _employeeId = source.getString(18);
                 
        } catch (JSONException e) {            
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    /**
     * @return the _cardType
     */
    public String getCardType() {
        return _cardType;
    }
    /**
     * @param cardType the _cardType to set
     */
    public void setCardType(String cardType) {
        this._cardType = cardType;
    }
    /**
     * @return the _firstName
     */
    public String getFirstName() {
        return _firstName;
    }
    /**
     * @param firstName the _firstName to set
     */
    public void setFirstName(String firstName) {
        this._firstName = firstName;
    }
    /**
     * @return the _middleInitial
     */
    public String getMiddleInitial() {
        return _middleInitial;
    }
    /**
     * @param middleInitial the _middleInitial to set
     */
    public void setMiddleInitial(String middleInitial) {
        this._middleInitial = middleInitial;
    }
    /**
     * @return the _lastName
     */
    public String getLastName() {
        return _lastName;
    }
    /**
     * @param lastName the _lastName to set
     */
    public void setLastName(String lastName) {
        this._lastName = lastName;
    }
    /**
     * @return the _accountNumber
     */
    public String getAccountNumber() {
        return _accountNumber;
    }
    /**
     * @param accountNumber the _accountNumber to set
     */
    public void setAccountNumber(String accountNumber) {
        this._accountNumber = accountNumber;
    }
    // US3692
    /**
     * @return the _maskedPAN
     */
    public String getMaskedPAN() {
        return _maskedPAN;
    }
    /**
     * @param maskedPAN the _maskedPAN to set
     */
    public void setMaskedPAN(String maskedPAN) {
        this._maskedPAN = maskedPAN;
    }
    
    /**
     * @return the _expiryDate
     */
    public String getExpiryDate() {
        return _expiryDate;
    }
    /**
     * @param expiryDate the _expiryDate to set
     */
    public void setExpiryDate(String expiryDate) {
        this._expiryDate = expiryDate;
    }
    /**
     * @return the _creditLimit
     */
    public String getCreditLimit() {
        return _creditLimit;
    }
    /**
     * @param creditLimit the _creditLimit to set
     */
    public void setCreditLimit(String creditLimit) {
        this._creditLimit = creditLimit;
    }
    /**
     * @return the _apr
     */
    public String getApr() {
        return _apr;
    }
    /**
     * @param apr the _apr to set
     */
    public void setApr(String apr) {
        this._apr = apr;
    }
    /**
     * @return the _cashAPR
     */
    public String getCashAPR() {
        return _cashAPR;
    }
    /**
     * @param cashAPR the _cashAPR to set
     */
    public void setCashAPR(String cashAPR) {
        this._cashAPR = cashAPR;
    }
    /**
     * @return the _signture
     */
    public String getSignture() {
        return _signture;
    }
    /**
     * @param signture the _signture to set
     */
    public void setSignture(String signture) {
        this._signture = signture;
    }

    /**
     * @return the ResponseStatus
     */
    public ServerResponseStatus getResponseStatus() {
        return _responseStatus;
    }

    /**
     * @param responseStatus the _responseStatus to set
     */
    public void setResponseStatus(ServerResponseStatus responseStatus) {
        this._responseStatus = responseStatus;
    }
    /**
     * @return the _province
     */
    public String getProvince() {
    	return this._province;
    }
    /**
     * @param province the _province to set
     */   
    public void setProvince(String province) {
    	this._province = province;
    }
    /**
     * @return the _correspondenceLanguage
     */   
    public String getCorrespondenceLanguage() {
    	return this._correspondenceLanguage;
    }    
    /**
     * @param correspondenceLanguage the _correspondenceLanguage to set
     */ 
    public void setCorrespondenceLanguage(String correspondenceLanguage) {
    	this._correspondenceLanguage = correspondenceLanguage;
    }
    
    /**
     * @return Y if selected Credit Protector or 
     * 		   N if not selected
     */
    public String getCreditProtectorYesNo() {
		return _creditProtectorYesNo;
	}

	/**
	 * @param _creditProtectorYesNo
	 */
	public void setCreditProtectorYesNo(String _creditProtectorYesNo) {
		this._creditProtectorYesNo = _creditProtectorYesNo;
	}
	
    
    /**
     * @return Y if selected Identity Watch Classic or 
     * 		   N if not selected
     */
    public String getIdentityWatchYesNo() {
		return _identityWatchYesNo;
	}

	/**
	 * @param _identityWatchYesNo
	 */
	public void setIdentityWatchYesNo(String _identityWatchYesNo) {
		this._identityWatchYesNo = _identityWatchYesNo;
	}
	
	
	
	/**
     * @return the _todate 
     * US3159 Fix for INC0052924 WICI - Date Issued On Printouts Is Off By 1 Month
     */
    public String getTodayDate() {
    	
    	 
    	Time today = new Time(Time.getCurrentTimezone());
    	today.setToNow(); 
    	    	
    	return _todayDate.isEmpty() || _todayDate.equalsIgnoreCase("")? (today.month + 1)  + "/" + today.monthDay + "/" + today.year + " " + today.format("%k:%M") : _todayDate ;
	}

	/**
	 * @param _todayDate
	 */
	public void setTodayDate(String _todayDate) {
		this._todayDate = _todayDate;
	}
	 
	/**
     * @return the _storeNumber 
     */
    public String getStoreNumber() {
    	  return _storeNumber.isEmpty() || _storeNumber.equalsIgnoreCase("")? "Test" : _storeNumber ;
   }

	/**
	 * @param _storeNumber
	 */
	public void setStoreNumber(String _storeNumber) {
		this._storeNumber = _storeNumber;
	}  
	

	/**
     * @return the _employeeId 
     */
    public String getEmployeeId() {
    	  return _employeeId;
   }

	/**
	 * @param _employeeId
	 */
	public void setEmployeeId(String _employeeId) {
		this._employeeId = _employeeId;
	} 
}
