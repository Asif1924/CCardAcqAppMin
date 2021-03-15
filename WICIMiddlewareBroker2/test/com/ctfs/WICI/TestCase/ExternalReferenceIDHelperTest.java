package com.ctfs.WICI.TestCase;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.Helper.ExternalReferenceIdHelper;

public class ExternalReferenceIDHelperTest {
	
	@Test
	public void test_that_externalReferenceID_is_in_the_correct_format(){
		String  extRefID = "56F26250-766A-4E52-BCED-7C4413D1C8FC";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_externalReferenceID_tokens_are_in_the_alphanumeric(){
		String  extRefID = "56F26250-766A-4E52-BCED-7C4413D1C8FC";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_invalid_externalReferenceID_has_tokens_that_are_not_alphanumeric(){
		String  extRefID = "56F26250-766A-4E52-BCED-7C4413D1C8F!";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(!refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_invalid_externalReferenceID_has_tokens_that_are_not_in_correct_format(){
		String  extRefID = "766A-56F26250-4E52-BCED-7C4413D1C8FC";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(!refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_invalid_externalReferenceID_has_tokens_that_are_either_not_alphanumberic_or_are_not_in_correct_format(){
		String  extRefID = "@@@@-56F2$250-4E52-BCE-6-5-4-D-7C4413D1C8FC";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(!refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_invalid_externalReferenceID_is_empty_string(){
		String  extRefID = "";
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(!refHelper.isCorrectFormat(extRefID));
	}

	@Test
	public void test_that_invalid_externalReferenceID_is_null_object(){
		String  extRefID = null;
		
		ExternalReferenceIdHelper refHelper = new ExternalReferenceIdHelper();		
		Assert.assertTrue(!refHelper.isCorrectFormat(extRefID));
	}

}
