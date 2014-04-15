
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ImportDefinitionColumnBasedActionType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ImportDefinitionColumnBasedActionType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="AddAndUpdate"/>
 *     &lt;enumeration value="AddButDoNotUpdate"/>
 *     &lt;enumeration value="Delete"/>
 *     &lt;enumeration value="Skip"/>
 *     &lt;enumeration value="UpdateButDoNotAdd"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ImportDefinitionColumnBasedActionType")
@XmlEnum
public enum ImportDefinitionColumnBasedActionType {

    @XmlEnumValue("AddAndUpdate")
    ADD_AND_UPDATE("AddAndUpdate"),
    @XmlEnumValue("AddButDoNotUpdate")
    ADD_BUT_DO_NOT_UPDATE("AddButDoNotUpdate"),
    @XmlEnumValue("Delete")
    DELETE("Delete"),
    @XmlEnumValue("Skip")
    SKIP("Skip"),
    @XmlEnumValue("UpdateButDoNotAdd")
    UPDATE_BUT_DO_NOT_ADD("UpdateButDoNotAdd");
    private final String value;

    ImportDefinitionColumnBasedActionType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ImportDefinitionColumnBasedActionType fromValue(String v) {
        for (ImportDefinitionColumnBasedActionType c: ImportDefinitionColumnBasedActionType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
