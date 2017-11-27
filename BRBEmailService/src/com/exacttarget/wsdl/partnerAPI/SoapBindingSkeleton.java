/**
 * SoapBindingSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.exacttarget.wsdl.partnerAPI;

public class SoapBindingSkeleton implements com.exacttarget.wsdl.partnerAPI.Soap, org.apache.axis.wsdl.Skeleton {
    private com.exacttarget.wsdl.partnerAPI.Soap impl;
    private static java.util.Map _myOperations = new java.util.Hashtable();
    private static java.util.Collection _myOperationsList = new java.util.ArrayList();

    /**
    * Returns List of OperationDesc objects with this name
    */
    public static java.util.List getOperationDescByName(java.lang.String methodName) {
        return (java.util.List)_myOperations.get(methodName);
    }

    /**
    * Returns Collection of OperationDescs
    */
    public static java.util.Collection getOperationDescs() {
        return _myOperationsList;
    }

    static {
        org.apache.axis.description.OperationDesc _oper;
        org.apache.axis.description.FaultDesc _fault;
        org.apache.axis.description.ParameterDesc [] _params;
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "CreateRequest"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">CreateRequest"), com.exacttarget.wsdl.partnerAPI.CreateRequest.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("create", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "CreateResponse"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">CreateResponse"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Create"));
        _oper.setSoapAction("Create");
        _myOperationsList.add(_oper);
        if (_myOperations.get("create") == null) {
            _myOperations.put("create", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("create")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "RetrieveRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">RetrieveRequestMsg"), com.exacttarget.wsdl.partnerAPI.RetrieveRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("retrieve", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "RetrieveResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">RetrieveResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Retrieve"));
        _oper.setSoapAction("Retrieve");
        _myOperationsList.add(_oper);
        if (_myOperations.get("retrieve") == null) {
            _myOperations.put("retrieve", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("retrieve")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "UpdateRequest"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">UpdateRequest"), com.exacttarget.wsdl.partnerAPI.UpdateRequest.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("update", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "UpdateResponse"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">UpdateResponse"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Update"));
        _oper.setSoapAction("Update");
        _myOperationsList.add(_oper);
        if (_myOperations.get("update") == null) {
            _myOperations.put("update", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("update")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DeleteRequest"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">DeleteRequest"), com.exacttarget.wsdl.partnerAPI.DeleteRequest.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("delete", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DeleteResponse"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">DeleteResponse"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Delete"));
        _oper.setSoapAction("Delete");
        _myOperationsList.add(_oper);
        if (_myOperations.get("delete") == null) {
            _myOperations.put("delete", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("delete")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "QueryRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">QueryRequestMsg"), com.exacttarget.wsdl.partnerAPI.QueryRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("query", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "QueryResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">QueryResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Query"));
        _oper.setSoapAction("Query");
        _myOperationsList.add(_oper);
        if (_myOperations.get("query") == null) {
            _myOperations.put("query", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("query")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DefinitionRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">DefinitionRequestMsg"), com.exacttarget.wsdl.partnerAPI.DefinitionRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("describe", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "DefinitionResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">DefinitionResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Describe"));
        _oper.setSoapAction("Describe");
        _myOperationsList.add(_oper);
        if (_myOperations.get("describe") == null) {
            _myOperations.put("describe", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("describe")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ExecuteRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ExecuteRequestMsg"), com.exacttarget.wsdl.partnerAPI.ExecuteRequest[].class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("execute", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ExecuteResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ExecuteResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Execute"));
        _oper.setSoapAction("Execute");
        _myOperationsList.add(_oper);
        if (_myOperations.get("execute") == null) {
            _myOperations.put("execute", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("execute")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "PerformRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">PerformRequestMsg"), com.exacttarget.wsdl.partnerAPI.PerformRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("perform", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "PerformResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">PerformResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Perform"));
        _oper.setSoapAction("Perform");
        _myOperationsList.add(_oper);
        if (_myOperations.get("perform") == null) {
            _myOperations.put("perform", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("perform")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ConfigureRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ConfigureRequestMsg"), com.exacttarget.wsdl.partnerAPI.ConfigureRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("configure", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ConfigureResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ConfigureResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Configure"));
        _oper.setSoapAction("Configure");
        _myOperationsList.add(_oper);
        if (_myOperations.get("configure") == null) {
            _myOperations.put("configure", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("configure")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ScheduleRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ScheduleRequestMsg"), com.exacttarget.wsdl.partnerAPI.ScheduleRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("schedule", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ScheduleResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ScheduleResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Schedule"));
        _oper.setSoapAction("Schedule");
        _myOperationsList.add(_oper);
        if (_myOperations.get("schedule") == null) {
            _myOperations.put("schedule", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("schedule")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "VersionInfoRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">VersionInfoRequestMsg"), com.exacttarget.wsdl.partnerAPI.VersionInfoRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("versionInfo", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "VersionInfoResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">VersionInfoResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "VersionInfo"));
        _oper.setSoapAction("VersionInfo");
        _myOperationsList.add(_oper);
        if (_myOperations.get("versionInfo") == null) {
            _myOperations.put("versionInfo", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("versionInfo")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ExtractRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ExtractRequestMsg"), com.exacttarget.wsdl.partnerAPI.ExtractRequest[].class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("extract", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "ExtractResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">ExtractResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "Extract"));
        _oper.setSoapAction("Extract");
        _myOperationsList.add(_oper);
        if (_myOperations.get("extract") == null) {
            _myOperations.put("extract", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("extract")).add(_oper);
        _params = new org.apache.axis.description.ParameterDesc [] {
            new org.apache.axis.description.ParameterDesc(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "SystemStatusRequestMsg"), org.apache.axis.description.ParameterDesc.IN, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">SystemStatusRequestMsg"), com.exacttarget.wsdl.partnerAPI.SystemStatusRequestMsg.class, false, false), 
        };
        _oper = new org.apache.axis.description.OperationDesc("getSystemStatus", _params, new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", "SystemStatusResponseMsg"));
        _oper.setReturnType(new javax.xml.namespace.QName("http://exacttarget.com/wsdl/partnerAPI", ">SystemStatusResponseMsg"));
        _oper.setElementQName(new javax.xml.namespace.QName("", "GetSystemStatus"));
        _oper.setSoapAction("GetSystemStatus");
        _myOperationsList.add(_oper);
        if (_myOperations.get("getSystemStatus") == null) {
            _myOperations.put("getSystemStatus", new java.util.ArrayList());
        }
        ((java.util.List)_myOperations.get("getSystemStatus")).add(_oper);
    }

    public SoapBindingSkeleton() {
        this.impl = new com.exacttarget.wsdl.partnerAPI.SoapBindingImpl();
    }

    public SoapBindingSkeleton(com.exacttarget.wsdl.partnerAPI.Soap impl) {
        this.impl = impl;
    }
    public com.exacttarget.wsdl.partnerAPI.CreateResponse create(com.exacttarget.wsdl.partnerAPI.CreateRequest parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.CreateResponse ret = impl.create(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.RetrieveResponseMsg retrieve(com.exacttarget.wsdl.partnerAPI.RetrieveRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.RetrieveResponseMsg ret = impl.retrieve(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.UpdateResponse update(com.exacttarget.wsdl.partnerAPI.UpdateRequest parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.UpdateResponse ret = impl.update(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.DeleteResponse delete(com.exacttarget.wsdl.partnerAPI.DeleteRequest parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.DeleteResponse ret = impl.delete(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.QueryResponseMsg query(com.exacttarget.wsdl.partnerAPI.QueryRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.QueryResponseMsg ret = impl.query(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.DefinitionResponseMsg describe(com.exacttarget.wsdl.partnerAPI.DefinitionRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.DefinitionResponseMsg ret = impl.describe(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.ExecuteResponseMsg execute(com.exacttarget.wsdl.partnerAPI.ExecuteRequest[] parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.ExecuteResponseMsg ret = impl.execute(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.PerformResponseMsg perform(com.exacttarget.wsdl.partnerAPI.PerformRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.PerformResponseMsg ret = impl.perform(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.ConfigureResponseMsg configure(com.exacttarget.wsdl.partnerAPI.ConfigureRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.ConfigureResponseMsg ret = impl.configure(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.ScheduleResponseMsg schedule(com.exacttarget.wsdl.partnerAPI.ScheduleRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.ScheduleResponseMsg ret = impl.schedule(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.VersionInfoResponseMsg versionInfo(com.exacttarget.wsdl.partnerAPI.VersionInfoRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.VersionInfoResponseMsg ret = impl.versionInfo(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.ExtractResponseMsg extract(com.exacttarget.wsdl.partnerAPI.ExtractRequest[] parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.ExtractResponseMsg ret = impl.extract(parameters);
        return ret;
    }

    public com.exacttarget.wsdl.partnerAPI.SystemStatusResponseMsg getSystemStatus(com.exacttarget.wsdl.partnerAPI.SystemStatusRequestMsg parameters) throws java.rmi.RemoteException
    {
        com.exacttarget.wsdl.partnerAPI.SystemStatusResponseMsg ret = impl.getSystemStatus(parameters);
        return ret;
    }

}
