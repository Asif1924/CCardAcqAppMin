package com.ctfs.WICI.Servlet.Model;

import java.util.List;

public class JobDescriptionOutput {
	/*
	 * This class holds the list of job descriptions available
	 * */
	private List<JobDescription> jobDescriptionList;

	public List<JobDescription> getJobDescriptionList() {
		return jobDescriptionList;
	}

	public void setJobDescriptionList(List<JobDescription> jobDescriptionList) {
		this.jobDescriptionList = jobDescriptionList;
	}
	
}
