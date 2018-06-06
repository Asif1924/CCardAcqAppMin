package com.ctfs.BRB.Util;

import java.util.logging.Logger;

import com.ctc.ctfs.channel.accountacquisition.AccountApplicationRequestType;
import com.ctc.ctfs.channel.webicaddressverification.WebICAddressLookupRequest;
import com.ctc.ctfs.channel.webicidentityexamination.WebICIdentityExamRequest;
import com.ctc.ctfs.channel.webicuserlocation.WebICCheckLocationRequest;
import com.ctc.ctfs.channel.webicusermanagement.WebICCreateUserRequest;
import com.ctc.ctfs.channel.webicusermanagement.WebICDeleteUserRequest;
import com.ctc.ctfs.channel.webicusermanagement.WebICUpdateUserRequest;
import com.ctfs.BRB.exceptions.WebICChannelErrorConstants;
import com.ctfs.BRB.exceptions.WebICChannelException;
import com.ctfs.service.transobj.InsuranceProductCodeType;


public class Utility {

	static Logger log = Logger.getLogger(Utility.class.getName());
	public static final String INSURANCE_CODE_N = "N";
	/**
	 * Convert to uppercase.
	 * 
	 * @return true or false.
	 * @throws Exception
	 */
	public static Object convertToUpperCase(Object input) throws Exception {

		String sMethod = "[convertToUpperCase]";
		log.info(sMethod + " Called...");
		String userId;
		String firstName;
		String lastName;
		String employeeNumber;
//		UserRoleIDType roleId;
		String roleId;
		String groupId;
		String addressLine1;
		String addressLine2;
		String municipality;
		String province;
		String postalCode;
		String phoneNumber;
		String email;
		String activeUserId;
		String city;
		String locationId;
		try {
			if (input instanceof WebICCreateUserRequest) {
				WebICCreateUserRequest createUserRequest = (WebICCreateUserRequest) input;
				if (createUserRequest != null) {
					if (createUserRequest.getUserID() != null) {
						userId = createUserRequest.getUserID().toUpperCase();
						createUserRequest.setUserID(userId);
					}
					if (createUserRequest.getFirstName() != null) {
						firstName = createUserRequest.getFirstName()
						.toUpperCase();
						createUserRequest.setFirstName(firstName);
					}
					if (createUserRequest.getLastName() != null) {
						lastName = createUserRequest.getLastName()
						.toUpperCase();
						createUserRequest.setLastName(lastName);
					}
					if (createUserRequest.getEmployeeNumber() != null) {
						employeeNumber = createUserRequest.getEmployeeNumber()
						.toUpperCase();
						createUserRequest.setEmployeeNumber(employeeNumber);
					}
					if (createUserRequest.getRoleID() != null) {
//						roleId = createUserRequest.getRoleID();
						createUserRequest.setRoleID(createUserRequest.getRoleID());
					}
					if (createUserRequest.getGroupID() != null) {
						groupId = createUserRequest.getGroupID().toUpperCase();
						createUserRequest.setGroupID(groupId);
					}
					if (createUserRequest.getAddressLine1() != null) {
						addressLine1 = createUserRequest.getAddressLine1()
						.toUpperCase();
						createUserRequest.setAddressLine1(addressLine1);
					}
					if (createUserRequest.getAddressLine2() != null) {
						addressLine2 = createUserRequest.getAddressLine2()
						.toUpperCase();
						createUserRequest.setAddressLine2(addressLine2);
					}
					if (createUserRequest.getMunicipality() != null) {
						municipality = createUserRequest.getMunicipality()
						.toUpperCase();
						createUserRequest.setMunicipality(municipality);
					}
					if (createUserRequest.getProvince() != null) {
//						province = createUserRequest.getProvince().toUpperCase();
						createUserRequest.setProvince(createUserRequest.getProvince());
					}
					if (createUserRequest.getPostalCode() != null) {
						postalCode = createUserRequest.getPostalCode()
						.toUpperCase();
						createUserRequest.setPostalCode(postalCode);
					}
					if (createUserRequest.getPhoneNumber() != null) {
						phoneNumber = createUserRequest.getPhoneNumber()
						.toUpperCase();
						createUserRequest.setPhoneNumber(phoneNumber);
					}
					if (createUserRequest.getEmail() != null) {
						email = createUserRequest.getEmail().toUpperCase();
						createUserRequest.setEmail(email);
					}
					return createUserRequest;
				}

			} else if (input instanceof WebICDeleteUserRequest) {
				WebICDeleteUserRequest deleteUserRequest = (WebICDeleteUserRequest) input;
				if (deleteUserRequest != null) {
					if (deleteUserRequest.getUserID() != null) {
						userId = deleteUserRequest.getUserID().toUpperCase();
						deleteUserRequest.setUserID(userId);
					}
					if (deleteUserRequest.getGroupID() != null) {
						groupId = deleteUserRequest.getGroupID().toUpperCase();
						deleteUserRequest.setGroupID(groupId);
					}

					return deleteUserRequest;
				}

			} else if (input instanceof WebICUpdateUserRequest) {
				WebICUpdateUserRequest updateUserRequest = (WebICUpdateUserRequest) input;
				if (updateUserRequest != null) {
					if (updateUserRequest.getUserID() != null) {
						userId = updateUserRequest.getUserID().toUpperCase();
						updateUserRequest.setUserID(userId);
					}
					if (updateUserRequest.getGroupID() != null) {
						groupId = updateUserRequest.getGroupID().toUpperCase();
						updateUserRequest.setGroupID(groupId);
					}
					if (updateUserRequest.getAddressLine1() != null) {
						addressLine1 = updateUserRequest.getAddressLine1()
						.toUpperCase();
						updateUserRequest.setAddressLine1(addressLine1);
					}
					if (updateUserRequest.getAddressLine2() != null) {
						addressLine2 = updateUserRequest.getAddressLine2()
						.toUpperCase();
						updateUserRequest.setAddressLine2(addressLine2);
					}
					if (updateUserRequest.getMunicipality() != null) {
						municipality = updateUserRequest.getMunicipality()
						.toUpperCase();
						updateUserRequest.setMunicipality(municipality);
					}
					if (updateUserRequest.getProvince() != null) {
//						province = updateUserRequest.getProvince().toUpperCase();
						updateUserRequest.setProvince(updateUserRequest.getProvince());
					}
					if (updateUserRequest.getPostalCode() != null) {
						postalCode = updateUserRequest.getPostalCode()
						.toUpperCase();
						updateUserRequest.setPostalCode(postalCode);
					}
					if (updateUserRequest.getPhoneNumber() != null) {
						phoneNumber = updateUserRequest.getPhoneNumber()
						.toUpperCase();
						updateUserRequest.setPhoneNumber(phoneNumber);
					}
					if (updateUserRequest.getEmail() != null) {
						email = updateUserRequest.getEmail().toUpperCase();
						updateUserRequest.setEmail(email);
					}

					return updateUserRequest;
				}
			} else if (input instanceof WebICAddressLookupRequest) {
				WebICAddressLookupRequest addressLookupRequest = (WebICAddressLookupRequest) input;
				if (addressLookupRequest != null) {
					if (addressLookupRequest.getOriginalAddressLine1() != null) {
						addressLine1 = addressLookupRequest
						.getOriginalAddressLine1().toUpperCase();
						addressLookupRequest
						.setOriginalAddressLine1(addressLine1);
					}
					if (addressLookupRequest.getOriginalAddressLine2() != null) {
						addressLine2 = addressLookupRequest
						.getOriginalAddressLine2().toUpperCase();
						addressLookupRequest
						.setOriginalAddressLine2(addressLine2);
					}
					if (addressLookupRequest.getOriginalCityName() != null) {
						city = addressLookupRequest.getOriginalCityName()
						.toUpperCase();
						addressLookupRequest.setOriginalCityName(city);
					}
					if (addressLookupRequest.getOriginalProvince() != null) {
//						province = addressLookupRequest.getOriginalProvince().toUpperCase();
						addressLookupRequest.setOriginalProvince(addressLookupRequest.getOriginalProvince());
					}
					if (addressLookupRequest.getOriginalPostalCode() != null) {
						postalCode = addressLookupRequest
						.getOriginalPostalCode().toUpperCase();
						addressLookupRequest.setOriginalPostalCode(postalCode);
					}
					return addressLookupRequest;
				}

			} else if (input instanceof WebICCheckLocationRequest) {
				WebICCheckLocationRequest checkLocationRequest = (WebICCheckLocationRequest) input;
				if (checkLocationRequest != null) {
					if (checkLocationRequest.getUserID() != null) {
						userId = checkLocationRequest.getUserID().toUpperCase();
						checkLocationRequest.setUserID(userId);
					}
					if (checkLocationRequest.getLocationID() != null) {
						locationId = checkLocationRequest.getLocationID()
						.toUpperCase();
						checkLocationRequest.setLocationID(locationId);
					}
					return checkLocationRequest;
				}
			} else if (input instanceof AccountApplicationRequestType) {
				AccountApplicationRequestType accountApplicationRequest = (AccountApplicationRequestType) input;

				if (accountApplicationRequest.getCurrentCountry() != null)
					accountApplicationRequest
					.setCurrentCountry(accountApplicationRequest
							.getCurrentCountry().toUpperCase());

				if (accountApplicationRequest.getCurrentPostalCode() != null)
					accountApplicationRequest
					.setCurrentPostalCode(accountApplicationRequest
							.getCurrentPostalCode().toUpperCase());

				if (accountApplicationRequest.getCurrentProvince() != null)
					accountApplicationRequest
					.setCurrentProvince(accountApplicationRequest.getCurrentProvince());

				if (accountApplicationRequest.getEmployementCategory() != null)
					accountApplicationRequest
					.setEmployementCategory(accountApplicationRequest
							.getEmployementCategory().toUpperCase());

				if (accountApplicationRequest.getEmployementStatus() != null)
					accountApplicationRequest
					.setEmployementStatus(accountApplicationRequest
							.getEmployementStatus().toUpperCase());

				if (accountApplicationRequest.getEmployerCountry() != null)
					accountApplicationRequest
					.setEmployerCountry(accountApplicationRequest
							.getEmployerCountry());

				if (accountApplicationRequest.getEmployerProvince() != null)
					accountApplicationRequest
					.setEmployerProvince(accountApplicationRequest
							.getEmployerProvince());

				if (accountApplicationRequest.getEmployerProvince() != null)
					accountApplicationRequest
					.setEmployerProvince(accountApplicationRequest
							.getEmployerProvince());

				if (accountApplicationRequest.getRequestedProductType() != null)
					accountApplicationRequest
					.setRequestedProductType(accountApplicationRequest
							.getRequestedProductType().toUpperCase());

				if (accountApplicationRequest.getIdType() != null)
					accountApplicationRequest
					.setIdType(accountApplicationRequest.getIdType()
							.toUpperCase());

				if (accountApplicationRequest.getPlaceOfIssue() != null)
					accountApplicationRequest
					.setPlaceOfIssue(accountApplicationRequest
							.getPlaceOfIssue());

				if (accountApplicationRequest.getPreferedLanguage() != null)
					accountApplicationRequest
					.setPreferedLanguage(accountApplicationRequest
							.getPreferedLanguage().toUpperCase());

				if (accountApplicationRequest.getSupp1Province() != null)
					accountApplicationRequest
					.setSupp1Province(accountApplicationRequest
							.getSupp1Province());

				if (accountApplicationRequest.getCurrentAddressType() != null)
					accountApplicationRequest
					.setCurrentAddressType(accountApplicationRequest
							.getCurrentAddressType().toUpperCase());

				if (accountApplicationRequest.getInsuranceCode() != null && accountApplicationRequest.getInsuranceCode().trim().length()>0)
					accountApplicationRequest
					.setInsuranceCode(accountApplicationRequest
							.getInsuranceCode().toUpperCase());
				else
					accountApplicationRequest
					.setInsuranceCode(InsuranceProductCodeType._N);
				
				if (accountApplicationRequest.getInsuranceAgreedFlag() != null){
					 if(accountApplicationRequest.getInsuranceAgreedFlag().trim().length()==0)
					accountApplicationRequest.setInsuranceAgreedFlag(INSURANCE_CODE_N);
					else
						accountApplicationRequest.setInsuranceAgreedFlag(accountApplicationRequest.getInsuranceAgreedFlag().toUpperCase());
				}else
					accountApplicationRequest.setInsuranceAgreedFlag(INSURANCE_CODE_N);


				return accountApplicationRequest;
			}else if(input instanceof WebICIdentityExamRequest){
				
				WebICIdentityExamRequest identityExamRequest = (WebICIdentityExamRequest) input;
				if (identityExamRequest != null) {
					if (identityExamRequest.getFirstName() != null) 
						identityExamRequest.setFirstName(identityExamRequest.getFirstName().toUpperCase());
					if(identityExamRequest.getMiddleName()!=null)
						identityExamRequest.setMiddleName(identityExamRequest.getMiddleName().toUpperCase());
					if(identityExamRequest.getLastName()!=null)
						identityExamRequest.setLastName(identityExamRequest.getLastName().toUpperCase());
					if(identityExamRequest.getDriversLicense()!=null)
						identityExamRequest.setDriversLicense(identityExamRequest.getDriversLicense().toUpperCase());
					
						
					return identityExamRequest;
				
				   }
				}
				
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
		return null;
	}

	/**
	 * validate Create User Request .
	 * 
	 * @param validateIdentityExamRequest
	 * @throws WebICChannelException
	 */

	public static boolean validateIdentityExamRequest(
			WebICIdentityExamRequest identityExamRequest)
	throws WebICChannelException {


		boolean isValid = true;
		
		if(identityExamRequest!=null){

			if (identityExamRequest.getFirstName()==null || (identityExamRequest.getFirstName()!=null && (identityExamRequest.getFirstName().trim().length()<=0 || identityExamRequest.getFirstName().trim().length()>50))) {
				throw new WebICChannelException(
						WebICChannelErrorConstants.INVALID_FIRST_NAME);
			}
			if (identityExamRequest.getLastName()==null || (identityExamRequest.getLastName()!=null && (identityExamRequest.getLastName().trim().length()<=0 || identityExamRequest.getLastName().trim().length()>50))) {
				throw new WebICChannelException(
						WebICChannelErrorConstants.INVALID_LAST_NAME);
			}
			if (identityExamRequest.getDateOfBirth()==null || (identityExamRequest.getDateOfBirth()!=null && identityExamRequest.getDateOfBirth().toString().trim().length()==0)) {
				throw new WebICChannelException(
						WebICChannelErrorConstants.INVALID_DATE_OF_BIRTH);
			}
		}
		return isValid;
	}
	
}
