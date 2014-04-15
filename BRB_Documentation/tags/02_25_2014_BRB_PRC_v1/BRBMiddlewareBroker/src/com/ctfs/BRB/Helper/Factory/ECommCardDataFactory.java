package com.ctfs.BRB.Helper.Factory;

import java.util.logging.Logger;

import com.ctfs.BRB.Helper.ecommcarddata.AbstractECommCardDataFacade;
import com.ctfs.BRB.Helper.ecommcarddata.ECommCardDataFacade;
import com.ctfs.BRB.Helper.ecommcarddata.ECommCardDataSimulatorFacade;
import com.ctfs.BRB.Model.RequestingSystemsType;

public class ECommCardDataFactory
{
	static Logger log = Logger.getLogger(ECommCardDataFactory.class.getName());
	
	public AbstractECommCardDataFacade createECommCardDataFacade (String requestingSystem) {
		AbstractECommCardDataFacade eCommCardDataFacade = null;
		if (requestingSystem.equalsIgnoreCase(RequestingSystemsType.BRBSIM.toString())){
			eCommCardDataFacade = new ECommCardDataSimulatorFacade(requestingSystem);
		} else {
			eCommCardDataFacade = new ECommCardDataFacade (requestingSystem);
		}
		
		return eCommCardDataFacade;
	}
}