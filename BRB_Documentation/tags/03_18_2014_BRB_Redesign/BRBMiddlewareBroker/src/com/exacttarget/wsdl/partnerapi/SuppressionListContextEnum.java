
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SuppressionListContextEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="SuppressionListContextEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Enterprise"/>
 *     &lt;enumeration value="BusinessUnit"/>
 *     &lt;enumeration value="SendClassification"/>
 *     &lt;enumeration value="Send"/>
 *     &lt;enumeration value="Global"/>
 *     &lt;enumeration value="SenderProfile"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "SuppressionListContextEnum")
@XmlEnum
public enum SuppressionListContextEnum {

    @XmlEnumValue("Enterprise")
    ENTERPRISE("Enterprise"),
    @XmlEnumValue("BusinessUnit")
    BUSINESS_UNIT("BusinessUnit"),
    @XmlEnumValue("SendClassification")
    SEND_CLASSIFICATION("SendClassification"),
    @XmlEnumValue("Send")
    SEND("Send"),
    @XmlEnumValue("Global")
    GLOBAL("Global"),
    @XmlEnumValue("SenderProfile")
    SENDER_PROFILE("SenderProfile");
    private final String value;

    SuppressionListContextEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static SuppressionListContextEnum fromValue(String v) {
        for (SuppressionListContextEnum c: SuppressionListContextEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
