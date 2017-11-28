package com.ctfs.wicimobile.models;

import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;

public class WICIInstantIssuanceModel {
    private String _accountNumber;
	
	public WICIInstantIssuanceModel(){
        _accountNumber = "";
    }   
    
    public void initializeModel(JSONArray source) {
        try {
            _accountNumber = source.getString(0); 
            Log.i("WICIInstantIssuanceModel", "_accountNumber : " + _accountNumber );
                 
        } catch (JSONException e) {            
            e.printStackTrace();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
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
}
