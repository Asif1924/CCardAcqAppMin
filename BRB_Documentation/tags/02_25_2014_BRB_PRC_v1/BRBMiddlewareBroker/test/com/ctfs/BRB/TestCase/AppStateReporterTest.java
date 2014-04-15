package com.ctfs.BRB.TestCase;

import static org.junit.Assert.*;

import org.junit.Test;

import com.ctfs.BRB.Helper.AppStateReporter;
import com.ctfs.BRB.Helper.AppStateReporter.AccountApplicationStatus;
import com.ctfs.BRB.Helper.AppStateReporter.AppStateID;
import com.ctfs.BRB.Helper.AppStateReporter.ECommPassOrFail;
import com.ctfs.BRB.Helper.AppStateReporter.ErrorState;

public class AppStateReporterTest
{
	@Test
	public void test_that_AppStateID_1_corresponds_to_APPROVED_Account_Application_before_Ecomm_Profile_Update()
	{
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.APPROVED, null, null, null).equals(AppStateID.type_1));
		
	}

	@Test
	public void test_that_AppStateID_1_corresponds_to_APPROVED_Account_Application_and_Ecomm_ProfileUpdate_Success()
	{
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.APPROVED, null, ECommPassOrFail.Pass, null).equals(AppStateID.type_1));
	}

	@Test
	public void test_that_AppStateID_2_corresponds_to_APPROVED_or_PENDING_Account_Application_and_Ecomm_Profile_Update_Failed()
	{
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.APPROVED, null, ECommPassOrFail.Fail, null).equals(AppStateID.type_2));
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.PENDING, null, null, null).equals(AppStateID.type_2));
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.PENDING, null, ECommPassOrFail.Fail, null).equals(AppStateID.type_2));
	}

	@Test
	public void test_that_AppStateID_3_corresponds_to_DECLINED_Account_Application()
	{
		assertTrue(new AppStateReporter().reportState(null, AccountApplicationStatus.DECLINED, null, null, null).equals(AppStateID.type_3));
	}

	@Test
	public void test_that_AppStateID_4_corresponds_to_Abandoned_Application()
	{
		assertTrue(new AppStateReporter().reportState(null, null, null, null, ErrorState.Abandoned).equals(AppStateID.type_4));
	}

	@Test
	public void test_that_AppStateID_5_corresponds_to_TimedOut_Application()
	{
		assertTrue(new AppStateReporter().reportState(null, null, null, null, ErrorState.TimedOut).equals(AppStateID.type_5));
	}

	@Test
	public void test_that_AppStateID_6_corresponds_to_XSDError()
	{
		assertTrue(new AppStateReporter().reportState(null, null, null, null, ErrorState.XSDError).equals(AppStateID.type_6));
	}

	@Test
	public void test_that_AppStateID_7_corresponds_to_some_other_error()
	{
		assertTrue(new AppStateReporter().reportState(null, null, null, null, ErrorState.OtherError).equals(AppStateID.type_7));
	}
}
