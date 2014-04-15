
package com.ctc.ctfs.channel.accountacquisition;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CountryType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="CountryType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="CA"/>
 *     &lt;enumeration value="US"/>
 *     &lt;enumeration value="OT"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "CountryType")
@XmlEnum
public enum CountryType {

    CA,
    US,

    /**
     * 
     * 						Exception abbreviation for any 
     * 						country code lying outside the 
     * 						north american continent.
     * 					
     * 
     */
    OT;

    public String value() {
        return name();
    }

    public static CountryType fromValue(String v) {
        return valueOf(v);
    }

}
