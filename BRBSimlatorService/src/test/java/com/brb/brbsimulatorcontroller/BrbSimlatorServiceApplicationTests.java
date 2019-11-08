package com.brb.brbsimulatorcontroller;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.brb.brbsimulatorcontroller.BRBSimlatorservice.BrbSimlatorserviceApplication;
import com.brb.brbsimulatorcontroller.service.BRBSimulatorServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
//@ActiveProfiles(profiles = "test")
@ContextConfiguration(classes = BrbSimlatorserviceApplication.class)
@WebAppConfiguration
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@SpringBootTest
public class BrbSimlatorServiceApplicationTests {

	@Test
	public void getCustTransData() throws Exception {

		try {
		BRBSimulatorServiceImpl service = new BRBSimulatorServiceImpl();

		service.getCustTransData();
		}catch(Exception e) {
			
			e.printStackTrace();
		}
	}

}
