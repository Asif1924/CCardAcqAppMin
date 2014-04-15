
package com.ctc.ctfs.channel.accountacquisition;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.ctc.ctfs.channel.accountacquisition package. 
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

    private final static QName _AccountApplicationRequest_QNAME = new QName("http://www.channel.ctfs.ctc.com/accountAcquisition/", "AccountApplicationRequest");
    private final static QName _AccountApplicationResponse_QNAME = new QName("http://www.channel.ctfs.ctc.com/accountAcquisition/", "AccountApplicationResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.ctc.ctfs.channel.accountacquisition
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AccountApplicationRequestType }
     * 
     */
    public AccountApplicationRequestType createAccountApplicationRequestType() {
        return new AccountApplicationRequestType();
    }

    /**
     * Create an instance of {@link AccountApplicationResponseType }
     * 
     */
    public AccountApplicationResponseType createAccountApplicationResponseType() {
        return new AccountApplicationResponseType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AccountApplicationRequestType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.channel.ctfs.ctc.com/accountAcquisition/", name = "AccountApplicationRequest")
    public JAXBElement<AccountApplicationRequestType> createAccountApplicationRequest(AccountApplicationRequestType value) {
        return new JAXBElement<AccountApplicationRequestType>(_AccountApplicationRequest_QNAME, AccountApplicationRequestType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AccountApplicationResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.channel.ctfs.ctc.com/accountAcquisition/", name = "AccountApplicationResponse")
    public JAXBElement<AccountApplicationResponseType> createAccountApplicationResponse(AccountApplicationResponseType value) {
        return new JAXBElement<AccountApplicationResponseType>(_AccountApplicationResponse_QNAME, AccountApplicationResponseType.class, null, value);
    }

}
