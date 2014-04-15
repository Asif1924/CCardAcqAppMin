package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class EmploymentTypesList {

		@DataProvider(name = "EmploymentTypes", parallel=false)
	    public static Iterator<Object[]> createData() {
	        List<Object[]> data = new ArrayList<Object[]>();
	        data.add(new Object[]{"Full Time"});
	        data.add(new Object[]{"Seasonal"});
	        data.add(new Object[]{"PartTime"});
	        data.add(new Object[]{"Retired"});
	        
	        return data.iterator();
	    }
	}


