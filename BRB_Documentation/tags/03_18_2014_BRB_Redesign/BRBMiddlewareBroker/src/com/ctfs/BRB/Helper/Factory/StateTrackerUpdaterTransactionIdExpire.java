package com.ctfs.BRB.Helper.Factory;

import java.math.BigDecimal;
import java.util.logging.Logger;

import com.ctfs.BRB.dblayer.StateTrackerTableEntity;

public class StateTrackerUpdaterTransactionIdExpire extends AbstractStateTrackerUpdater
{
	static Logger log = Logger.getLogger(StateTrackerUpdaterTransactionIdExpire.class.getName());
	
	@Override
	protected void updateCurrentLogic(StateTrackerTableEntity entity)
	{
		String sMethod = "[updateCurrentLogic] ";
		log.info(sMethod);
		
		entity.setAppStateId(new BigDecimal("8")); // Got from BRB_APP_STATE table and equal to "Middleware Timeout"
	}
}