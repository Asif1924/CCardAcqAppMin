package com.ctfs.BRB.Helper.Factory;

import javax.xml.transform.Source;


public interface SoapValidator {
	public void isValid(Source source) throws ValidatorException;
}
