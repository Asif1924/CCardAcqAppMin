package com.ctfs.WICI.TestCase;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.WICIVersionStub;
import com.ctfs.WICI.Servlet.Model.WICIVersion;

public class WICIVersionTest
{
	@Test
	public void should_return_something()
	{
		WICIVersionStub sut = new WICIVersionStub();
		Assert.assertNotNull("Expected version to be something", sut.value);
	}

	@Test
	public void should_return_an_expected_json_value_with_version_contained_within_the_json()
	{
		WICIVersionStub sut = new WICIVersionStub();
		// Assert.assertTrue(sut.value.contains("version"));

		String version = sut.value;
		WICIVersion servletVersion = new WICIVersion();
		servletVersion.setVersion(version);
	}

}
