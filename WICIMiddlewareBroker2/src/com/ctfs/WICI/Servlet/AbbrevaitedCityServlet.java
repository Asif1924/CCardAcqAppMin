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

public class AbbrevaitedCityServlet extends WICIServlet
{
	private static final long serialVersionUID = 1L;
	public static String EMPTY_STRING = "";
	
	static Logger log = Logger.getLogger(AbbrevaitedCityServlet.class.getName());
	
	public AbbrevaitedCityServlet()
	{
	}

	protected void handleRequest(WICIServletMediator requestMediator) throws ServletException, IOException
	{
		String sMethod = this.getClass().getName() + "[doPost] ";		
		log.info(sMethod);
		String abrivatedCity = requestMediator.searchElementInsidePostRequestBody("abrivatedCity") != null ? requestMediator.searchElementInsidePostRequestBody("abrivatedCity").trim() : EMPTY_STRING;
		String province = requestMediator.searchElementInsidePostRequestBody("province") != null ? requestMediator.searchElementInsidePostRequestBody("province").trim() : EMPTY_STRING;
		String city = requestMediator.searchElementInsidePostRequestBody("city") != null ? requestMediator.searchElementInsidePostRequestBody("city").trim() : EMPTY_STRING;
		log.info("AbbrevaitedCityServlet handleRequest  abrivatedCity   "+CWE117Fix.encodeCRLF(abrivatedCity));
		log.info("AbbrevaitedCityServlet handleRequest  provice   "+CWE117Fix.encodeCRLF(province));
		log.info("AbbrevaitedCityServlet handleRequest  city   "+CWE117Fix.encodeCRLF(city));
		
		if(!abrivatedCity.isEmpty() && abrivatedCity.equalsIgnoreCase("Y")&& !province.isEmpty() && !city.isEmpty() ){
			
			get13CharAbbrivatedCityName(requestMediator, city, province);
			
		}else{
			
			log.warning("Invalid input parameters  abrivatedCity:: " + CWE117Fix.encodeCRLF(abrivatedCity) +  "city :: "+CWE117Fix.encodeCRLF(city) + "province ::  "+ CWE117Fix.encodeCRLF(province));
		}
	}

	private  void get13CharAbbrivatedCityName(WICIServletMediator requestMediator, String city, String province){
		String sMethod = this.getClass().getName() + "[get13CharAbbrivatedCityName] ";
		log.info(sMethod);
		WICIDBHelper dbHelper = new WICIDBHelper();	
		WICIDSSAddressResponse canadapostaddress = new WICIDSSAddressResponse();
		WICIAbbrevatedCityResponse abbrevatedResponse = new WICIAbbrevatedCityResponse();
		String abbrCityName = null;
		WICIResponse appResponse = new WICIResponse();
		appResponse.setError(true);
		appResponse.setMsg("Unknown error!");
		
		canadapostaddress.setCity(city);
		canadapostaddress.setProvince(province);
		
		log.info(" candapost input  "+CWE117Fix.encodeCRLF(canadapostaddress.toString()));
		
		try
		{
			 if(canadapostaddress != null && canadapostaddress.getCity() != null && canadapostaddress.getCity().length() >=18 ){
						
						log.info( " cityName from postalcode Resposne "+CWE117Fix.encodeCRLF(canadapostaddress.getCity()));
						 abbrCityName =	dbHelper.retrieve13charABBRCityName(canadapostaddress);
						 
						 log.info( " cityName from retrive13charABBCityName "+CWE117Fix.encodeCRLF(abbrCityName));
						
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
			 log.info("the 13 char abbrivated city respone  "+CWE117Fix.encodeCRLF(abbrevatedResponse.toString()));	
			
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
			requestMediator.processHttpResponse(appResponse);
	}
		
	
}