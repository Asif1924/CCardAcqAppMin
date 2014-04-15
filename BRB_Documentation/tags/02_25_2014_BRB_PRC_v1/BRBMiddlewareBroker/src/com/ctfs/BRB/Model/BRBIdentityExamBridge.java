package com.ctfs.BRB.Model;

import java.math.BigDecimal;
import java.util.List;
import com.ctc.ctfs.channel.webicidentityexamination.IdentityExam;
import com.ctc.ctfs.channel.webicidentityexamination.Question;

/**
 * Internal proxy class for external IdentityExam class
 * Needed to change IdentityExam interface (hide some fields) 
 */
public class BRBIdentityExamBridge {
	static final String EMPTY_STRING = "";
	static final String CHANNEL_NAME = "WEBIC";
		
	protected IdentityExam identityExam;
	protected String brbTransactionId;
	protected String webICResponseResult;
	
	/**
	 * Constructor
	 */
	public BRBIdentityExamBridge () {
		identityExam = new IdentityExam();
		identityExam.setChannel(CHANNEL_NAME);
		brbTransactionId = EMPTY_STRING;
		webICResponseResult = null;
	}
	
	/**
	 * Constructor
	 */
	public BRBIdentityExamBridge (IdentityExam webICIdentityExam) {
		identityExam = webICIdentityExam;
		identityExam.setChannel(CHANNEL_NAME);
		brbTransactionId = EMPTY_STRING;
		webICResponseResult = null;
	}
	
	/**
	 * Constructor
	 */
	public BRBIdentityExamBridge (IdentityExam webICIdentityExam, String webICResponseResult) {
		identityExam = webICIdentityExam;
		identityExam.setChannel(CHANNEL_NAME);
		brbTransactionId = EMPTY_STRING;
		this.webICResponseResult = webICResponseResult;
	}
	
	/**
	 * Constructor
	 */
	public BRBIdentityExamBridge (IdentityExam webICIdentityExam, String webICResponseResult, String transactionId) {
		identityExam = webICIdentityExam;
		identityExam.setChannel(CHANNEL_NAME);
		brbTransactionId = transactionId;
		this.webICResponseResult = webICResponseResult;
	}
	
	/**
	 * @return the identityExam
	 */
	public IdentityExam getWebICIdentityExam() {
		return identityExam;
	}
	
	/**
	 * Set WebICIdentityExam
	 */
	/*public void setWebICIdentityExam(IdentityExam webICIdentityExam) {
		if (webICIdentityExam == null) {
			throw new IllegalArgumentException("Invalid webICIdentityExam parameter!");
		}
		
		identityExam = webICIdentityExam;
		identityExam.setChannel(CHANNEL_NAME);
	}*/
	
	/**
     * Gets the value of the BRB transactionId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBrbTransactionId() {
        return brbTransactionId;
    }

    /**
     * Sets the value of the BRB transactionId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBrbTransactionId(String value) {
    	brbTransactionId = value;
    }
    
    public String getWebICResponseResult() {
        return webICResponseResult;
    }
    
    public void setWebICResponseResult(String value) {
    	webICResponseResult = value;
    }
    
    public void resetSecureFields (){
    	identityExam.setSessionId(null);
    	identityExam.setExternalId(null);
    }
		
	/************************ IdentityExam data ***************************/
	
	/**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return identityExam.getId();
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
    	identityExam.setId(value);
    }
    
    /**
     * Gets the value of the sessionId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSessionId() {
        return identityExam.getSessionId();
    }

    /**
     * Sets the value of the sessionId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSessionId(String value) {
    	identityExam.setSessionId(value);
    }

    /**
     * Gets the value of the externalId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExternalId() {
        return identityExam.getExternalId();
    }

    /**
     * Sets the value of the externalId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExternalId(String value) {
    	identityExam.setExternalId(value);
    }
    
    public String getTransactionId() {
        return identityExam.getTransactionId();
    }
    
    public void setTransactionId(String value) {
    	identityExam.setTransactionId(value);
    }
    
    /**
     * Gets the value of the channel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChannel() {
        return identityExam.getChannel();
    }

    /**
     * Sets the value of the channel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChannel(String value) {
    	identityExam.setChannel(value);
    }   

    /**
     * Gets the value of the score property.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getScore() {
        return identityExam.getScore();
    }

    /**
     * Sets the value of the score property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setScore(BigDecimal value) {
    	identityExam.setScore(value);
    }

    /**
     * Gets the value of the result property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getResult() {
        return identityExam.getResult();
    }

    /**
     * Sets the value of the result property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setResult(String value) {
    	identityExam.setResult(value);
    }

    /**
     * Gets the value of the decision property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDecision() {
        return identityExam.getDecision();
    }

    /**
     * Sets the value of the decision property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDecision(String value) {
    	identityExam.setDecision(value);
    }

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getState() {
        return identityExam.getState();
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setState(String value) {
    	identityExam.setState(value);
    }

    /**
     * Gets the value of the error property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the error property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getError().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getError() {
        return identityExam.getError();
    }

    /**
     * Gets the value of the alerts property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the alerts property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAlerts().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getAlerts() {
        return identityExam.getAlerts();
    }

    /**
     * Gets the value of the reports property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the reports property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getReports().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getReports() {
        return identityExam.getReports();
    }

    /**
     * Gets the value of the earnPoints property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEarnPoints() {
        return identityExam.getEarnPoints();
    }

    /**
     * Sets the value of the earnPoints property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEarnPoints(String value) {
    	identityExam.setEarnPoints(value);
    }

    /**
     * Gets the value of the possiblePoints property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPossiblePoints() {
        return identityExam.getPossiblePoints();
    }

    /**
     * Sets the value of the possiblePoints property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPossiblePoints(String value) {
    	identityExam.setPossiblePoints(value);
    }

    /**
     * Gets the value of the questions property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the questions property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getQuestions().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Question }
     * 
     * 
     */
    public List<Question> getQuestions() {
        return identityExam.getQuestions();
    }
}
