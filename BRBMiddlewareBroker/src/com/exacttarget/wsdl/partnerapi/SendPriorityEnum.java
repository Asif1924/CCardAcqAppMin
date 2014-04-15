
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SendPriorityEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="SendPriorityEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Burst"/>
 *     &lt;enumeration value="Normal"/>
 *     &lt;enumeration value="Low"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "SendPriorityEnum")
@XmlEnum
public enum SendPriorityEnum {

    @XmlEnumValue("Burst")
    BURST("Burst"),
    @XmlEnumValue("Normal")
    NORMAL("Normal"),
    @XmlEnumValue("Low")
    LOW("Low");
    private final String value;

    SendPriorityEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static SendPriorityEnum fromValue(String v) {
        for (SendPriorityEnum c: SendPriorityEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
