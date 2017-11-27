package com.ctfs.BRB.EmailService;

import java.io.FileNotFoundException;
//import java.io.FileReader;
import java.io.InputStream;
//import java.util.ArrayList;
import java.util.HashMap;
//import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Logger;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class EmailConfigReader
{

    private static final Logger log = Logger.getLogger(EmailConfigReader.class.getName());
    private static final String XML_CONSTANT_Category = "Category";

    private static Document configuration = null;
    private static EmailConfigReader _instance = null;
    
    protected Properties prop = new Properties(); 
    
    public static synchronized EmailConfigReader getInstance()
    {
	if (_instance == null)
	{
	    _instance = new EmailConfigReader();
	}
	return _instance;
    }

    private EmailConfigReader()
    {
	loadConfiguration();
    }

    private void loadConfiguration()
    {
    	InputStream inputStream;

    	log.info("Loading configuration ...");
    	try
    	{
			prop = new Properties();
			String propFileName = "config.properties";
			inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
			if(inputStream != null){
				prop.load(inputStream);				
			} else {
				throw new FileNotFoundException("property file '" + propFileName + "' not found.");
			}
		    log.info("Configuration Loaded.");
		}
		catch (Throwable t)
		{
		    log.severe("Unable to set up exchange configuration due to " + t.getMessage());
		}
	}
    
    

    public boolean categoryExists(String category)
    {
	boolean rc = false;
	NodeList nodeList = configuration.getElementsByTagName(XML_CONSTANT_Category);
	for (int i = 0; nodeList.getLength() > 0 && i < nodeList.getLength(); i++)
	{
	    String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
	    if (catName.equals(category))
	    {
		rc = true;
		break;
	    }
	}

	return rc;
    }

    public Map<String, String> getCategoryKeys(String category)
    {
	Map<String, String> rc = new HashMap<String, String>();
	NodeList nodeList = configuration.getElementsByTagName(XML_CONSTANT_Category);
	for (int i = 0; nodeList.getLength() > 0 && i < nodeList.getLength(); i++)
	{
	    String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
	    if (catName.equals(category))
	    {
		NodeList catNodes = nodeList.item(i).getChildNodes();
		for (int j = 0; catNodes.getLength() > 0 && j < catNodes.getLength(); j++)
		{
		    if (catNodes.item(j).getNextSibling() != null)
		    {
			Node keyNode = catNodes.item(j).getNextSibling().getFirstChild();
			if (keyNode != null)
			{
			    Node valueNode = keyNode.getNextSibling().getFirstChild();

			    String keyName = keyNode.getNodeValue().trim();
			    String valName = valueNode.getNodeValue().trim();

			    log.info("found key <" + keyName + "> value <" + valName + ">");
			    rc.put(keyName, valName);
			}
		    }
		}
	    }
	}

	return rc;
    }

    public String getCategoryKeyValue(String category, String key)
    {
	String rc = null;

	NodeList nodeList = configuration.getElementsByTagName(XML_CONSTANT_Category);
	for (int i = 0; nodeList.getLength() > 0 && i < nodeList.getLength(); i++)
	{
	    String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
	    if (catName.equals(category))
	    {
		NodeList catNodes = nodeList.item(i).getChildNodes();
		for (int j = 0; catNodes.getLength() > 0 && j < catNodes.getLength(); j++)
		{
		    if (catNodes.item(j).getNextSibling() != null)
		    {
			Node keyNode = catNodes.item(j).getNextSibling().getFirstChild();
			if (keyNode != null)
			{
			    Node valueNode = keyNode.getNextSibling().getFirstChild();

			    String keyName = keyNode.getNodeValue().trim();
			    if (keyName.equals(key))
			    {
				if(valueNode != null && valueNode.getNodeValue() != null)
				{
				    rc = valueNode.getNodeValue().trim();
				    break;
				}
			    }
			}
		    }
		}
	    }
	}

	return rc;
    }

}
