package com.ctfs.WICI.TestCase;

import java.util.logging.Logger;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.Enums.ContentType;
import com.ctfs.WICI.Enums.EventType;
import com.ctfs.WICI.Helper.PayloadHelper;
import com.google.gson.JsonSyntaxException;

public class PayloadHelperTestCases
{
	public static String DEVICE_FRIENDLY_NAME = "WIC-410638cd2c685021";
	public static String DEVICE_SERIAL_NUMBER = "410638cd2c685021";
	static Logger log = Logger.getLogger(PayloadHelperTestCases.class.getName());

	private PayloadHelper systemUnderTest;

	@Test
	public void test_that_payloadhelper_can_set_and_get_an_xml_payload()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayload = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayload));
		Assert.assertTrue(xmlPayload.equalsIgnoreCase(systemUnderTest.getPayload()));
	}
		
	@Test
	public void test_that_our_payload_converter_ignores_extraneous_fields_if_airwatch_suddenly_adds_a_new_field_to_xml_payload()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String newXMLPayloadEnrol = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog><EventId>178</EventId><EventType>Compromised Status Changed</EventType><DeviceId>639</DeviceId><DeviceFriendlyName>WIC-4103e66a61e49019</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-03-31T14:10:59.6145834Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-03-31T14:11:09.7705473Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber>+14163031493</PhoneNumber><Udid>a7552b4e433bceaebdf8f8edc0a22746</Udid><SerialNumber>4103e66a61e49019</SerialNumber><MACAddress>000000000000</MACAddress><EnrollmentUserId>52</EnrollmentUserId></Eventlog>";
		String modifiedNewXMLPayloadEnrol = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>639</DeviceId><DeviceFriendlyName>WIC-4103e66a61e49019</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-03-31T14:10:59.6145834Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-03-31T14:11:09.7705473Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber>+14163031493</PhoneNumber><Udid>a7552b4e433bceaebdf8f8edc0a22746</Udid><SerialNumber>4103e66a61e49019</SerialNumber><MACAddress>000000000000</MACAddress><EnrollmentUserId>52</EnrollmentUserId></Eventlog>";
		String oldPayloadEnrol = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog><EventId>178</EventId><EventType>Compromised Status Changed</EventType><DeviceId>639</DeviceId><DeviceFriendlyName>WIC-4103e66a61e49019</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-03-31T14:10:59.6145834Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-03-31T14:11:09.7705473Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber>+14163031493</PhoneNumber><Udid>a7552b4e433bceaebdf8f8edc0a22746</Udid><SerialNumber>4103e66a61e49019</SerialNumber><MACAddress>000000000000</MACAddress></Eventlog>";

		systemUnderTest.setPayload(new StringBuffer(newXMLPayloadEnrol));
		Assert.assertEquals(EventType.COMPROMISED_STATUS_CHANGED, systemUnderTest.getEventType());

		systemUnderTest.setPayload(new StringBuffer(modifiedNewXMLPayloadEnrol));
		Assert.assertEquals(EventType.COMPROMISED_STATUS_CHANGED, systemUnderTest.getEventType());
	
		systemUnderTest.setPayload(new StringBuffer(oldPayloadEnrol));
		Assert.assertEquals(EventType.COMPROMISED_STATUS_CHANGED, systemUnderTest.getEventType());
	}
	

	@Test
	public void test_that_payloadhelper_can_set_an_xml_payload_then_get_eventtype()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayloadEnrol = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		String xmlPayloadDeEnrol = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>39</EventId><EventType>BreakMDMConfirmed</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress /><EnrollmentUserName /><EventTime>2014-01-31T14:40:52.6667849Z</EventTime><EnrollmentStatus>Unenrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:40:57.6683396Z</CompromisedTimeStamp><ComplianceStatus>NotAvailable</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayloadEnrol));
		Assert.assertEquals(EventType.COMPROMISED_STATUS_CHANGED, systemUnderTest.getEventType());
		systemUnderTest.setPayload(new StringBuffer(xmlPayloadDeEnrol));
		Assert.assertEquals(EventType.BREAK_MDM_CONFIRMED, systemUnderTest.getEventType());
	}

	@Test
	public void test_that_payloadhelper_can_set_an_xml_payload_then_get_devicefriendlyname()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayload = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayload));
		Assert.assertTrue(DEVICE_FRIENDLY_NAME.equalsIgnoreCase(systemUnderTest.getDeviceFriendlyName()));
	}

	@Test
	public void test_that_payloadhelper_can_set_an_xml_payload_then_get_serialnumber()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayload = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayload));
		Assert.assertTrue(DEVICE_SERIAL_NUMBER.equalsIgnoreCase(systemUnderTest.getSerialNumber()));
	}

	@Test
	public void test_that_payloadhelper_can_determine_if_an_xml_payload_is_a_wici_payload()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		systemUnderTest.setWICIEventMark("WIC");
		String xmlPayloadWICI = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		String xmlPayloadNONWICI = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName> 410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayloadWICI));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
		systemUnderTest.setPayload(new StringBuffer(xmlPayloadNONWICI));
		Assert.assertFalse(systemUnderTest.isWICIEvent());
	}

	@Test
	public void test_that_enrol_is_requied()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayload = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType>CompromisedStatusChanged</EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayload));
		Assert.assertTrue(systemUnderTest.isEnrolRequired());
	}

	@Test
	public void test_that_denrol_is_requied()
	{
		systemUnderTest = new PayloadHelper(ContentType.XML);
		String xmlPayload = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Eventlog xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><EventId>178</EventId><EventType> </EventType><DeviceId>133</DeviceId><DeviceFriendlyName>WIC-410638cd2c685021</DeviceFriendlyName><EnrollmentEmailAddress>michael.kirton@cantire.com</EnrollmentEmailAddress><EnrollmentUserName>WIC</EnrollmentUserName><EventTime>2014-01-31T14:49:29.0274433Z</EventTime><EnrollmentStatus>Enrolled</EnrollmentStatus><CompromisedStatus /><CompromisedTimeStamp>2014-01-31T14:49:39.0905768Z</CompromisedTimeStamp><ComplianceStatus>PendingComplianceCheck</ComplianceStatus><PhoneNumber /><Udid>System.Byte[]</Udid><SerialNumber>410638cd2c685021</SerialNumber><MACAddress>System.Byte[]</MACAddress></Eventlog>";
		systemUnderTest.setPayload(new StringBuffer(xmlPayload));
		Assert.assertFalse(systemUnderTest.isEnrolRequired());
	}

	@Test
	public void test_that_payloadhelper_can_set_and_get_a_json_payload()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayload = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayload));
		Assert.assertTrue(jsonPayload.equalsIgnoreCase(systemUnderTest.getPayload()));
	}

	@Test
	public void test_that_payloadhelper_can_set_a_json_payload_then_get_eventtype()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayload = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayload));
		Assert.assertEquals(EventType.DEVICE_ENTERPRISE_WIPE_REQUESTED, systemUnderTest.getEventType());
	}

	@Test
	public void test_that_payloadhelper_can_set_a_json_payload_then_get_devicefriendlyname()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayload = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayload));
		Assert.assertEquals("WIC-41062e0d324290d9", systemUnderTest.getDeviceFriendlyName());
	}

	@Test
	public void test_that_payloadhelper_can_set_a_json_payload_then_get_serialnumber()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayload = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayload));
		Assert.assertEquals("41062e0d324290d9", systemUnderTest.getSerialNumber());
	}

	@Test
	public void test_that_payloadhelper_can_determine_if_a_json_payload_is_a_wici_payload()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		systemUnderTest.setWICIEventMark("WIC");
		String jsonPayloadWICI = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadWICI));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
		String jsonPayloadNONWICI = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"ZAZA-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadNONWICI));
		Assert.assertFalse(systemUnderTest.isWICIEvent());
	}

	@Test(expected = IllegalStateException.class)
	public void test_for_illegalstateException_if_wici_event_was_not_marked()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayloadWICI = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadWICI));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
	}
	@Test
	public void test_that_enrol_is_requied_in_json_content_type()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayloadWICI = "{\"EventId\":229,\"EventType\":\"CompromisedStatusChanged\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"CompromisedStatusChanged\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadWICI));
		Assert.assertTrue(systemUnderTest.isEnrolRequired());
	}

	@Test
	public void test_that_denrol_is_requied_in_json_content_type()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		String jsonPayloadWICI = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadWICI));
		Assert.assertFalse(systemUnderTest.isEnrolRequired());
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_for_illegalArgumentException_if_content_type_was_not_seted_right()
	{
		systemUnderTest = new PayloadHelper(null);
		String jsonPayloadWICI = "{\"EventId\":229,\"EventType\":\"DeviceEnterpriseWipeRequested\",\"DeviceId\":280,\"DeviceFriendlyName\":\"WIC-41062e0d324290d9\",\"EnrollmentEmailAddress\":\"michael.kirton@cantire.com\",\"EnrollmentUserName\":\"WIC\",\"EventTime\":\"\\/Date(1391182403986)\\/\",\"EnrollmentStatus\":\"EnterpriseWipePending\",\"CompromisedStatus\":\"\",\"CompromisedTimeStamp\":\"\\/Date(1391182409025)\\/\",\"ComplianceStatus\":\"Compliant\",\"PhoneNumber\":\"\",\"Udid\":\"System.Byte[]\",\"SerialNumber\":\"41062e0d324290d9\",\"MACAddress\":\"System.Byte[]\"}";
		systemUnderTest.setPayload(new StringBuffer(jsonPayloadWICI));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_for_illegalArgumentException_if_payload_was_not_seted_right()
	{
		systemUnderTest = new PayloadHelper(null);
		systemUnderTest.setPayload(null);
		Assert.assertTrue(systemUnderTest.isWICIEvent());
	}

	@Test(expected = IllegalStateException.class)
	public void test_for_illegalArgumentException_if_payload_stringbuffer_was_not_seted_with_rigth_value()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		systemUnderTest.setPayload(new StringBuffer(" "));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
	}

	@Test(expected = Exception.class)
	public void test_for_illegalArgumentException_if_payload_stringbuffer_was_seted_with_wrong_value()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		systemUnderTest.setPayload(new StringBuffer("some extra text"));
		Assert.assertTrue(systemUnderTest.isWICIEvent());
	}

	@Test(expected = JsonSyntaxException.class)
	public void test_for_right_content_type_value()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		systemUnderTest.setPayload(new StringBuffer("some  text"));
		Assert.assertTrue(systemUnderTest.isDeEnrolRequired());
	}

	@Test
	public void test_that_event_type_is_incorrect_if_it_was_not_set()
	{
		systemUnderTest = new PayloadHelper(ContentType.JSON);
		systemUnderTest.setPayload(new StringBuffer("{\"EventId\":229}"));
		Assert.assertEquals(EventType.INCORRECT_EVENT_TYPE, systemUnderTest.getEventType());
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_for_exception_if_content_type_is_set_to_incorrect()
	{
		systemUnderTest = new PayloadHelper(ContentType.INCORRECT_MIME_TYPE);
		systemUnderTest.setPayload(new StringBuffer("{\"EventId\":229}"));
		Assert.assertTrue(systemUnderTest.getEventType() == EventType.INCORRECT_EVENT_TYPE);
	}
}
