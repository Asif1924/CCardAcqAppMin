package com.ctfs.WICI.Model;

public class AuthfieldValue
{
	String MfgSerial;
	String BuildSerial;

	public String getMfgSerial()
	{
		return MfgSerial;
	}
	public void setMfgSerial(String mfgSerial)
	{
		this.MfgSerial = mfgSerial;
	}
	public String getBuildSerial()
	{
		return BuildSerial;
	}
	public void setBuildSerial(String buildSerial)
	{
		this.BuildSerial = buildSerial;
	}
	@Override
	public String toString() {
		return "AuthfieldValue [MfgSerial=" + MfgSerial + ", BuildSerial="
				+ BuildSerial + "]";
	}

}
