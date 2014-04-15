
package com.ctfs.BRB.persistservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.ctfs.BRB.persistservice package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Response_QNAME = new QName("http://persistservice.BRB.ctfs.com/", "response");
    private final static QName _Request_QNAME = new QName("http://persistservice.BRB.ctfs.com/", "request");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.ctfs.BRB.persistservice
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link CustomerInfoType }
     * 
     */
    public CustomerInfoType createCustomerInfoType() {
        return new CustomerInfoType();
    }

    /**
     * Create an instance of {@link LoyaltyDetailsType }
     * 
     */
    public LoyaltyDetailsType createLoyaltyDetailsType() {
        return new LoyaltyDetailsType();
    }

    /**
     * Create an instance of {@link BrbResponseType }
     * 
     */
    public BrbResponseType createBrbResponseType() {
        return new BrbResponseType();
    }

    /**
     * Create an instance of {@link BrbRequestType }
     * 
     */
    public BrbRequestType createBrbRequestType() {
        return new BrbRequestType();
    }

    /**
     * Create an instance of {@link AddressDetailsType }
     * 
     */
    public AddressDetailsType createAddressDetailsType() {
        return new AddressDetailsType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BrbResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.BRB.ctfs.com/", name = "response")
    public JAXBElement<BrbResponseType> createResponse(BrbResponseType value) {
        return new JAXBElement<BrbResponseType>(_Response_QNAME, BrbResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BrbRequestType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.BRB.ctfs.com/", name = "request")
    public JAXBElement<BrbRequestType> createRequest(BrbRequestType value) {
        return new JAXBElement<BrbRequestType>(_Request_QNAME, BrbRequestType.class, null, value);
    }

}
