package com.ctfs.WICI.Test;
import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.AddressLookupMockHelper;
import com.ctfs.WICI.Model.FileContentsResult;

public class AddressLookupMockHelperTest {
	@Test
	public void test_that_AddressLookupMockHelper_returns_a_non_null_error_code_if_file_is_not_present(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		FileContentsResult resultingFileContents = sut.getFileContents("teststreet");
		Assert.assertTrue(resultingFileContents.getErrorCode()!=null);
	}

	@Test
	public void test_that_AddressLookupMockHelper_returns_a_error_code_E001_if_file_is_not_present(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		FileContentsResult resultingFileContents = sut.getFileContents("teststreet");
		Assert.assertTrue(resultingFileContents.getErrorCode().equals("E001"));
		Assert.assertEquals("E001", resultingFileContents.getErrorCode());
	}


	public void test_that_AddressLookupMockHelper_returns_a_blank_contents_if_file_is_not_present(){
		//AddressLookupMockHelper sut = new AddressLookupMockHelper();
		//FileContentsResult resultingFileContents = sut.getFileContents("postalcodedoesntexist");
		//Assert.assertTrue(resultingFileContents.getRawContents().equals(""));
		//Assert.assertEquals("", resultingFileContents.getRawContents());
	}

	@Test
	public void test_that_AddressLookupMockHelper_returns_a_blank_error_code_if_file_is_present(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		FileContentsResult resultingFileContents = sut.getFileContents("thomas");
		Assert.assertEquals("", resultingFileContents.getErrorCode());
	}

	@Test
	public void test_that_AddressLookupMockHelper_knows_that_the_thomas_js_file_exists(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		Assert.assertEquals(true,sut.fileExists("thomas") );
	}

	@Test
	public void test_that_AddressLookupMockHelper_returns_contents_of_thomas_js_file(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		String thomasContents = sut.getFileContents("thomas").getRawContents();

		//Assert that a bunch of things we expect are true
		//Assert.assertEquals("{\"StreetNumber\":\"3215\",\"StreetName\":\"Thomas Street\",\"City\":\"Mississauga\",\"Province\":\"Ontario\",\"PostalCode\":\"L5M0M2\"}\n",thomasContents );
		Assert.assertTrue(thomasContents.indexOf("Thomas Street")!=-1 );
		Assert.assertTrue(thomasContents.indexOf("StreetNumber")!=-1 );
		Assert.assertTrue(thomasContents.indexOf("StreetName")!=-1 );
		Assert.assertTrue(thomasContents.indexOf("Mississauga")!=-1 );
	}

	@Test
	public void test_that_AddressLookupMockHelper_returns_proper_json_contents_for_addresslookupresponse_ojbect(){
		AddressLookupMockHelper sut = new AddressLookupMockHelper();
		String properContents = sut.getFileContents("correctly_formatted_file").getRawContents();
		//{"standardAddressLine1":[],"standardAddressLine2":[],"standardCityName":"MISSISSAUGA","standardProvince":"ON","standardPostalCode":"L5M0M2","addressStatus":"N"}

		boolean has_standardAddressLine1_as_a_fieldname 		= properContents.indexOf("standardAddressLine1")!=-1;
		boolean has_standardAddressLine2_as_a_fieldname 		= properContents.indexOf("standardAddressLine2")!=-1;
		boolean has_standardCityName_as_a_fieldname				= properContents.indexOf("standardCityName")!=-1;
		boolean has_standardProvince_as_a_fieldname				= properContents.indexOf("standardProvince")!=-1;
		boolean has_standardPostalCode_as_a_fieldname			= properContents.indexOf("standardPostalCode")!=-1;
		boolean has_addressStatus_as_a_fieldname				= properContents.indexOf("addressStatus")!=-1;

		boolean standardAddressLine1_value_is_an_array			= properContents.indexOf("\"standardAddressLine1\":[]")!=-1;
		boolean standardAddressLine2_value_is_an_array			= properContents.indexOf("\"standardAddressLine2\":[]")!=-1;

		Assert.assertTrue(has_standardAddressLine1_as_a_fieldname);
		Assert.assertTrue(has_standardAddressLine2_as_a_fieldname);
		Assert.assertTrue(has_standardCityName_as_a_fieldname);
		Assert.assertTrue(has_standardPostalCode_as_a_fieldname);
		Assert.assertTrue(has_addressStatus_as_a_fieldname);

		Assert.assertTrue(standardAddressLine1_value_is_an_array);
		Assert.assertTrue(standardAddressLine2_value_is_an_array);
	}

}
