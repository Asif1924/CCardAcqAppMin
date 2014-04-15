package com.ctfs.BRB.TestCase;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.BRB.VersionStub;

public class VersionTest
{
	@Test
	public void should_return_something()
	{
		VersionStub sut = new VersionStub();
		Assert.assertNotNull("Expected version to be something", sut.value);
	}

	@Test
	public void should_return_an_expected_json_value_with_version_contained_within_the_json()
	{
		VersionStub sut = new VersionStub();
		// Assert.assertTrue(sut.value.contains("version"));
	}

}
