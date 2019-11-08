package com.brb.brbsimulatorcontroller.repos;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.brb.brbsimulatorcontroller.domain.CustomerTransaction;

public interface CustomerTransactionRepository extends CrudRepository<CustomerTransaction, String> {
	/*
	 * @Query("select e from #{#entityName} e where e.transactionId = ?1")
	 * CustomerTransaction findCustomerByTransactionId(String transactionId);
	 */
	/*
	 * @Query("select e from #{#entityName} e") CustomerTransaction getCustData();
	 */
}
