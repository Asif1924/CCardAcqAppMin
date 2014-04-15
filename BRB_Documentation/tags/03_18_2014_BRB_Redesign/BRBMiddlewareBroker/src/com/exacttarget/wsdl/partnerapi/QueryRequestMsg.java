
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="QueryRequest" type="{http://exacttarget.com/wsdl/partnerAPI}QueryRequest"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "queryRequest"
})
@XmlRootElement(name = "QueryRequestMsg")
public class QueryRequestMsg
    implements Serializable
{

    @XmlElement(name = "QueryRequest", required = true)
    protected QueryRequest queryRequest;

    /**
     * Gets the value of the queryRequest property.
     * 
     * @return
     *     possible object is
     *     {@link QueryRequest }
     *     
     */
    public QueryRequest getQueryRequest() {
        return queryRequest;
    }

    /**
     * Sets the value of the queryRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link QueryRequest }
     *     
     */
    public void setQueryRequest(QueryRequest value) {
        this.queryRequest = value;
    }

}
