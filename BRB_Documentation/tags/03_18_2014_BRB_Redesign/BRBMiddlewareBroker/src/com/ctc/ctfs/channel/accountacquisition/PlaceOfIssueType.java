
package com.ctc.ctfs.channel.accountacquisition;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PlaceOfIssueType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="PlaceOfIssueType">
 *   &lt;restriction base="{http://www.channel.ctfs.ctc.com/accountAcquisition/}ProvinceStateType">
 *     &lt;enumeration value="AB"/>
 *     &lt;enumeration value="BC"/>
 *     &lt;enumeration value="MB"/>
 *     &lt;enumeration value="NB"/>
 *     &lt;enumeration value="NL"/>
 *     &lt;enumeration value="NT"/>
 *     &lt;enumeration value="NS"/>
 *     &lt;enumeration value="NU"/>
 *     &lt;enumeration value="ON"/>
 *     &lt;enumeration value="PE"/>
 *     &lt;enumeration value="QC"/>
 *     &lt;enumeration value="SK"/>
 *     &lt;enumeration value="YT"/>
 *     &lt;enumeration value="CA"/>
 *     &lt;enumeration value="OT"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "PlaceOfIssueType")
@XmlEnum(ProvinceStateType.class)
public enum PlaceOfIssueType {


    /**
     * 
     * 						Provincial abbreviation for Alberta
     * 					
     * 
     */
    AB,

    /**
     * 
     * 						Provincial abbreviation for British Columbia
     * 					
     * 
     */
    BC,

    /**
     * 
     * 						Provincial abbreviation for Manitoba
     * 					
     * 
     */
    MB,

    /**
     * 
     * 						Provincial abbreviation for New Brunswick
     * 					
     * 
     */
    NB,

    /**
     * 
     * 						Provincial abbreviation for Newfoundland and Labrador
     * 					
     * 
     */
    NL,

    /**
     * 
     * 						Provincial abbreviation for the Northwest Territories
     * 					
     * 
     */
    NT,

    /**
     * 
     * 						Provincial abbreviation for Nova Scotia
     * 					
     * 
     */
    NS,

    /**
     * 
     * 						Provincial abbreviation for Nunavet
     * 					
     * 
     */
    NU,

    /**
     * 
     * 						Provincial abbreviation for Ontario
     * 					
     * 
     */
    ON,

    /**
     * 
     * 						Provincial abbreviation for Prince Edward Island
     * 					
     * 
     */
    PE,

    /**
     * 
     * 						Provincial abbreviation for Quebec
     * 					
     * 
     */
    QC,

    /**
     * 
     * 						Provincial abbreviation for Saskatchewan
     * 					
     * 
     */
    SK,

    /**
     * 
     * 						Provincial abbreviation for the Yukon territory
     * 					
     * 
     */
    YT,

    /**
     * 
     * 						Country abbreviation for Canada
     * 					
     * 
     */
    CA,

    /**
     * 
     * 						Other
     * 					
     * 
     */
    OT;

    public String value() {
        return name();
    }

    public static PlaceOfIssueType fromValue(String v) {
        return valueOf(v);
    }

}
