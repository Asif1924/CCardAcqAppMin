//
// Generated By:JAX-WS RI IBM 2.2.1-11/28/2011 08:28 AM(foreman)- (JAXB RI IBM 2.2.3-11/28/2011 06:21 AM(foreman)-)
//


package com.cantire.persistservice;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

@WebService(name = "PersistServiceDelegate", targetNamespace = "http://persistservice.cantire.com/")
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
@XmlSeeAlso({
    ObjectFactory.class
})
public interface PersistServiceDelegate {


    /**
     * 
     * @param saveCardRequest
     * @return
     *     returns com.cantire.persistservice.CardResponseType
     */
    @WebMethod(operationName = "SaveCustomerCardData", action = "http://persistservice.cantire.com/")
    @WebResult(name = "response", targetNamespace = "http://persistservice.cantire.com/", partName = "SaveCardResponse")
    public CardResponseType saveCustomerCardData(
        @WebParam(name = "request", targetNamespace = "http://persistservice.cantire.com/", partName = "SaveCardRequest")
        CardRequestType saveCardRequest);

}