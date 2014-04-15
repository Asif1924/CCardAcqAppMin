
package com.cantire.persistservice;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.cantire.persistservice package. 
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

    private final static QName _Response_QNAME = new QName("http://persistservice.cantire.com/", "response");
    private final static QName _Request_QNAME = new QName("http://persistservice.cantire.com/", "request");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.cantire.persistservice
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AddressDetailsType }
     * 
     */
    public AddressDetailsType createAddressDetailsType() {
        return new AddressDetailsType();
    }

    /**
     * Create an instance of {@link CustomerInfoType }
     * 
     */
    public CustomerInfoType createCustomerInfoType() {
        return new CustomerInfoType();
    }

    /**
     * Create an instance of {@link CardRequestType }
     * 
     */
    public CardRequestType createCardRequestType() {
        return new CardRequestType();
    }

    /**
     * Create an instance of {@link LoyaltyDetailsType }
     * 
     */
    public LoyaltyDetailsType createLoyaltyDetailsType() {
        return new LoyaltyDetailsType();
    }

    /**
     * Create an instance of {@link CardDetailsType }
     * 
     */
    public CardDetailsType createCardDetailsType() {
        return new CardDetailsType();
    }

    /**
     * Create an instance of {@link CardResponseType }
     * 
     */
    public CardResponseType createCardResponseType() {
        return new CardResponseType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "response")
    public JAXBElement<CardResponseType> createResponse(CardResponseType value) {
        return new JAXBElement<CardResponseType>(_Response_QNAME, CardResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardRequestType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "request")
    public JAXBElement<CardRequestType> createRequest(CardRequestType value) {
        return new JAXBElement<CardRequestType>(_Request_QNAME, CardRequestType.class, null, value);
    }

}