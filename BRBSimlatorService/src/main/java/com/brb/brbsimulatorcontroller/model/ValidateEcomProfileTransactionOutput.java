package com.brb.brbsimulatorcontroller.model;

public class ValidateEcomProfileTransactionOutput extends BaseOutput {
  
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	 
	private String loyaltyNumber;

	public String getLoyaltyNumber() {
		return loyaltyNumber;
	}
	
	public void setLoyaltyNumber(String loyaltyNumber) {
		this.loyaltyNumber = loyaltyNumber;
	}

	@Override
	public String toString() {
		return "ValidateEcomProfileTransactionOutput [loyaltyNumber=" + loyaltyNumber + "]";
	}

}
