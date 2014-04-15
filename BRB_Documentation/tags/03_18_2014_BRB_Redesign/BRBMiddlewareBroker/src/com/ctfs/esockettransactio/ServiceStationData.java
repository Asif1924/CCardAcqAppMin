
package com.ctfs.esockettransactio;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * 
 *    				This is a response-only field from Postilion. No client-side validation is necessary.
 *    			
 * 
 * <p>Java class for ServiceStationData complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ServiceStationData">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="vehicleUsage" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="odometerReading" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="productId1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="literage1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="amount1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="productId2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="literage2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="amount2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="productId3" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="literage3" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="amount3" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
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
@XmlType(name = "ServiceStationData", propOrder = {
    "vehicleUsage",
    "odometerReading",
    "productId1",
    "literage1",
    "amount1",
    "productId2",
    "literage2",
    "amount2",
    "productId3",
    "literage3",
    "amount3"
})
public class ServiceStationData
    implements Serializable
{

    protected String vehicleUsage;
    protected String odometerReading;
    protected String productId1;
    protected String literage1;
    protected String amount1;
    protected String productId2;
    protected String literage2;
    protected String amount2;
    protected String productId3;
    protected String literage3;
    protected String amount3;

    /**
     * Gets the value of the vehicleUsage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVehicleUsage() {
        return vehicleUsage;
    }

    /**
     * Sets the value of the vehicleUsage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVehicleUsage(String value) {
        this.vehicleUsage = value;
    }

    /**
     * Gets the value of the odometerReading property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOdometerReading() {
        return odometerReading;
    }

    /**
     * Sets the value of the odometerReading property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOdometerReading(String value) {
        this.odometerReading = value;
    }

    /**
     * Gets the value of the productId1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getProductId1() {
        return productId1;
    }

    /**
     * Sets the value of the productId1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setProductId1(String value) {
        this.productId1 = value;
    }

    /**
     * Gets the value of the literage1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLiterage1() {
        return literage1;
    }

    /**
     * Sets the value of the literage1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLiterage1(String value) {
        this.literage1 = value;
    }

    /**
     * Gets the value of the amount1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmount1() {
        return amount1;
    }

    /**
     * Sets the value of the amount1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmount1(String value) {
        this.amount1 = value;
    }

    /**
     * Gets the value of the productId2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getProductId2() {
        return productId2;
    }

    /**
     * Sets the value of the productId2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setProductId2(String value) {
        this.productId2 = value;
    }

    /**
     * Gets the value of the literage2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLiterage2() {
        return literage2;
    }

    /**
     * Sets the value of the literage2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLiterage2(String value) {
        this.literage2 = value;
    }

    /**
     * Gets the value of the amount2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmount2() {
        return amount2;
    }

    /**
     * Sets the value of the amount2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmount2(String value) {
        this.amount2 = value;
    }

    /**
     * Gets the value of the productId3 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getProductId3() {
        return productId3;
    }

    /**
     * Sets the value of the productId3 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setProductId3(String value) {
        this.productId3 = value;
    }

    /**
     * Gets the value of the literage3 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLiterage3() {
        return literage3;
    }

    /**
     * Sets the value of the literage3 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLiterage3(String value) {
        this.literage3 = value;
    }

    /**
     * Gets the value of the amount3 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmount3() {
        return amount3;
    }

    /**
     * Sets the value of the amount3 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmount3(String value) {
        this.amount3 = value;
    }

}
