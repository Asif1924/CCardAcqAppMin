package com.ctfs.WICI.Helper;

import java.util.List;
import java.util.logging.Logger;

import org.owasp.validator.html.*;

import com.ctfs.WICI.Model.XSSAttackException;
import com.ctfs.WICI.Resources.Constants;
import com.ctfs.WICI.Resources.ResourceHelper;

public class WASDefender
{
	static Logger log = Logger.getLogger(WASDefender.class.getName());

	private static final String AntiSamyMyspacePolicyFile = "antisamy-myspace-1.4.4.xml";
	private static final String AntiSamySlashdotPolicyFile = "antisamy-slashdot-1.4.4.xml";
	private static final String AntiSamyTinymcePolicyFile = "antisamy-tinymce-1.4.4.xml";

	private AntiSamy antiSamy;

	public WASDefender()
	{
		antiSamy = new AntiSamy();
	}

	public String scanForXSSInjections(String requestBody) throws Exception
	{
		//String sMethod = "[scanForXSSInjections]";
		log.info("scanForXSSInjections" + CWE117Fix.encodeCRLF(String.format("::Called with parameters: requestBody - %s", CWE117Fix.encodeCRLF(requestBody))));

		String cleanedHTML = null;
		String unescapedRequestBody = null;

		try
		{
			// Decode request body before scan
			String decodedRequestBody = java.net.URLDecoder.decode(requestBody, "UTF-8");
			log.info("scanForXSSInjections" + CWE117Fix.encodeCRLF(String.format("::Decoded requestBody - %s", CWE117Fix.encodeCRLF(decodedRequestBody))));

			// Unescape request body before scan
			unescapedRequestBody = org.apache.commons.lang3.StringEscapeUtils.unescapeXml(decodedRequestBody);
			log.info("scanForXSSInjections" + CWE117Fix.encodeCRLF(String.format("::Unescaped requestBody - %s", CWE117Fix.encodeCRLF(unescapedRequestBody))));

			cleanedHTML = sanitizeInputs(AntiSamyMyspacePolicyFile, unescapedRequestBody);
			cleanedHTML = sanitizeInputs(AntiSamySlashdotPolicyFile, cleanedHTML);
			cleanedHTML = sanitizeInputs(AntiSamyTinymcePolicyFile, cleanedHTML);
		}
		catch (Exception ex)
		{
			log.warning("scanForXSSInjections::ERROR::" + CWE117Fix.encodeCRLF(ex.getMessage()));
			throw new XSSAttackException(Constants.UnauthorizedSystemUsingMsg);
		}

		return requestBody; // cleanedHTML;
	}

	protected String sanitizeInputs(String policyFile, String inputData) throws Exception
	{
		//String sMethod = "[sanitizeInputs]";
		log.info("[sanitizeInputs]" + CWE117Fix.encodeCRLF(String.format("::Called with parameters: policyFile - %s, inputData - %s", policyFile, inputData)));

		Policy policy;
		String cleanedHTML = null;

		try
		{
			String resourcePath = ResourceHelper.getInstance().getResourcePath(policyFile);
			policy = Policy.getInstance(resourcePath);
			CleanResults cleanResults = antiSamy.scan(inputData, policy);

			if (cleanResults.getNumberOfErrors() > 0)
			{
				protocolAllErrors(cleanResults.getErrorMessages());
				throw new Exception(Constants.UnauthorizedSystemUsingMsg);
			}

			cleanedHTML = cleanResults.getCleanHTML();
		}
		catch (Exception ex)
		{
			log.warning("[sanitizeInputs]::ERROR::" + CWE117Fix.encodeCRLF(ex.getMessage()));
			throw ex;
		}

		return cleanedHTML;
	}

	private void protocolAllErrors(List<String> errors)
	{
		//String sMethod = "[protocolAllErrors]";
		log.info("[protocolAllErrors]::Called!");

		for (String error : errors)
		{
			log.warning("::Sanitize Inputs ERROR::" + CWE117Fix.encodeCRLF(error) + "\n");
		}
	}
}
