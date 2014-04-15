
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for EventType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="EventType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Open"/>
 *     &lt;enumeration value="Click"/>
 *     &lt;enumeration value="HardBounce"/>
 *     &lt;enumeration value="SoftBounce"/>
 *     &lt;enumeration value="OtherBounce"/>
 *     &lt;enumeration value="Unsubscribe"/>
 *     &lt;enumeration value="Sent"/>
 *     &lt;enumeration value="NotSent"/>
 *     &lt;enumeration value="Survey"/>
 *     &lt;enumeration value="ForwardedEmail"/>
 *     &lt;enumeration value="ForwardedEmailOptIn"/>
 *     &lt;enumeration value="DeliveredEvent"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "EventType")
@XmlEnum
public enum EventType {

    @XmlEnumValue("Open")
    OPEN("Open"),
    @XmlEnumValue("Click")
    CLICK("Click"),
    @XmlEnumValue("HardBounce")
    HARD_BOUNCE("HardBounce"),
    @XmlEnumValue("SoftBounce")
    SOFT_BOUNCE("SoftBounce"),
    @XmlEnumValue("OtherBounce")
    OTHER_BOUNCE("OtherBounce"),
    @XmlEnumValue("Unsubscribe")
    UNSUBSCRIBE("Unsubscribe"),
    @XmlEnumValue("Sent")
    SENT("Sent"),
    @XmlEnumValue("NotSent")
    NOT_SENT("NotSent"),
    @XmlEnumValue("Survey")
    SURVEY("Survey"),
    @XmlEnumValue("ForwardedEmail")
    FORWARDED_EMAIL("ForwardedEmail"),
    @XmlEnumValue("ForwardedEmailOptIn")
    FORWARDED_EMAIL_OPT_IN("ForwardedEmailOptIn"),
    @XmlEnumValue("DeliveredEvent")
    DELIVERED_EVENT("DeliveredEvent");
    private final String value;

    EventType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static EventType fromValue(String v) {
        for (EventType c: EventType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
