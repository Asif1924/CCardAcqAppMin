package com.ctfs.BRB.Helper;

import java.sql.SQLException;
import java.util.logging.Logger;

import javax.naming.NamingException;

import com.ctfs.BRB.Model.BRBIdentityExamBridge;
import com.ctfs.BRB.dblayer.ApplicationTransactionTableEntity;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;

/*
 * Define pseudo "Memento pattern" implementation for ScoreIdentityExam
 */
public class ScoreIdentityExamMemento
{
	static Logger log = Logger.getLogger(ScoreIdentityExamMemento.class.getName());
	static final String EMPTY_STRING = "";

	public void saveState(BRBIdentityExamBridge brbIdentityExam, String responseBody) throws Exception
	{
		String sMethod = "[saveState] ";

		BRBDBHelper dbHelper = new BRBDBHelper();

		try
		{
			IAppTransactionTableEntity appTransactionTableEntity = new ApplicationTransactionTableEntity();
			appTransactionTableEntity.setTransactionId(brbIdentityExam.getBrbTransactionId());
			appTransactionTableEntity.setSessionId(brbIdentityExam.getSessionId());
			appTransactionTableEntity.setExamInteractionId(brbIdentityExam.getExternalId());
			appTransactionTableEntity.setScoreIdentityExamResponse(responseBody);

			String transactionId = dbHelper.mergeIntoApplicationTransactionTable(appTransactionTableEntity);

			// Reset secure fields to avoid send them to client
			if (transactionId != null && !transactionId.isEmpty())
			{
				brbIdentityExam.resetSecureFields();
			}
		}
		catch (SQLException ex)
		{
			log.warning(sMethod + ": SQLException: " + ex.getMessage());
			throw ex;
		}
		catch (NamingException ex)
		{
			log.warning(sMethod + ": NamingException: " + ex.getMessage());
			throw ex;
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Unexpected exception: " + ex.getMessage());
			throw ex;
		}
	}

	public void restoreState(BRBIdentityExamBridge brbIdentityExam) throws Exception
	{
		String sMethod = "[restoreState] ";

		BRBDBHelper brbDBHelper = new BRBDBHelper();
		try
		{

			// Restore secure fields values
			IAppTransactionTableEntity appTransactionTableEntity = brbDBHelper.getFromApplicationTransactionTable(brbIdentityExam.getBrbTransactionId());

			// Get session data
			brbIdentityExam.setSessionId(appTransactionTableEntity.getSessionId());
			brbIdentityExam.setExternalId(appTransactionTableEntity.getExamInteractionId());
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Unexpected exception: " + ex.getMessage());
			throw ex;
		}
	}

	public String getExternalId(String brbTransactionId) throws Exception
	{
		String sMethod = "[getExternalId] ";

		BRBDBHelper brbDBHelper = new BRBDBHelper();
		String externalId = null;

		try
		{
			// Restore secure fields values
			IAppTransactionTableEntity appTransactionTableEntity = brbDBHelper.getFromApplicationTransactionTable(brbTransactionId);
			externalId = appTransactionTableEntity.getExamInteractionId();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Unexpected exception: " + ex.getMessage());
			throw ex;
		}

		return externalId;
	}

	public String getSessionId(String brbTransactionId) throws Exception
	{
		String sMethod = "[getSessionId] ";

		BRBDBHelper brbDBHelper = new BRBDBHelper();
		String sessionId = null;

		try
		{
			// Restore secure fields values
			IAppTransactionTableEntity appTransactionTableEntity = brbDBHelper.getFromApplicationTransactionTable(brbTransactionId);
			sessionId = appTransactionTableEntity.getSessionId();
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Unexpected exception: " + ex.getMessage());
			throw ex;
		}

		return sessionId;
	}
}