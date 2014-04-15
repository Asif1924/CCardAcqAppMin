package com.ctfs.BRB.Helper;

import java.sql.SQLException;
import java.util.logging.Logger;

import javax.naming.NamingException;
import com.ctfs.BRB.dblayer.interfaces.IAppTransactionTableEntity;

public class TokenizationMemento
{
	static Logger log = Logger.getLogger(TokenizationMemento.class.getName());
	static final String EMPTY_STRING = "";

	public void saveState(IAppTransactionTableEntity appTransactionTableEntity) throws Exception
	{
		String sMethod = "[saveState] ";

		BRBDBHelper dbHelper = new BRBDBHelper();

		try
		{	
			dbHelper.mergeIntoApplicationTransactionTable(appTransactionTableEntity);
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

	public IAppTransactionTableEntity restoreState(String brbTransactionId) throws Exception
	{
		String sMethod = "[restoreState] ";
		
		BRBDBHelper brbDBHelper = new BRBDBHelper();
		IAppTransactionTableEntity appTransactionTableEntity = null;
		
		try
		{			
			// Restore secure fields values
			appTransactionTableEntity = brbDBHelper.getFromApplicationTransactionTable(brbTransactionId);		
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Unexpected exception: " + ex.getMessage());
			throw ex;
		}
		
		return appTransactionTableEntity;
	}
}