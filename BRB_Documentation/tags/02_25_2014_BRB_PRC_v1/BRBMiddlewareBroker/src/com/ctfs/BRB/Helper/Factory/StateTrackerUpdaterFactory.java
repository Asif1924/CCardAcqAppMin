package com.ctfs.BRB.Helper.Factory;

import com.ctfs.BRB.Interfaces.StateTrackerUpdater;

public class StateTrackerUpdaterFactory
{
	public final static String STATE_TRACKER_TIMEOUT = "timeout";
	public final static String STATE_TRACKER_ABANDON = "abandon";
	public final static String STATE_TRACKER_TRANSACTION_ID_EXPIRE = "transactionIdExpire";

	public StateTrackerUpdater getCurrentUpdater(String updaterName)
	{
		AbstractStateTrackerUpdater stateTrackerUpdater = null;

		if (STATE_TRACKER_TIMEOUT.equalsIgnoreCase(updaterName))
		{
			stateTrackerUpdater = new StateTrackerUpdaterTimer();
		}
		else if (STATE_TRACKER_ABANDON.equalsIgnoreCase(updaterName))
		{
			stateTrackerUpdater = new StateTrackerUpdaterAbandon();
		}
		else if (STATE_TRACKER_TRANSACTION_ID_EXPIRE.equalsIgnoreCase(updaterName))
		{
			stateTrackerUpdater = new StateTrackerUpdaterTransactionIdExpire();
		}
		else
		{
			throw new IllegalArgumentException("Argument " + updaterName + " is not Suported");
		}

		return stateTrackerUpdater;
	}
}