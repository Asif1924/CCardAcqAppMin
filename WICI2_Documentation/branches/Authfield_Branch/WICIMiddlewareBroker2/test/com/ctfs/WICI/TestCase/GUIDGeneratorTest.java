package com.ctfs.WICI.TestCase;

import java.util.UUID;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.Helper.GUIDGenerator;

public class GUIDGeneratorTest
{

	@Test
	public void test_that_GUID_is_unique()
	{

		GUIDGenerator sut = new GUIDGenerator();

		UUID uid = sut.getGUID();
		UUID uid2 = sut.getGUID();

		Assert.assertNotSame(uid, uid2);
	}

	@Test
	public void test_that_GUID_is_unique_and_is_a_string()
	{

		GUIDGenerator sut = new GUIDGenerator();

		String uid = sut.getGUIDAsString();
		String uid2 = sut.getGUIDAsString();

		Assert.assertNotSame(uid, uid2);
	}

	@Test
	public void test_that_GUID_is_unique_and_is_a_string_and_uppercase()
	{

		GUIDGenerator sut = new GUIDGenerator();

		String uid = sut.getGUIDAsString();
		String uidToUpperCase = uid.toUpperCase();

		Assert.assertSame(uid, uidToUpperCase);
	}

}
