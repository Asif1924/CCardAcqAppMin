package com.ctfs.BRB.stateTrackerUpdater.testcase;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import org.junit.Before;
import org.junit.Test;

import com.ctfs.BRB.Helper.Factory.StateTrackerUpdaterFactory;
import com.ctfs.BRB.Interfaces.StateTrackerUpdater;
import com.ctfs.BRB.dblayer.StateTrackerTableEntity;

public class StateTrackerUpdaterTestcases
{
	private StateTrackerUpdaterFactory factory;
	@Before
	public void setUp(){
		factory = new StateTrackerUpdaterFactory();
	}
	@Test
	public void test_Factory_for_right_Abandon_Instance(){
		StateTrackerUpdater currentUpdater = factory.getCurrentUpdater("abandon");
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		currentUpdater.updateEntity(entity,"1");
		assertEquals(String.valueOf(1), entity.getAbandonScreenId().toString());
		assertFalse("5".equals(entity.getAppStateId()));
		assertEquals(String.valueOf(4), entity.getAppStateId().toString());
	}
	@Test
	public void test_Factory_for_right_Timer_Instance(){
		StateTrackerUpdater currentUpdater = factory.getCurrentUpdater("timeout");
		StateTrackerTableEntity entity = new StateTrackerTableEntity();
		currentUpdater.updateEntity(entity,"1");
		assertEquals(String.valueOf(1), entity.getAbandonScreenId().toString());
		assertFalse("4".equals(entity.getAppStateId()));
		assertEquals(String.valueOf(5), entity.getAppStateId().toString());
	}
}
