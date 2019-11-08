package com.brb.brbsimulatorcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.brb.brbsimulatorcontroller.model.EcomTransactionBO;
import com.brb.brbsimulatorcontroller.service.BRBSimulatorService;


@RestController
@RequestMapping("${spring.application.version}")
public class BRBSimulatorController 
{
	@Autowired
	private BRBSimulatorService service;

	public void setService(BRBSimulatorService service) {
		this.service = service;
	}
		
	/**
	 * Get Customer Transaction data from table.
	 * 
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getCustTransData", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<EcomTransactionBO> getCustTransData(
    		//@RequestHeader(value="transactionId") String transactionId
    		//@RequestHeader(value="jsessionid") String jsessionId,
    		//@RequestHeader(value="X-Forwarded-For") String host
    		) throws Exception
    {
		//input.setJsessionId(jsessionId);
		//input.setHost(host);
		EcomTransactionBO result = service.getCustTransData();
		return new ResponseEntity<EcomTransactionBO>(result,HttpStatus.OK);
    }
	
}