
package com.exacttarget.wsdl.partnerapi;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for NotSentEvent complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="NotSentEvent">
 *   &lt;complexContent>
 *     &lt;extension base="{http://exacttarget.com/wsdl/partnerAPI}TrackingEvent">
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "NotSentEvent")
public class NotSentEvent
    extends TrackingEvent
    implements Serializable
{


}