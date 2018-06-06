package com.ctfs.BRB.EmailService;

public class BRBEmail
{
	public enum Language {ENU,FRC};
    public enum TokenType {ACN, TCN};
    public enum RequestorType { WSP50110030273, WSP50139059239 , WSP50120834693}; //Apple, Samsung, Android
    
    private String to;
    private Language lang;
    private TokenType type;
    private String code;
    private String expiry;
    private String uuid;
    private RequestorType requestorId;
    private String apr;
    private String cashApr;
    private String creditLimit;
    private String customerName;
    private String creditProtector;
    private String identityWatch;
    private String protectionAdvantage;
    private String productType;
    private String loyaltyMembershipNumber;
    private String appStatus;
    
	public String getAppStatus() {
		return appStatus;
	}
	public void setAppStatus(String appStatus) {
		this.appStatus = appStatus;
	}
	public String getCashApr() {
		return cashApr;
	}
	public void setCashApr(String cashApr) {
		this.cashApr = cashApr;
	}
	public String getCreditProtector() {
		return creditProtector;
	}
	public void setCreditProtector(String creditProtector) {
		this.creditProtector = creditProtector;
	}
	public String getIdentityWatch() {
		return identityWatch;
	}
	public void setIdentityWatch(String identityWatch) {
		this.identityWatch = identityWatch;
	}
	public String getProtectionAdvantage() {
		return protectionAdvantage;
	}
	public void setProtectionAdvantage(String protectionAdvantage) {
		this.protectionAdvantage = protectionAdvantage;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getTo()
    {
        return to;
    }
    public void setTo(String to)
    {
        this.to = to;
    }
    public Language getLang()
    {
        return lang;
    }
    public void setLang(Language lang)
    {
        this.lang = lang;
    }
    public TokenType getType()
    {
        return type;
    }
    public void setType(TokenType type)
    {
        this.type = type;
    }
    public String getCode()
    {
        return code;
    }
    public void setCode(String code)
    {
        this.code = code;
    }
    public String getExpiry()
    {
        return expiry;
    }
    public void setExpiry(String expiry)
    {
        this.expiry = expiry;
    }
    public String getUuid()
    {
        return uuid;
    }
    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }
    public RequestorType getRequestorId()
    {
        return requestorId;
    }
    public void setRequestorId(RequestorType requestorId)
    {
        this.requestorId = requestorId;
    }
	public String getApr() {
		return apr;
	}
	public void setApr(String apr) {
		this.apr = apr;
	}
	public String getCreditLimit() {
		return creditLimit;
	}
	public void setCreditLimit(String creditLimit) {
		this.creditLimit = creditLimit;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getLoyaltyMembershipNumber() {
		return loyaltyMembershipNumber;
	}
	public void setLoyaltyMembershipNumber(String loyaltyMembershipNumber) {
		this.loyaltyMembershipNumber = loyaltyMembershipNumber;
	}
    
}
