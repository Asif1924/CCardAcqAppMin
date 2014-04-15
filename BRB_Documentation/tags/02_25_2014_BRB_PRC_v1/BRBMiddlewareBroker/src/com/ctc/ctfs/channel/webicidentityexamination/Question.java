
package com.ctc.ctfs.channel.webicidentityexamination;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Question complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Question">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="text" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="answerId" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="state" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="maxTimeToAnswer" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="timeToAnswer" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="possibleAnswers" type="{http://www.channel.ctfs.ctc.com/WebICIdentityExamination}Answer" maxOccurs="5"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Question", propOrder = {
    "id",
    "text",
    "answerId",
    "state",
    "maxTimeToAnswer",
    "timeToAnswer",
    "possibleAnswers"
})
public class Question
    implements Serializable
{

    @XmlElement(required = true)
    protected String id;
    @XmlElement(required = true)
    protected String text;
    protected String answerId;
    protected String state;
    protected int maxTimeToAnswer;
    protected Integer timeToAnswer;
    @XmlElement(required = true)
    protected List<Answer> possibleAnswers;

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
        this.id = value;
    }

    /**
     * Gets the value of the text property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getText() {
        return text;
    }

    /**
     * Sets the value of the text property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setText(String value) {
        this.text = value;
    }

    /**
     * Gets the value of the answerId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAnswerId() {
        return answerId;
    }

    /**
     * Sets the value of the answerId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAnswerId(String value) {
        this.answerId = value;
    }

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setState(String value) {
        this.state = value;
    }

    /**
     * Gets the value of the maxTimeToAnswer property.
     * 
     */
    public int getMaxTimeToAnswer() {
        return maxTimeToAnswer;
    }

    /**
     * Sets the value of the maxTimeToAnswer property.
     * 
     */
    public void setMaxTimeToAnswer(int value) {
        this.maxTimeToAnswer = value;
    }

    /**
     * Gets the value of the timeToAnswer property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getTimeToAnswer() {
        return timeToAnswer;
    }

    /**
     * Sets the value of the timeToAnswer property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setTimeToAnswer(Integer value) {
        this.timeToAnswer = value;
    }

    /**
     * Gets the value of the possibleAnswers property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the possibleAnswers property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPossibleAnswers().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Answer }
     * 
     * 
     */
    public List<Answer> getPossibleAnswers() {
        if (possibleAnswers == null) {
            possibleAnswers = new ArrayList<Answer>();
        }
        return this.possibleAnswers;
    }

}
