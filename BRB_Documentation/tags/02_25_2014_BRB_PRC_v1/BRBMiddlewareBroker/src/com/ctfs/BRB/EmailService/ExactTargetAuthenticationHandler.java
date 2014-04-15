package com.ctfs.BRB.EmailService;

import javax.xml.namespace.QName;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPFactory;
import javax.xml.soap.SOAPHeader;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;
import java.util.Set;
import java.util.logging.Logger;

public class ExactTargetAuthenticationHandler implements SOAPHandler<SOAPMessageContext> {
	static Logger log = Logger.getLogger(ExactTargetAuthenticationHandler.class.getName());
	
    private String username;
    private String password;

    public ExactTargetAuthenticationHandler(final String username, final String password) {
        this.username = username;
        this.password = password;
    }

    @Override
    public boolean handleMessage(final SOAPMessageContext context) {
    	String sMethod = "[handleMessage]::";
    	log.info(sMethod + " called!");
    	
        final String prefixUri = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-";
        final String security = prefixUri + "wssecurity-secext-1.0.xsd";
        final String utility = prefixUri + "wssecurity-utility-1.0.xsd";
        final String password = prefixUri + "username-token-profile-1.0#PasswordText";

        final Boolean outboundIndicator = (Boolean) context.get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);

        if (outboundIndicator) {
            try {
                final SOAPEnvelope envelope = context.getMessage().getSOAPPart().getEnvelope();
                final SOAPFactory factory = SOAPFactory.newInstance();
                final String prefix = "wsse";
                final SOAPElement securityElem = factory.createElement("Security", prefix, security);
                final SOAPElement tokenElem = factory.createElement("UsernameToken", prefix, security);
                //tokenElem.addAttribute(QName.valueOf("wsu:Id"), "UsernameToken-2");
                //tokenElem.addAttribute(QName.valueOf("xmlns:wsu"), utility);
                final SOAPElement userElem = factory.createElement("Username", prefix, security);
                userElem.addTextNode(this.username);
                final SOAPElement pwdElem = factory.createElement("Password", prefix, security);
                pwdElem.addTextNode(this.password);
                pwdElem.addAttribute(QName.valueOf("Type"), password);
                tokenElem.addChildElement(userElem);
                tokenElem.addChildElement(pwdElem);
                securityElem.addChildElement(tokenElem);
                final SOAPHeader header = envelope.addHeader();
                header.addChildElement(securityElem);
            } catch (final Exception ex) {
            	log.warning(sMethod + " Exception: " + ex.getMessage());
            }
        }
        return true;
    }

    @Override
    public boolean handleFault(final SOAPMessageContext context) {
    	String sMethod = "[handleFault]::";
    	log.warning(sMethod + "Error occurred when getting auth.");
    	
        return false;
    }

    @Override
    public void close(final MessageContext context) {
    }

    @Override
    public Set<QName> getHeaders() {
        return null;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
