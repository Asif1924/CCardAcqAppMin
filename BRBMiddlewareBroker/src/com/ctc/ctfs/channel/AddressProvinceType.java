
package com.ctc.ctfs.channel;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for addressProvinceType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="addressProvinceType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;maxLength value="2"/>
 *     &lt;enumeration value="AB"/>
 *     &lt;enumeration value="BC"/>
 *     &lt;enumeration value="MB"/>
 *     &lt;enumeration value="NB"/>
 *     &lt;enumeration value="NL"/>
 *     &lt;enumeration value="NT"/>
 *     &lt;enumeration value="NS"/>
 *     &lt;enumeration value="NU"/>
 *     &lt;enumeration value="ON"/>
 *     &lt;enumeration value="PE"/>
 *     &lt;enumeration value="QC"/>
 *     &lt;enumeration value="SK"/>
 *     &lt;enumeration value="YT"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "addressProvinceType", namespace = "http://www.channel.ctfs.ctc.com")
@XmlEnum
public enum AddressProvinceType {

    AB,
    BC,
    MB,
    NB,
    NL,
    NT,
    NS,
    NU,
    ON,
    PE,
    QC,
    SK,
    YT;

    public String value() {
        return name();
    }

    public static AddressProvinceType fromValue(String v) {
        return valueOf(v);
    }

}