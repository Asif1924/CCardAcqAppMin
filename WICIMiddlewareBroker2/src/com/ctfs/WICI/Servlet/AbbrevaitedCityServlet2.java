package com.ctfs.WICI.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;

import com.ctfs.WICI.Helper.CWE117Fix;
import com.ctfs.WICI.Helper.WICIDBHelper;
import com.ctfs.WICI.Helper.WICIServletMediator;
import com.ctfs.WICI.Model.WICIAbbrevatedCityResponse;
import com.ctfs.WICI.Model.WICIDSSAddressResponse;
import com.ctfs.WICI.Servlet.Model.WICIResponse;

public class AbbrevaitedCityServlet2 extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	public static String EMPTY_STRING = "";
	
	static Logger log = Logger.getLogger(AbbrevaitedCityServlet2.class.getName());
	
	public AbbrevaitedCityServlet2()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		log.info("AbbrevaitedCityServlet2 [handleRequest]:: Called !");
		
		String abrivatedCity = requestMediator.searchElementInsidePostRequestBody("abrivatedCity") != null ? requestMediator.searchElementInsidePostRequestBody("abrivatedCity").trim() : EMPTY_STRING;
		String province = requestMediator.searchElementInsidePostRequestBody("province") != null ? requestMediator.searchElementInsidePostRequestBody("province").trim() : EMPTY_STRING;
		String city = requestMediator.searchElementInsidePostRequestBody("city") != null ? requestMediator.searchElementInsidePostRequestBody("city").trim() : EMPTY_STRING;
		log.info("AbbrevaitedCityServlet2 [handleRequest]:: handleRequest  abrivatedCity   "+CWE117Fix.encodeCRLF(abrivatedCity));
		log.info("AbbrevaitedCityServlet2 [handleRequest]:: handleRequest  provice   "+CWE117Fix.encodeCRLF(province));
		log.info("AbbrevaitedCityServlet2 [handleRequest]:: handleRequest  city   "+CWE117Fix.encodeCRLF(city));
		
		if(!abrivatedCity.isEmpty() && abrivatedCity.equalsIgnoreCase("Y")&& !province.isEmpty() && !city.isEmpty() ){
			
			get13CharAbbrivatedCityName(requestMediator, city, province);
			
		}else{
			
			log.warning("AbbrevaitedCityServlet2 [handleRequest]::Invalid input parameters  abrivatedCity::  " + CWE117Fix.encodeCRLF(abrivatedCity) +  "city :: "+CWE117Fix.encodeCRLF(city) + "province ::  "+ CWE117Fix.encodeCRLF(province));
		}
	}

	private  void get13CharAbbrivatedCityName(WICIServletMediator requestMediator, String city, String province){
		WICIDBHelper dbHelper = new WICIDBHelper();	
		WICIDSSAddressResponse canadapostaddress = new WICIDSSAddressResponse();
		WICIAbbrevatedCityResponse abbrevatedResponse = new WICIAbbrevatedCityResponse();
		String abbrCityName = null;
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		appResponse.setMsg("Unknown error!");
		
		canadapostaddress.setCity(city);
		canadapostaddress.setProvince(province);
		
		log.info("AbbrevaitedCityServlet2[get13CharAbbrivatedCityName] candapost input  "+CWE117Fix.encodeCRLF(canadapostaddress.toString()));
		
		try
		{
			 if(canadapostaddress != null && canadapostaddress.getCity() != null && canadapostaddress.getCity().length() >=18 ){
						
						log.info("AbbrevaitedCityServlet2[get13CharAbbrivatedCityName] cityName from postalcode Resposne "+CWE117Fix.encodeCRLF(canadapostaddress.getCity()));
						 abbrCityName =	dbHelper.retrieve13charABBRCityName(canadapostaddress);
						 
						 log.info("AbbrevaitedCityServlet2[get13CharAbbrivatedCityName] cityName from retrive13charABBCityName "+CWE117Fix.encodeCRLF(abbrCityName));
						
						if(abbrCityName != null  ){
							abbrevatedResponse.setAbbrevaitedCityName(abbrCityName);
							abbrevatedResponse.setAbrivatedCityLookup("Y");
					    
						appResponse.setData(abbrevatedResponse);
						appResponse.setError(false);
						appResponse.setMsg(EMPTY_STRING);
						}else {
					    abbrevatedResponse.setAbbrevaitedCityName(canadapostaddress.getCity());
					    abbrevatedResponse.setAbrivatedCityLookup("N");
						appResponse.setData(abbrevatedResponse);
						appResponse.setError(false);
						appResponse.setMsg(EMPTY_STRING);
						}
					}
			 else{
				    abbrevatedResponse.setAbbrevaitedCityName(canadapostaddress.getCity());
				    abbrevatedResponse.setAbrivatedCityLookup("N");
					appResponse.setData(abbrevatedResponse);
					appResponse.setError(false);
					appResponse.setMsg(EMPTY_STRING);
			 }
			 log.info("AbbrevaitedCityServlet2[get13CharAbbrivatedCityName]the 13 char abbrivated city respone  "+CWE117Fix.encodeCRLF(abbrevatedResponse.toString()));	
			
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
			requestMediator.processHttpResponse(appResponse);
	}
		
	
}