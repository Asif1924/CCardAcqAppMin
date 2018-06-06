package com.ctfs.BRB.Helper;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.apache.xerces.parsers.DOMParser;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import java.util.logging.Logger;

public class ConfigurationReader 
{
	private String XML_CONSTANT_Category = "Category";
	//private String XML_CONSTANT_Key = "Key";
	//private String XML_CONSTANT_Value = "Value";
//	private static ConfigurationReader instance = null;
	private String configurationFile = null;
	private Document configuration = null;
	static Logger log = Logger.getLogger(ConfigurationReader.class.getName());
		
/*	public static ConfigurationReader getInstance()
	{
		if (instance == null)
			instance = new ConfigurationReader();
		return instance;
	}
*/	
	public ConfigurationReader()
	{
	}
	
	
	public void setConfigFile(String value)
	{
		this.configurationFile = value;
	}
	
	public String getConfigFile()
	{
		return this.configurationFile;
	}
	
	public void loadConfiguration() throws ConfigurationException
	{
		String sMethod="com.ctfs.BRB.Helper.ConfigurationReader.loadConfiguration()";
		log.info(sMethod+ " Entry");
		String errorReason = null;
		try
		{
			DOMParser domparser = new DOMParser();
			FileReader filereader = new FileReader(this.configurationFile);
			
			InputSource inputsource = new InputSource(filereader);
			domparser.parse(inputsource);
			configuration = domparser.getDocument();
		}
		catch(FileNotFoundException fnfe)
		{
			errorReason = "File <" + this.configurationFile + "> Could not be found";
		}
		catch(SAXException se)
		{
			errorReason = "File <" + this.configurationFile + "> Contains invalid xml and could not be parsed.";
		}
		catch(IOException ioe)
		{
			errorReason = "File <" + this.configurationFile + "> Could not be read. " + ioe.getMessage();
		}
		
		if (errorReason != null)
			throw new ConfigurationException(errorReason);
			
		log.info(sMethod+ " Exit");
	}
		
	public List getCategorys() throws ConfigurationException
	{
		String sMethod="com.ctfs.BRB.Helper.ConfigurationReader.getCategorys()";
		log.info(sMethod+ " Entry");
		
		if (configuration == null)
			throw new ConfigurationException("Configuration has not been loaded");
		
		List rc = new Vector();
		
		NodeList nodeList= configuration.getElementsByTagName(XML_CONSTANT_Category);
		for(int i=0;nodeList.getLength()>0 && i<nodeList.getLength();i++)
		{
			String keyName = nodeList.item(i).getFirstChild().getNodeValue().trim();
			rc.add(keyName);
		}
		
		log.info(sMethod+ " Exit");	
		
		return rc;
	}
	
	public boolean categoryExists(String category) throws ConfigurationException
	{
		String sMethod="com.ctfs.BRB.Helper.ConfigurationReader.categoryExists()";
		log.info(sMethod+ " Entry");
		
		if (configuration == null)
			throw new ConfigurationException("Configuration has not been loaded");
		
		boolean rc = false;
		
		NodeList nodeList= configuration.getElementsByTagName(XML_CONSTANT_Category);
		for(int i=0;nodeList.getLength()>0 && i<nodeList.getLength();i++)
		{
			String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
			if(catName.equals(category))
			{
				rc = true;
				break;
			}
		}
		
		log.info(sMethod+ " Exit");	
		
		return rc;
	}
	
	public Map getCategoryKeys(String category) throws ConfigurationException
	{
		String sMethod="com.ctfs.BRB.Helper.ConfigurationReader.getCategoryKeys()";
		log.info(sMethod+ " Entry");
				
		if (configuration == null)
			throw new ConfigurationException("Configuration has not been loaded");
		
		if(!categoryExists(category))
					throw new ConfigurationException("Category <" + category + ">"
													 + " was not found in the configuration file <"
													 + configurationFile + ">");
		Map rc = new HashMap();
		
		NodeList nodeList= configuration.getElementsByTagName(XML_CONSTANT_Category);
		for(int i=0;nodeList.getLength()>0 && i<nodeList.getLength();i++)
		{
			String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
			if (catName.equals(category))
			{
				NodeList catNodes = nodeList.item(i).getChildNodes();
				for(int j=0;catNodes.getLength()>0 && j<catNodes.getLength();j++)
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
		
		log.info(sMethod+ " Exit");
				
		return rc;
	}
	
	public String getCategoryKeyValue(String category, String key) throws ConfigurationException
	{
		String sMethod="com.ctfs.BRB.Helper.ConfigurationReader.getCategoryKeyValue()";
		log.info(sMethod+ " Entry");
		
		if (configuration == null)
			throw new ConfigurationException("Configuration has not been loaded");
		
		String rc = null;
	
		try
		{	
		
			NodeList nodeList= configuration.getElementsByTagName(XML_CONSTANT_Category);
			for(int i=0;nodeList.getLength()>0 && i<nodeList.getLength();i++)
			{
				String catName = nodeList.item(i).getFirstChild().getNodeValue().trim();
				if (catName.equals(category))
				{
					NodeList catNodes = nodeList.item(i).getChildNodes();
					for(int j=0;catNodes.getLength()>0 && j<catNodes.getLength();j++)
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
									rc = valueNode.getNodeValue().trim();
									break;
								}
							}
						}
					}
				}
			}
		}
		catch(Exception e)
		{
			throw new ConfigurationException("DOM navigation failure", e);		
		}
		
		log.info(sMethod+ " Exit");
		
		return rc;
	}
	
}
