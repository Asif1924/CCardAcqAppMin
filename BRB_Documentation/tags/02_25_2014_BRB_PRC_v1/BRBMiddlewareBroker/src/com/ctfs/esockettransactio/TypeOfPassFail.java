
package com.ctfs.esockettransactio;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for TypeOfPassFail.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="TypeOfPassFail">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="P"/>
 *     &lt;enumeration value="F"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "TypeOfPassFail")
@XmlEnum
public enum TypeOfPassFail {

    P,
    F;

    public String value() {
        return name();
    }

    public static TypeOfPassFail fromValue(String v) {
        return valueOf(v);
    }

}
