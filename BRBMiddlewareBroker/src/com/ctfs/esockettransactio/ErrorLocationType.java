
package com.ctfs.esockettransactio;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ErrorLocationType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ErrorLocationType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Client"/>
 *     &lt;enumeration value="Webservice"/>
 *     &lt;enumeration value="Application"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ErrorLocationType")
@XmlEnum
public enum ErrorLocationType {

    @XmlEnumValue("Client")
    CLIENT("Client"),
    @XmlEnumValue("Webservice")
    WEBSERVICE("Webservice"),
    @XmlEnumValue("Application")
    APPLICATION("Application");
    private final String value;

    ErrorLocationType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ErrorLocationType fromValue(String v) {
        for (ErrorLocationType c: ErrorLocationType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
