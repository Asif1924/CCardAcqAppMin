package com.ctfs.BRB.TestCase;

import java.io.PrintWriter;
import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.junit.*;

import com.ctfs.BRB.Helper.BRBDBHelper;
import com.ctfs.BRB.Helper.TokenizationHelper;
import com.ctfs.BRB.Model.BRBCustomerTransactionAdapter;
import com.ctfs.BRB.persistservice.AddressDetailsType;
import com.ctfs.BRB.persistservice.CustomerInfoType;

@Ignore
public abstract class BaseTest
{
 // Constants
 public static final String EMPTY_STRING = "";
 public static final String TestEmail = "test@test.com";
 public static final String TestCity = "WINDSOR";
 public static final String TestFirstName = "BREDITU";
 public static final String TestLastName = "Narcissus";
 public static final String TestPhoneNumber = "6547893214";
 public static final String TestPostalCode = "N9G3A9";
 public static final String TestProvince = "ON";
 public static final String TestAddressLine1 = "2110 ROCKPORT ST";
 public static final String TestAddressLine2 = "168 Jackson St. E.";
 public static final String TestAccountAppData = "AccountAppData";
 public static final String RequestingSystem = "UAT";

 // Data members
 protected static final String OUTPUT_TXT = "output.txt";
 protected HttpServletRequest mockHttpServletRequest;
 protected HttpServletResponse mockHttpServletResponse;
 protected PrintWriter writer;
 protected BRBDBHelper brbDBHelper;
 protected TokenizationHelper tokenizationHelper;


// @Test
// public void avoidAnnoyingErrorMessageWhenRunningTestsInAnt() {
//     Assert.assertTrue(true); // do nothing;
// }

 public String getUniqueIdentifier()
 {
  return UUID.randomUUID().toString().replaceAll("-", "");
 }

 public String getCurrentTimeAsString()
 {
  return new Date().toString();
 }

 public BRBCustomerTransactionAdapter getPopulatedBRBCustomerTransactionTable()
 {
  return new BRBCustomerTransactionAdapter(getPopulatedBRBCustomerDataModel(), RequestingSystem);
 }

 public CustomerInfoType getPopulatedBRBCustomerDataModel()
 {
  CustomerInfoType brbCustomerData = new CustomerInfoType();
  AddressDetailsType addres = new AddressDetailsType();
  brbCustomerData.setAddressDetails(addres);
  brbCustomerData.setEcommCustomerId(getUniqueIdentifier()); 
  brbCustomerData.setEmail(TestEmail);
  brbCustomerData.getAddressDetails().setCity(TestCity);
  brbCustomerData.setFirstName(TestFirstName);
  brbCustomerData.setLastName(TestLastName);
  brbCustomerData.setPhone(TestPhoneNumber);
  brbCustomerData.getAddressDetails().setPostalCode(TestPostalCode);
  brbCustomerData.getAddressDetails().setProvince(TestProvince);
  brbCustomerData.getAddressDetails().setAddressLine1(TestAddressLine1);
  brbCustomerData.getAddressDetails().setAddressLine2(TestAddressLine2);

  return brbCustomerData;
 }

}