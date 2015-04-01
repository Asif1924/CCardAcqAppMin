package com.ctc.ctfs.channel.webicidentityexamination;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

/**
 * <p>
 * Java class for IdentityExam complex type.
 * 
 * <p>
 * The following schema fragment specifies the expected content contained within
 * this class.
 * 
 * <pre>
 * &lt;complexType name="IdentityExam">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sessionId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="externalId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="channel" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="transactionId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="score" type="{http://www.w3.org/2001/XMLSchema}decimal" minOccurs="0"/>
 *         &lt;element name="result" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="decision" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="state" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="errors" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="alerts" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="reports" type="{http://www.w3.org/2001/XMLSchema}string" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="earnPoints" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="possiblePoints" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="questions" type="{http://www.channel.ctfs.ctc.com/WebICIdentityExamination}Question" maxOccurs="5" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */

/* US3400 */
/* As per WebICIdentityExamination.xsd, element name for error is "error". From Gateway, this field is receiving as "errors". */
/* So it throws Exception in Broker */
/* So Changing this element name to "errors" in Broker to receive error message to avoid Exception. */

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "IdentityExam", propOrder = { "id", "sessionId", "externalId", "channel", "transactionId", "score", "result", "decision", "state", "errors", "alerts", "reports", "earnPoints",
		"possiblePoints", "questions" })
public class IdentityExam implements Serializable
{

	protected String id;
	protected String sessionId;
	protected String externalId;
	@XmlElement(required = true)
	protected String channel;
	@XmlElement(required = true)
	protected String transactionId;
	protected BigDecimal score;
	@XmlElement(required = true)
	protected String result;
	protected String decision;
	protected String state;
	protected List<String> errors;
	protected List<String> alerts;
	protected List<String> reports;
	protected String earnPoints;
	protected String possiblePoints;
	protected List<Question> questions;

	/**
	 * Gets the value of the id property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getId()
	{
		return id;
	}

	/**
	 * Sets the value of the id property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setId(String value)
	{
		this.id = value;
	}

	/**
	 * Gets the value of the sessionId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getSessionId()
	{
		return sessionId;
	}

	/**
	 * Sets the value of the sessionId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setSessionId(String value)
	{
		this.sessionId = value;
	}

	/**
	 * Gets the value of the externalId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getExternalId()
	{
		return externalId;
	}

	/**
	 * Sets the value of the externalId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setExternalId(String value)
	{
		this.externalId = value;
	}

	/**
	 * Gets the value of the channel property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getChannel()
	{
		return channel;
	}

	/**
	 * Sets the value of the channel property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setChannel(String value)
	{
		this.channel = value;
	}

	/**
	 * Gets the value of the transactionId property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getTransactionId()
	{
		return transactionId;
	}

	/**
	 * Sets the value of the transactionId property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setTransactionId(String value)
	{
		this.transactionId = value;
	}

	/**
	 * Gets the value of the score property.
	 * 
	 * @return possible object is {@link BigDecimal }
	 * 
	 */
	public BigDecimal getScore()
	{
		return score;
	}

	/**
	 * Sets the value of the score property.
	 * 
	 * @param value
	 *            allowed object is {@link BigDecimal }
	 * 
	 */
	public void setScore(BigDecimal value)
	{
		this.score = value;
	}

	/**
	 * Gets the value of the result property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getResult()
	{
		return result;
	}

	/**
	 * Sets the value of the result property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setResult(String value)
	{
		this.result = value;
	}

	/**
	 * Gets the value of the decision property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getDecision()
	{
		return decision;
	}

	/**
	 * Sets the value of the decision property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setDecision(String value)
	{
		this.decision = value;
	}

	/**
	 * Gets the value of the state property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getState()
	{
		return state;
	}

	/**
	 * Sets the value of the state property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setState(String value)
	{
		this.state = value;
	}

	/**
	 * Gets the value of the error property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list, not a
	 * snapshot. Therefore any modification you make to the returned list will
	 * be present inside the JAXB object. This is why there is not a
	 * <CODE>set</CODE> method for the error property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * 
	 * <pre>
	 * getError().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list {@link String }
	 * 
	 * 
	 */
	public List<String> getError()
	{
		if (errors == null)
		{
			errors = new ArrayList<String>();
		}
		return this.errors;
	}

	/**
	 * Gets the value of the alerts property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list, not a
	 * snapshot. Therefore any modification you make to the returned list will
	 * be present inside the JAXB object. This is why there is not a
	 * <CODE>set</CODE> method for the alerts property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * 
	 * <pre>
	 * getAlerts().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list {@link String }
	 * 
	 * 
	 */
	public List<String> getAlerts()
	{
		if (alerts == null)
		{
			alerts = new ArrayList<String>();
		}
		return this.alerts;
	}

	/**
	 * Gets the value of the reports property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list, not a
	 * snapshot. Therefore any modification you make to the returned list will
	 * be present inside the JAXB object. This is why there is not a
	 * <CODE>set</CODE> method for the reports property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * 
	 * <pre>
	 * getReports().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list {@link String }
	 * 
	 * 
	 */
	public List<String> getReports()
	{
		if (reports == null)
		{
			reports = new ArrayList<String>();
		}
		return this.reports;
	}

	/**
	 * Gets the value of the earnPoints property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getEarnPoints()
	{
		return earnPoints;
	}

	/**
	 * Sets the value of the earnPoints property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setEarnPoints(String value)
	{
		this.earnPoints = value;
	}

	/**
	 * Gets the value of the possiblePoints property.
	 * 
	 * @return possible object is {@link String }
	 * 
	 */
	public String getPossiblePoints()
	{
		return possiblePoints;
	}

	/**
	 * Sets the value of the possiblePoints property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 * 
	 */
	public void setPossiblePoints(String value)
	{
		this.possiblePoints = value;
	}

	/**
	 * Gets the value of the questions property.
	 * 
	 * <p>
	 * This accessor method returns a reference to the live list, not a
	 * snapshot. Therefore any modification you make to the returned list will
	 * be present inside the JAXB object. This is why there is not a
	 * <CODE>set</CODE> method for the questions property.
	 * 
	 * <p>
	 * For example, to add a new item, do as follows:
	 * 
	 * <pre>
	 * getQuestions().add(newItem);
	 * </pre>
	 * 
	 * 
	 * <p>
	 * Objects of the following type(s) are allowed in the list {@link Question }
	 * 
	 * 
	 */
	public List<Question> getQuestions()
	{
		if (questions == null)
		{
			questions = new ArrayList<Question>();
		}
		return this.questions;
	}

}
