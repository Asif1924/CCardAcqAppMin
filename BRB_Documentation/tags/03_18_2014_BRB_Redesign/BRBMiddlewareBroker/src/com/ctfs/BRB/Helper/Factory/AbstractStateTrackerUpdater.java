package com.ctfs.BRB.Helper.Factory;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Calendar;

import com.ctfs.BRB.Interfaces.StateTrackerUpdater;
import com.ctfs.BRB.dblayer.StateTrackerTableEntity;

public abstract class AbstractStateTrackerUpdater implements StateTrackerUpdater
{
	abstract protected void updateCurrentLogic(StateTrackerTableEntity entity);

	@Override
	public void updateEntity(Object... args)
	{
		StateTrackerTableEntity entity = (StateTrackerTableEntity) args[0];
		String abandonscreenid = (String)args[1];
		entity.setAbandonScreenId(new BigDecimal(abandonscreenid));
		entity.setEndDateTime(new Timestamp(Calendar.getInstance().getTimeInMillis()));
		updateCurrentLogic(entity);
	}
}