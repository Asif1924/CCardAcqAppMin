package com.ctfs.BRB.Model;

import java.io.Serializable;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.BRBPostalCodeAdapter;
import com.ctfs.BRB.dblayer.CustomerTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.ICustomerTransactionTableEntity;
import com.ctfs.BRB.persistservice.CustomerInfoType;
import java.util.Calendar;
import java.sql.Timestamp;

public class BRBCustomerTransactionAdapter extends BRBBaseTable implements Serializable
{
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(BRBCustomerTransactionAdapter.class.getName());
		
	protected CustomerInfoType customerData;
	protected ICustomerTransactionTableEntity  customerTransactionTblEntity;
	private Calendar calendar = Calendar.getInstance();

	public BRBCustomerTransactionAdapter(CustomerInfoType customerData, String requestingSystem)
	{
		super();
		setCustomerData(customerData);
		customerTransactionTblEntity = new CustomerTransactionTableEntity();
		customerTransactionTblEntity.setRequestingSystem(requestingSystem);
		customerTransactionTblEntity.setTransactionId(transactionId);	
	}

	public CustomerInfoType getCustomerData()
	{
		return customerData;
	}
	
	public void setCustomerData(CustomerInfoType customerData)
	{
		this.customerData = customerData;
		wrapECommPostalCode(customerData);
		handleECommPhoneNumber(customerData);
		handleECommEMail(customerData);
		handleECommCity(customerData);
		handleECommGenericFields(customerData);
	}	
	
	public ICustomerTransactionTableEntity getCustomerTransactionTableEntity()
	{
		return customerTransactionTblEntity;
	}
	
	public ICustomerTransactionTableEntity ConvertCustomerInfoType () {
		String sMethod = "[ConvertCustomerInfoType] ";
		log.info(sMethod + "::Called.");
		
		if (customerData == null) {
			throw new IllegalArgumentException("Invalid 'customerData' parameter!");
		}
			
		// Adapt to internal db model
		customerTransactionTblEntity.setFirstName(customerData.getFirstName());
		customerTransactionTblEntity.setLastName(customerData.getLastName());
		customerTransactionTblEntity.setEmail(customerData.getEmail());		
		customerTransactionTblEntity.setPhone(customerData.getPhone());		
		customerTransactionTblEntity.setEcommCustomerId(customerData.getEcommCustomerId());		
		customerTransactionTblEntity.setTransactionDate(new Timestamp(calendar.getTimeInMillis()));
		
		if (customerData.getLoyaltyDetails() != null) {		
			customerTransactionTblEntity.setLoyaltyNumber(customerData.getLoyaltyDetails().getLoyaltyNumber());
			customerTransactionTblEntity.setLoyaltyProgram(customerData.getLoyaltyDetails().getLoyaltyProgram());
		}
		
		if(customerData.getAddressDetails() != null) {		
			customerTransactionTblEntity.setAddressLine1(customerData.getAddressDetails().getAddressLine1());
			customerTransactionTblEntity.setAddressLine2(customerData.getAddressDetails().getAddressLine2());
			customerTransactionTblEntity.setCity(customerData.getAddressDetails().getCity());
			customerTransactionTblEntity.setPostalCode(customerData.getAddressDetails().getPostalCode());
			customerTransactionTblEntity.setProvince(customerData.getAddressDetails().getProvince());
		}
		
		return customerTransactionTblEntity;
	}

	protected void handleECommGenericFields( CustomerInfoType customerData)
	{
		String sMethod = "[handleECommGenericFields] ";
		log.info(sMethod + "::Called.");
		if (customerData == null){
			log.warning(sMethod + "::Parameter 'customerData' is null.");
			
			return;
		}
		try
		{
			String cleansedFName 		= customerData.getFirstName();	
			String cleansedLName 		= customerData.getLastName();	
			String cleansedAddrLine1	= customerData.getAddressDetails().getAddressLine1();	
			String cleansedAddrLine2	= customerData.getAddressDetails().getAddressLine2();
						
			if(cleansedFName.length()>40)
				cleansedFName = cleansedFName.substring(0,40);
			if(cleansedLName.length()>40)
				cleansedLName = cleansedLName.substring(0,40);
			if(cleansedAddrLine1.length()>40)
				cleansedAddrLine1 = cleansedAddrLine1.substring(0,40);
			if(cleansedAddrLine2.length()>40)
				cleansedAddrLine2 = cleansedAddrLine2.substring(0,40);
			
			customerData.setFirstName(cleansedFName);
			customerData.setLastName(cleansedLName);
			customerData.getAddressDetails().setAddressLine1(cleansedAddrLine1);
			customerData.getAddressDetails().setAddressLine2(cleansedAddrLine2);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}	
	}
	
	protected void handleECommCity( CustomerInfoType customerData)
	{
		String sMethod = "[handleECommCity] ";
		log.info(sMethod + "::Called.");
		if (customerData == null){
			log.warning(sMethod + "::Parameter 'customerData' is null.");
			
			return;
		}
		try
		{
			String cleansedCity = customerData.getAddressDetails().getCity();	
			if(cleansedCity.length()>24)
				cleansedCity = cleansedCity.substring(0,24);
			customerData.getAddressDetails().setCity(cleansedCity);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}	
	}	
	
	protected void handleECommEMail( CustomerInfoType customerData)
	{
		String sMethod = "[handleECommEMail] ";
		log.info(sMethod + "::Called.");
		if (customerData == null){
			log.warning(sMethod + "::Parameter 'customerData' is null.");
			
			return;
		}
		try
		{
			String cleansedEmail = customerData.getEmail();	
			if(cleansedEmail.length()>60)
				cleansedEmail=cleansedEmail.substring(0,60);
			customerData.setEmail(cleansedEmail);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}	
	}
	
	protected void handleECommPhoneNumber( CustomerInfoType customerData)
	{
		String sMethod = "[handleECommPhoneNumber] ";
		log.info(sMethod + "::Called.");
		if (customerData == null){
			log.warning(sMethod + "::Parameter 'customerData' is null.");
			
			return;
		}
		try
		{
			String cleansedPhone = customerData.getPhone().replaceAll("[^0-9]","");	
			if(cleansedPhone.length()>10)
				cleansedPhone=cleansedPhone.substring(0,10);
			customerData.setPhone(cleansedPhone);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}	
	}
	
	protected void wrapECommPostalCode(CustomerInfoType customerData)
	{
		String sMethod = "[wrapECommPostalCode] ";
		log.info(sMethod + "::Called.");
		
		if (customerData == null){
			log.warning(sMethod + "::Parameter 'customerData' is null.");
			
			return;
		}

		try
		{
			customerData.getAddressDetails().setPostalCode(new BRBPostalCodeAdapter().adapt(customerData.getAddressDetails().getPostalCode()));
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}
	}
}