
package com.ctc.ctfs.channel.webicusermanagement;

import javax.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.ctc.ctfs.channel.webicusermanagement package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {


    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.ctc.ctfs.channel.webicusermanagement
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link WebICCreateUserResponse }
     * 
     */
    public WebICCreateUserResponse createWebICCreateUserResponse() {
        return new WebICCreateUserResponse();
    }

    /**
     * Create an instance of {@link WebICCreateUserRequest }
     * 
     */
    public WebICCreateUserRequest createWebICCreateUserRequest() {
        return new WebICCreateUserRequest();
    }

    /**
     * Create an instance of {@link WebICUpdateUserRequest }
     * 
     */
    public WebICUpdateUserRequest createWebICUpdateUserRequest() {
        return new WebICUpdateUserRequest();
    }

    /**
     * Create an instance of {@link WebICUpdateUserResponse }
     * 
     */
    public WebICUpdateUserResponse createWebICUpdateUserResponse() {
        return new WebICUpdateUserResponse();
    }

    /**
     * Create an instance of {@link WebICDeleteUserResponse }
     * 
     */
    public WebICDeleteUserResponse createWebICDeleteUserResponse() {
        return new WebICDeleteUserResponse();
    }

    /**
     * Create an instance of {@link WebICDeleteUserRequest }
     * 
     */
    public WebICDeleteUserRequest createWebICDeleteUserRequest() {
        return new WebICDeleteUserRequest();
    }

}