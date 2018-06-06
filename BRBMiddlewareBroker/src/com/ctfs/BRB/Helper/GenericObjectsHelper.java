package com.ctfs.BRB.Helper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringBufferInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Logger;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.ws.Holder;

import com.channel.ctfs.ctc.webicgateway.MessageHeader;
import com.channel.ctfs.ctc.webicgateway.MessageHeaderType;
import com.channel.ctfs.ctc.webicgateway.ResponseBody;
import com.channel.ctfs.ctc.webicgateway.ResponseBodyType;
import com.channel.ctfs.ctc.webicgateway.ResponseModeType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.accountacquisition.AccountApplicationResponseType;
import com.ctc.ctfs.channel.accountacquisition.PlaceOfIssueType;
import com.ctc.ctfs.channel.accountacquisition.ProvinceType;
import com.ctc.ctfs.channel.webicidentityexamination.Answer;
import com.ctc.ctfs.channel.webicidentityexamination.Question;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamRequest;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamResponse;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationResponse;
import com.ctfs.BRB.Model.BaseModel;
import com.ctfs.BRB.Model.CreditCardApplicationData;
import com.ctfs.BRB.Model.MessageType;
import com.ctfs.BRB.Model.Response;
import com.ctfs.BRB.Model.WebIcMQRespVO;
import com.google.gson.Gson;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.xml.DomDriver;

public class GenericObjectsHelper
{

	static Logger log = Logger.getLogger(GenericObjectsHelper.class.getName());

	public String convertObjectToJSON(Object argObject)
	{
		String sMethod = "[convertObjectToJSON]";
		log.info(sMethod);

		Gson libraryJSONHelper = new Gson();
		String json = libraryJSONHelper.toJson(argObject);
		return json;
	}

	public Holder<MessageHeader> createMessageHeader(MessageType messageType, String correlationId)
	{
		String sMethod = "[CreateMessageHeader] ";
		log.info(sMethod + "::MessageType::" + messageType.name());
		log.info(sMethod + "::Message CorrelationId::" + correlationId);

		Holder<MessageHeader> messageHolder = new Holder<MessageHeader>();

		MessageHeader messageHeader = new MessageHeader();
		MessageHeaderType messageHeaderType = new MessageHeaderType();
		messageHeaderType.setMessageId("1");
		messageHeaderType.setMessageType(messageType.name());
		messageHeaderType.setSecureContentFlag(true);
		messageHeaderType.setResponseMode(ResponseModeType.SYNCHRONOUS);
		messageHeaderType.setCorrelationId(correlationId);
		messageHeader.setMessageHeader(messageHeaderType);

		messageHolder.value = messageHeader;
		
		return messageHolder;
	}

	public String formatLoginResponseForTablet(String argMessage, Object argStatusCode)
	{
		String sMethod = "[formatLoginOutputForTablet]";
		log.info(sMethod);

		Response appResponse = new Response();
		String tabletResponse = "{}";

		appResponse.setError(false);
		appResponse.setMsg(argMessage);
		appResponse.setData(argStatusCode);

		Gson gson = new Gson();
		tabletResponse = gson.toJson(appResponse, Response.class);

		return tabletResponse;
	}

	public String formatOutputForTablet(ResponseBody responseBody, Exception requestException)
	{
		String sMethod = "[formatOutputForTablet]";
		log.info(sMethod);

		ResponseBodyType rawResponseBody = responseBody.getResponseBody();
		String tabletResponse = "{}";

		Response appResponse = new Response();

		if (requestException != null)
		{
			appResponse.setError(true);
			appResponse.setMsg(requestException.getMessage());
		}
		else if (rawResponseBody != null)
		{
			String resultDocument = responseBody.getResponseBody().getResultDocument();

			if (resultDocument != null)
			{
				System.out.println(resultDocument + "       " + responseBody.getClass());

				try
				{
					GenericObjectsHelper conversionHelper = new GenericObjectsHelper();
					AccountApplicationResponseType respObj = conversionHelper.deserializeXMLToAccountApplicationResponseObject(resultDocument);

					appResponse.setData(respObj);
				}
				catch (Exception e)
				{
					e.printStackTrace();
					appResponse.setError(true);
					appResponse.setMsg(e.getMessage());
				}
			}
		}
		else
		{
			appResponse.setError(true);
			appResponse.setMsg("Unknown error!");
		}

		Gson gson = new Gson();
		tabletResponse = gson.toJson(appResponse, Response.class);

		log.info(sMethod + "Response: " + tabletResponse);

		return tabletResponse;
	}

	public WebICCheckLocationResponse deserializeXMLToWebICCheckLocationResponseObject(String xmlStr)
	{
		String sMethod = "[deserializeXMLToWebICCheckLocationResponseObject]";
		log.info(sMethod);
		WebICCheckLocationResponse result = null;

		log.info("xmlStr = \n" + xmlStr);
		XStream xstream = new XStream(new DomDriver());
		xstream.alias("WebICCheckLocationResponse", WebICCheckLocationResponse.class);

		try
		{
			result = (WebICCheckLocationResponse) xstream.fromXML(xmlStr);
		}
		catch (Exception e)
		{
			log.warning(sMethod + " Exception: " + e.getMessage());

			xmlStr = xmlStr.replaceFirst("<message>(.*)</message>", "<message>SUCCESS</message>");
			result = (WebICCheckLocationResponse) xstream.fromXML(xmlStr);
		}
		return result;
	}

	public AccountApplicationResponseType deserializeXMLToAccountApplicationResponseObject(String xmlStr)
	{
		String sMethod = "[deserializeXMLToAccountApplicationResponseObject] ";
		log.info(sMethod);

		//log.info(sMethod + "xmlStr:\n" + xmlStr);

		xmlStr = xmlStr.replace("tns:", "");

		AccountApplicationResponseType deserializedAccountApplicationResponseObject = new AccountApplicationResponseType();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("AccountApplicationResponse", AccountApplicationResponseType.class);

		xmlStr = xmlStr.replaceAll("cashApr>", "cashAPR>");

		deserializedAccountApplicationResponseObject = (AccountApplicationResponseType) xstream.fromXML(xmlStr);
		return deserializedAccountApplicationResponseObject;
	}
	
	public WebIcMQRespVO deserializeXMLToAccountApplicationResponseObjectforSS(String xmlStr)
	{
		String sMethod = this.getClass().getName() + "[deserializeXMLToAccountApplicationResponseObject] ";
		log.info(sMethod);

		xmlStr = xmlStr.replace("tns:", "");
		WebIcMQRespVO deserializedAccountApplicationResponseObject = new WebIcMQRespVO();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebIcMQRespVO", WebIcMQRespVO.class);
		xmlStr = xmlStr.replaceAll("cashApr>", "cashAPR>");
		deserializedAccountApplicationResponseObject = (WebIcMQRespVO) xstream.fromXML(xmlStr);

		return deserializedAccountApplicationResponseObject;
	}

	public String accountApplicationSerialize(Object obj) throws Exception
	{
		String sMethod = "[accountApplicationSerialize]";
		log.info(sMethod + "obj = \n" + obj.toString());

		String accountApplicationReturnValue = "";
		com.thoughtworks.xstream.XStream accountApplicationParser = new com.thoughtworks.xstream.XStream();
		DateConverter dateConverter = new DateConverter();
		dateConverter.setFormatter(new SimpleDateFormat("yyyy-MM-dd"));
		accountApplicationParser.registerConverter(dateConverter);
		accountApplicationParser.alias("dateOfBirth", String.class);

		Map accountApplicationList = new HashMap();
		accountApplicationList.put("AccountApplicationRequest", AccountApplicationRequestType.class);
		Iterator accountApplicationPairs = accountApplicationList.entrySet().iterator();
		log.info(sMethod + "Pairs:\n" + accountApplicationPairs);
		while (accountApplicationPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) accountApplicationPairs.next();
			String thisKey = (String) entry.getKey();
			Class thisValue = (Class) entry.getValue();
			accountApplicationParser.alias(thisKey, thisValue);
		}
		accountApplicationReturnValue = accountApplicationParser.toXML(obj);

		accountApplicationReturnValue = accountApplicationReturnValue.replace("org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("class=\"\"", "");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("tuSessionID", "TUSessionID");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("tuExamResult", "TUExamResult");
		accountApplicationReturnValue = accountApplicationReturnValue.replace("<dateOfBirth >", "<dateOfBirth>");

		// remove fake email for MOA flow - US3627 
		// accountApplicationReturnValue = accountApplicationReturnValue.replace("frommoa@ctfs.com", "");
				
		log.info(sMethod + "accountApplicationReturnValue:" + accountApplicationReturnValue);
		return accountApplicationReturnValue;
	}

	public String identityExamSerialize(Object obj) throws Exception
	{
		String sMethod = "[identityExamSerialize] ";
		log.info(sMethod);

		String identityExamSerializedValue = "";
		com.thoughtworks.xstream.XStream identityExamParser = new com.thoughtworks.xstream.XStream();
		identityExamParser.registerConverter(new DateConverter());
		// identityExamParser.alias("dateOfBirth",String.class);
		identityExamParser.aliasType("dateOfBirth", XMLGregorianCalendar.class);
		identityExamParser.aliasType("driversLicenseExpirationDate", XMLGregorianCalendar.class);

		Map identityExamList = new HashMap();
		identityExamList.put("WebICIdentityExamRequest", WebICIdentityExamRequest.class);
		Iterator identityExamPairs = identityExamList.entrySet().iterator();
		while (identityExamPairs.hasNext())
		{
			Map.Entry entry = (Map.Entry) identityExamPairs.next();
			identityExamParser.alias((String) entry.getKey(), (Class) entry.getValue());
		}
		identityExamSerializedValue = identityExamParser.toXML(obj);

		if (!identityExamSerializedValue.contains("<driversLicenseExpirationDate>"))
		{
			identityExamSerializedValue = identityExamSerializedValue.replace("</driversLicense>", "</driversLicense>\n  <driversLicenseExpirationDate></driversLicenseExpirationDate>");
		}
		// identityExamSerializedValue =
		// identityExamSerializedValue.replace("<language>en</language>", "");
		// identityExamSerializedValue =
		// identityExamSerializedValue.replace("org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl",
		// "");
		identityExamSerializedValue = identityExamSerializedValue.replace("class=\"\"", "");
		// identityExamSerializedValue =
		// identityExamSerializedValue.replace("<dateOfBirth >",
		// "<dateOfBirth>");

		log.info(sMethod + "identityExam Request XML: \n" + identityExamSerializedValue);

		return identityExamSerializedValue;
	}

	public WebICIdentityExamResponse deserializeXMLToWebICIdentityExamResponseObject(String xmlStr)
	{
		String sMethod = "[deserializeXMLToWebICIdentityExamResponseObject] ";
		log.info(sMethod);

		log.info(sMethod + "xmlStr:\n" + xmlStr);

		WebICIdentityExamResponse deserializedWebICIdentityExamResponseObject = new WebICIdentityExamResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICIdentityExamResponse", WebICIdentityExamResponse.class);
		xstream.aliasType("question", Question.class);
		xstream.aliasType("answer", Answer.class);
		deserializedWebICIdentityExamResponseObject = (WebICIdentityExamResponse) xstream.fromXML(xmlStr);
		return deserializedWebICIdentityExamResponseObject;
	}
	
	public WebICIdentityExamResponse deserializeXMLToWebICIdentityExamResponseforSSObject(String xmlStr)
	{
		String sMethod = "[deserializeXMLToWebICIdentityExamResponseforSSObject] ";
		log.info(sMethod);

		log.info(sMethod + "xmlStr:\n" + xmlStr);

		WebICIdentityExamResponse deserializedWebICIdentityExamResponseObject = new WebICIdentityExamResponse();
		XStream xstream = new XStream(new DomDriver());

		xstream.alias("WebICIdentityExamResponse", WebICIdentityExamResponse.class);
		xstream.aliasType("com.ctfs.webic.ioclasses.WebICQuestionBO", Question.class);
		xstream.aliasType("com.ctfs.webic.ioclasses.WebICAnswerBO", Answer.class);
		deserializedWebICIdentityExamResponseObject = (WebICIdentityExamResponse) xstream.fromXML(xmlStr);
		return deserializedWebICIdentityExamResponseObject;
	}

	public XMLGregorianCalendar getXMLGregorianCalendarDateFromString(String argDateAsString) throws ParseException, DatatypeConfigurationException
	{
		String sMethod = "[getXMLGregorianCalendarDateFromString]";
		log.info(sMethod);

		log.info("argDateAsString = \n" + argDateAsString);

		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date simpleDate = dateFormatter.parse(argDateAsString);
		GregorianCalendar gregsCal = new GregorianCalendar();
		gregsCal.setTime(simpleDate);
		javax.xml.datatype.XMLGregorianCalendar xmlDateAccordingToPopeGregory = DatatypeFactory.newInstance().newXMLGregorianCalendar(gregsCal);
		return xmlDateAccordingToPopeGregory;
	}

	public String getAccountApplicationMockDataWithRealRequestValues(CreditCardApplicationData argCardData)
	{
		String sMethod = "[getAccountApplicationMockDataWithRealRequestValues]";
		log.info(sMethod);

		log.info("argCardData = \n" + argCardData.toString());

		String rqstBodyString = new String("");
		rqstBodyString += "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n";
		rqstBodyString += "&lt;tns:AccountApplicationRequest xmlns:tns=\"http://www.channel.ctfs.ctc.com/accountAcquisition/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"&gt;\n";

		rqstBodyString += "&lt;tns:externalReferenceId&gt;" + "3788B296-68EE-4242-B12A-F1B37EA64DA2" + "&lt;/tns:externalReferenceId&gt;\n";

		BaseModel loginModel = argCardData.getModel("loginScreen");
		String storeNumber = "";
		String agentId = "";
		String acquisitionStrategyCode = "";
		if (loginModel != null)
		{
			storeNumber = "" + loginModel.getInt("locationID");
			agentId = "" + loginModel.get("agentID");
			acquisitionStrategyCode = loginModel.get("agentID").substring(0, 1);
		}
		acquisitionStrategyCode = "0" + acquisitionStrategyCode + "5577";
		rqstBodyString += "&lt;tns:storeNumber&gt;" + storeNumber + "&lt;/tns:storeNumber&gt;\n";
		rqstBodyString += "&lt;tns:agentId&gt;" + agentId + "&lt;/tns:agentId&gt;\n";
		rqstBodyString += "&lt;tns:acquistionStrategyCode&gt;" + acquisitionStrategyCode + "&lt;/tns:acquistionStrategyCode&gt;\n";
		rqstBodyString += "&lt;tns:channelIndicator&gt;" + "IP" + "&lt;/tns:channelIndicator&gt;\n";

		BaseModel chooseProductModel = argCardData.getModel("chooseProductModel");
		String reqProdType = "";
		String agencyPromoCode = "";
		if (chooseProductModel != null)
		{
			reqProdType = chooseProductModel.get("productCard");
			agencyPromoCode = chooseProductModel.get("agencyPromoCode");
		}
		rqstBodyString += "&lt;tns:requestedProductType&gt;" + reqProdType + "&lt;/tns:requestedProductType&gt;\n";
		rqstBodyString += "&lt;tns:agencyPromoCode&gt;" + agencyPromoCode + "&lt;/tns:agencyPromoCode&gt;\n";

		BaseModel personalDataModel = argCardData.getModel("personalData");
		String pd1FirstName = "";
		String pd1MidInit = "";
		String pd1LastName = "";
		String pd1BirthDate = "";	
		String pd1Correspondence = "";
		String pd1Gender = "";
		String currTelNo = "";
		String currCellNo = "";
		String currEmail = "";
		if (personalDataModel != null)
		{
			pd1FirstName = personalDataModel.get("firstName");
			pd1MidInit = personalDataModel.get("initial");
			pd1LastName = personalDataModel.get("lastName");

			try
			{
				XMLGregorianCalendar xgc;
				xgc = personalDataModel.getGregorianDate("birthDate");
				pd1BirthDate = getDateAsStringFromXMLGregorianCalendarDateObject(xgc);
			}
			catch (Exception e)
			{
				e.printStackTrace();
			}			
			
			pd1Correspondence = personalDataModel.get("correspondence");

			pd1Gender = "M";
			if (!personalDataModel.get("title").equals("MR"))
			{
				pd1Gender = "F";
			}

			currTelNo = personalDataModel.get("homePhone");
			currCellNo = personalDataModel.get("cellPhone");
			currEmail = personalDataModel.get("email");
		}

		rqstBodyString += "&lt;tns:firstName&gt;" + pd1FirstName + "&lt;/tns:firstName&gt;\n";
		rqstBodyString += "&lt;tns:lastName&gt;" + pd1LastName + "&lt;/tns:lastName&gt;\n";

		rqstBodyString += "&lt;tns:dateOfBirth&gt;" + pd1BirthDate + "&lt;/tns:dateOfBirth&gt;";
		
		rqstBodyString += "&lt;tns:preferedLanguage&gt;" + pd1Correspondence + "&lt;/tns:preferedLanguage&gt;\n";

		rqstBodyString += "&lt;tns:applicantGender&gt;" + pd1Gender + "&lt;/tns:applicantGender&gt;\n";

		rqstBodyString += "&lt;tns:currentTelephoneNumber&gt;" + currTelNo + "&lt;/tns:currentTelephoneNumber&gt;\n";
		rqstBodyString += "&lt;tns:currentEmailAddress&gt;" + currEmail + "&lt;/tns:currentEmailAddress&gt;\n";

		BaseModel personalData2Model = argCardData.getModel("personalData2_Address");
		String currAddType = "";
		String currAddLine1 = "";
		String currAddLine2 = "";
		String currCity = "";
		String currProv = "";
		String currPCode = "";
		String yearsCurrAddy = "";
		String monthsCurrAddy = "";
		String monthlyHousePayment = "";
		if (personalDataModel != null)
		{
			currAddType = personalData2Model.get("house");
			currAddLine1 = personalData2Model.get("streetnumber") + " " + personalData2Model.get("addressline1");
			currAddLine2 = personalData2Model.get("addressline2");
			currCity = personalData2Model.get("city");
			currProv = personalData2Model.get("province");
			currPCode = personalData2Model.get("postalcode");

			yearsCurrAddy = "" + personalData2Model.getInt("years");
			monthsCurrAddy = "" + personalData2Model.getInt("months");
			monthlyHousePayment = "" + personalData2Model.getInt("housingpayment");
		}
		rqstBodyString += "&lt;tns:currentAddressType&gt;" + currAddType + "&lt;/tns:currentAddressType&gt;\n";
		rqstBodyString += "&lt;tns:currentAddressLine1&gt;" + currAddLine1 + "&lt;/tns:currentAddressLine1&gt;\n";
		rqstBodyString += "&lt;tns:currentCity&gt;" + currCity + "&lt;/tns:currentCity&gt;\n";
		rqstBodyString += "&lt;tns:currentProvince&gt;" + currProv + "&lt;/tns:currentProvince&gt;\n";
		rqstBodyString += "&lt;tns:currentPostalCode&gt;" + currPCode + "&lt;/tns:currentPostalCode&gt;\n";
		rqstBodyString += "&lt;tns:currentCountry&gt;" + "CA" + "&lt;/tns:currentCountry&gt;\n";
		rqstBodyString += "&lt;tns:yearsAtCurrentAddress&gt;" + yearsCurrAddy + "&lt;/tns:yearsAtCurrentAddress&gt;\n";
		rqstBodyString += "&lt;tns:monthsAtCurrentAddress&gt;" + monthsCurrAddy + "&lt;/tns:monthsAtCurrentAddress&gt;";
		rqstBodyString += "&lt;tns:monthlyRentMortgageAmount&gt;" + monthlyHousePayment + "&lt;/tns:monthlyRentMortgageAmount&gt;\n";

		BaseModel finEmpModel = argCardData.getModel("financialData");
		String emplStatus = "";
		String jobTitle = "";
		String emplCategory = "";

		String yearsEmp = "";
		String monthsEmp = "";
		String grossInc = "";

		String cardVISAMCAMEX = "";
		String cardBankLoan = "";
		String cardStoreCard = "";
		String cardChequingAcct = "";
		String cardGasCard = "";
		String cardSavingsAcct = "";

		if (finEmpModel != null)
		{
			emplStatus = finEmpModel.get("employmentType");
			jobTitle = finEmpModel.get("jobTitle");
			emplCategory = finEmpModel.get("jobCategory");
			if (emplStatus.equals("R"))
			{
				emplStatus = "F";
				jobTitle = "RETIRED";
				emplCategory = "RT";
			}

			yearsEmp = "" + finEmpModel.getInt("howLongYears");
			monthsEmp = "" + finEmpModel.getInt("howLongMonthes");
			grossInc = "" + finEmpModel.getInt("grossIncome");

			cardVISAMCAMEX = finEmpModel.get("cardVISAMCAMEX");
			cardBankLoan = finEmpModel.get("cardBankLoan");
			cardStoreCard = finEmpModel.get("cardStoreCard");
			cardChequingAcct = finEmpModel.get("cardChequingAcct");
			cardGasCard = finEmpModel.get("cardGasCard");
			cardSavingsAcct = finEmpModel.get("cardSavingsAcct");

		}
		rqstBodyString += "&lt;tns:employementStatus&gt;" + emplStatus + "&lt;/tns:employementStatus&gt;\n";
		rqstBodyString += "&lt;tns:jobTitle&gt;" + jobTitle + "&lt;/tns:jobTitle&gt;\n";
		rqstBodyString += "&lt;tns:employementCategory&gt;" + emplCategory + "&lt;/tns:employementCategory&gt;\n";
		rqstBodyString += "&lt;tns:yearsAtEmployement&gt;" + yearsEmp + "&lt;/tns:yearsAtEmployement&gt;\n";
		rqstBodyString += "&lt;tns:monthsAtEmployement&gt;" + monthsEmp + "&lt;/tns:monthsAtEmployement&gt;\n";
		rqstBodyString += "&lt;tns:grossAnnualIncome&gt;" + grossInc + "&lt;/tns:grossAnnualIncome&gt;\n";

		rqstBodyString += "&lt;tns:bankCardFlag&gt;" + cardVISAMCAMEX + "&lt;/tns:bankCardFlag&gt;\n";
		rqstBodyString += "&lt;tns:bankLoanFlag&gt;" + cardBankLoan + "&lt;/tns:bankLoanFlag&gt;\n";
		rqstBodyString += "&lt;tns:chequingAccountFlag&gt;" + cardChequingAcct + "&lt;/tns:chequingAccountFlag&gt;\n";
		rqstBodyString += "&lt;tns:savingsAccountFlag&gt;" + cardSavingsAcct + "&lt;/tns:savingsAccountFlag&gt;\n";
		rqstBodyString += "&lt;tns:storeCardFlag&gt;" + cardStoreCard + "&lt;/tns:storeCardFlag&gt;\n";
		rqstBodyString += "&lt;tns:gasCardFlag&gt;" + cardGasCard + "&lt;/tns:gasCardFlag&gt;\n";

		rqstBodyString += "&lt;tns:agreedToTermsFlag&gt;" + "Y" + "&lt;/tns:agreedToTermsFlag&gt;\n";
		rqstBodyString += "&lt;tns:applicantSignature&gt;" + "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUf/9k=" + "&lt;/tns:applicantSignature&gt;\n";
		rqstBodyString += "&lt;tns:signatureFlag&gt;" + "Y" + "&lt;/tns:signatureFlag&gt;\n";
		rqstBodyString += "&lt;tns:signatureMatchFlag&gt;" + "Y" + "&lt;/tns:signatureMatchFlag&gt;\n";
		/*
		 * rqstBodyString +=
		 * "&lt;tns:dateSigned&gt;2010-06-15&lt;/tns:dateSigned&gt;";
		 */
		rqstBodyString += "&lt;/tns:AccountApplicationRequest&gt;\n";

		System.out.println("Request:\n" + rqstBodyString);
		return rqstBodyString;
	}

	public String getStringifiedAccountApplicationMockData()
	{
		String sMethod = "[getStringifiedAccountApplicationMockData]";
		log.info(sMethod);

		String rqstBodyString = new String("");
		rqstBodyString += "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;";
		rqstBodyString += "&lt;tns:AccountApplicationRequest xmlns:tns=\"http://www.channel.ctfs.ctc.com/accountAcquisition/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"&gt;";

		rqstBodyString += "&lt;tns:externalReferenceId&gt;3788B296-68EE-4242-B12A-F1B37EA64DA2&lt;/tns:externalReferenceId&gt;";
		rqstBodyString += "&lt;tns:storeNumber&gt;424&lt;/tns:storeNumber&gt;";
		rqstBodyString += "&lt;tns:agentId&gt;0256&lt;/tns:agentId&gt;";
		rqstBodyString += "&lt;tns:channelIndicator&gt;IP&lt;/tns:channelIndicator&gt;";
		rqstBodyString += "&lt;tns:agencyPromoCode&gt;E9999&lt;/tns:agencyPromoCode&gt;";
		rqstBodyString += "&lt;tns:acquistionStrategyCode&gt;0A8855&lt;/tns:acquistionStrategyCode&gt;";

		rqstBodyString += "&lt;tns:requestedProductType&gt;OMC&lt;/tns:requestedProductType&gt;";
		rqstBodyString += "&lt;tns:firstName&gt;JOHN&lt;/tns:firstName&gt;";
		rqstBodyString += "&lt;tns:lastName&gt;DOE&lt;/tns:lastName&gt;";

		rqstBodyString += "&lt;tns:idType&gt;DR&lt;/tns:idType&gt;";
		rqstBodyString += "&lt;tns:idNumber&gt;D0000-00917-00101&lt;/tns:idNumber&gt;";
		rqstBodyString += "&lt;tns:placeOfIssue&gt;ON&lt;/tns:placeOfIssue&gt;";
		rqstBodyString += "&lt;tns:preferedLanguage&gt;E&lt;/tns:preferedLanguage&gt;";
		rqstBodyString += "&lt;tns:applicantGender&gt;M&lt;/tns:applicantGender&gt;";

		rqstBodyString += "&lt;tns:currentAddressType&gt;O&lt;/tns:currentAddressType&gt;";
		rqstBodyString += "&lt;tns:currentAddressLine1&gt;2180 WINSTON PARK DRIVE&lt;/tns:currentAddressLine1&gt;";
		rqstBodyString += "&lt;tns:currentCity&gt;OAKVILLE&lt;/tns:currentCity&gt;";
		rqstBodyString += "&lt;tns:currentProvince&gt;ON&lt;/tns:currentProvince&gt;";
		rqstBodyString += "&lt;tns:currentPostalCode&gt;L6H5W1&lt;/tns:currentPostalCode&gt;";
		rqstBodyString += "&lt;tns:currentCountry&gt;CA&lt;/tns:currentCountry&gt;";
		rqstBodyString += "&lt;tns:currentTelephoneNumber&gt;9053293332&lt;/tns:currentTelephoneNumber&gt;";

		rqstBodyString += "&lt;tns:yearsAtCurrentAddress&gt;5&lt;/tns:yearsAtCurrentAddress&gt;";
		rqstBodyString += "&lt;tns:monthsAtCurrentAddress&gt;6&lt;/tns:monthsAtCurrentAddress&gt;";
		rqstBodyString += "&lt;tns:currentEmailAddress&gt;TEST@ENDONETWORKS.COM&lt;/tns:currentEmailAddress&gt;";

		rqstBodyString += "&lt;tns:employementStatus&gt;F&lt;/tns:employementStatus&gt;";
		rqstBodyString += "&lt;tns:jobTitle&gt;NONE&lt;/tns:jobTitle&gt;";
		rqstBodyString += "&lt;tns:employementCategory&gt;UN&lt;/tns:employementCategory&gt;";
		rqstBodyString += "&lt;tns:yearsAtEmployement&gt;2&lt;/tns:yearsAtEmployement&gt;";
		rqstBodyString += "&lt;tns:monthsAtEmployement&gt;11&lt;/tns:monthsAtEmployement&gt;";
		rqstBodyString += "&lt;tns:grossAnnualIncome&gt;65000&lt;/tns:grossAnnualIncome&gt;";
		rqstBodyString += "&lt;tns:monthlyRentMortgageAmount&gt;1200&lt;/tns:monthlyRentMortgageAmount&gt;";

		rqstBodyString += "&lt;tns:bankCardFlag&gt;Y&lt;/tns:bankCardFlag&gt;";
		rqstBodyString += "&lt;tns:bankLoanFlag&gt;Y&lt;/tns:bankLoanFlag&gt;";
		rqstBodyString += "&lt;tns:chequingAccountFlag&gt;N&lt;/tns:chequingAccountFlag&gt;";
		rqstBodyString += "&lt;tns:savingsAccountFlag&gt;Y&lt;/tns:savingsAccountFlag&gt;";
		rqstBodyString += "&lt;tns:storeCardFlag&gt;N&lt;/tns:storeCardFlag&gt;";
		rqstBodyString += "&lt;tns:gasCardFlag&gt;N&lt;/tns:gasCardFlag&gt;";
		rqstBodyString += "&lt;tns:agreedToTermsFlag&gt;Y&lt;/tns:agreedToTermsFlag&gt;";
		rqstBodyString += "&lt;tns:applicantSignature&gt;/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUf/9k=&lt;/tns:applicantSignature&gt;";

		rqstBodyString += "&lt;tns:signatureFlag&gt;Y&lt;/tns:signatureFlag&gt;";
		rqstBodyString += "&lt;tns:signatureMatchFlag&gt;Y&lt;/tns:signatureMatchFlag&gt;";
		/*
		 * rqstBodyString +=
		 * "&lt;tns:dateSigned&gt;2010-06-15&lt;/tns:dateSigned&gt;";
		 */
		rqstBodyString += "&lt;/tns:AccountApplicationRequest&gt;";

		System.out.println("Request:\n" + rqstBodyString);
		return rqstBodyString;
	}

	private AccountApplicationRequestType getMockDataForAppRequest()
	{
		String sMethod = "[MockDataForAppRequest]";
		log.info(sMethod);

		AccountApplicationRequestType accountApplicationRequest = new com.ctc.ctfs.channel.accountacquisition.ObjectFactory().createAccountApplicationRequestType();

		accountApplicationRequest.setExternalReferenceId("3788B296-68EE-4242-B12A-F1B37EA64DA2");
		accountApplicationRequest.setStoreNumber(424);
		accountApplicationRequest.setAgentId("0256");
		accountApplicationRequest.setChannelIndicator("IP");
		accountApplicationRequest.setAgencyPromoCode("E9999");
		accountApplicationRequest.setAcquistionStrategyCode("0A8855");

		accountApplicationRequest.setRequestedProductType("OMC");
		accountApplicationRequest.setFirstName("JOHN");
		accountApplicationRequest.setLastName("DOE");

		XMLGregorianCalendar xmlDateOfBirth = null;
		try
		{
			xmlDateOfBirth = getXMLGregorianCalendarDateFromString("1970-01-01");
		}
		catch (ParseException e1)
		{
			e1.printStackTrace();
		}
		catch (DatatypeConfigurationException e1)
		{
			e1.printStackTrace();
		}

		accountApplicationRequest.setDateOfBirth(xmlDateOfBirth);

		accountApplicationRequest.setIdType("DR");
		accountApplicationRequest.setIdNumber("D0000-00917-00101");
		accountApplicationRequest.setPlaceOfIssue(PlaceOfIssueType.ON);
		accountApplicationRequest.setPreferedLanguage("E");

		accountApplicationRequest.setApplicantGender("M");
		accountApplicationRequest.setCurrentAddressType("O");
		accountApplicationRequest.setCurrentAddressLine1("2180 WINSTON PARK DRIVE");
		accountApplicationRequest.setCurrentCity("OAKVILLE");
		accountApplicationRequest.setCurrentProvince(ProvinceType.ON);
		accountApplicationRequest.setCurrentPostalCode("L6H5W1");
		accountApplicationRequest.setCurrentCountry("CA");
		accountApplicationRequest.setCurrentTelephoneNumber("9053293332");

		accountApplicationRequest.setYearsAtCurrentAddress(5);
		accountApplicationRequest.setMonthsAtCurrentAddress(6);
		accountApplicationRequest.setCurrentEmailAddress("TEST@ENDONETWORKS.COM");

		accountApplicationRequest.setEmployementStatus("F");
		accountApplicationRequest.setJobTitle("NONE");
		accountApplicationRequest.setEmployementCategory("UN");
		accountApplicationRequest.setYearsAtEmployement(2);
		accountApplicationRequest.setMonthsAtEmployement(11);
		accountApplicationRequest.setGrossAnnualIncome(65000);
		accountApplicationRequest.setMonthlyRentMortgageAmount(1200);

		accountApplicationRequest.setBankCardFlag("Y");
		accountApplicationRequest.setBankLoanFlag("Y");
		accountApplicationRequest.setChequingAccountFlag("N");
		accountApplicationRequest.setSavingsAccountFlag("Y");
		accountApplicationRequest.setStoreCardFlag("N");
		accountApplicationRequest.setGasCardFlag("N");
		accountApplicationRequest.setAgreedToTermsFlag("Y");

		byte[] signatureConverted = convertSignatureStringToByte("/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUf/9k=");

		accountApplicationRequest.setApplicantSignature(signatureConverted);

		accountApplicationRequest.setSignatureFlag("Y");
		accountApplicationRequest.setSignatureMatchFlag("Y");

		XMLGregorianCalendar xmlDateSigned = null;
		try
		{
			xmlDateSigned = getXMLGregorianCalendarDateFromString("2010-06-15");
		}
		catch (ParseException e1)
		{
			e1.printStackTrace();
		}
		catch (DatatypeConfigurationException e1)
		{
			e1.printStackTrace();
		}
		return accountApplicationRequest;
	}

	public byte[] convertSignatureStringToByte(String argSignatureAsString)
	{
		String sMethod = "[convertSignatureStringToByte()]";
		log.info(sMethod);

		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		try
		{
			InputStream signatureStringStream = new StringBufferInputStream(argSignatureAsString);

			byte[] buf = new byte[1024];
			for (int readNum; (readNum = signatureStringStream.read(buf)) != -1;)
			{
				bos.write(buf, 0, readNum);
			}
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
		return bos.toByteArray();
	}

	public String getDateAsStringFromXMLGregorianCalendarDateObject(XMLGregorianCalendar argXMLGCDate)
	{
		String sMethod = "[getDateAsStringFromXMLGregorianCalendarDateObject()]";
		log.info(sMethod);

		String dateString = "";
		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
		Date theDate = argXMLGCDate.toGregorianCalendar().getTime();
		dateString = dateFormatter.format(theDate);
		return dateString;
	}

}
