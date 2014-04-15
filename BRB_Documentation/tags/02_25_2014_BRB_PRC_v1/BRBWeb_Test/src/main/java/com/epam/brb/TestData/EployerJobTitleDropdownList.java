package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class EployerJobTitleDropdownList {

		@DataProvider(name = "EployerJobTitleDropdownList", parallel=false)
	    public static Iterator<Object[]> eployerJobTitleDropdownList() {
	        List<Object[]> data = new ArrayList<Object[]>();
	        data.add(new Object[]{"DRIVER"});
	        data.add(new Object[]{"GUARD"});
	        data.add(new Object[]{"HOMEMAKER"});
	        data.add(new Object[]{"LABOURER"});
	        data.add(new Object[]{"MANAGER"});
	        data.add(new Object[]{"MILITARY"});
	        data.add(new Object[]{"OFFICE STAFF"});
	        data.add(new Object[]{"OWNER"});
	        data.add(new Object[]{"PRODUCTION WORKER"});
	        data.add(new Object[]{"PROFESSIONAL"});
	        data.add(new Object[]{"REPAIRER"});
	        data.add(new Object[]{"RETIRED"});
	        data.add(new Object[]{"SALES"});
	        data.add(new Object[]{"SERVICE"});
	        data.add(new Object[]{"STUDENT"});
	        data.add(new Object[]{"TRADES"});
	        data.add(new Object[]{"UNEMPLOYMENT"});
	        data.add(new Object[]{"OTHER"});
	        
	        return data.iterator();
	    }
	}


