package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class MobilePaymentsData implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String consentGranted;
	private String androidPayCheckField;
	private String applePaycheckField;
	private String noThanksCheckField;

	/**
	 * @return the consentGranted
	 */
	public String getConsentGranted() {
		return consentGranted;
	}

	/**
	 * @param consentGranted the consentGranted to set
	 */
	public void setConsentGranted(String consentGranted) {
		this.consentGranted = consentGranted;
	}
	/**
	 * @return the androidPayCheckField
	 */
	public String getAndroidPayCheckField() {
		return androidPayCheckField;
	}

	/**
	 * @param androidPayCheckField the androidPayCheckField to set
	 */
	public void setAndroidPayCheckField(String androidPayCheckField) {
		this.androidPayCheckField = androidPayCheckField;
	}

	/**
	 * @return the applePaycheckField
	 */
	public String getApplePaycheckField() {
		return applePaycheckField;
	}

	/**
	 * @param applePaycheckField the applePaycheckField to set
	 */
	public void setApplePaycheckField(String applePaycheckField) {
		this.applePaycheckField = applePaycheckField;
	}

	/**
	 * @return the noThanksCheckField
	 */
	public String getNoThanksCheckField() {
		return noThanksCheckField;
	}

	/**
	 * @param noThanksCheckField the noThanksCheckField to set
	 */
	public void setNoThanksCheckField(String noThanksCheckField) {
		this.noThanksCheckField = noThanksCheckField;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "MobilePaymentsData [consentGranted=" + consentGranted
				+ ", androidPayCheckField=" + androidPayCheckField
				+ ", applePaycheckField=" + applePaycheckField
				+ ", noThanksCheckField=" + noThanksCheckField + "]";
	}
	
}
