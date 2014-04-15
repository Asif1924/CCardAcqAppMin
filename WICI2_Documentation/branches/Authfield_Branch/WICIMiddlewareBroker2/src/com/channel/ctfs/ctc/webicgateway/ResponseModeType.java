
package com.channel.ctfs.ctc.webicgateway;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ResponseModeType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ResponseModeType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Synchronous"/>
 *     &lt;enumeration value="Asynchronous"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ResponseModeType")
@XmlEnum
public enum ResponseModeType {

    @XmlEnumValue("Synchronous")
    SYNCHRONOUS("Synchronous"),
    @XmlEnumValue("Asynchronous")
    ASYNCHRONOUS("Asynchronous");
    private final String value;

    ResponseModeType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ResponseModeType fromValue(String v) {
        for (ResponseModeType c: ResponseModeType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
