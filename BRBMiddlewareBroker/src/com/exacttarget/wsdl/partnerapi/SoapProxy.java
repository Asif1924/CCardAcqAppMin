package com.exacttarget.wsdl.partnerapi;

import javax.naming.InitialContext;
import javax.naming.NamingException;

import java.net.URL;

import javax.xml.namespace.QName;
import javax.xml.transform.Source;
import javax.xml.ws.BindingProvider;
import javax.xml.ws.Dispatch;
import javax.xml.ws.Service;
import javax.xml.ws.soap.SOAPBinding;

public class SoapProxy{

    protected Descriptor _descriptor;

    public class Descriptor {
        private com.exacttarget.wsdl.partnerapi.PartnerAPI _service = null;
        private com.exacttarget.wsdl.partnerapi.Soap _proxy = null;
        private Dispatch<Source> _dispatch = null;
        private boolean _useJNDIOnly = false;

        public Descriptor() {
            init();
        }

        public Descriptor(URL wsdlLocation, QName serviceName) {
            _service = new com.exacttarget.wsdl.partnerapi.PartnerAPI(wsdlLocation, serviceName);
            initCommon();
        }

        public void init() {
            _service = null;
            _proxy = null;
            _dispatch = null;
            try
            {
                InitialContext ctx = new InitialContext();
                _service = (com.exacttarget.wsdl.partnerapi.PartnerAPI)ctx.lookup("java:comp/env/service/PartnerAPI");
            }
            catch (NamingException e)
            {
                if ("true".equalsIgnoreCase(System.getProperty("DEBUG_PROXY"))) {
                    System.out.println("JNDI lookup failure: javax.naming.NamingException: " + e.getMessage());
                    e.printStackTrace(System.out);
                }
            }

            if (_service == null && !_useJNDIOnly)
                _service = new com.exacttarget.wsdl.partnerapi.PartnerAPI();
            initCommon();
        }

        private void initCommon() {
            _proxy = _service.getSoap();
        }

        public com.exacttarget.wsdl.partnerapi.Soap getProxy() {
            return _proxy;
        }

        public void useJNDIOnly(boolean useJNDIOnly) {
            _useJNDIOnly = useJNDIOnly;
            init();
        }

        public Dispatch<Source> getDispatch() {
            if (_dispatch == null ) {
                QName portQName = new QName("http://exacttarget.com/wsdl/partnerAPI", "Soap");
                _dispatch = _service.createDispatch(portQName, Source.class, Service.Mode.MESSAGE);

                String proxyEndpointUrl = getEndpoint();
                BindingProvider bp = (BindingProvider) _dispatch;
                String dispatchEndpointUrl = (String) bp.getRequestContext().get(BindingProvider.ENDPOINT_ADDRESS_PROPERTY);
                if (!dispatchEndpointUrl.equals(proxyEndpointUrl))
                    bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, proxyEndpointUrl);
            }
            return _dispatch;
        }

        public String getEndpoint() {
            BindingProvider bp = (BindingProvider) _proxy;
            return (String) bp.getRequestContext().get(BindingProvider.ENDPOINT_ADDRESS_PROPERTY);
        }

        public void setEndpoint(String endpointUrl) {
            BindingProvider bp = (BindingProvider) _proxy;
            bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, endpointUrl);

            if (_dispatch != null ) {
                bp = (BindingProvider) _dispatch;
                bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, endpointUrl);
            }
        }

        public void setMTOMEnabled(boolean enable) {
            SOAPBinding binding = (SOAPBinding) ((BindingProvider) _proxy).getBinding();
            binding.setMTOMEnabled(enable);
        }
    }

    public SoapProxy() {
        _descriptor = new Descriptor();
        _descriptor.setMTOMEnabled(false);
    }

    public SoapProxy(URL wsdlLocation, QName serviceName) {
        _descriptor = new Descriptor(wsdlLocation, serviceName);
        _descriptor.setMTOMEnabled(false);
    }

    public Descriptor _getDescriptor() {
        return _descriptor;
    }

    public CreateResponse create(CreateRequest parameters) {
        return _getDescriptor().getProxy().create(parameters);
    }

    public RetrieveResponseMsg retrieve(RetrieveRequestMsg parameters) {
        return _getDescriptor().getProxy().retrieve(parameters);
    }

    public UpdateResponse update(UpdateRequest parameters) {
        return _getDescriptor().getProxy().update(parameters);
    }

    public DeleteResponse delete(DeleteRequest parameters) {
        return _getDescriptor().getProxy().delete(parameters);
    }

    public QueryResponseMsg query(QueryRequestMsg parameters) {
        return _getDescriptor().getProxy().query(parameters);
    }

    public DefinitionResponseMsg describe(DefinitionRequestMsg parameters) {
        return _getDescriptor().getProxy().describe(parameters);
    }

    public ExecuteResponseMsg execute(ExecuteRequestMsg parameters) {
        return _getDescriptor().getProxy().execute(parameters);
    }

    public PerformResponseMsg perform(PerformRequestMsg parameters) {
        return _getDescriptor().getProxy().perform(parameters);
    }

    public ConfigureResponseMsg configure(ConfigureRequestMsg parameters) {
        return _getDescriptor().getProxy().configure(parameters);
    }

    public ScheduleResponseMsg schedule(ScheduleRequestMsg parameters) {
        return _getDescriptor().getProxy().schedule(parameters);
    }

    public VersionInfoResponseMsg versionInfo(VersionInfoRequestMsg parameters) {
        return _getDescriptor().getProxy().versionInfo(parameters);
    }

    public ExtractResponseMsg extract(ExtractRequestMsg parameters) {
        return _getDescriptor().getProxy().extract(parameters);
    }

    public SystemStatusResponseMsg getSystemStatus(SystemStatusRequestMsg parameters) {
        return _getDescriptor().getProxy().getSystemStatus(parameters);
    }

}