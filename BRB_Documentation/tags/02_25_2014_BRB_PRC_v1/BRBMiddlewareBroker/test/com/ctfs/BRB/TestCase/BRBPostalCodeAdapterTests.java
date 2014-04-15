package com.ctfs.BRB.TestCase;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.fail;
import static org.junit.Assert.*;

import java.io.IOException;
import java.sql.SQLException;

import javax.naming.NamingException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.BRBPostalCodeAdapter;

public class BRBPostalCodeAdapterTests extends BaseTest
{
	private BRBPostalCodeAdapter postalCodeAdapter;
	private static String CTFS_POSTAL_CODE = "L6L 0C6";
	private static String BRB_POSTAL_CODE = "L6L0C6";
	
	@Before
	public void setUp() throws IOException, SQLException, NamingException
	{
		postalCodeAdapter = new BRBPostalCodeAdapter();
	}

	@After
	public void tearDown()
	{
		postalCodeAdapter = null;
	}
	
	@Test
	public void test_adapt_postalcode_success()
	{
		try
		{
			String brbPostalCode = postalCodeAdapter.adapt(CTFS_POSTAL_CODE);	
			
			// Check result
			assertNotNull("brbPostalCode is NULL", brbPostalCode);				
			assertSame(brbPostalCode.length(), BRB_POSTAL_CODE.length());
			assertTrue(brbPostalCode.equals(BRB_POSTAL_CODE));
		}
		catch (Exception ex)
		{
			fail(ex.getMessage());
		}
	}
	
	@Test
	public void test_adapt_postalcode_back_success()
	{
		try
		{
			String ctfsPostalCode = postalCodeAdapter.adaptBack(BRB_POSTAL_CODE);	
			
			// Check result
			assertNotNull("ctfsPostalCode is NULL", ctfsPostalCode);		
			assertSame(ctfsPostalCode.length(), CTFS_POSTAL_CODE.length());
			assertTrue(ctfsPostalCode.equals(CTFS_POSTAL_CODE));
		}
		catch (Exception ex)
		{
			fail(ex.getMessage());
		}
	}	
}
