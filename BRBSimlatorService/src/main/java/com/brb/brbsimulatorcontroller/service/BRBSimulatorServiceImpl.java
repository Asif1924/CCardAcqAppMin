package com.brb.brbsimulatorcontroller.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brb.brbsimulatorcontroller.domain.CustomerTransaction;
import com.brb.brbsimulatorcontroller.model.EcomTransactionBO;
import com.brb.brbsimulatorcontroller.repos.CustomerTransactionRepository;

@Service("BRBSimulatorService")
public class BRBSimulatorServiceImpl implements BRBSimulatorService {
	// private static final transient Logger LOG =
	// LoggerFactory.getLogger(BRBSimulatorServiceImpl.class);

	@Autowired
	private CustomerTransactionRepository customerTransactionRepo;

	public int responseCode = 200;

	@Override
	public EcomTransactionBO getCustTransData() {
		// TODO Auto-generated method stub

		List<CustomerTransaction> entities = new ArrayList<CustomerTransaction>();
		entities = (List<CustomerTransaction>) customerTransactionRepo.findAll();
		EcomTransactionBO ecomResponse = new EcomTransactionBO();
		
		System.out.println("the result size"+entities.size());

		/*
		 * EcomTransactionBO ecomResponse = new EcomTransactionBO();
		 * ecomResponse.setTransactionId(result.getTransactionId());
		 * ecomResponse.setEmail(result.getEmail());
		 * ecomResponse.setFirstName(result.getFirstName());
		 * ecomResponse.setLastName(result.getLastName());
		 * ecomResponse.setPhoneNumber(result.getPhoneNumber()); return ecomResponse;
		 */

		return ecomResponse;
	}

}
