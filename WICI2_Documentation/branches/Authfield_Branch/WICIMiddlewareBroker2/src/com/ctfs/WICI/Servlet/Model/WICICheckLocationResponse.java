package com.ctfs.WICI.Servlet.Model;

import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationResponse;

public class WICICheckLocationResponse
{
	protected String message;

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}

	protected String outletName;

	public String getOutletName()
	{
		return outletName;
	}

	public void setOutletName(String outletName)
	{
		this.outletName = outletName;
	}

	protected String outletNumber;

	public String getOutletNumber()
	{
		return outletNumber;
	}

	public void setOutletNumber(String outletNumber)
	{
		this.outletNumber = outletNumber;
	}

	protected String outletStreet;

	public String getOutletStreet()
	{
		return outletStreet;
	}

	public void setOutletStreet(String outletStreet)
	{
		this.outletStreet = outletStreet;
	}

	protected String outletCity;

	public String getOutletCity()
	{
		return outletCity;
	}

	public void setOutletCity(String outletCity)
	{
		this.outletCity = outletCity;
	}

	protected String outletProvince;

	public String getOutletProvince()
	{
		return outletProvince;
	}

	public void setOutletProvince(String outletProvince)
	{
		this.outletProvince = outletProvince;
	}

	protected String outletPostal;

	public String getOutletPostal()
	{
		return outletPostal;
	}

	public void setOutletPostal(String outletPostal)
	{
		this.outletPostal = outletPostal;
	}

	public WICICheckLocationResponse()
	{

	}

	public WICICheckLocationResponse entityToModel(WebICCheckLocationResponse entity)
	{
		WICICheckLocationResponse result = new WICICheckLocationResponse();
		result.message = entity.getMessage().toString();
		result.outletCity = entity.getOutletCity();
		result.outletName = entity.getOutletName();
		result.outletNumber = entity.getOutletNumber();
		result.outletPostal = entity.getOutletPostal();
		result.outletProvince = entity.getOutletProvince().toString();
		result.outletStreet = entity.getOutletStreet();
		return result;
	}
}
