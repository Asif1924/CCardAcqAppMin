package com.ctfs.wicimobile.models;

import org.json.JSONArray;
import org.json.JSONException;

import com.ctfs.wicimobile.enums.ServerResponseStatus;

public class WICICardmemberModel {
    private String _cardType; 
    private String _firstName; 
    private String _middleInitial;
    private String _lastName; 
    private String _accountNumber;    
    private String _expiryDate;
    private String _creditLimit;
    private String _apr;
    private String _cashAPR;
    private String _signture;
    private ServerResponseStatus _responseStatus; 
    private String _province;
    
    public WICICardmemberModel(){
        _cardType = "";
        _firstName = "";
        _middleInitial = "";
        _lastName = "";
        _accountNumber = "";
        _expiryDate = "";
        _creditLimit = "";
        _apr = "";
        _cashAPR = "";
        _signture = "";     
        _responseStatus = ServerResponseStatus.DECLINED;
        _province = "";
    }   
    
    public void initializeModel(JSONArray source, int shift) {
        try {
            _cardType = source.getString(shift);
            _firstName = source.getString(shift + 1);
            _middleInitial = source.getString(shift + 2);            
            _lastName = source.getString(shift + 3);            
            _accountNumber = source.getString(shift + 4);            
            _expiryDate = source.getString(shift + 5);            
            _creditLimit = source.getString(shift + 6);
            _apr = source.getString(shift + 7);
            _cashAPR = source.getString(shift + 8);
            _signture = source.getString(shift + 9);
            _responseStatus = ServerResponseStatus.valueOf(source.getString(shift + 10));
            _province = source.getString(shift + 11);
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
     * @param ResponseStatus the _responseStatus to set
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

}
