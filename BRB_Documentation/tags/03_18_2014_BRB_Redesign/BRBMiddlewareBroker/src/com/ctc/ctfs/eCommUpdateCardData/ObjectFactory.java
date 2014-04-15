
package com.ctc.ctfs.eCommUpdateCardData;

import java.math.BigDecimal;
import java.math.BigInteger;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.datatype.Duration;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.ctc.ctfs.eCommUpdateCardData package. 
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

    private final static QName _CardResponseTypeErrorMessage_QNAME = new QName("http://persistservice.cantire.com/", "errorMessage");
    private final static QName _AnyURI_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "anyURI");
    private final static QName _DateTime_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "dateTime");
    private final static QName _Char_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "char");
    private final static QName _AddressDetailsType_QNAME = new QName("http://persistservice.cantire.com/", "addressDetailsType");
    private final static QName _QName_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "QName");
    private final static QName _UnsignedShort_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "unsignedShort");
    private final static QName _PassFailType_QNAME = new QName("http://persistservice.cantire.com/", "passFailType");
    private final static QName _Float_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "float");
    private final static QName _Long_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "long");
    private final static QName _CardResponseType_QNAME = new QName("http://persistservice.cantire.com/", "cardResponseType");
    private final static QName _CustomerInfoType_QNAME = new QName("http://persistservice.cantire.com/", "customerInfoType");
    private final static QName _Short_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "short");
    private final static QName _Base64Binary_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "base64Binary");
    private final static QName _Byte_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "byte");
    private final static QName _CardDetailsType_QNAME = new QName("http://persistservice.cantire.com/", "cardDetailsType");
    private final static QName _Boolean_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "boolean");
    private final static QName _UnsignedByte_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "unsignedByte");
    private final static QName _AnyType_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "anyType");
    private final static QName _UnsignedInt_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "unsignedInt");
    private final static QName _Int_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "int");
    private final static QName _Decimal_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "decimal");
    private final static QName _LoyaltyDetailsType_QNAME = new QName("http://persistservice.cantire.com/", "loyaltyDetailsType");
    private final static QName _Double_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "double");
    private final static QName _Guid_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "guid");
    private final static QName _Duration_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "duration");
    private final static QName _CardRequestType_QNAME = new QName("http://persistservice.cantire.com/", "cardRequestType");
    private final static QName _String_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "string");
    private final static QName _UnsignedLong_QNAME = new QName("http://schemas.microsoft.com/2003/10/Serialization/", "unsignedLong");
    private final static QName _SaveCustomerCardDataRst_QNAME = new QName("http://tempuri.org/", "rst");
    private final static QName _SaveCustomerCardDataResponseSaveCustomerCardDataResult_QNAME = new QName("http://tempuri.org/", "SaveCustomerCardDataResult");
    private final static QName _CustomerInfoTypeFirstName_QNAME = new QName("http://persistservice.cantire.com/", "firstName");
    private final static QName _CustomerInfoTypeLastName_QNAME = new QName("http://persistservice.cantire.com/", "lastName");
    private final static QName _CustomerInfoTypePhone_QNAME = new QName("http://persistservice.cantire.com/", "phone");
    private final static QName _CustomerInfoTypeAddressDetails_QNAME = new QName("http://persistservice.cantire.com/", "addressDetails");
    private final static QName _CustomerInfoTypeLoyaltyDetails_QNAME = new QName("http://persistservice.cantire.com/", "loyaltyDetails");
    private final static QName _CustomerInfoTypeEmail_QNAME = new QName("http://persistservice.cantire.com/", "email");
    private final static QName _AddressDetailsTypeAddressLine2_QNAME = new QName("http://persistservice.cantire.com/", "addressLine2");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.ctc.ctfs.eCommUpdateCardData
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link CardResponseType }
     * 
     */
    public CardResponseType createCardResponseType() {
        return new CardResponseType();
    }

    /**
     * Create an instance of {@link CardDetailsType }
     * 
     */
    public CardDetailsType createCardDetailsType() {
        return new CardDetailsType();
    }

    /**
     * Create an instance of {@link CardRequestType }
     * 
     */
    public CardRequestType createCardRequestType() {
        return new CardRequestType();
    }

    /**
     * Create an instance of {@link SaveCustomerCardData }
     * 
     */
    public SaveCustomerCardData createSaveCustomerCardData() {
        return new SaveCustomerCardData();
    }

    /**
     * Create an instance of {@link SaveCustomerCardDataResponse }
     * 
     */
    public SaveCustomerCardDataResponse createSaveCustomerCardDataResponse() {
        return new SaveCustomerCardDataResponse();
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
     * Create an instance of {@link AddressDetailsType }
     * 
     */
    public AddressDetailsType createAddressDetailsType() {
        return new AddressDetailsType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "errorMessage", scope = CardResponseType.class)
    public JAXBElement<String> createCardResponseTypeErrorMessage(String value) {
        return new JAXBElement<String>(_CardResponseTypeErrorMessage_QNAME, String.class, CardResponseType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "anyURI")
    public JAXBElement<String> createAnyURI(String value) {
        return new JAXBElement<String>(_AnyURI_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "dateTime")
    public JAXBElement<XMLGregorianCalendar> createDateTime(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_DateTime_QNAME, XMLGregorianCalendar.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Integer }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "char")
    public JAXBElement<Integer> createChar(Integer value) {
        return new JAXBElement<Integer>(_Char_QNAME, Integer.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddressDetailsType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "addressDetailsType")
    public JAXBElement<AddressDetailsType> createAddressDetailsType(AddressDetailsType value) {
        return new JAXBElement<AddressDetailsType>(_AddressDetailsType_QNAME, AddressDetailsType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link QName }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "QName")
    public JAXBElement<QName> createQName(QName value) {
        return new JAXBElement<QName>(_QName_QNAME, QName.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Integer }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "unsignedShort")
    public JAXBElement<Integer> createUnsignedShort(Integer value) {
        return new JAXBElement<Integer>(_UnsignedShort_QNAME, Integer.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PassFailType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "passFailType")
    public JAXBElement<PassFailType> createPassFailType(PassFailType value) {
        return new JAXBElement<PassFailType>(_PassFailType_QNAME, PassFailType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Float }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "float")
    public JAXBElement<Float> createFloat(Float value) {
        return new JAXBElement<Float>(_Float_QNAME, Float.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Long }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "long")
    public JAXBElement<Long> createLong(Long value) {
        return new JAXBElement<Long>(_Long_QNAME, Long.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "cardResponseType")
    public JAXBElement<CardResponseType> createCardResponseType(CardResponseType value) {
        return new JAXBElement<CardResponseType>(_CardResponseType_QNAME, CardResponseType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CustomerInfoType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "customerInfoType")
    public JAXBElement<CustomerInfoType> createCustomerInfoType(CustomerInfoType value) {
        return new JAXBElement<CustomerInfoType>(_CustomerInfoType_QNAME, CustomerInfoType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Short }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "short")
    public JAXBElement<Short> createShort(Short value) {
        return new JAXBElement<Short>(_Short_QNAME, Short.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link byte[]}{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "base64Binary")
    public JAXBElement<byte[]> createBase64Binary(byte[] value) {
        return new JAXBElement<byte[]>(_Base64Binary_QNAME, byte[].class, null, ((byte[]) value));
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Byte }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "byte")
    public JAXBElement<Byte> createByte(Byte value) {
        return new JAXBElement<Byte>(_Byte_QNAME, Byte.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardDetailsType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "cardDetailsType")
    public JAXBElement<CardDetailsType> createCardDetailsType(CardDetailsType value) {
        return new JAXBElement<CardDetailsType>(_CardDetailsType_QNAME, CardDetailsType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Boolean }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "boolean")
    public JAXBElement<Boolean> createBoolean(Boolean value) {
        return new JAXBElement<Boolean>(_Boolean_QNAME, Boolean.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Short }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "unsignedByte")
    public JAXBElement<Short> createUnsignedByte(Short value) {
        return new JAXBElement<Short>(_UnsignedByte_QNAME, Short.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Object }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "anyType")
    public JAXBElement<Object> createAnyType(Object value) {
        return new JAXBElement<Object>(_AnyType_QNAME, Object.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Long }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "unsignedInt")
    public JAXBElement<Long> createUnsignedInt(Long value) {
        return new JAXBElement<Long>(_UnsignedInt_QNAME, Long.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Integer }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "int")
    public JAXBElement<Integer> createInt(Integer value) {
        return new JAXBElement<Integer>(_Int_QNAME, Integer.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigDecimal }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "decimal")
    public JAXBElement<BigDecimal> createDecimal(BigDecimal value) {
        return new JAXBElement<BigDecimal>(_Decimal_QNAME, BigDecimal.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LoyaltyDetailsType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "loyaltyDetailsType")
    public JAXBElement<LoyaltyDetailsType> createLoyaltyDetailsType(LoyaltyDetailsType value) {
        return new JAXBElement<LoyaltyDetailsType>(_LoyaltyDetailsType_QNAME, LoyaltyDetailsType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Double }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "double")
    public JAXBElement<Double> createDouble(Double value) {
        return new JAXBElement<Double>(_Double_QNAME, Double.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "guid")
    public JAXBElement<String> createGuid(String value) {
        return new JAXBElement<String>(_Guid_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Duration }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "duration")
    public JAXBElement<Duration> createDuration(Duration value) {
        return new JAXBElement<Duration>(_Duration_QNAME, Duration.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardRequestType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "cardRequestType")
    public JAXBElement<CardRequestType> createCardRequestType(CardRequestType value) {
        return new JAXBElement<CardRequestType>(_CardRequestType_QNAME, CardRequestType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "string")
    public JAXBElement<String> createString(String value) {
        return new JAXBElement<String>(_String_QNAME, String.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BigInteger }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.microsoft.com/2003/10/Serialization/", name = "unsignedLong")
    public JAXBElement<BigInteger> createUnsignedLong(BigInteger value) {
        return new JAXBElement<BigInteger>(_UnsignedLong_QNAME, BigInteger.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardRequestType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "rst", scope = SaveCustomerCardData.class)
    public JAXBElement<CardRequestType> createSaveCustomerCardDataRst(CardRequestType value) {
        return new JAXBElement<CardRequestType>(_SaveCustomerCardDataRst_QNAME, CardRequestType.class, SaveCustomerCardData.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CardResponseType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "SaveCustomerCardDataResult", scope = SaveCustomerCardDataResponse.class)
    public JAXBElement<CardResponseType> createSaveCustomerCardDataResponseSaveCustomerCardDataResult(CardResponseType value) {
        return new JAXBElement<CardResponseType>(_SaveCustomerCardDataResponseSaveCustomerCardDataResult_QNAME, CardResponseType.class, SaveCustomerCardDataResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "firstName", scope = CustomerInfoType.class)
    public JAXBElement<String> createCustomerInfoTypeFirstName(String value) {
        return new JAXBElement<String>(_CustomerInfoTypeFirstName_QNAME, String.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "lastName", scope = CustomerInfoType.class)
    public JAXBElement<String> createCustomerInfoTypeLastName(String value) {
        return new JAXBElement<String>(_CustomerInfoTypeLastName_QNAME, String.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "phone", scope = CustomerInfoType.class)
    public JAXBElement<String> createCustomerInfoTypePhone(String value) {
        return new JAXBElement<String>(_CustomerInfoTypePhone_QNAME, String.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddressDetailsType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "addressDetails", scope = CustomerInfoType.class)
    public JAXBElement<AddressDetailsType> createCustomerInfoTypeAddressDetails(AddressDetailsType value) {
        return new JAXBElement<AddressDetailsType>(_CustomerInfoTypeAddressDetails_QNAME, AddressDetailsType.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LoyaltyDetailsType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "loyaltyDetails", scope = CustomerInfoType.class)
    public JAXBElement<LoyaltyDetailsType> createCustomerInfoTypeLoyaltyDetails(LoyaltyDetailsType value) {
        return new JAXBElement<LoyaltyDetailsType>(_CustomerInfoTypeLoyaltyDetails_QNAME, LoyaltyDetailsType.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "email", scope = CustomerInfoType.class)
    public JAXBElement<String> createCustomerInfoTypeEmail(String value) {
        return new JAXBElement<String>(_CustomerInfoTypeEmail_QNAME, String.class, CustomerInfoType.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://persistservice.cantire.com/", name = "addressLine2", scope = AddressDetailsType.class)
    public JAXBElement<String> createAddressDetailsTypeAddressLine2(String value) {
        return new JAXBElement<String>(_AddressDetailsTypeAddressLine2_QNAME, String.class, AddressDetailsType.class, value);
    }

}
