
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MessageDeliveryTypeEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="MessageDeliveryTypeEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Standard"/>
 *     &lt;enumeration value="DelayedDeliveryByMTAQueue"/>
 *     &lt;enumeration value="DelayedDeliveryByOMMQueue"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "MessageDeliveryTypeEnum")
@XmlEnum
public enum MessageDeliveryTypeEnum {

    @XmlEnumValue("Standard")
    STANDARD("Standard"),
    @XmlEnumValue("DelayedDeliveryByMTAQueue")
    DELAYED_DELIVERY_BY_MTA_QUEUE("DelayedDeliveryByMTAQueue"),
    @XmlEnumValue("DelayedDeliveryByOMMQueue")
    DELAYED_DELIVERY_BY_OMM_QUEUE("DelayedDeliveryByOMMQueue");
    private final String value;

    MessageDeliveryTypeEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MessageDeliveryTypeEnum fromValue(String v) {
        for (MessageDeliveryTypeEnum c: MessageDeliveryTypeEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
