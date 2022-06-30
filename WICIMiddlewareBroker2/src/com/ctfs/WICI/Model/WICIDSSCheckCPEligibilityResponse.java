package com.ctfs.WICI.Model;

import java.io.Serializable;

public class WICIDSSCheckCPEligibilityResponse implements Serializable {

	private static final long serialVersionUID = 1L;
	private String cpType;
	private String enhancementId;
	private String planId;

	/**
	 * @return the cpType
	 */
	public String getCpType() {
		return cpType;
	}

	/**
	 * @param cpType the cpType to set
	 */
	public void setCpType(String cpType) {
		this.cpType = cpType;
	}

	/**
	 * @return the enhancementId
	 */
	public String getEnhancementId() {
		return enhancementId;
	}

	/**
	 * @param enhancementId the enhancementId to set
	 */
	public void setEnhancementId(String enhancementId) {
		this.enhancementId = enhancementId;
	}

	/**
	 * @return the planId
	 */
	public String getPlanId() {
		return planId;
	}

	/**
	 * @param planId the planId to set
	 */
	public void setPlanId(String planId) {
		this.planId = planId;
	}

	@Override
	public String toString() {
		return "WICIDSSCheckCPEligibilityResponse [cpType="
				+ cpType + ", enhancementId=" + enhancementId + ", planId="
				+ planId + "]";
	}
}
