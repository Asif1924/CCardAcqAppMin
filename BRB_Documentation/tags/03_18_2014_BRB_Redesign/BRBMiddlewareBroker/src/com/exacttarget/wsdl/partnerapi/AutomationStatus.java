
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AutomationStatus.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="AutomationStatus">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Error"/>
 *     &lt;enumeration value="BuildingError"/>
 *     &lt;enumeration value="Building"/>
 *     &lt;enumeration value="Ready"/>
 *     &lt;enumeration value="Running"/>
 *     &lt;enumeration value="Paused"/>
 *     &lt;enumeration value="Stopped"/>
 *     &lt;enumeration value="Scheduled"/>
 *     &lt;enumeration value="AwaitingTrigger"/>
 *     &lt;enumeration value="InactiveTrigger"/>
 *     &lt;enumeration value="Skipped"/>
 *     &lt;enumeration value="Unknown"/>
 *     &lt;enumeration value="New"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "AutomationStatus")
@XmlEnum
public enum AutomationStatus {

    @XmlEnumValue("Error")
    ERROR("Error"),
    @XmlEnumValue("BuildingError")
    BUILDING_ERROR("BuildingError"),
    @XmlEnumValue("Building")
    BUILDING("Building"),
    @XmlEnumValue("Ready")
    READY("Ready"),
    @XmlEnumValue("Running")
    RUNNING("Running"),
    @XmlEnumValue("Paused")
    PAUSED("Paused"),
    @XmlEnumValue("Stopped")
    STOPPED("Stopped"),
    @XmlEnumValue("Scheduled")
    SCHEDULED("Scheduled"),
    @XmlEnumValue("AwaitingTrigger")
    AWAITING_TRIGGER("AwaitingTrigger"),
    @XmlEnumValue("InactiveTrigger")
    INACTIVE_TRIGGER("InactiveTrigger"),
    @XmlEnumValue("Skipped")
    SKIPPED("Skipped"),
    @XmlEnumValue("Unknown")
    UNKNOWN("Unknown"),
    @XmlEnumValue("New")
    NEW("New");
    private final String value;

    AutomationStatus(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static AutomationStatus fromValue(String v) {
        for (AutomationStatus c: AutomationStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
