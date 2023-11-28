package com.ctfs.WICI.Model;

public class WICIAuthfieldValue {

	String mfgSerial;
	String buildSerial;
	/**
	 * @return the mfgSerial
	 */
	public String getMfgSerial() {
		return mfgSerial;
	}
	/**
	 * @param mfgSerial the mfgSerial to set
	 */
	public void setMfgSerial(String mfgSerial) {
		this.mfgSerial = mfgSerial;
	}
	/**
	 * @return the buildSerial
	 */
	public String getBuildSerial() {
		return buildSerial;
	}
	/**
	 * @param buildSerial the buildSerial to set
	 */
	public void setBuildSerial(String buildSerial) {
		this.buildSerial = buildSerial;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "WICIAuthfieldValue [mfgSerial=" + mfgSerial + ", buildSerial="
				+ buildSerial + "]";
	}
	
}
