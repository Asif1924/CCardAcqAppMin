
package com.exacttarget.wsdl.partnerapi;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DataSourceTypeEnum.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="DataSourceTypeEnum">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="List"/>
 *     &lt;enumeration value="CustomObject"/>
 *     &lt;enumeration value="DomainExclusion"/>
 *     &lt;enumeration value="SalesForceReport"/>
 *     &lt;enumeration value="SalesForceCampaign"/>
 *     &lt;enumeration value="FilterDefinition"/>
 *     &lt;enumeration value="OptOutList"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "DataSourceTypeEnum")
@XmlEnum
public enum DataSourceTypeEnum {

    @XmlEnumValue("List")
    LIST("List"),
    @XmlEnumValue("CustomObject")
    CUSTOM_OBJECT("CustomObject"),
    @XmlEnumValue("DomainExclusion")
    DOMAIN_EXCLUSION("DomainExclusion"),
    @XmlEnumValue("SalesForceReport")
    SALES_FORCE_REPORT("SalesForceReport"),
    @XmlEnumValue("SalesForceCampaign")
    SALES_FORCE_CAMPAIGN("SalesForceCampaign"),
    @XmlEnumValue("FilterDefinition")
    FILTER_DEFINITION("FilterDefinition"),
    @XmlEnumValue("OptOutList")
    OPT_OUT_LIST("OptOutList");
    private final String value;

    DataSourceTypeEnum(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static DataSourceTypeEnum fromValue(String v) {
        for (DataSourceTypeEnum c: DataSourceTypeEnum.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
