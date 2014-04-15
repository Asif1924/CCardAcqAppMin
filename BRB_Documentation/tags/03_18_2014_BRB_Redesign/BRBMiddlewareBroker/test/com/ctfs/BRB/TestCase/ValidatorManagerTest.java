package com.ctfs.BRB.TestCase;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.SchemaFactory;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.ValidatorManager;
import com.ctfs.BRB.Helper.Factory.SoapValidator;
import com.ctfs.BRB.Helper.Factory.ValidatorException;
import com.ctfs.BRB.Helper.Factory.ValidatorFactory;

public class ValidatorManagerTest
{

	private ValidatorManager manager;
	private String source;

	@Before
	public void setUp()
	{
		source = "";
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_manger_for_empty_string_location_parameter()
	{
		manager = new ValidatorManager("");
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_manger_for_empty_string_parameter_in_attachNameSpaceTagToRequstBody_method()
	{
		manager = new ValidatorManager("");
		manager.attachNameSpaceTagToRequstBody("");
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_manger_for_empty_string_parameter_in_attachHeaderTagToRequstBody_method()
	{
		manager = new ValidatorManager("");
		manager.attachHeaderTagToRequstBody("");
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_manger_for_empty_factory_reference()
	{
		manager = new ValidatorManager("xsd/AccountApplication.xsd", null);
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_manger_for_null_schema_location_reference()
	{
		manager = new ValidatorManager(null);
	}

	@Test(expected = ValidatorException.class)
	public void test_manger_for_wrong_path_to_shema_location()
	{
		manager = new ValidatorManager("test_pass");
		manager.validate(source);
	}

	@Test(expected = ValidatorException.class)
	public void test_manger_for_wrong_input_source()
	{
		manager = new ValidatorManager("xsd/AccountApplication.xsd");
		manager.validate(source);
	}

	// @Test
	public void test_manager_for_correct_behavior()
	{
		SoapValidator validator = mock(SoapValidator.class);
		ValidatorFactory mockValidatorFactory = mock(ValidatorFactory.class);
		SchemaFactory mockSchemaFactory = mock(SchemaFactory.class);
		when(mockValidatorFactory.getAlgorithm(ValidatorFactory.DEFAULT_VALIDATOR, "some_path", mockSchemaFactory)).thenReturn(validator);
		manager = new ValidatorManager("some_path", mockSchemaFactory, mockValidatorFactory);
		String mockSource = mock(String.class);
		manager.validate(mockSource);
	}

}
