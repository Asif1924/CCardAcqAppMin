//
// Generated By:JAX-WS RI IBM 2.1.6 in JDK 6 (JAXB RI IBM JAXB 2.1.10 in JDK 6)
//


package com.ctc.ctfs.channel.sharedservices;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;

@WebServiceClient(name = "SharedWebServices", targetNamespace = "http://web.sharedservices.ctfs.com/SharedWebServices/", wsdlLocation = "WEB-INF/wsdl/SharedWebServices/SharedWebServices_0_1.wsdl")
public class SharedWebServices_Service
    extends Service
{

    private final static URL SHAREDWEBSERVICES_WSDL_LOCATION;
    private final static Logger logger = Logger.getLogger(com.ctc.ctfs.channel.sharedservices.SharedWebServices_Service.class.getName());

    static {
        URL url = null;
        try {
            url = com.ctc.ctfs.channel.sharedservices.SharedWebServices_Service.class.getResource("/WEB-INF/wsdl/SharedWebServices/SharedWebServices_0_1.wsdl");
            if (url == null) throw new MalformedURLException("/WEB-INF/wsdl/SharedWebServices/SharedWebServices_0_1.wsdl does not exist in the module.");
        } catch (MalformedURLException e) {
            logger.warning("Failed to create URL for the wsdl Location: 'WEB-INF/wsdl/SharedWebServices/SharedWebServices_0_1.wsdl', retrying as a local file");
            logger.warning(e.getMessage());
        }
        SHAREDWEBSERVICES_WSDL_LOCATION = url;
    }

    public SharedWebServices_Service(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public SharedWebServices_Service() {
        super(SHAREDWEBSERVICES_WSDL_LOCATION, new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServices"));
    }

    /**
     * 
     * @return
     *     returns SharedWebServices
     */
    @WebEndpoint(name = "SharedWebServicesSOAP")
    public SharedWebServices getSharedWebServicesSOAP() {
        return super.getPort(new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServicesSOAP"), SharedWebServices.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns SharedWebServices
     */
    @WebEndpoint(name = "SharedWebServicesSOAP")
    public SharedWebServices getSharedWebServicesSOAP(WebServiceFeature... features) {
        return super.getPort(new QName("http://web.sharedservices.ctfs.com/SharedWebServices/", "SharedWebServicesSOAP"), SharedWebServices.class, features);
    }

}