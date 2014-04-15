package com.ctfs.BRB.Helper;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.logging.Logger;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;
import org.xml.sax.helpers.DefaultHandler;

import com.ctfs.BRB.Helper.Factory.SoapValidator;
import com.ctfs.BRB.Helper.Factory.ValidatorException;

public final class ValidatorDefault implements SoapValidator
{
	Logger log = Logger.getLogger(ValidatorDefault.class.getName());

	private String schemaLocation;
	private SchemaFactory factory;

	public ValidatorDefault(String schemaLocation, SchemaFactory factory)
	{
		if (schemaLocation.isEmpty())
			throw new IllegalArgumentException("Schema location cannot be empty");
		this.schemaLocation = schemaLocation;
		this.factory = factory;
	}

	@Override
	public void isValid(Source source) throws ValidatorException
	{
		try
		{
//			DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
//			dbf.setNamespaceAware(true);
//			DocumentBuilder db = dbf.newDocumentBuilder();
//			Document document = db.parse(new InputSource(reader));
			File schema = new File(schemaLocation);
			Schema xsdSchema = factory.newSchema(schema);
			SAXParserFactory factory = SAXParserFactory.newInstance();
			factory.setNamespaceAware(true);
			//factory.setValidating(true);
			factory.setSchema(xsdSchema);
			SAXParser parser = factory.newSAXParser();
			//Validator validator = xsdSchema.newValidator();
			DefaultHandler handler = new ValidatorErrorHandler();
			//validator.setErrorHandler(handler);
			//validator.validate(new DOMSource(document));
			//validator.validate(source);
			StreamResult res = new StreamResult(new StringWriter());
			Transformer trans = TransformerFactory.newInstance()
					.newTransformer();
			trans.transform(source, res);
			Writer writer = res.getWriter();
			parser.parse(new ByteArrayInputStream(writer.toString().getBytes("UTF-8")), handler);
		}
		catch (SAXException e)
		{	
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		}
		catch (IOException e)
		{
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		} catch (TransformerConfigurationException e) {
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		} catch (TransformerFactoryConfigurationError e) {
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		} catch (TransformerException e) {
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		} catch (ParserConfigurationException e) {
			log.info(e.getMessage());
			throw new ValidatorException(e.getMessage());
		}
		
	}
	private class ValidatorErrorHandler extends DefaultHandler{
		@Override
		public void error(SAXParseException e) throws SAXException {
			throw new  SAXException(e.getMessage());
		}
		

		@Override
		public void fatalError(SAXParseException e) throws SAXException {
			throw new  SAXException(e.getMessage());
		}
		
	}
}
