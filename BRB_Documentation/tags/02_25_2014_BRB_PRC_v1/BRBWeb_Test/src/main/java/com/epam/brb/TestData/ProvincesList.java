package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class ProvincesList {

		@DataProvider(name = "ProvincesList", parallel=false)
	    public static Iterator<Object[]> createData() {
	        List<Object[]> data = new ArrayList<Object[]>();
	        data.add(new Object[]{"ALBERTA"});
	        data.add(new Object[]{"BRITISH COLUMBIA"});
	        data.add(new Object[]{"MANITOBA"});
	        data.add(new Object[]{"NEW BRUNSWICK"});
	        data.add(new Object[]{"NEWFOUNDLAND & LABRADOR"});
	        data.add(new Object[]{"NOVA SCOTIA"});
	        data.add(new Object[]{"NORTHWEST TERRITORIES"});
	        data.add(new Object[]{"NUNAVUT"});
	        data.add(new Object[]{"ONTARIO"});
	        data.add(new Object[]{"PRINCE EDWARD ISLAND"});
	        data.add(new Object[]{"QUEBEC"});
	        data.add(new Object[]{"SASKATCHEWAN"});
	        data.add(new Object[]{"YUKON"});
	        
	        return data.iterator();
	    }
	}


