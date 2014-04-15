package com.ctfs.BRB.GenericTests;

import org.junit.Assert;
import org.junit.Test;

public class GenericTests
{
	@Test
	public void test_that_phone_number_replacement_regex_works()
	{
		Assert.assertTrue("(123)".replaceAll("[^0-9]","").equals("123"));
		Assert.assertTrue("-123.".replaceAll("[^0-9]","").equals("123"));		
	}
	
	@Test
	public void test_that_this_is_the_code_for_getting_first_10_numbers()
	{
		Assert.assertEquals("1234567890","123456789012345".replaceAll("[^0-9]","").substring(0,10));
		if("12345".length()>10)
			Assert.assertEquals("12345","12345".replaceAll("[^0-9]","").substring(0,10));
	}
	
	@Test
	public void test_that_non_alphanumeric_is_stripped_from_postal_code()
	{
		Assert.assertEquals("L5M0M2","L5M!0M2".replaceAll("[^A-Za-z0-9]", ""));
		Assert.assertEquals("L5M0M2","L5M 0M2".replaceAll("[^A-Za-z0-9]", ""));
		Assert.assertEquals("L5M0M2","L5M%0M2".replaceAll("[^A-Za-z0-9]", ""));
		Assert.assertEquals("L5M0M2","L5M-0M2".replaceAll("[^A-Za-z0-9]", ""));
		Assert.assertEquals("L5M0M2","L5M0M2-".replaceAll("[^A-Za-z0-9]", ""));
		Assert.assertEquals("L5M0M2","L5M0M2 ".replaceAll("[^A-Za-z0-9]", ""));
	}
}
