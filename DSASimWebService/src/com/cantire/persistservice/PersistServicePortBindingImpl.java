package com.cantire.persistservice;

import java.math.BigInteger;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Timestamp;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

@javax.jws.WebService (endpointInterface="com.cantire.persistservice.PersistServiceDelegate", targetNamespace="http://persistservice.cantire.com/", serviceName="PersistService", portName="PersistService")
public class PersistServicePortBindingImpl
{
	String brbTransId = "";
	String ecommCustomerId = "";
	String email = "";
	String firstName = "";
	String lastName = "";
	String phone = "";
	String referenceNumber = "";
	String maskedPan = "";
	String expiryDate = "";
	String addressLine1 = "";
	String addressLine2 = "";
	String city = "";
	String province = ""; 
	String postalCode = "";
	String loyaltyProgram = "";
	String loyaltyNumber = "";
	CardResponseType cardResponseType;
	PreparedStatement ps;
	Connection con;
	
    public CardResponseType saveCustomerCardData(CardRequestType saveCardRequest) 
    {
    	cardResponseType = new CardResponseType();
    	try
	    {
	    	if (!(saveCardRequest == null))
	    	{
	    		//TRANSACTIONID VARCHAR2(128) 
	    		brbTransId = saveCardRequest.getBrbTransId();
	    		System.out.println("brbTransId is -> "+brbTransId);
	    		
	    		if (!(saveCardRequest.getCustomerInfo() == null))
	    		{
	    			//PROFILEID VARCHAR2(128) 
	    			ecommCustomerId = saveCardRequest.getCustomerInfo().getEcommCustomerId();
	    			System.out.println("ecommCustomerId is -> "+ecommCustomerId);
	    			
	    			if (!(saveCardRequest.getCustomerInfo().getEmail() == null))
	    			{
	    				//EMAIL VARCHAR2(60)
	    				email = saveCardRequest.getCustomerInfo().getEmail();
	    				System.out.println("email is -> "+email);
	    			}
	    			
	    			//FIRSTNAME VARCHAR2(40)	    			
	    			firstName = saveCardRequest.getCustomerInfo().getFirstName();
	    			System.out.println("firstName is -> "+firstName);
  
	    			//LASTNAME VARCHAR2(40)    				 
	    			lastName = saveCardRequest.getCustomerInfo().getLastName();
	    			System.out.println("lastName is -> "+lastName);
	    			
	    			//PHONENUMBER VARCHAR2(10)  
	    			if (!(saveCardRequest.getCustomerInfo().getPhone() == null))
	    			{
	    				phone = saveCardRequest.getCustomerInfo().getPhone();
	    				System.out.println("phone is -> "+phone);
	    			}
	    		}
	    		
	    		if (!(saveCardRequest.getCustomerInfo().getCardDetails() == null))
	    		{
	    			//REFERENCENUMBER VARCHAR2(30)
	    			referenceNumber = saveCardRequest.getCustomerInfo().getCardDetails().getReferenceNumber();
	    			System.out.println("referenceNumber is -> "+referenceNumber);
	    			
	    			//MASKEDPAN VARCHAR2(19)
					maskedPan = saveCardRequest.getCustomerInfo().getCardDetails().getMaskedPan();
					System.out.println("maskedPan is -> "+maskedPan);
					
					//EXPIRY DATE NUMBER(4)
					expiryDate = saveCardRequest.getCustomerInfo().getCardDetails().getExpiryDate();
					System.out.println("expiryDate is -> "+expiryDate);
	    		}
	    		
	    		if (!(saveCardRequest.getCustomerInfo().getAddressDetails() == null))
	    		{
	    			//ADDRESSLINE1 VARCHAR2(40)  
    				addressLine1 = saveCardRequest.getCustomerInfo().getAddressDetails().getAddressLine1();
    				System.out.println("addressLine1 is -> "+addressLine1);
    				
    				//ADDRESSLINE2 VARCHAR2(40)  
	    			if (!(saveCardRequest.getCustomerInfo().getAddressDetails().getAddressLine2() == null))
	    			{
	    				addressLine2 = saveCardRequest.getCustomerInfo().getAddressDetails().getAddressLine2();
	    				System.out.println("addressLine2 is -> "+addressLine2);
	    			}
					
	    			//CITY VARCHAR2(24)  
					city = saveCardRequest.getCustomerInfo().getAddressDetails().getCity();
					System.out.println("city is -> "+city);
					
					//PROVINCE VARCHAR2(3)   
					province = saveCardRequest.getCustomerInfo().getAddressDetails().getProvince();
					System.out.println("province is -> "+province);
					
					//POSTALCODE VARCHAR2(6)   
					postalCode = saveCardRequest.getCustomerInfo().getAddressDetails().getPostalCode();
					System.out.println("postalCode is -> "+postalCode);
	    		}
	    		
	    		if (!(saveCardRequest.getCustomerInfo().getLoyaltyDetails() == null))
	    		{
	    			
    				//LOYALTYPROGRAM VARCHAR2(128)
	    			if (!(saveCardRequest.getCustomerInfo().getLoyaltyDetails().getLoyaltyProgram() == null))
	    			{
	    				loyaltyProgram = saveCardRequest.getCustomerInfo().getLoyaltyDetails().getLoyaltyProgram();
	    				System.out.println("loyaltyProgram is -> "+loyaltyProgram);
	    			}

	    			//LOYALTYNUMBER VARCHAR2(16)       
	    			if (!(saveCardRequest.getCustomerInfo().getLoyaltyDetails().getLoyaltyNumber() == null))
	    			{
	    				loyaltyNumber = saveCardRequest.getCustomerInfo().getLoyaltyDetails().getLoyaltyNumber();
	    				System.out.println("loyaltyNumber is -> "+loyaltyNumber);
	    			}
	    		}
	    	}
	    	
	    	cardResponseType.setPassFail(PassFailType.P);
	    	cardResponseType.setStatusCode(new BigInteger("200"));
	    	cardResponseType.setErrorMessage("");
	    	
	    	addCustRespToDatabase();
	    	
	    }
    	catch (Exception e)
    	{
    		e.printStackTrace();
        	cardResponseType.setPassFail(PassFailType.F);
        	cardResponseType.setStatusCode(new BigInteger("999"));
        	if (cardResponseType.getErrorMessage().equals(""))
        	{
        		cardResponseType.setErrorMessage("Exception occurred while storing DSA Response Data");
        	}
    	}
    	
    	finally
    	{
    		try
    		{
	    		if (ps!=null)
	    		{
	    			ps.close();
	    		}
	    		if (con!=null)
	    		{
	    			con.close();
	    		}
    		}
    		catch (Exception e)
    		{
    			System.out.println("Exception occurred while closing the connection/prepared statement");
    		}
    	}
    	
    	return cardResponseType;
    }

    private void addCustRespToDatabase()
    {
    	try
    	{
    		System.out.println("Setting initial context");
	    	Context initContext = new InitialContext();
	    	System.out.println("Getting datasource jdbc/BRBDataSource from Initial context");
	    	DataSource ds = (DataSource)initContext.lookup("jdbc/BRBDataSource");
	    	System.out.println("Getting DB connection");
	    	con=ds.getConnection();
	    	System.out.println("DB connection successful");
	    	
	    	Timestamp current_ts = new Timestamp(System.currentTimeMillis());
	    	System.out.println("Current time is -> "+current_ts.toString());
	    	
	    	String INSERT_CUST_RESP_SQL = "INSERT INTO WEBIC_OWNER.CUST_NOTIFY_RESP (BRB_TRANSACTIONID, PROFILE_ID, " + 
	    			"EMAIL_ID,  FIRST_NAME, LAST_NAME, PHONE_NUMBER, REFERENCE_NUMBER, " + 
	    			"MASKEDPAN, EXPIRY_DATE, ADDRESSLINE1, ADDRESSLINE2, CITY, PROVINCE, " + 
	    			"POSTAL_CODE, LOYALTY_PROGRAM, LOYALTY_NUMBER, RESPONSE_TIME) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	    	
	    	ps = con.prepareStatement(INSERT_CUST_RESP_SQL);
	    	ps.setString(1, brbTransId);
	    	ps.setString(2, ecommCustomerId);
	    	ps.setString(3, email);
	    	ps.setString(4, firstName);
	    	ps.setString(5, lastName);
	    	ps.setString(6, phone);
	    	ps.setString(7, referenceNumber);
	    	ps.setString(8, maskedPan);
	    	ps.setString(9, expiryDate);
	    	ps.setString(10, addressLine1);
	    	ps.setString(11, addressLine2);
	    	ps.setString(12, city);
	    	ps.setString(13, province);
	    	ps.setString(14, postalCode);
	    	ps.setString(15, loyaltyProgram);
	    	ps.setString(16, loyaltyNumber);
	    	ps.setTimestamp(17, current_ts);
	    	
	    	ps.executeUpdate();
	    	con.commit();
    	}
    	catch (Exception e)
    	{
    		e.printStackTrace();
    		cardResponseType = new CardResponseType();
        	cardResponseType.setErrorMessage("Exception occurred while connecting to Database/inserting data into Database");
    	}
    }

}