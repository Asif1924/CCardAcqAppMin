
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for YearlyRecurrencePatternTypeEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="YearlyRecurrencePatternTypeEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="ByDay"/>
 *     &lt;enumeration value="ByWeek"/>
 *     &lt;enumeration value="ByMonth"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "YearlyRecurrencePatternTypeEnum")
@XmlEnum
public enum YearlyRecurrencePatternTypeEnum {

    @XmlEnumValue("ByDay")
    BY_DAY("ByDay"),
    @XmlEnumValue("ByWeek")
    BY_WEEK("ByWeek"),
    @XmlEnumValue("ByMonth")
    BY_MONTH("ByMonth");
    private final String value;

    YearlyRecurrencePatternTypeEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static YearlyRecurrencePatternTypeEnum fromValue(String v) {
        for (YearlyRecurrencePatternTypeEnum c: YearlyRecurrencePatternTypeEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
