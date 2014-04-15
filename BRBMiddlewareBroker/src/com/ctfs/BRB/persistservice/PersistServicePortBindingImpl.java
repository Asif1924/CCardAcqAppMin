package com.ctfs.BRB.persistservice;

import java.math.BigInteger;
import java.sql.SQLException;
import java.util.logging.Logger;

import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Model.BRBCustomerTransactionAdapter;

@javax.jws.WebService(endpointInterface = "com.ctfs.BRB.persistservice.PersistServiceDelegate", targetNamespace = "http://persistservice.BRB.ctfs.com/", serviceName = "PersistService", portName = "PersistServicePort")
public class PersistServicePortBindingImpl
{
	static Logger log = Logger.getLogger(PersistServicePortBindingImpl.class.getName());

	public BrbResponseType saveCustomerBrbData(BrbRequestType saveBrbRequest)
	{
		String sMethod = "[saveCustomerBrbData] ";
		log.info(sMethod);

		BrbResponseType response = new BrbResponseType();
		response.setPassFail(PassFailType.F);
		response.setStatusCode(new BigInteger("101"));

		BRBDBHelper dbHelper = new BRBDBHelper();
		try
		{
			if (saveBrbRequest.getRequestingSystem() == null || saveBrbRequest.getRequestingSystem().isEmpty())
			{
				throw new IllegalArgumentException("Invalid 'RequestingSystem' parameter!");
			}

			BRBCustomerTransactionAdapter customerTransactionAdapter = new BRBCustomerTransactionAdapter(saveBrbRequest.getCustomerInfo(), saveBrbRequest.getRequestingSystem());

			// Insert data to the table
			String transactionId = dbHelper.insertIntoCustomerTransactionTable(customerTransactionAdapter.ConvertCustomerInfoType());

			response.setBrbTransId(transactionId);
			response.setPassFail(PassFailType.P);
			response.setStatusCode(new BigInteger("0"));

		}
		catch (SQLException ex)
		{
			log.warning(sMethod + ":initializeDriver: Exception: " + ex.getMessage());
			response.setErrorMessage("DB error: " + ex.getMessage());// "Could not connect to the server. Please try again later.");
		}
		catch (Exception ex)
		{
			log.warning(sMethod + ": Exception: " + ex.getMessage());
			response.setErrorMessage(ex.getMessage());
		}

		return response;
	}

}