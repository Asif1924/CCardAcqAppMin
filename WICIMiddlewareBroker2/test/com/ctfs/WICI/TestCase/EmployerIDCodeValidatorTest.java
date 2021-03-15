package com.ctfs.WICI.TestCase;

import org.junit.Assert;
import org.junit.Test;

import com.ctfs.WICI.Helper.EmployerIDCodeValidator;
/*
 0       |Internal      
 --------+-------------- 
 K       |Kognitive      
 --------+-------------- 
 B       |RFU            
 --------+-------------- 
 H       |RFU            
 --------+-------------- 
 A       |RFU            
 --------+-------------- 
 C       |Credico        
 --------+-------------- 
 E       |Endo / Test    
 --------+-------------- 
 J       |JWR            
 --------+-------------- 
 F       |Mosaic         
 */
public class EmployerIDCodeValidatorTest {
	
	@Test
	public void test_that_0_is_a_valid_code(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("0"));
	}
	@Test
	public void test_that_K_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("K"));
		Assert.assertTrue(sut.validateCode("k"));
	}
	@Test
	public void test_that_B_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("B"));
		Assert.assertTrue(sut.validateCode("b"));
	}
	@Test
	public void test_that_H_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("H"));
		Assert.assertTrue(sut.validateCode("h"));
	}
	@Test
	public void test_that_A_is_a_valid_code_regardless_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("A"));
		Assert.assertTrue(sut.validateCode("a"));
	}
	@Test
	public void test_that_C_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("C"));
		Assert.assertTrue(sut.validateCode("c"));
	}
	@Test
	public void test_that_E_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("E"));
		Assert.assertTrue(sut.validateCode("e"));
	}
	@Test
	public void test_that_J_is_a_valid_code_regardless_of_case(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("J"));
		Assert.assertTrue(sut.validateCode("j"));
	}
	@Test
	public void test_that_F_is_a_valid_code(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("F"));
	}
	@Test
	public void test_that_f_is_a_valid_code(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(sut.validateCode("f"));
	}
	@Test
	public void test_that_blank_string_is_not_a_valid_code(){	
		EmployerIDCodeValidator		sut = new EmployerIDCodeValidator();
		Assert.assertTrue(!sut.validateCode(""));
	}
}
