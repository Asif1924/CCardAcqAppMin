package com.ctfs.BRB.TestCase;

import static org.junit.Assert.*;

import java.io.IOException;
import java.sql.SQLException;

import javax.naming.NamingException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.ctc.ctfs.channel.webicidentityexamination.IdentityExam;
import com.ctfs.BRB.Model.BRBIdentityExamBridge;

public class BRBIdentityExamBridgeTests extends BaseTest
{
	IdentityExam identityExam;
	
	@Before
	public void setUp() throws IOException, SQLException, NamingException
	{
		identityExam = new IdentityExam();
	}

	@After
	public void tearDown()
	{	
		identityExam = null;
	}
	
	@Test
	public void default_constructor_success()
	{		
		BRBIdentityExamBridge brbIdentityExamBridge = new BRBIdentityExamBridge();
		
		assertFalse(brbIdentityExamBridge.isIdentityExamModelValid());
		assertFalse(brbIdentityExamBridge.doesFourthQuestionExist());
		assertEquals(brbIdentityExamBridge.getBrbTransactionId(), BRBIdentityExamBridge.EMPTY_STRING);
		assertEquals(brbIdentityExamBridge.getChannel(), BRBIdentityExamBridge.CHANNEL_NAME);		
		assertNull(brbIdentityExamBridge.getAccountAppResponse());
	}
}
