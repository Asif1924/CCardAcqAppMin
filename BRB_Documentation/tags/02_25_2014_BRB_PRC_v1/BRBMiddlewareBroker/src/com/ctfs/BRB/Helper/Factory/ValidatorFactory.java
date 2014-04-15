package com.ctfs.BRB.Helper.Factory;

import javax.xml.transform.Source;
import javax.xml.validation.SchemaFactory;

import com.ctfs.BRB.Helper.ValidatorDefault;

/**
 * @author Pavlo_Dudchenok current class is using for create new instances of
 *         SoapValidator algorithm.
 * 
 */
public class ValidatorFactory
{
	public static String DEFAULT_VALIDATOR = "default_algorithm";

	public SoapValidator getAlgorithm(String algorithmName, String schemaLocation, SchemaFactory factory)
	{
		if (DEFAULT_VALIDATOR.equalsIgnoreCase(algorithmName))
		{
			return new ValidatorDefault(schemaLocation, factory);
		}
		// if algorithm of validation is unspecified than will return empty
		// method of validation
		return new SoapValidator()
		{
			@Override
			public void isValid(Source source) throws ValidatorException
			{

			}
		};
	}

}
