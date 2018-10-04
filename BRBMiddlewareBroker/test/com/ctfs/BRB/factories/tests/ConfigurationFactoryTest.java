package com.ctfs.BRB.factories.tests;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.xml.namespace.QName;

import junit.framework.Assert;

import org.junit.Ignore;
import org.junit.Test;

import com.ctfs.BRB.Helper.Factory.ConfigurationFactory;
import com.ctfs.BRB.Helper.Factory.ConfigurationFactory.PathDataCreator;
import com.ctfs.BRB.Helper.Factory.ECommCardDataConfigurationFactory;
import com.ctfs.BRB.Helper.Factory.ServerConfigurationFactory;
import com.ctfs.BRB.Helper.Factory.ServerConfigurationHelper;
import com.ctfs.BRB.Interfaces.IConfiguration;

public class ConfigurationFactoryTest
{	
	private final static String requestSystem = "CTRONLINE"; 
	Map<String,String> mockedConfigurationFile = new HashMap<String,String>();
	{
	mockedConfigurationFile.put("CTRONLINE","http://ajlcd-hba2.labcorp.ad.ctc:9001/payment/soap/instantCredit");
	mockedConfigurationFile.put("CTRONLINEUAT2","http://172.23.34.17:8080/ResponseService.svc");
	mockedConfigurationFile.put("BRBSIM","http://t5olap1.internal.ctfst.com:8080/ResponseService.svc");
	mockedConfigurationFile.put("CTCECOMM","http://t5olap1.internal.ctfst.com:8080/ResponseService.svc");
	mockedConfigurationFile.put("serverTimeout","1800000");
	}

	@Ignore @Test
	public void test_for_ECommCardDataConfigurationFactory_right_values() throws Exception
	{	
		Set<Entry<String, String>> dataValue = mockedConfigurationFile.entrySet();
		for(Entry<String, String>  value: dataValue){
			InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.properties");
			ECommCardDataConfigurationFactory factory = new ECommCardDataConfigurationFactory(value.getKey());
			PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
			when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
			//need to Mock InputStream to take data from test.properties
			factory.setResourcePath(pathDataCreator);
			IConfiguration endPoint = factory.createWebServicesEndpointforSS();
			assertTrue(endPoint.getWebservicesEndpointforSS().contains(value.getValue()));
		}
		
	}
	@Ignore @Test
	public void test_for_QName_equals() throws Exception{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.properties");
		ECommCardDataConfigurationFactory factory = new ECommCardDataConfigurationFactory(requestSystem);
		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		factory.setResourcePath(pathDataCreator);
		
		IConfiguration endPoint = factory.createWebServicesEndpointforSS();
		QName serviceName = endPoint.getServiceNameforSS();
		assertTrue(serviceName.getLocalPart().equals("ResponseService"));
		assertTrue(serviceName.getNamespaceURI().equals("http://tempuri.org/"));
	}

	@Test
	public void test_that_we_get_server_timeout_setting_successfully() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		String serverTimeoutSetting = systemUnderTest.createServerTimeoutSetting();
		
		Assert.assertEquals("1800000", serverTimeoutSetting);
	}
	
	@Test 
	public void test_that_if_servertimeout_is_blank_an_exception_is_thrown() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.server.timeout.property.is.blank.value.properties");
		//InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.configuration.file.2.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		try 
		{
			String serverTimeoutSetting = systemUnderTest.createServerTimeoutSetting();
		}
		catch( IllegalArgumentException e)
		{
			Assert.assertTrue(e!=null);
			Assert.assertEquals("Invalid 'endpointProperty' value!", e.getMessage());
		}
	}

	@Test 
	public void test_that_if_servertimeout_is_blank_an_exception_is_thrown_and_timeout_set_to_default_of_1800000_by_calling_program() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.server.timeout.property.is.blank.value.properties");		
		//InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.configuration.file.2.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();
		
		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		String serverTimeoutSetting = "";
		try
		{
			serverTimeoutSetting = systemUnderTest.createServerTimeoutSetting();
		}
		catch( Exception e )
		{
			Assert.assertTrue(e!=null);
			Assert.assertEquals("Invalid 'endpointProperty' value!", e.getMessage());
			serverTimeoutSetting = "1800000";
		}
		
		Assert.assertEquals("1800000", serverTimeoutSetting);
		
	}
	
	@Test
	public void test_that_if_ignore_email_service_setting_doesnt_exist_value_is_false() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		boolean ignoreEmailServiceSetting = systemUnderTest.createIgnoreEmailServiceSetting();
		
		Assert.assertFalse(ignoreEmailServiceSetting);
	}	
	
	@Test
	public void test_that_if_ignore_email_service_setting_exists_and_value_is_blank_we_set_to_false() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.ignore.email.service.property.is.blank.value.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		boolean ignoreEmailServiceSetting = systemUnderTest.createIgnoreEmailServiceSetting();
		
		Assert.assertFalse (ignoreEmailServiceSetting);
	}		
	
	@Test
	public void test_that_if_ignore_email_service_setting_exists_and_value_is_not_true_or_junk_we_set_to_false() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.ignore.email.service.property.is.junk.value.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		boolean ignoreEmailServiceSetting = systemUnderTest.createIgnoreEmailServiceSetting();
		
		Assert.assertFalse(ignoreEmailServiceSetting);
	}		

	@Test
	public void test_that_if_ignore_email_service_setting_exists_and_value_is_true_we_get_true() throws Exception
	{
		InputStream fileStream = ConfigurationFactoryTest.class.getResourceAsStream("test.ignore.email.service.property.is.true.properties");
		ServerConfigurationFactory serverSettingFactory = new ServerConfigurationFactory();

		PathDataCreator pathDataCreator = mock(ConfigurationFactory.PathDataCreator.class);
		when(pathDataCreator.getDataPathStream()).thenReturn(fileStream);
		
		serverSettingFactory.setResourcePath(pathDataCreator);
		
		ServerConfigurationHelper systemUnderTest = new ServerConfigurationHelper(serverSettingFactory);
		
		boolean ignoreEmailServiceSetting = systemUnderTest.createIgnoreEmailServiceSetting();
		
		Assert.assertTrue(ignoreEmailServiceSetting);
	}
}
