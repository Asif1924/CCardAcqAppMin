/**
 * SoapBindingImpl.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

import java.util.logging.Logger;

import com.ctfs.BRB.EmailService.BRBEmail;
import com.ctfs.BRB.EmailService.BRBEmailUtil;

public class SoapBindingImpl implements com.exacttarget.wsdl.partnerAPI.Soap{
	static final Logger log = Logger.getLogger(SoapBindingImpl.class.getName());
	
    public com.exacttarget.wsdl.partnerAPI.CreateResponse create(com.exacttarget.wsdl.partnerAPI.CreateRequest parameters) throws java.rmi.RemoteException {
        String sMethod = "[create]::";
        log.info(sMethod + " called!");
        CreateResponse response = new CreateResponse();
        response.setOverallStatus("Failed");
        try
        {
        	APIObject[] objects = parameters.getObjects();
	        for(APIObject object : objects){
	        	TriggeredSend triggeredSend = (TriggeredSend) object;	        	
	        	TriggeredSendDefinition triggeredSendDefinition = triggeredSend.getTriggeredSendDefinition();//  object.getOwner().getUser().getDefaultBusinessUnitObject().getDefaultSendClassification().getSenderProfile().getAutoForwardTriggeredSend();
	        	//TriggeredSendDefinition triggeredSendDefinition = triggeredSend.getTriggeredSendDefinition(); 
	        	Subscriber[] subscribers = triggeredSend.getSubscribers(); //triggeredSendDefinition.getList().getSubscribers();
	        	for(Subscriber subscriber : subscribers){
	        		BRBEmail emailInfo = new BRBEmail();
	        		emailInfo.setTo(subscriber.getEmailAddress());
	        		Attribute[] subscriberAttributes = subscriber.getAttributes();
	        		for(Attribute attribute : subscriberAttributes){
	        			if(attribute.getName().equalsIgnoreCase("creditlimit")){
	        				emailInfo.setCreditLimit(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("apr")){
	        				emailInfo.setApr(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("cashApr")){
	        				emailInfo.setCashApr(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("CustomerName")){
	        				emailInfo.setCustomerName(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("OP_CreditProtector")){
	        				emailInfo.setCreditProtector(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("OP_IdentityWatchClassic")){
	        				emailInfo.setIdentityWatch(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("OP_ProtectionAdvantage")){
	        				emailInfo.setProtectionAdvantage(attribute.getValue());
	        			}
	        			if(attribute.getName().equalsIgnoreCase("productType")){
	        				emailInfo.setProductType(attribute.getValue());
	        			}
	        			
	        			
	        		}
	        		if(triggeredSendDefinition.getCustomerKey().equals("BRB_English")){
	        			emailInfo.setLang(BRBEmail.Language.ENU);
	        		}
	        		if(triggeredSendDefinition.getCustomerKey().equals("BRB_French")){
	        			emailInfo.setLang(BRBEmail.Language.FRC);
	        		}
	        		BRBEmailUtil emailUtil = new BRBEmailUtil(emailInfo.getProductType());
	        		if(emailUtil.sendEmail(emailInfo)){
	        			response.setOverallStatus("OK");	        			
	        		} else{
	        			response.setOverallStatus("Failed");
	        		}
	        	}        	
	        }
        }
        catch (final Exception e){
        	log.warning(sMethod + "Failed to send email via Exchange!" + e.getMessage());
        	e.printStackTrace();        	
        }
    	
    	return response;
    }

    public com.exacttarget.wsdl.partnerAPI.RetrieveResponseMsg retrieve(com.exacttarget.wsdl.partnerAPI.RetrieveRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.UpdateResponse update(com.exacttarget.wsdl.partnerAPI.UpdateRequest parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.DeleteResponse delete(com.exacttarget.wsdl.partnerAPI.DeleteRequest parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.QueryResponseMsg query(com.exacttarget.wsdl.partnerAPI.QueryRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.DefinitionResponseMsg describe(com.exacttarget.wsdl.partnerAPI.DefinitionRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.ExecuteResponseMsg execute(com.exacttarget.wsdl.partnerAPI.ExecuteRequest[] parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.PerformResponseMsg perform(com.exacttarget.wsdl.partnerAPI.PerformRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.ConfigureResponseMsg configure(com.exacttarget.wsdl.partnerAPI.ConfigureRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.ScheduleResponseMsg schedule(com.exacttarget.wsdl.partnerAPI.ScheduleRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.VersionInfoResponseMsg versionInfo(com.exacttarget.wsdl.partnerAPI.VersionInfoRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.ExtractResponseMsg extract(com.exacttarget.wsdl.partnerAPI.ExtractRequest[] parameters) throws java.rmi.RemoteException {
        return null;
    }

    public com.exacttarget.wsdl.partnerAPI.SystemStatusResponseMsg getSystemStatus(com.exacttarget.wsdl.partnerAPI.SystemStatusRequestMsg parameters) throws java.rmi.RemoteException {
        return null;
    }

}
