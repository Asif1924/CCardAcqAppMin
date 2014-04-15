package com.ctfs.BRB.Helper;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Logger;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import com.ctc.ctfs.channel.webicidentityexamination.Address;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamRequest;
import com.google.gson.Gson;
import com.google.gson.JsonElement;

public class IdentityExamHelperRequestTypeConverter
{
	static Logger log = Logger.getLogger(IdentityExamHelperRequestTypeConverter.class.getName());
	static final String CHANNEL_NAME = "WEBIC";
	private String brbTransactionId;
	JsonElement requestElement = null;

	public String getBrbTransactionId()
	{
		return brbTransactionId;
	}

	public WebICIdentityExamRequest extractIdentityExamRequestParameters(BRBServletMediator requestMediator) throws Exception
	{
		String sMethod = "[extractIdentityExamRequestParameters()]";
		log.info(sMethod);

		WebICIdentityExamRequest populatedIdentityExamRequest = new com.ctc.ctfs.channel.webicidentityexamination.ObjectFactory().createWebICIdentityExamRequest();
		requestElement = requestMediator.getPostRequestBodyAsJson();
		// setDriverData(populatedIdentityExamRequest);
		setChannel(populatedIdentityExamRequest);
		setLanguage(populatedIdentityExamRequest);
		setAddres(populatedIdentityExamRequest);
		setDateOfBirth(populatedIdentityExamRequest);
		setFirstName(populatedIdentityExamRequest);
		setLastName(populatedIdentityExamRequest);
		setMiddleName(populatedIdentityExamRequest);
		setPhoneNumber(populatedIdentityExamRequest);
		setBrbTransactionId(requestMediator);

		try
		{
			String result = (new Gson()).toJson(populatedIdentityExamRequest);
			log.info(sMethod + " identityExamRequest populated with data: " + result);
		}
		catch (Exception e)
		{
		}

		return populatedIdentityExamRequest;
	}

	private void setBrbTransactionId(BRBServletMediator requestMediator)
	{
		brbTransactionId = requestMediator.getBrbTransactionId();
	}

	private void setLanguage(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		populatedIdentityExamRequest.setLanguage(extractParameterByName("language"));
	}

	private void setAddres(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		Address address = new Address();
		address.setAddressLine1(extractParameterByName("addressLine1"));

		address.setAddressLine2(extractParameterByName("addressLine2"));
		address.setAddressLine3(extractParameterByName("addressLine3"));

		address.setCity(extractParameterByName("city"));
		address.setPostalCode(extractParameterByName("postalCode"));
		address.setProvince(extractParameterByName("province"));
		populatedIdentityExamRequest.setAddress(address);
	}

	private void setDriverData(WebICIdentityExamRequest populatedIdentityExamRequest) throws DatatypeConfigurationException
	{
		String sMethod = "[setDriverData()]";
		populatedIdentityExamRequest.setDriversLicense("");
		try
		{
			populatedIdentityExamRequest.setDriversLicenseExpirationDate(DatatypeFactory.newInstance().newXMLGregorianCalendar());
		}
		catch (DatatypeConfigurationException e)
		{
			log.info(sMethod);
			throw e;
		}
	}

	private void setDateOfBirth(WebICIdentityExamRequest populatedIdentityExamRequest) throws Exception
	{
		try
		{
			XMLGregorianCalendar xgc;
			xgc = getGregorianDate(extractParameterByName("dateOfBirth"));
			populatedIdentityExamRequest.setDateOfBirth(xgc);
		}
		catch (Exception e)
		{
			log.warning("setDateOfBirth MODEL_SUP_CARD_REQUEST_DATA::birthDate Exception: " + e.getMessage());
			e.printStackTrace();
			throw e;
		}
	}

	private void setChannel(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		populatedIdentityExamRequest.setChannel(CHANNEL_NAME);
	}

	private void setFirstName(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		populatedIdentityExamRequest.setFirstName(extractParameterByName("firstName"));
	}

	private void setLastName(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		populatedIdentityExamRequest.setLastName(extractParameterByName("lastName"));
	}

	private void setMiddleName(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		String middleName = extractParameterByName("middleName");

		// Don't include middleName field to the SOAP request if this parameter is empty
		populatedIdentityExamRequest.setMiddleName(middleName != null && middleName.isEmpty() ? null : middleName);
	}

	private void setPhoneNumber(WebICIdentityExamRequest populatedIdentityExamRequest)
	{
		populatedIdentityExamRequest.setPhoneNumber(extractParameterByName("phoneNumber"));
	}

	public XMLGregorianCalendar getGregorianDate(String fieldName) throws ParseException, DatatypeConfigurationException
	{
		String argDateAsString = fieldName;

		SimpleDateFormat dateFormatter = new SimpleDateFormat("MM/dd/yyyy");
		dateFormatter.setLenient(false);
		Date simpleDate = dateFormatter.parse(argDateAsString);
		GregorianCalendar gregsCal = new GregorianCalendar();
		gregsCal.setTime(simpleDate);
		javax.xml.datatype.XMLGregorianCalendar xmlDateAccordingToPopeGregory = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}

	private String extractParameterByName(String name)
	{
		if (requestElement != null && requestElement.getAsJsonObject().has(name))
		{
			return requestElement.getAsJsonObject().get(name).getAsString();
		}
		else
		{
			return null;
		}
	}
}
