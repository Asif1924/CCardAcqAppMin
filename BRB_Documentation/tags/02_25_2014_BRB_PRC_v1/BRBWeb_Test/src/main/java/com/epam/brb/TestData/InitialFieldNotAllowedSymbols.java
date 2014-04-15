package com.epam.brb.TestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class InitialFieldNotAllowedSymbols {

	@DataProvider(name = "InitialNotAllowedSigns", parallel = false)
	public static Iterator<Object[]> createData() {
		List<Object[]> data = new ArrayList<Object[]>();
		data.add(new Object[] { "@" });
		data.add(new Object[] { "1" });
		data.add(new Object[] { "!" });
		data.add(new Object[] { "#" });
		data.add(new Object[] { "$" });
		data.add(new Object[] { "%" });
		data.add(new Object[] { "^" });
		data.add(new Object[] { "'" });
		data.add(new Object[] { "-" });

		return data.iterator();
	}
}
