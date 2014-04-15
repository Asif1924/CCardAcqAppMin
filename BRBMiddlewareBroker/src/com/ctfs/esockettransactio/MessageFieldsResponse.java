
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MessageFieldsResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MessageFieldsResponse">
 *   &lt;complexContent>
 *     &lt;extension base="{http://ctfs.com/esocketTransactIo/}MessageFields">
 *       &lt;sequence>
 *         &lt;element name="pan" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,19}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="additionalResponseData" type="{http://ctfs.com/esocketTransactIo/}AdditionalResponseDataResponse" minOccurs="0"/>
 *         &lt;element name="authorizingAgentInstitution" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="[0-9]{1,11}"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="routingInformation" type="{http://ctfs.com/esocketTransactIo/}RoutingInformation" minOccurs="0"/>
 *         &lt;element name="serviceStationData" type="{http://ctfs.com/esocketTransactIo/}ServiceStationData" minOccurs="0"/>
 *         &lt;element name="cardholderInformation" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="icc" type="{http://ctfs.com/esocketTransactIo/}IccResponse" minOccurs="0"/>
 *         &lt;element name="issuerNetworkId" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;minLength value="1"/>
 *               &lt;maxLength value="11"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MessageFieldsResponse", propOrder = {
    "pan",
    "additionalResponseData",
    "authorizingAgentInstitution",
    "routingInformation",
    "serviceStationData",
    "cardholderInformation",
    "icc",
    "issuerNetworkId"
})
public class MessageFieldsResponse
    extends MessageFields
    implements Serializable
{

    protected String pan;
    protected AdditionalResponseDataResponse additionalResponseData;
    protected String authorizingAgentInstitution;
    protected RoutingInformation routingInformation;
    protected ServiceStationData serviceStationData;
    protected String cardholderInformation;
    protected IccResponse icc;
    protected String issuerNetworkId;

    /**
     * Gets the value of the pan property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPan() {
        return pan;
    }

    /**
     * Sets the value of the pan property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPan(String value) {
        this.pan = value;
    }

    /**
     * Gets the value of the additionalResponseData property.
     * 
     * @return
     *     possible object is
     *     {@link AdditionalResponseDataResponse }
     *     
     */
    public AdditionalResponseDataResponse getAdditionalResponseData() {
        return additionalResponseData;
    }

    /**
     * Sets the value of the additionalResponseData property.
     * 
     * @param value
     *     allowed object is
     *     {@link AdditionalResponseDataResponse }
     *     
     */
    public void setAdditionalResponseData(AdditionalResponseDataResponse value) {
        this.additionalResponseData = value;
    }

    /**
     * Gets the value of the authorizingAgentInstitution property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAuthorizingAgentInstitution() {
        return authorizingAgentInstitution;
    }

    /**
     * Sets the value of the authorizingAgentInstitution property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAuthorizingAgentInstitution(String value) {
        this.authorizingAgentInstitution = value;
    }

    /**
     * Gets the value of the routingInformation property.
     * 
     * @return
     *     possible object is
     *     {@link RoutingInformation }
     *     
     */
    public RoutingInformation getRoutingInformation() {
        return routingInformation;
    }

    /**
     * Sets the value of the routingInformation property.
     * 
     * @param value
     *     allowed object is
     *     {@link RoutingInformation }
     *     
     */
    public void setRoutingInformation(RoutingInformation value) {
        this.routingInformation = value;
    }

    /**
     * Gets the value of the serviceStationData property.
     * 
     * @return
     *     possible object is
     *     {@link ServiceStationData }
     *     
     */
    public ServiceStationData getServiceStationData() {
        return serviceStationData;
    }

    /**
     * Sets the value of the serviceStationData property.
     * 
     * @param value
     *     allowed object is
     *     {@link ServiceStationData }
     *     
     */
    public void setServiceStationData(ServiceStationData value) {
        this.serviceStationData = value;
    }

    /**
     * Gets the value of the cardholderInformation property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCardholderInformation() {
        return cardholderInformation;
    }

    /**
     * Sets the value of the cardholderInformation property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCardholderInformation(String value) {
        this.cardholderInformation = value;
    }

    /**
     * Gets the value of the icc property.
     * 
     * @return
     *     possible object is
     *     {@link IccResponse }
     *     
     */
    public IccResponse getIcc() {
        return icc;
    }

    /**
     * Sets the value of the icc property.
     * 
     * @param value
     *     allowed object is
     *     {@link IccResponse }
     *     
     */
    public void setIcc(IccResponse value) {
        this.icc = value;
    }

    /**
     * Gets the value of the issuerNetworkId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIssuerNetworkId() {
        return issuerNetworkId;
    }

    /**
     * Sets the value of the issuerNetworkId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIssuerNetworkId(String value) {
        this.issuerNetworkId = value;
    }

}
