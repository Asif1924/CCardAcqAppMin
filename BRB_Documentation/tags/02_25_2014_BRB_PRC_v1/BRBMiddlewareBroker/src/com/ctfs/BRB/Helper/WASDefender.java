package com.ctfs.BRB.Helper;
import java.util.List;
import java.util.logging.Logger;

import org.owasp.validator.html.*;

import com.ctfs.BRB.Resources.Constants;
import com.ctfs.BRB.Resources.ResourceHelper;
import com.ctfs.BRB.exceptions.XSSAttackException;

public class WASDefender
{
	static Logger log = Logger.getLogger(WASDefender.class.getName());
		
	private static final String AntiSamyMyspacePolicyFile = "antisamy-myspace-1.4.4.xml";
	private static final String AntiSamySlashdotPolicyFile = "antisamy-slashdot-1.4.4.xml";
	private static final String AntiSamyTinymcePolicyFile = "antisamy-tinymce-1.4.4.xml";
	
	private AntiSamy antiSamy;
	
	public WASDefender(){
		antiSamy = new AntiSamy();
	}
	
	public String scanForXSSInjections (String requestBody) throws Exception{
		String sMethod = "[scanForXSSInjections]";
		log.info(sMethod + 
				String.format(
						"::Called with parametes: requestBody - %s", 
						requestBody));
			
		String cleanedHTML = null;	
		String unescapedRequestBody = null; 
		
		try
		{
			// Decode request body before scan
			String decodedRequestBody = java.net.URLDecoder.decode(requestBody, "UTF-8");
			log.info(sMethod + String.format("::Decoded requestBody - %s", decodedRequestBody));
			
			// Unescape request body before scan
			unescapedRequestBody = org.apache.commons.lang3.StringEscapeUtils.unescapeXml(decodedRequestBody);
			log.info(sMethod + String.format("::Unescaped requestBody - %s", unescapedRequestBody));
			
			cleanedHTML = sanitizeInputs(AntiSamyMyspacePolicyFile, unescapedRequestBody);
			cleanedHTML = sanitizeInputs(AntiSamySlashdotPolicyFile, cleanedHTML);
			cleanedHTML = sanitizeInputs(AntiSamyTinymcePolicyFile, cleanedHTML);
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());
			throw new XSSAttackException(Constants.UnauthorizedSystemUsingMsg);
		}
		
		return requestBody; //cleanedHTML;
	}
	
	protected String sanitizeInputs (String policyFile, String inputData) throws Exception {
		String sMethod = "[sanitizeInputs]";
		log.info(sMethod + 
				String.format(
						"::Called with parametes: policyFile - %s, inputData - %s", 
						policyFile, 
						inputData));
		
		Policy policy;
		String cleanedHTML = null;
		
		try
		{
			policy = Policy.getInstance(ResourceHelper.getInstance().getResourcePath(policyFile));
			CleanResults cleanResults = antiSamy.scan(inputData, policy);
			
			if (cleanResults.getNumberOfErrors() > 0) {				
				protocolAllErrors(cleanResults.getErrorMessages());				
				throw new Exception(Constants.UnauthorizedSystemUsingMsg);
			}			
			
			cleanedHTML = cleanResults.getCleanHTML();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + "::ERROR::" + ex.getMessage());
			throw ex;
		}
		
		return cleanedHTML;
	}
	
	private void protocolAllErrors(List<String> errors) {
		String sMethod = "[protocolAllErrors]";
		log.info(sMethod + "::Called!");
		
		for (String error : errors){
			log.warning(sMethod + "::Sanitize Inputs ERROR::" + error + "\n");
		}
	}
}
