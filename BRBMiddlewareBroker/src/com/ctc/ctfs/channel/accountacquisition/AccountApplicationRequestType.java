
package com.ctc.ctfs.channel.accountacquisition;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.CollapsedStringAdapter;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for AccountApplicationRequestType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AccountApplicationRequestType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="externalReferenceId">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="storeNumber">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}positiveInteger">
 *               &lt;maxInclusive value="9999"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="agentId">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="channelIndicator">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="IC"/>
 *               &lt;enumeration value="WP"/>
 *               &lt;enumeration value="IP"/>
 *               &lt;length value="2"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="agencyPromoCode">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;length value="5"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="acquistionStrategyCode">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="6"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="requestedProductType">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="3"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="loyaltyMembershipNumber">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}NumericStringType">
 *               &lt;maxLength value="16"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="firstName">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="lastName">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="middleInitial" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="dateOfBirth" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="sin" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}NumericStringType">
 *               &lt;maxLength value="9"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="idType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="BI"/>
 *               &lt;enumeration value="DR"/>
 *               &lt;enumeration value="HE"/>
 *               &lt;enumeration value="PA"/>
 *               &lt;enumeration value="RE"/>
 *               &lt;enumeration value="PR"/>
 *               &lt;enumeration value="IN"/>
 *               &lt;enumeration value="CI"/>
 *               &lt;enumeration value="BC"/>
 *               &lt;enumeration value="AB"/>
 *               &lt;enumeration value="SK"/>
 *               &lt;enumeration value="NS"/>
 *               &lt;enumeration value="PE"/>
 *               &lt;enumeration value="NB"/>
 *               &lt;enumeration value="NL"/>
 *               &lt;enumeration value="NT"/>
 *               &lt;enumeration value="NU"/>
 *               &lt;enumeration value="OT"/>
 *               &lt;enumeration value="ON"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="idNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="placeOfIssue" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}PlaceOfIssueType"/>
 *         &lt;element name="preferedLanguage">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="E|F"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="applicantGender" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;pattern value="M|F"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentAddressType" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="R"/>
 *               &lt;enumeration value="O"/>
 *               &lt;enumeration value="P"/>
 *               &lt;enumeration value="M"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentAddressLine1">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentAddressLine2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentCity">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="24"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentProvince" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}ProvinceType"/>
 *         &lt;element name="currentPostalCode" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}PostalCodeType"/>
 *         &lt;element name="currentCountry">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *               &lt;enumeration value="CA"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentTelephoneNumber">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="10"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="currentCellPhoneNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}NumericStringType">
 *               &lt;maxLength value="10"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="yearsAtCurrentAddress" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}YearsType" minOccurs="0"/>
 *         &lt;element name="monthsAtCurrentAddress" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}MonthsType" minOccurs="0"/>
 *         &lt;element name="currentEmailAddress" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="60"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="previousAddressLine1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="previousAddressLine2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="previousCity" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="24"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="previousProvinceState" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}ProvinceStateType" minOccurs="0"/>
 *         &lt;element name="previousPostalCode" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}PostalCodeType" minOccurs="0"/>
 *         &lt;element name="previousCountry" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}CountryType" minOccurs="0"/>
 *         &lt;element name="employementStatus" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="1"/>
 *               &lt;enumeration value="F"/>
 *               &lt;enumeration value="P"/>
 *               &lt;enumeration value="S"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="jobTitle">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="10"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="employementCategory">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="DR"/>
 *               &lt;enumeration value="FA"/>
 *               &lt;enumeration value="GU"/>
 *               &lt;enumeration value="HO"/>
 *               &lt;enumeration value="LA"/>
 *               &lt;enumeration value="MA"/>
 *               &lt;enumeration value="MI"/>
 *               &lt;enumeration value="OF"/>
 *               &lt;enumeration value="OW"/>
 *               &lt;enumeration value="PR"/>
 *               &lt;enumeration value="RE"/>
 *               &lt;enumeration value="RT"/>
 *               &lt;enumeration value="SA"/>
 *               &lt;enumeration value="SE"/>
 *               &lt;enumeration value="ST"/>
 *               &lt;enumeration value="TR"/>
 *               &lt;enumeration value="UN"/>
 *               &lt;enumeration value="OT"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="employerName" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="36"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="employerCity" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="24"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="employerProvince" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}ProvinceStateType" minOccurs="0"/>
 *         &lt;element name="employerCountry" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}CountryType" minOccurs="0"/>
 *         &lt;element name="employerTelephoneNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}NumericStringType">
 *               &lt;maxLength value="10"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="yearsAtEmployement" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}YearsType" minOccurs="0"/>
 *         &lt;element name="monthsAtEmployement" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}MonthsType" minOccurs="0"/>
 *         &lt;element name="grossAnnualIncome" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}positiveInteger">
 *               &lt;maxInclusive value="999999"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *          &lt;element name="grossAnnualHouseholdIncome" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}positiveInteger">
 *               &lt;maxInclusive value="999999"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="monthlyRentMortgageAmount" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}positiveInteger">
 *               &lt;maxInclusive value="9999"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="bankCardFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="bankLoanFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="chequingAccountFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="savingsAccountFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="storeCardFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="gasCardFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="supp1FirstName" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1LastName" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="50"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1MiddleInitial" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1Relationship" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="CLH"/>
 *               &lt;enumeration value="CLW"/>
 *               &lt;enumeration value="DAUG"/>
 *               &lt;enumeration value="FATH"/>
 *               &lt;enumeration value="HUSB"/>
 *               &lt;enumeration value="MOTH"/>
 *               &lt;enumeration value="SIGN"/>
 *               &lt;enumeration value="SON"/>
 *               &lt;enumeration value="SPOU"/>
 *               &lt;enumeration value="WIFE"/>
 *               &lt;enumeration value="OTHE"/>
 *               &lt;enumeration value="LEGA"/>
 *               &lt;enumeration value="ROOM"/>
 *               &lt;enumeration value="RELA"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1DateOfBirth" type="{http://www.w3.org/2001/XMLSchema}date" minOccurs="0"/>
 *         &lt;element name="supp1AddrSameAsPrimary" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType" minOccurs="0"/>
 *         &lt;element name="supp1AddressLine1" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1AddressLine2" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="40"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1City" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="24"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="supp1Province" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}ProvinceStateType" minOccurs="0"/>
 *         &lt;element name="supp1PostalCode" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}PostalCodeType" minOccurs="0"/>
 *         &lt;element name="supp1Country" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}CountryType" minOccurs="0"/>
 *         &lt;element name="supp1TelephoneNumber" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}NumericStringType">
 *               &lt;maxLength value="10"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="agreedToTermsFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="applicantSignature" type="{http://www.w3.org/2001/XMLSchema}base64Binary"/>
 *         &lt;element name="signatureFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="signatureMatchFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="dateSigned" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="insuranceAgreedFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType"/>
 *         &lt;element name="insuranceCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="CP"/>
 *               &lt;enumeration value="IL"/>
 *               &lt;enumeration value="IW"/>
 *               &lt;enumeration value="W3"/>
 *               &lt;enumeration value="W4"/>
 *               &lt;enumeration value="N"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="insuranceSignatureFlag" type="{http://www.channel.ctfs.ctc.com/accountAcquisition/}FlagType" minOccurs="0"/>
 *         &lt;element name="insuranceDateSigned" type="{http://www.w3.org/2001/XMLSchema}date" minOccurs="0"/>
 *         &lt;element name="insuranceSignature" type="{http://www.w3.org/2001/XMLSchema}base64Binary" minOccurs="0"/>
 *         &lt;element name="affiliationCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;enumeration value="00"/>
 *               &lt;enumeration value="1A"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="acquirerCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="2"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="TUSessionID" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="20"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="TUExamResult" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="1"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="emailConsentFlag" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}UpperCaseStringType">
 *               &lt;maxLength value="1"/>
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
@XmlType(name = "AccountApplicationRequestType", propOrder = {
    "externalReferenceId",
    "storeNumber",
    "agentId",
    "channelIndicator",
    "agencyPromoCode",
    "acquistionStrategyCode",
    "requestedProductType",
    "loyaltyMembershipNumber",
    "firstName",
    "lastName",
    "middleInitial",
    "dateOfBirth",
    "sin",
    "idType",
    "idNumber",
    "placeOfIssue",
    "preferedLanguage",
    "applicantGender",
    "currentAddressType",
    "currentAddressLine1",
    "currentAddressLine2",
    "currentCity",
    "currentProvince",
    "currentPostalCode",
    "currentCountry",
    "currentTelephoneNumber",
    "currentCellPhoneNumber",
    "yearsAtCurrentAddress",
    "monthsAtCurrentAddress",
    "currentEmailAddress",
    "previousAddressLine1",
    "previousAddressLine2",
    "previousCity",
    "previousProvinceState",
    "previousPostalCode",
    "previousCountry",
    "employementStatus",
    "jobTitle",
    "employementCategory",
    "employerName",
    "employerCity",
    "employerProvince",
    "employerCountry",
    "employerTelephoneNumber",
    "yearsAtEmployement",
    "monthsAtEmployement",
    "grossAnnualIncome",
    "grossAnnualHouseholdIncome",
    "monthlyRentMortgageAmount",
    "bankCardFlag",
    "bankLoanFlag",
    "chequingAccountFlag",
    "savingsAccountFlag",
    "storeCardFlag",
    "gasCardFlag",
    "supp1FirstName",
    "supp1LastName",
    "supp1MiddleInitial",
    "supp1Relationship",
    "supp1DateOfBirth",
    "supp1AddrSameAsPrimary",
    "supp1AddressLine1",
    "supp1AddressLine2",
    "supp1City",
    "supp1Province",
    "supp1PostalCode",
    "supp1Country",
    "supp1TelephoneNumber",
    "agreedToTermsFlag",
    "applicantSignature",
    "signatureFlag",
    "signatureMatchFlag",
    "dateSigned",
    "insuranceAgreedFlag",
    "insuranceCode",
    "insuranceSignatureFlag",
    "insuranceDateSigned",
    "insuranceSignature",
    "affiliationCode",
    "acquirerCode",
    "tuSessionID",
    "tuExamResult",
    "emailConsentFlag"
})
public class AccountApplicationRequestType
    implements Serializable
{

    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String externalReferenceId;
    protected int storeNumber;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String agentId;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String channelIndicator;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String agencyPromoCode;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String acquistionStrategyCode;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String requestedProductType;
    @XmlElement(required = true, nillable = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String loyaltyMembershipNumber;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String firstName;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String lastName;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String middleInitial;
    @XmlElement(required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar dateOfBirth;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String sin;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String idType;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String idNumber;
    protected PlaceOfIssueType placeOfIssue;
    @XmlElement(required = true)
    protected String preferedLanguage;
    protected String applicantGender;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentAddressType;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentAddressLine1;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentAddressLine2;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentCity;
    @XmlElement(required = true)
    protected ProvinceType currentProvince;
    @XmlElement(required = true)
    protected String currentPostalCode;
    @XmlElement(required = true)
    protected String currentCountry;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentTelephoneNumber;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentCellPhoneNumber;
    protected Integer yearsAtCurrentAddress;
    protected Integer monthsAtCurrentAddress;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String currentEmailAddress;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String previousAddressLine1;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String previousAddressLine2;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String previousCity;
    protected ProvinceStateType previousProvinceState;
    protected String previousPostalCode;
    protected CountryType previousCountry;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String employementStatus;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String jobTitle;
    @XmlElement(required = true)
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String employementCategory;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String employerName;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String employerCity;
    protected ProvinceStateType employerProvince;
    protected CountryType employerCountry;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String employerTelephoneNumber;
    protected Integer yearsAtEmployement;
    protected Integer monthsAtEmployement;
    protected Integer grossAnnualIncome;
    protected Integer grossAnnualHouseholdIncome;
    protected Integer monthlyRentMortgageAmount;
    @XmlElement(required = true)
    protected String bankCardFlag;
    @XmlElement(required = true)
    protected String bankLoanFlag;
    @XmlElement(required = true)
    protected String chequingAccountFlag;
    @XmlElement(required = true)
    protected String savingsAccountFlag;
    @XmlElement(required = true)
    protected String storeCardFlag;
    @XmlElement(required = true)
    protected String gasCardFlag;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1FirstName;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1LastName;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1MiddleInitial;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1Relationship;
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar supp1DateOfBirth;
    protected String supp1AddrSameAsPrimary;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1AddressLine1;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1AddressLine2;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1City;
    protected ProvinceStateType supp1Province;
    protected String supp1PostalCode;
    protected CountryType supp1Country;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String supp1TelephoneNumber;
    @XmlElement(required = true)
    protected String agreedToTermsFlag;
    @XmlElement(required = true)
    protected byte[] applicantSignature;
    @XmlElement(required = true)
    protected String signatureFlag;
    @XmlElement(required = true)
    protected String signatureMatchFlag;
    @XmlElement(required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar dateSigned;
    @XmlElement(required = true)
    protected String insuranceAgreedFlag;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String insuranceCode;
    protected String insuranceSignatureFlag;
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar insuranceDateSigned;
    protected byte[] insuranceSignature;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String affiliationCode;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String acquirerCode;
    @XmlElement(name = "TUSessionID")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String tuSessionID;
    @XmlElement(name = "TUExamResult")
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String tuExamResult;
    @XmlJavaTypeAdapter(CollapsedStringAdapter.class)
    protected String emailConsentFlag;

    /**
     * Gets the value of the externalReferenceId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getExternalReferenceId() {
        return externalReferenceId;
    }

    /**
     * Sets the value of the externalReferenceId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setExternalReferenceId(String value) {
        this.externalReferenceId = value;
    }

    /**
     * Gets the value of the storeNumber property.
     * 
     */
    public int getStoreNumber() {
        return storeNumber;
    }

    /**
     * Sets the value of the storeNumber property.
     * 
     */
    public void setStoreNumber(int value) {
        this.storeNumber = value;
    }

    /**
     * Gets the value of the agentId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgentId() {
        return agentId;
    }

    /**
     * Sets the value of the agentId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgentId(String value) {
        this.agentId = value;
    }

    /**
     * Gets the value of the channelIndicator property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChannelIndicator() {
        return channelIndicator;
    }

    /**
     * Sets the value of the channelIndicator property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChannelIndicator(String value) {
        this.channelIndicator = value;
    }

    /**
     * Gets the value of the agencyPromoCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgencyPromoCode() {
        return agencyPromoCode;
    }

    /**
     * Sets the value of the agencyPromoCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgencyPromoCode(String value) {
        this.agencyPromoCode = value;
    }

    /**
     * Gets the value of the acquistionStrategyCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAcquistionStrategyCode() {
        return acquistionStrategyCode;
    }

    /**
     * Sets the value of the acquistionStrategyCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAcquistionStrategyCode(String value) {
        this.acquistionStrategyCode = value;
    }

    /**
     * Gets the value of the requestedProductType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestedProductType() {
        return requestedProductType;
    }

    /**
     * Sets the value of the requestedProductType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestedProductType(String value) {
        this.requestedProductType = value;
    }

    /**
     * Gets the value of the loyaltyMembershipNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLoyaltyMembershipNumber() {
        return loyaltyMembershipNumber;
    }

    /**
     * Sets the value of the loyaltyMembershipNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLoyaltyMembershipNumber(String value) {
        this.loyaltyMembershipNumber = value;
    }

    /**
     * Gets the value of the firstName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the value of the firstName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFirstName(String value) {
        this.firstName = value;
    }

    /**
     * Gets the value of the lastName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the value of the lastName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLastName(String value) {
        this.lastName = value;
    }

    /**
     * Gets the value of the middleInitial property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMiddleInitial() {
        return middleInitial;
    }

    /**
     * Sets the value of the middleInitial property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMiddleInitial(String value) {
        this.middleInitial = value;
    }

    /**
     * Gets the value of the dateOfBirth property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateOfBirth() {
        return dateOfBirth;
    }

    /**
     * Sets the value of the dateOfBirth property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateOfBirth(XMLGregorianCalendar value) {
        this.dateOfBirth = value;
    }

    /**
     * Gets the value of the sin property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSin() {
        return sin;
    }

    /**
     * Sets the value of the sin property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSin(String value) {
        this.sin = value;
    }

    /**
     * Gets the value of the idType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdType() {
        return idType;
    }

    /**
     * Sets the value of the idType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdType(String value) {
        this.idType = value;
    }

    /**
     * Gets the value of the idNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIdNumber() {
        return idNumber;
    }

    /**
     * Sets the value of the idNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIdNumber(String value) {
        this.idNumber = value;
    }

    /**
     * Gets the value of the placeOfIssue property.
     * 
     * @return
     *     possible object is
     *     {@link PlaceOfIssueType }
     *     
     */
    public PlaceOfIssueType getPlaceOfIssue() {
        return placeOfIssue;
    }

    /**
     * Sets the value of the placeOfIssue property.
     * 
     * @param value
     *     allowed object is
     *     {@link PlaceOfIssueType }
     *     
     */
    public void setPlaceOfIssue(PlaceOfIssueType value) {
        this.placeOfIssue = value;
    }

    /**
     * Gets the value of the preferedLanguage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreferedLanguage() {
        return preferedLanguage;
    }

    /**
     * Sets the value of the preferedLanguage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreferedLanguage(String value) {
        this.preferedLanguage = value;
    }

    /**
     * Gets the value of the applicantGender property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getApplicantGender() {
        return applicantGender;
    }

    /**
     * Sets the value of the applicantGender property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setApplicantGender(String value) {
        this.applicantGender = value;
    }

    /**
     * Gets the value of the currentAddressType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentAddressType() {
        return currentAddressType;
    }

    /**
     * Sets the value of the currentAddressType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentAddressType(String value) {
        this.currentAddressType = value;
    }

    /**
     * Gets the value of the currentAddressLine1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentAddressLine1() {
        return currentAddressLine1;
    }

    /**
     * Sets the value of the currentAddressLine1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentAddressLine1(String value) {
        this.currentAddressLine1 = value;
    }

    /**
     * Gets the value of the currentAddressLine2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentAddressLine2() {
        return currentAddressLine2;
    }

    /**
     * Sets the value of the currentAddressLine2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentAddressLine2(String value) {
        this.currentAddressLine2 = value;
    }

    /**
     * Gets the value of the currentCity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentCity() {
        return currentCity;
    }

    /**
     * Sets the value of the currentCity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentCity(String value) {
        this.currentCity = value;
    }

    /**
     * Gets the value of the currentProvince property.
     * 
     * @return
     *     possible object is
     *     {@link ProvinceType }
     *     
     */
    public ProvinceType getCurrentProvince() {
        return currentProvince;
    }

    /**
     * Sets the value of the currentProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link ProvinceType }
     *     
     */
    public void setCurrentProvince(ProvinceType value) {
        this.currentProvince = value;
    }

    /**
     * Gets the value of the currentPostalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentPostalCode() {
        return currentPostalCode;
    }

    /**
     * Sets the value of the currentPostalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentPostalCode(String value) {
        this.currentPostalCode = value;
    }

    /**
     * Gets the value of the currentCountry property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentCountry() {
        return currentCountry;
    }

    /**
     * Sets the value of the currentCountry property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentCountry(String value) {
        this.currentCountry = value;
    }

    /**
     * Gets the value of the currentTelephoneNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentTelephoneNumber() {
        return currentTelephoneNumber;
    }

    /**
     * Sets the value of the currentTelephoneNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentTelephoneNumber(String value) {
        this.currentTelephoneNumber = value;
    }

    /**
     * Gets the value of the currentCellPhoneNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentCellPhoneNumber() {
        return currentCellPhoneNumber;
    }

    /**
     * Sets the value of the currentCellPhoneNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentCellPhoneNumber(String value) {
        this.currentCellPhoneNumber = value;
    }

    /**
     * Gets the value of the yearsAtCurrentAddress property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getYearsAtCurrentAddress() {
        return yearsAtCurrentAddress;
    }

    /**
     * Sets the value of the yearsAtCurrentAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setYearsAtCurrentAddress(Integer value) {
        this.yearsAtCurrentAddress = value;
    }

    /**
     * Gets the value of the monthsAtCurrentAddress property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getMonthsAtCurrentAddress() {
        return monthsAtCurrentAddress;
    }

    /**
     * Sets the value of the monthsAtCurrentAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setMonthsAtCurrentAddress(Integer value) {
        this.monthsAtCurrentAddress = value;
    }

    /**
     * Gets the value of the currentEmailAddress property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCurrentEmailAddress() {
        return currentEmailAddress;
    }

    /**
     * Sets the value of the currentEmailAddress property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCurrentEmailAddress(String value) {
        this.currentEmailAddress = value;
    }

    /**
     * Gets the value of the previousAddressLine1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreviousAddressLine1() {
        return previousAddressLine1;
    }

    /**
     * Sets the value of the previousAddressLine1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreviousAddressLine1(String value) {
        this.previousAddressLine1 = value;
    }

    /**
     * Gets the value of the previousAddressLine2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreviousAddressLine2() {
        return previousAddressLine2;
    }

    /**
     * Sets the value of the previousAddressLine2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreviousAddressLine2(String value) {
        this.previousAddressLine2 = value;
    }

    /**
     * Gets the value of the previousCity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreviousCity() {
        return previousCity;
    }

    /**
     * Sets the value of the previousCity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreviousCity(String value) {
        this.previousCity = value;
    }

    /**
     * Gets the value of the previousProvinceState property.
     * 
     * @return
     *     possible object is
     *     {@link ProvinceStateType }
     *     
     */
    public ProvinceStateType getPreviousProvinceState() {
        return previousProvinceState;
    }

    /**
     * Sets the value of the previousProvinceState property.
     * 
     * @param value
     *     allowed object is
     *     {@link ProvinceStateType }
     *     
     */
    public void setPreviousProvinceState(ProvinceStateType value) {
        this.previousProvinceState = value;
    }

    /**
     * Gets the value of the previousPostalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPreviousPostalCode() {
        return previousPostalCode;
    }

    /**
     * Sets the value of the previousPostalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPreviousPostalCode(String value) {
        this.previousPostalCode = value;
    }

    /**
     * Gets the value of the previousCountry property.
     * 
     * @return
     *     possible object is
     *     {@link CountryType }
     *     
     */
    public CountryType getPreviousCountry() {
        return previousCountry;
    }

    /**
     * Sets the value of the previousCountry property.
     * 
     * @param value
     *     allowed object is
     *     {@link CountryType }
     *     
     */
    public void setPreviousCountry(CountryType value) {
        this.previousCountry = value;
    }

    /**
     * Gets the value of the employementStatus property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployementStatus() {
        return employementStatus;
    }

    /**
     * Sets the value of the employementStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployementStatus(String value) {
        this.employementStatus = value;
    }

    /**
     * Gets the value of the jobTitle property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getJobTitle() {
        return jobTitle;
    }

    /**
     * Sets the value of the jobTitle property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setJobTitle(String value) {
        this.jobTitle = value;
    }

    /**
     * Gets the value of the employementCategory property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployementCategory() {
        return employementCategory;
    }

    /**
     * Sets the value of the employementCategory property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployementCategory(String value) {
        this.employementCategory = value;
    }

    /**
     * Gets the value of the employerName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployerName() {
        return employerName;
    }

    /**
     * Sets the value of the employerName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployerName(String value) {
        this.employerName = value;
    }

    /**
     * Gets the value of the employerCity property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployerCity() {
        return employerCity;
    }

    /**
     * Sets the value of the employerCity property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployerCity(String value) {
        this.employerCity = value;
    }

    /**
     * Gets the value of the employerProvince property.
     * 
     * @return
     *     possible object is
     *     {@link ProvinceStateType }
     *     
     */
    public ProvinceStateType getEmployerProvince() {
        return employerProvince;
    }

    /**
     * Sets the value of the employerProvince property.
     * 
     * @param value
     *     allowed object is
     *     {@link ProvinceStateType }
     *     
     */
    public void setEmployerProvince(ProvinceStateType value) {
        this.employerProvince = value;
    }

    /**
     * Gets the value of the employerCountry property.
     * 
     * @return
     *     possible object is
     *     {@link CountryType }
     *     
     */
    public CountryType getEmployerCountry() {
        return employerCountry;
    }

    /**
     * Sets the value of the employerCountry property.
     * 
     * @param value
     *     allowed object is
     *     {@link CountryType }
     *     
     */
    public void setEmployerCountry(CountryType value) {
        this.employerCountry = value;
    }

    /**
     * Gets the value of the employerTelephoneNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmployerTelephoneNumber() {
        return employerTelephoneNumber;
    }

    /**
     * Sets the value of the employerTelephoneNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmployerTelephoneNumber(String value) {
        this.employerTelephoneNumber = value;
    }

    /**
     * Gets the value of the yearsAtEmployement property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getYearsAtEmployement() {
        return yearsAtEmployement;
    }

    /**
     * Sets the value of the yearsAtEmployement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setYearsAtEmployement(Integer value) {
        this.yearsAtEmployement = value;
    }

    /**
     * Gets the value of the monthsAtEmployement property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getMonthsAtEmployement() {
        return monthsAtEmployement;
    }

    /**
     * Sets the value of the monthsAtEmployement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setMonthsAtEmployement(Integer value) {
        this.monthsAtEmployement = value;
    }

    /**
     * Gets the value of the grossAnnualIncome property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getGrossAnnualIncome() {
        return grossAnnualIncome;
    }

    /**
     * Sets the value of the grossAnnualIncome property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setGrossAnnualIncome(Integer value) {
        this.grossAnnualIncome = value;
    }

    
    
    
    /**
     * Gets the value of the grossAnnualHouseholdIncome property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getGrossAnnualHouseholdIncome() {
        return grossAnnualHouseholdIncome;
    }

    /**
     * Sets the value of the grossAnnualHouseholdIncome property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setGrossAnnualHouseholdIncome(Integer value) {
        this.grossAnnualHouseholdIncome = value;
    }
 
    /**
     * Gets the value of the monthlyRentMortgageAmount property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getMonthlyRentMortgageAmount() {
        return monthlyRentMortgageAmount;
    }

    /**
     * Sets the value of the monthlyRentMortgageAmount property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setMonthlyRentMortgageAmount(Integer value) {
        this.monthlyRentMortgageAmount = value;
    }

    /**
     * Gets the value of the bankCardFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBankCardFlag() {
        return bankCardFlag;
    }

    /**
     * Sets the value of the bankCardFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBankCardFlag(String value) {
        this.bankCardFlag = value;
    }

    /**
     * Gets the value of the bankLoanFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBankLoanFlag() {
        return bankLoanFlag;
    }

    /**
     * Sets the value of the bankLoanFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBankLoanFlag(String value) {
        this.bankLoanFlag = value;
    }

    /**
     * Gets the value of the chequingAccountFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getChequingAccountFlag() {
        return chequingAccountFlag;
    }

    /**
     * Sets the value of the chequingAccountFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setChequingAccountFlag(String value) {
        this.chequingAccountFlag = value;
    }

    /**
     * Gets the value of the savingsAccountFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSavingsAccountFlag() {
        return savingsAccountFlag;
    }

    /**
     * Sets the value of the savingsAccountFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSavingsAccountFlag(String value) {
        this.savingsAccountFlag = value;
    }

    /**
     * Gets the value of the storeCardFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStoreCardFlag() {
        return storeCardFlag;
    }

    /**
     * Sets the value of the storeCardFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStoreCardFlag(String value) {
        this.storeCardFlag = value;
    }

    /**
     * Gets the value of the gasCardFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGasCardFlag() {
        return gasCardFlag;
    }

    /**
     * Sets the value of the gasCardFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGasCardFlag(String value) {
        this.gasCardFlag = value;
    }

    /**
     * Gets the value of the supp1FirstName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1FirstName() {
        return supp1FirstName;
    }

    /**
     * Sets the value of the supp1FirstName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1FirstName(String value) {
        this.supp1FirstName = value;
    }

    /**
     * Gets the value of the supp1LastName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1LastName() {
        return supp1LastName;
    }

    /**
     * Sets the value of the supp1LastName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1LastName(String value) {
        this.supp1LastName = value;
    }

    /**
     * Gets the value of the supp1MiddleInitial property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1MiddleInitial() {
        return supp1MiddleInitial;
    }

    /**
     * Sets the value of the supp1MiddleInitial property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1MiddleInitial(String value) {
        this.supp1MiddleInitial = value;
    }

    /**
     * Gets the value of the supp1Relationship property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1Relationship() {
        return supp1Relationship;
    }

    /**
     * Sets the value of the supp1Relationship property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1Relationship(String value) {
        this.supp1Relationship = value;
    }

    /**
     * Gets the value of the supp1DateOfBirth property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getSupp1DateOfBirth() {
        return supp1DateOfBirth;
    }

    /**
     * Sets the value of the supp1DateOfBirth property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setSupp1DateOfBirth(XMLGregorianCalendar value) {
        this.supp1DateOfBirth = value;
    }

    /**
     * Gets the value of the supp1AddrSameAsPrimary property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1AddrSameAsPrimary() {
        return supp1AddrSameAsPrimary;
    }

    /**
     * Sets the value of the supp1AddrSameAsPrimary property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1AddrSameAsPrimary(String value) {
        this.supp1AddrSameAsPrimary = value;
    }

    /**
     * Gets the value of the supp1AddressLine1 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1AddressLine1() {
        return supp1AddressLine1;
    }

    /**
     * Sets the value of the supp1AddressLine1 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1AddressLine1(String value) {
        this.supp1AddressLine1 = value;
    }

    /**
     * Gets the value of the supp1AddressLine2 property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1AddressLine2() {
        return supp1AddressLine2;
    }

    /**
     * Sets the value of the supp1AddressLine2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1AddressLine2(String value) {
        this.supp1AddressLine2 = value;
    }

    /**
     * Gets the value of the supp1City property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1City() {
        return supp1City;
    }

    /**
     * Sets the value of the supp1City property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1City(String value) {
        this.supp1City = value;
    }

    /**
     * Gets the value of the supp1Province property.
     * 
     * @return
     *     possible object is
     *     {@link ProvinceStateType }
     *     
     */
    public ProvinceStateType getSupp1Province() {
        return supp1Province;
    }

    /**
     * Sets the value of the supp1Province property.
     * 
     * @param value
     *     allowed object is
     *     {@link ProvinceStateType }
     *     
     */
    public void setSupp1Province(ProvinceStateType value) {
        this.supp1Province = value;
    }

    /**
     * Gets the value of the supp1PostalCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1PostalCode() {
        return supp1PostalCode;
    }

    /**
     * Sets the value of the supp1PostalCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1PostalCode(String value) {
        this.supp1PostalCode = value;
    }

    /**
     * Gets the value of the supp1Country property.
     * 
     * @return
     *     possible object is
     *     {@link CountryType }
     *     
     */
    public CountryType getSupp1Country() {
        return supp1Country;
    }

    /**
     * Sets the value of the supp1Country property.
     * 
     * @param value
     *     allowed object is
     *     {@link CountryType }
     *     
     */
    public void setSupp1Country(CountryType value) {
        this.supp1Country = value;
    }

    /**
     * Gets the value of the supp1TelephoneNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSupp1TelephoneNumber() {
        return supp1TelephoneNumber;
    }

    /**
     * Sets the value of the supp1TelephoneNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSupp1TelephoneNumber(String value) {
        this.supp1TelephoneNumber = value;
    }

    /**
     * Gets the value of the agreedToTermsFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgreedToTermsFlag() {
        return agreedToTermsFlag;
    }

    /**
     * Sets the value of the agreedToTermsFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgreedToTermsFlag(String value) {
        this.agreedToTermsFlag = value;
    }

    /**
     * Gets the value of the applicantSignature property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getApplicantSignature() {
        return applicantSignature;
    }

    /**
     * Sets the value of the applicantSignature property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setApplicantSignature(byte[] value) {
        this.applicantSignature = ((byte[]) value);
    }

    /**
     * Gets the value of the signatureFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSignatureFlag() {
        return signatureFlag;
    }

    /**
     * Sets the value of the signatureFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSignatureFlag(String value) {
        this.signatureFlag = value;
    }

    /**
     * Gets the value of the signatureMatchFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSignatureMatchFlag() {
        return signatureMatchFlag;
    }

    /**
     * Sets the value of the signatureMatchFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSignatureMatchFlag(String value) {
        this.signatureMatchFlag = value;
    }

    /**
     * Gets the value of the dateSigned property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateSigned() {
        return dateSigned;
    }

    /**
     * Sets the value of the dateSigned property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateSigned(XMLGregorianCalendar value) {
        this.dateSigned = value;
    }

    /**
     * Gets the value of the insuranceAgreedFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInsuranceAgreedFlag() {
        return insuranceAgreedFlag;
    }

    /**
     * Sets the value of the insuranceAgreedFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInsuranceAgreedFlag(String value) {
        this.insuranceAgreedFlag = value;
    }

    /**
     * Gets the value of the insuranceCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInsuranceCode() {
        return insuranceCode;
    }

    /**
     * Sets the value of the insuranceCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInsuranceCode(String value) {
        this.insuranceCode = value;
    }

    /**
     * Gets the value of the insuranceSignatureFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInsuranceSignatureFlag() {
        return insuranceSignatureFlag;
    }

    /**
     * Sets the value of the insuranceSignatureFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInsuranceSignatureFlag(String value) {
        this.insuranceSignatureFlag = value;
    }

    /**
     * Gets the value of the insuranceDateSigned property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getInsuranceDateSigned() {
        return insuranceDateSigned;
    }

    /**
     * Sets the value of the insuranceDateSigned property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setInsuranceDateSigned(XMLGregorianCalendar value) {
        this.insuranceDateSigned = value;
    }

    /**
     * Gets the value of the insuranceSignature property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getInsuranceSignature() {
        return insuranceSignature;
    }

    /**
     * Sets the value of the insuranceSignature property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setInsuranceSignature(byte[] value) {
        this.insuranceSignature = ((byte[]) value);
    }

    /**
     * Gets the value of the affiliationCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAffiliationCode() {
        return affiliationCode;
    }

    /**
     * Sets the value of the affiliationCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAffiliationCode(String value) {
        this.affiliationCode = value;
    }

    /**
     * Gets the value of the acquirerCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAcquirerCode() {
        return acquirerCode;
    }

    /**
     * Sets the value of the acquirerCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAcquirerCode(String value) {
        this.acquirerCode = value;
    }

    /**
     * Gets the value of the tuSessionID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTUSessionID() {
        return tuSessionID;
    }

    /**
     * Sets the value of the tuSessionID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTUSessionID(String value) {
        this.tuSessionID = value;
    }

    /**
     * Gets the value of the tuExamResult property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTUExamResult() {
        return tuExamResult;
    }

    /**
     * Sets the value of the tuExamResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTUExamResult(String value) {
        this.tuExamResult = value;
    }

    /**
     * Gets the value of the emailConsentFlag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmailConsentFlag() {
        return emailConsentFlag;
    }

    /**
     * Sets the value of the emailConsentFlag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmailConsentFlag(String value) {
        this.emailConsentFlag = value;
    }

}
