package com.brb.brbsimulatorcontroller.model;

import java.io.Serializable;

public class BaseOutput implements Serializable {
  /**
	 * 
	 */
	private static final long serialVersionUID = 1l;
	private String result;
	private String reasonCode;
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getReasonCode() {
		return reasonCode;
	}
	public void setReasonCode(String reasonCode) {
		this.reasonCode = reasonCode;
	}
	@Override
	public String toString() {
		return "BaseOutPut [result=" + result + ", reasonCode=" + reasonCode + "]";
	}
	
	
}
