package com.ctfs.WICI.TestCase;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;
import com.ctfs.WICI.Helper.RolesExaminer;

public class RolesExaminerTest
{

	@Test
	public void test_that_if_FMR_role_is_assigned_to_user_we_can_tell_by_calling_isUserFMR_method()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("FMR")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		Assert.assertEquals(true, sut.isUserFMR());
	}

	@Test
	public void test_that_if_WICI_ADMIN_role_is_assigned_to_user_we_can_tell_by_calling_isUserAnAdmin_method()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-ADMIN")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		Assert.assertEquals(true, sut.isUserAnAdmin());
	}

	@Test
	public void test_that_if_WICI_ADMIN_role_is_not_assigned_to_user_we_can_tell_by_calling_isUserAnAdmin_method()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-NOT-ADMIN")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		Assert.assertEquals(false, sut.isUserAnAdmin());
	}

	@Test
	public void test_that_if_both_WICI_ADMIN_role_and_FMR_role_are_assigned_to_user_we_can_tell_by_calling_getRoles_method()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-ADMIN")).thenReturn(true);
		Mockito.when(mockHttpServletRequest.isUserInRole("FMR")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);

		// First assert that both are individually assigned
		Assert.assertEquals(true, sut.isUserFMR());
		Assert.assertEquals(true, sut.isUserAnAdmin());

		// Now assert that we can get both in a list
		ArrayList<String> expectedRoles = new ArrayList<String>();
		expectedRoles.add("FMR");
		expectedRoles.add("WICI-ADMIN");
		Assert.assertEquals(expectedRoles, sut.getRoles());
	}

	@Test
	public void test_that_it_returns_WICI_ADMIN_role_and_FMR_role_and_WICI_DEMO_role_by_calling_getRoles_method()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-ADMIN")).thenReturn(true);
		Mockito.when(mockHttpServletRequest.isUserInRole("FMR")).thenReturn(true);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-DEMO")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);

		// First assert that all are individually assigned
		Assert.assertEquals(true, sut.isUserFMR());
		Assert.assertEquals(true, sut.isUserAnAdmin());
		Assert.assertEquals(true, sut.isUserADemoUser());

		// Now assert that we can get all roles returned in a list
		ArrayList<String> expectedRoles = new ArrayList<String>();
		expectedRoles.add("FMR");
		expectedRoles.add("WICI-ADMIN");
		expectedRoles.add("WICI-DEMO");
		Assert.assertEquals(expectedRoles, sut.getRoles());
	}

	@Test
	public void test_that_if_FMR_is_not_assigned_to_user_we_can_tell_by_calling_isUserFMR()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("FMR")).thenReturn(false);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		Assert.assertEquals(false, sut.isUserFMR());
	}

	@Test
	public void test_that_if_httpRequest_object_is_null_any_role_check_should_be_false()
	{
		HttpServletRequest mockHttpServletRequest = null;

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		Assert.assertEquals(false, sut.isUserFMR());
		Assert.assertEquals(false, sut.isUserAnAdmin());
		Assert.assertEquals(false, sut.isUserADemoUser());
	}

	@Test
	public void test_that_if_httpRequest_object_is_null_calling_getRoles_should_return_an_empty_list()
	{
		HttpServletRequest mockHttpServletRequest = null;

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);
		ArrayList<String> expectedEmptyArrayList = new ArrayList<String>();
		Assert.assertEquals(expectedEmptyArrayList, sut.getRoles());
	}

	@Test
	public void test_that_if_httpRequest_object_is_null_calling_getRolesJSON_returns_an_empty_json_object()
	{
		HttpServletRequest mockHttpServletRequest = null;

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);

		// First check that roles are empty
		ArrayList<String> expectedEmptyArrayListOfRoles = new ArrayList<String>();
		Assert.assertEquals(expectedEmptyArrayListOfRoles, sut.getRoles());

		// Now give us an empty JSON object
		Assert.assertEquals("[]", sut.getRolesJSON());
	}

	@Test
	public void test_that_if_httpRequest_object_has_multiple_roles_calling_getRolesJSON_returns_an_non_empty_json_object()
	{
		HttpServletRequest mockHttpServletRequest = Mockito.mock(HttpServletRequest.class);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-ADMIN")).thenReturn(true);
		Mockito.when(mockHttpServletRequest.isUserInRole("FMR")).thenReturn(true);
		Mockito.when(mockHttpServletRequest.isUserInRole("WICI-DEMO")).thenReturn(true);

		RolesExaminer sut = new RolesExaminer(mockHttpServletRequest);

		// First check that roles definitely exist
		ArrayList<String> expectedRoles = new ArrayList<String>();
		expectedRoles.add("FMR");
		expectedRoles.add("WICI-ADMIN");
		expectedRoles.add("WICI-DEMO");
		Assert.assertEquals(expectedRoles, sut.getRoles());

		// Now give us a proper JSON
		Assert.assertEquals("[\"FMR\",\"WICI-ADMIN\",\"WICI-DEMO\"]", sut.getRolesJSON());
	}

}
