package com.ctfs.WICI.Servlet.Model;

import java.io.Serializable;

public class EmailServiceRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Activity activity;

	public Activity getActivity() {
		return activity;
	}

	public void setActivity(Activity activity) {
		this.activity = activity;
	}
	
	
	
	
}
