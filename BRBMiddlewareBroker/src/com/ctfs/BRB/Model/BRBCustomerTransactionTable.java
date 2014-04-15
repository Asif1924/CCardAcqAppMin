package com.ctfs.BRB.Model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.BRBPostalCodeAdapter;
import com.ctfs.BRB.Interfaces.ICustomertransaction;
import com.ctfs.BRB.persistservice.AddressDetailsType;
import com.ctfs.BRB.persistservice.CustomerInfoType;
import com.ctfs.BRB.persistservice.LoyaltyDetailsType;

public class BRBCustomerTransactionTable extends BRBBaseTable implements Serializable, ICustomertransaction
{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(BRBCustomerTransactionTable.class.getName());
	private Calendar calendar = Calendar.getInstance();
	protected CustomerInfoType customerData;
	protected String requestingSystem;
	private final boolean isAddressDataEnable;
	private final boolean isLoyaltyDataEnable;
	private static final String EMPTY_STRING = "";

	public BRBCustomerTransactionTable()
	{
		super();
		this.customerData = new CustomerInfoType();
		AddressDetailsType addressDetails = new AddressDetailsType();
		this.customerData.setAddressDetails(addressDetails);
		LoyaltyDetailsType loyaltyDetails = new LoyaltyDetailsType();
		this.customerData.setLoyaltyDetails(loyaltyDetails);
		isLoyaltyDataEnable = isLoyaltyDataPresent();
		isAddressDataEnable = isAddresDataPresent();

	}

	public BRBCustomerTransactionTable(CustomerInfoType customerData, String requestingSystem, String transactionId)
	{
		super(transactionId);
		setCustomerData(customerData);
		this.requestingSystem = requestingSystem;
		isLoyaltyDataEnable = isLoyaltyDataPresent();
		isAddressDataEnable = isAddresDataPresent();
	}

	public BRBCustomerTransactionTable(CustomerInfoType customerData, String requestingSystem)
	{
		super();
		setCustomerData(customerData);
		this.requestingSystem = requestingSystem;
		isLoyaltyDataEnable = isLoyaltyDataPresent();
		isAddressDataEnable = isAddresDataPresent();
	}

	public CustomerInfoType getCustomerData()
	{
		return customerData;
	}

	private boolean isAddresDataPresent()
	{
		return customerData.getAddressDetails() != null;
	}

	private boolean isLoyaltyDataPresent()
	{
		return customerData.getLoyaltyDetails() != null;
	}

	public void setCustomerData(CustomerInfoType customerData)
	{
		this.customerData = customerData;
		wrappPostalCode(customerData);
	}

	public Boolean isTableValid()
	{
		return (transactionId != null && !transactionId.isEmpty() && customerData != null && customerData.getEcommCustomerId() != null && !customerData.getEcommCustomerId().isEmpty());
	}

	@Override
	public String getEcommCustomerId()
	{
		return this.customerData.getEcommCustomerId();
	}

	@Override
	public String getEmail()
	{
		return this.customerData.getEmail();
	}

	@Override
	public String getFirstName()
	{
		return this.customerData.getFirstName();
	}

	@Override
	public String getLastName()
	{
		return this.customerData.getLastName();
	}

	@Override
	public String getPhone()
	{
		return this.customerData.getPhone();
	}

	@Override
	public String getAddressLine1()
	{
		if (isAddressDataEnable)
		{
			return this.customerData.getAddressDetails().getAddressLine1();
		}
		return EMPTY_STRING;
	}

	@Override
	public String getAddressLine2()
	{
		if (isAddressDataEnable)
		{
			return this.customerData.getAddressDetails().getAddressLine2();
		}
		return EMPTY_STRING;

	}

	@Override
	public String getCity()
	{
		if (isAddressDataEnable)
		{
			return this.customerData.getAddressDetails().getCity();
		}
		return EMPTY_STRING;

	}

	@Override
	public String getProvince()
	{
		if (isAddressDataEnable)
		{
			return this.customerData.getAddressDetails().getProvince();
		}
		return EMPTY_STRING;
		
	}

	@Override
	public String getPostalCode()
	{
		if (isAddressDataEnable)
		{
			return this.customerData.getAddressDetails().getPostalCode();
		}
		return EMPTY_STRING;
		
	}

	@Override
	public String getLoyaltyProgram()
	{
		if (isLoyaltyDataEnable)
		{
			return this.customerData.getLoyaltyDetails().getLoyaltyProgram();
		}
		return EMPTY_STRING;
	}

	@Override
	public String getLoyaltyNumber()
	{
		if (isLoyaltyDataEnable)
		{
			return this.customerData.getLoyaltyDetails().getLoyaltyNumber();
		}
		return EMPTY_STRING;

	}
	
	@Override
	public String getRequestingSystem()
	{
		return requestingSystem;
	}

	protected void wrappPostalCode(CustomerInfoType customerData)
	{
		String sMethod = "[wrappPostalCode] ";
		log.info(sMethod);

		try
		{
			customerData.getAddressDetails().setPostalCode(new BRBPostalCodeAdapter().adapt(customerData.getAddressDetails().getPostalCode()));
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ":Exception: " + ex.getMessage());
		}
	}

	@Override
	public Timestamp getTransactionDate()
	{
		return new Timestamp(calendar.getTimeInMillis());
	}

	@Override
	public void setEcommCustomerId(String customerId)
	{
		customerData.setEcommCustomerId(customerId);
	}

	@Override
	public void setEmail(String email)
	{
		customerData.setEmail(email);
	}

	@Override
	public void setFirstName(String firstName)
	{
		customerData.setFirstName(firstName);
	}

	@Override
	public void setLastName(String lastName)
	{
		customerData.setLastName(lastName);
	}

	@Override
	public void setPhone(String phoneNumber)
	{
		customerData.setPhone(phoneNumber);
	}

	@Override
	public void setAddressLine1(String addressLine1)
	{
		customerData.getAddressDetails().setAddressLine1(addressLine1);
	}

	@Override
	public void setAddressLine2(String addressLine2)
	{
		customerData.getAddressDetails().setAddressLine2(addressLine2);
	}

	@Override
	public void setCity(String city)
	{
		customerData.getAddressDetails().setCity(city);
	}

	@Override
	public void setProvince(String province)
	{
		customerData.getAddressDetails().setProvince(province);
	}

	@Override
	public void setPostalCode(String postalCode)
	{
		customerData.getAddressDetails().setPostalCode(postalCode);
	}

	@Override
	public void setLoyaltyProgram(String loyaltyProgram)
	{
		customerData.getLoyaltyDetails().setLoyaltyProgram(loyaltyProgram);
	}

	@Override
	public void setLoyaltyNumber(String loyaltyNumber)
	{
		customerData.getLoyaltyDetails().setLoyaltyNumber(loyaltyNumber);
	}
	
	@Override
	public void setRequestingSystem(String requestingSystem)
	{
		this.requestingSystem = requestingSystem;
	}
}