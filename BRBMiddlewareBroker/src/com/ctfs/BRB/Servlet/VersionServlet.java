package com.ctfs.BRB.Servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import com.ctfs.BRB.VersionStub;
import com.ctfs.BRB.Helper.BRBServletMediator;
import com.ctfs.BRB.Model.Version;
import com.ctfs.BRB.exceptions.TransactionIdExpiredException;

public class VersionServlet extends BaseServlet {
	private static final long serialVersionUID = 1L;
	static Logger log = Logger.getLogger(VersionServlet.class.getName());
	private String version;   
	
    public VersionServlet() {
    }

	protected void handleRequest(BRBServletMediator requestMediator) throws ServletException, IOException {
		String sMethod = "[handleRequest] ";
		log.info(sMethod);
		if(version == null){
			version = getOwnServletVersion();
		}
		
		Version	servletVersion = new Version();
		servletVersion.setVersion(version);
		
		log.info(sMethod + "---Version=" + version);		
		
		requestMediator.processHttpResponse(servletVersion);
	}
	
	public String getOwnServletVersion(){
		return  new VersionStub().value;
	}
	
	public void setOwnServletVersion(String version){
		this.version = version;
	}
	
	@Override
	protected void ValidateBRBTransactionID (BRBServletMediator servletMediator) throws TransactionIdExpiredException {
		// Skip this validation because we don't have any transaction Id info for version servlet. 
	}
}
