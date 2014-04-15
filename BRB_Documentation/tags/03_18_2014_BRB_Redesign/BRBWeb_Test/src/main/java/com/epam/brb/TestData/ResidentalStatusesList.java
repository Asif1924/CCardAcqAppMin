package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class ResidentalStatusesList {

		@DataProvider(name = "ResidentalStatusesList", parallel=false)
	    public static Iterator<Object[]> createData() {
	        List<Object[]> data = new ArrayList<Object[]>();
	        data.add(new Object[]{"OWN"});
	        data.add(new Object[]{"RENT"});
	        data.add(new Object[]{"WITH PARENTS"});
	        data.add(new Object[]{"OTHER"});
	        
	        
	        return data.iterator();
	    }
	}


