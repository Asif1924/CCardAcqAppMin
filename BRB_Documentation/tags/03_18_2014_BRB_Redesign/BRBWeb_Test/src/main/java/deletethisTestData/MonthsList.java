package deletethisTestData;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.testng.annotations.DataProvider;

public class MonthsList {

	@DataProvider(name = "monthsList", parallel = false)
//	public static Iterator<Object[]> createData() {
	public static Iterator<Object[]> monthsList() {
		List<Object[]> data = new ArrayList<Object[]>();
		data.add(new Object[] { "January" });
		data.add(new Object[] { "February" });
		data.add(new Object[] { "March" });
		data.add(new Object[] { "June" });
		data.add(new Object[] { "July" });
		data.add(new Object[] { "August" });
		data.add(new Object[] { "September" });
		data.add(new Object[] { "October" });
		data.add(new Object[] { "November" });
		data.add(new Object[] { "December" });

		return data.iterator();
	}
	
	@DataProvider(name = "monthsAndDaysList", parallel = false)
	public static Iterator<Object[]> monthsAndDaysList() {
		List<Object[]> data = new ArrayList<Object[]>();
		data.add(new Object[] { "January", "1" });
		data.add(new Object[] { "February", "2" });
		data.add(new Object[] { "March", "3"  });
		data.add(new Object[] { "June", "4"  });
		data.add(new Object[] { "July", "5"  });
		data.add(new Object[] { "August", "6"  });
		data.add(new Object[] { "September", "7"  });
		data.add(new Object[] { "October", "8"  });
		data.add(new Object[] { "November", "9"  });
		data.add(new Object[] { "December", "10"  });

		return data.iterator();
	}
}
