package com.ctfs.BRB.Helper;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.Factory.StateTrackerUpdaterFactory;
import com.ctfs.BRB.Interfaces.StateTrackerUpdater;
import com.ctfs.BRB.dblayer.StateTrackerTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IStateTrackerTableEntity;

public class AppStateReporter
{
	static Logger log = Logger.getLogger(AppStateReporter.class.getName());
	private StateTrackerUpdaterFactory factory = new StateTrackerUpdaterFactory();

	public AppStateID reportState(String argTransactionID, AccountApplicationStatus argAccountApplicationStatus, String argAbandonedScreenID, ECommPassOrFail argEcommUpdatePassOrFail,
			ErrorState argErrorState)
	{

		AppStateID id = null;
		if (argErrorState != null)
		{
			id = getIDbyErrorState(argErrorState);
		}
		else
		{
			id = getIDbyAppState(argAccountApplicationStatus, argEcommUpdatePassOrFail);
		}
		if (argTransactionID != null)
		{
			updateStateTracker(argTransactionID, id, argAbandonedScreenID);
		}
		log.info(id.toString());
		return id;
	}

	private void updateStateTracker(String argAppID, AppStateID argAppStateID, String argAbandonedScreenID)
	{
		// Create timestamp
		Timestamp endDateTime = new Timestamp(Calendar.getInstance().getTimeInMillis());

		BRBDBHelper helper = new BRBDBHelper();
		BigDecimal abandonedScreenID = null;
		if (argAbandonedScreenID != null)
		{
			abandonedScreenID = new BigDecimal(argAbandonedScreenID);
		}
		BigDecimal appStateID = null;
		if (argAppStateID != null)
		{
			appStateID = new BigDecimal(argAppStateID.toString());
		}

		IStateTrackerTableEntity stateTrackerTableEntity = new StateTrackerTableEntity();
		stateTrackerTableEntity.setAppId(argAppID);
		stateTrackerTableEntity.setAppStateId(appStateID);
		stateTrackerTableEntity.setAbandonScreenId(abandonedScreenID);
		stateTrackerTableEntity.setEndDateTime(endDateTime);

		helper.updateStateTrackerTable(stateTrackerTableEntity);
	}

	private AppStateID getIDbyAppState(AccountApplicationStatus argAAStatus, ECommPassOrFail argEcommPassOrFail)
	{
		if (argAAStatus == AccountApplicationStatus.DECLINED)
		{
			return AppStateID.type_3;
		}
		else if (argAAStatus == AccountApplicationStatus.PENDING)
		{
			return AppStateID.type_2;
		}
		else if (argEcommPassOrFail == ECommPassOrFail.Fail)
		{
			return AppStateID.type_2;
		}
		else
		{
			return AppStateID.type_1;
		}
	}

	private AppStateID getIDbyErrorState(ErrorState argErrorState)
	{
		if (argErrorState == ErrorState.Abandoned)
		{
			return AppStateID.type_4;
		}
		else if (argErrorState == ErrorState.TimedOut)
		{
			return AppStateID.type_5;
		}
		else if (argErrorState == ErrorState.XSDError)
		{
			return AppStateID.type_6;
		}
		else
		{
			return AppStateID.type_7;
		}
	}

	public enum AppStateID
	{
		type_1(1), type_2(2), type_3(3), type_4(4), type_5(5), type_6(6), type_7(7);

		private final int name;

		private AppStateID(int s)
		{
			name = s;
		}

		public boolean equalsName(Integer otherName)
		{
			return (otherName == null) ? false : name == otherName;
		}

		public String toString()
		{
			return Integer.toString(name);
		}
	}

	public enum AccountApplicationStatus
	{
		APPROVED("APPROVED"), PENDING("PENDING"), DECLINED("DECLINED");

		private final String name;

		private AccountApplicationStatus(String s)
		{
			name = s;
		}

		public boolean equalsName(String otherName)
		{
			return (otherName == null) ? false : name.equals(otherName);
		}

		public String toString()
		{
			return name;
		}
	}

	public enum ECommPassOrFail
	{
		Pass("P"), Fail("F");

		private final String name;

		private ECommPassOrFail(String s)
		{
			name = s;
		}

		public boolean equalsName(String otherName)
		{
			return (otherName == null) ? false : name.equals(otherName);
		}

		public String toString()
		{
			return name;
		}
	}

	public enum ErrorState
	{
		Abandoned("Abandoned"), TimedOut("TimedOut"), XSDError("XSDError"), OtherError("OtherError");

		private final String name;

		private ErrorState(String s)
		{
			name = s;
		}

		public boolean equalsName(String otherName)
		{
			return (otherName == null) ? false : name.equals(otherName);
		}

		public String toString()
		{
			return name;
		}
	}

	public void reportAbandonState(String transactionId, String scenario, String trackingScreenID, BRBDBHelper dbHelper)
	{
		try
		{
			StateTrackerUpdater updater = factory.getCurrentUpdater(scenario);
			String sMethod = "[stateTrackerUpdater] ";
			log.info(sMethod);
			StateTrackerTableEntity entity = new StateTrackerTableEntity();
			entity.setAppId(transactionId);
			updater.updateEntity(entity,trackingScreenID);
			dbHelper.updateStateTrackerTable(entity);
		}
		catch (Exception e)
		{
			log.warning(e.getMessage());
		}
	}
}
