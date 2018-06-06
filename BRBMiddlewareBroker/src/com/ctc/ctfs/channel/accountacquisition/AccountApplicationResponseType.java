
package com.ctc.ctfs.channel.accountacquisition;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;


/**
 * <p>Java class for AccountApplicationResponseType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AccountApplicationResponseType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="accountNumber" type="{http://www.w3.org/2001/XMLSchema}base64Binary" minOccurs="0"/>
 *         &lt;element name="accountReference" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}acctReferenceType" minOccurs="0"/>
 *         &lt;element name="expiryDate" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="4"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="creditLimit" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}positiveInteger">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="apr" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}decimal">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="cashAPR" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}decimal">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="appStatus">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="APPROVED"/>
 *               &lt;enumeration value="PENDING"/>
 *               &lt;enumeration value="DECLINED"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="customerValueInd" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="([A-Z0-9])"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AccountApplicationResponseType", propOrder = {
    "accountNumber",
    "accountReference",
    "expiryDate",
    "creditLimit",
    "apr",
    "cashAPR",
    "appStatus",
    "customerValueInd",
    "respCardType",
    "loyaltyMembershipNumber"
})
public class AccountApplicationResponseType
    implements Serializable
{

    protected byte[] accountNumber;
    protected String accountReference;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String expiryDate;
    protected BigInteger creditLimit;
    protected BigDecimal apr;
    protected BigDecimal cashAPR;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String appStatus;
    protected String customerValueInd;
    protected String respCardType;
    protected String loyaltyMembershipNumber;
    protected String queueName;

    /**
     * Gets the value of the accountNumber property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getAccountNumber() {
        return accountNumber;
    }

    /**
     * Sets the value of the accountNumber property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setAccountNumber(byte[] value) {
        this.accountNumber = ((byte[]) value);
    }

    /**
     * Gets the value of the accountReference property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccountReference() {
        return accountReference;
    }

    /**
     * Sets the value of the accountReference property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccountReference(String value) {
        this.accountReference = value;
    }

    /**
     * Gets the value of the expiryDate property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExpiryDate() {
        return expiryDate;
    }

    /**
     * Sets the value of the expiryDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExpiryDate(String value) {
        this.expiryDate = value;
    }

    /**
     * Gets the value of the creditLimit property.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getCreditLimit() {
        return creditLimit;
    }

    /**
     * Sets the value of the creditLimit property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setCreditLimit(BigInteger value) {
        this.creditLimit = value;
    }

    /**
     * Gets the value of the apr property.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getApr() {
        return apr;
    }

    /**
     * Sets the value of the apr property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setApr(BigDecimal value) {
        this.apr = value;
    }

    /**
     * Gets the value of the cashAPR property.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getCashAPR() {
        return cashAPR;
    }

    /**
     * Sets the value of the cashAPR property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setCashAPR(BigDecimal value) {
        this.cashAPR = value;
    }

    /**
     * Gets the value of the appStatus property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAppStatus() {
        return appStatus;
    }

    /**
     * Sets the value of the appStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAppStatus(String value) {
        this.appStatus = value;
    }

    /**
     * Gets the value of the customerValueInd property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCustomerValueInd() {
        return customerValueInd;
    }

    /**
     * Sets the value of the customerValueInd property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCustomerValueInd(String value) {
        this.customerValueInd = value;
    }

    /**
     * Gets the value of the respCardType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
	public String getRespCardType() {
		return respCardType;
	}

	

	/**
     * Sets the value of the respCardType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
	public void setRespCardType(String respCardType) {
		this.respCardType = respCardType;
	}
	
	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}

	public void setLoyaltyMembershipNumber(String loyaltyMembershipNumber) {
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
	}

	public String getQueueName() {
		return queueName;
	}

	public void setQueueName(String queueName) {
		this.queueName = queueName;
	}
	
}
