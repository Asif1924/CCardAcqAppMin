
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MinutelyRecurrencePatternTypeEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="MinutelyRecurrencePatternTypeEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Interval"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "MinutelyRecurrencePatternTypeEnum")
@XmlEnum
public enum MinutelyRecurrencePatternTypeEnum {

    @XmlEnumValue("Interval")
    INTERVAL("Interval");
    private final String value;

    MinutelyRecurrencePatternTypeEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MinutelyRecurrencePatternTypeEnum fromValue(String v) {
        for (MinutelyRecurrencePatternTypeEnum c: MinutelyRecurrencePatternTypeEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
