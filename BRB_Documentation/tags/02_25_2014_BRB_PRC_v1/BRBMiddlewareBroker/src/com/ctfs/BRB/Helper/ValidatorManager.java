package com.ctfs.BRB.Helper;

import java.io.StringReader;

import javax.xml.XMLConstants;
import javax.xml.transform.Source;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.SchemaFactory;

import org.w3c.dom.Document;

import com.ctfs.BRB.Helper.Factory.SoapValidator;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Helper.Factory.ValidatorFactory;

public class ValidatorManager
{
	private static final String XML_HEADER = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
	private static final String XMLNS = " xmlns = \"http://www.channel.ctfs.ctc.com\"";
	// http://www.channel.ctfs.ctc.com/WebICIdentityExamination
	// private static final String XMLNS =
	// " xmlns = \"http://www.channel.ctfs.ctc.com/WebICIdentityExamination\"";
	private static final String XML_SCHEMA_URL_DEFAULT = XMLConstants.W3C_XML_SCHEMA_NS_URI;
	/**
	 * factory and schemaLocation are using for IoC by constructor, especially
	 * for UnitTesting
	 */
	private SchemaFactory factory;
	private String schemaLocation;
	private ValidatorFactory validatorFactory = new ValidatorFactory();
	private final SoapValidator helper;

	/**
	 * @param schemaLocation
	 *            - canonical path to schema in project. By default XML schema
	 *            for SchemaFactory will be using XML_SCHEMA_URL_DEFAULT -
	 *            http://www.w3.org/2001/XMLSchema
	 */
	public ValidatorManager(String schemaLocation)
	{
		if (schemaLocation == null || schemaLocation.isEmpty())
			throw new IllegalArgumentException("Schema location cannot be empty");
		this.schemaLocation = schemaLocation;
		helper = validatorFactory.getAlgorithm(ValidatorFactory.DEFAULT_VALIDATOR, schemaLocation, factory = SchemaFactory.newInstance(XML_SCHEMA_URL_DEFAULT));
	}

	/**
	 * @param schemaLocation
	 *            - canonical path to schema in project.
	 * @param factory
	 *            - may be "Mock" or any other factory
	 */
	public ValidatorManager(String schemaLocation, SchemaFactory factory)
	{
		if (factory == null || schemaLocation == null || schemaLocation.isEmpty())
			throw new IllegalArgumentException("Schema location cannot be empty or factory cannot be null reference");
		this.factory = factory;
		this.schemaLocation = schemaLocation;
		helper = validatorFactory.getAlgorithm(ValidatorFactory.DEFAULT_VALIDATOR, schemaLocation, factory);

	}

	/**
	 * @param schemaLocation
	 *            - canonical path to schema in project.
	 * @param factory
	 *            - may be "Mock" or any other factory
	 * @param validatorFactory
	 *            - may be "Mock" factory for validator
	 */
	public ValidatorManager(String schemaLocation, SchemaFactory factory, ValidatorFactory validatorFactory)
	{
		if (factory == null || schemaLocation == null || schemaLocation.isEmpty())
			throw new IllegalArgumentException("Schema location cannot be empty or factory cannot be null reference");
		this.factory = factory;
		this.validatorFactory = validatorFactory;
		this.schemaLocation = schemaLocation;
		helper = validatorFactory.getAlgorithm(ValidatorFactory.DEFAULT_VALIDATOR, schemaLocation, factory);

	}

	/**
	 * @param stringForValidation
	 *            is source which should be validating
	 */
	public void validate(String stringForValidation) throws ValidatorException
	{	
//		No property defined for this yet, but will soon. Effectively all validations are turned off until 
//		we fix the bug with the SchemaFactory CTCO-FSMB-1084
		StringReader reader = new StringReader(stringForValidation);
		StreamSource source = new StreamSource(reader);
		helper.isValid(source);
	}
	public void validate(Source source) throws ValidatorException{
		helper.isValid(source);
	}
	/**
	 * @param requestCopy
	 *            - body request to which will be attached XML name space tag
	 * @return string which can be validated
	 */
	public String attachNameSpaceTagToRequstBody(String requestCopy)
	{
		if (requestCopy == null || requestCopy.isEmpty())
			throw new IllegalArgumentException("requst parameter can not be empty");
		if (!requestCopy.contains("xmlns"))
		{
			StringBuilder builder = new StringBuilder();
			int index = requestCopy.indexOf(">");
			index = requestCopy.indexOf(">", index + 1);
			builder.append(requestCopy.substring(0, index));
			builder.append(XMLNS);
			builder.append(requestCopy.substring(index));
			requestCopy = builder.toString();
		}
		return requestCopy;
	}

	/**
	 * @param request
	 *            - which need to validate according to XSD schema
	 * @return copy with XML header of request
	 */
	public String attachHeaderTagToRequstBody(String request)
	{
		if (request == null || request.isEmpty())
			throw new IllegalArgumentException("requst parameter can not be empty");
		String requestCopy = new String(request);
		if (!requestCopy.contains(XML_HEADER))
		{
			requestCopy = XML_HEADER + requestCopy;
		}
		return requestCopy;
	}

}
