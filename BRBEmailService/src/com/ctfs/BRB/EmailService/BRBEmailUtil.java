package com.ctfs.BRB.EmailService;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.HashMap;
import java.util.logging.Logger;

import microsoft.exchange.webservices.data.EmailAddress;
import microsoft.exchange.webservices.data.EmailMessage;
import microsoft.exchange.webservices.data.ExchangeCredentials;
import microsoft.exchange.webservices.data.ExchangeService;
import microsoft.exchange.webservices.data.ExchangeVersion;
import microsoft.exchange.webservices.data.MessageBody;
import microsoft.exchange.webservices.data.WebCredentials;

import org.apache.tools.ant.util.FileUtils;

import com.ctfs.BRB.EmailService.BRBEmail.Language;

public class BRBEmailUtil
{
    private static final Logger log = Logger.getLogger(BRBEmailUtil.class.getName());

    private static ExchangeService _service = null;
    private static BRBEmailUtil _instance = null;

    private static final HashMap<String, String> emailformats = new HashMap<String, String>();

    public BRBEmailUtil(String productType,String appStatus)
    {
	log.info("Setting up exchange connection ...");

	// hardcode the credentials for now
	// userid for canadapost is "canadapost.dropbox", password "Password1"
	log.info("Setting up exchange connection ..." + EmailConfigReader.getInstance().prop.getProperty("ExchangeUser")); //getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeUser"));
	log.info("Setting up exchange connection ..." + EmailConfigReader.getInstance().prop.getProperty("ExchangePassword")); //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangePassword"));
	log.info("Setting up exchange connection ..." + EmailConfigReader.getInstance().prop.getProperty("ExchangeURL")); //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeURL"));
	log.info("Setting up exchange connection ..." + EmailConfigReader.getInstance().prop.getProperty("ExchangeDomain")); //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeDomain"));
	// CTC uses exchange version 2010
	_service = new ExchangeService(ExchangeVersion.Exchange2010);
	ExchangeCredentials credentials = new WebCredentials(EmailConfigReader.getInstance().prop.getProperty("ExchangeUser"), //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeUser"),
		EmailConfigReader.getInstance().prop.getProperty("ExchangePassword"), //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangePassword"),
		EmailConfigReader.getInstance().prop.getProperty("ExchangeDomain")); //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeDomain"));
	_service.setCredentials(credentials);

	// CTC exchange web services are located at
	// https://mail.cantire.com/EWS/exchange.asmx
	try
	{
	    // hardcode the URL for the sake of testing
	    _service.setUrl(new URI(EmailConfigReader.getInstance().prop.getProperty("ExchangeURL"))); //.getCategoryKeyValue("TokenConsumerEmailConfig", "ExchangeURL")));
	}
	catch (Exception e)
	{
	    log.severe("Unable to set up exchange connection due to " + e.getMessage());
	}

	log.info("Exchange connection setup.");

	// Load email templates

	log.info("Loading email templates ...");
	log.info("appStatus: "+appStatus+"productType :"+productType);
	try
	{
			if ((appStatus!=null&&appStatus.equalsIgnoreCase("APPROVED")) && (productType != null && productType.equalsIgnoreCase("OMX"))) {
			// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.approve.subject.omx.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.approve.subject.omx.fr"));
			// Message Body	
	    	emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.approve.body.omx.en")), "UTF-8"))));
		    emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.approve.body.omx.fr")), "UTF-8"))));	
			}
			else if ((appStatus!=null&&appStatus.equalsIgnoreCase("APPROVED")) && (productType != null && productType.equalsIgnoreCase("OMZ"))) {
			// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.approve.subject.omz.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.approve.subject.omz.fr"));
			// Message Body	
			emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.approve.body.omz.en")), "UTF-8"))));
	        emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.approve.body.omz.fr")), "UTF-8"))));
			}
			else if((appStatus!=null&&appStatus.equalsIgnoreCase("PENDING")) && (productType != null && productType.equalsIgnoreCase("OMX"))) {
				// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omx.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omx.fr"));
			// Message Body	
		    emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omx.en")), "UTF-8"))));
			emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omx.fr")), "UTF-8"))));	
			}
			else if ((appStatus!=null&&appStatus.equalsIgnoreCase("PENDING")) && (productType != null && productType.equalsIgnoreCase("OMZ"))) {
			// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omz.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omz.fr"));
			// Message Body	
			emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omz.en")), "UTF-8"))));
		    emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omz.fr")), "UTF-8"))));
			}	
			else if((appStatus!=null&&appStatus.equalsIgnoreCase("STOREID")) && (productType != null && productType.equalsIgnoreCase("OMX"))) {
				// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.subject.omx.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.subject.omx.fr"));
			// Message Body	
		    emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.body.omx.en")), "UTF-8"))));
			emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.body.omx.fr")), "UTF-8"))));	
			}
			else if ((appStatus!=null&&appStatus.equalsIgnoreCase("STOREID")) && (productType != null && productType.equalsIgnoreCase("OMZ"))) {
			// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.subject.omz.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.subject.omz.fr"));
			// Message Body	
			emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.body.omz.en")), "UTF-8"))));
		    emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.storeidpend.body.omz.fr")), "UTF-8"))));
			}
			else if((appStatus!=null&&appStatus.equalsIgnoreCase("DECLINED")) && (productType != null && productType.equalsIgnoreCase("OMX"))) {
				// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omx.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omx.fr"));
			// Message Body	
		    emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omx.en")), "UTF-8"))));
			emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omx.fr")), "UTF-8"))));	
			}
			else if ((appStatus!=null&&appStatus.equalsIgnoreCase("DECLINED")) && (productType != null && productType.equalsIgnoreCase("OMZ"))) {
			// Subject lines
			emailformats.put("BRBSUBJECT_EN", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omz.en"));
			emailformats.put("BRBSUBJECT_FR", EmailConfigReader.getInstance().prop.getProperty("brb.pend.subject.omz.fr"));
			// Message Body	
			emailformats.put("BRBBODY_EN", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omz.en")), "UTF-8"))));
		    emailformats.put("BRBBODY_FR", FileUtils.readFully(new BufferedReader(new InputStreamReader(new FileInputStream(EmailConfigReader.getInstance().prop.getProperty("brb.pend.body.omz.fr")), "UTF-8"))));
			}	
	    log.info("Email templates loaded.");
	}
	catch (Exception e)
	{
	    log.severe("Unable to load templates due to " + e.getMessage());
	}
    }

    private static String formatSubject(BRBEmail emailParams)
    {
	String key = "BRBSUBJECT_";
	/*if (emailParams.getType().equals(BRBEmail.TokenType.ACN))
	{
	    key += "ACNSUBJECT_";
	}
	else
	{
	    key += "TCNSUBJECT_"+emailParams.getRequestorId()+"_";
	}
*/
	if (emailParams.getLang().equals(BRBEmail.Language.FRC))
	{
	    key += "FR";
	}
	else
	{
	    key += "EN";
	}
	return format(key, emailParams);
    }

    private static String formatBody(BRBEmail emailParams)
    {
	String key = "BRBBODY_";
	/*if (emailParams.getType().equals(BRBEmail.TokenType.ACN))
	{
	    key += "ACNBODY_";
	}
	else
	{
	    key += "TCNBODY_"+emailParams.getRequestorId()+"_";
	}
*/
	if (emailParams.getLang().equals(BRBEmail.Language.FRC))
	{
	    key += "FR";
	}
	else
	{
	    key += "EN";
	}
	log.info("KEY = " + key);
	return format(key, emailParams, emailParams.getLang());
    }

    private static String format(String key, BRBEmail emailParams, Language lang)
    {
    	if (emailParams.getLang().equals(BRBEmail.Language.FRC))
    	{
    		if(emailParams.getCreditProtector().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_CreditProtector%%", "d'adh&#233;rer"));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_CreditProtector%%", "de NE PAS adh&#233;rer"));
    		}
    		if(emailParams.getIdentityWatch().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_IdentityWatchClassic%%", "d'adh&#233;rer"));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_IdentityWatchClassic%%", "de NE PAS adh&#233;rer"));
    		}
    		if(emailParams.getProtectionAdvantage().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_ProtectionAdvantage%%", "d'adh&#233;rer"));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_ProtectionAdvantage%%", "de NE PAS adh&#233;rer"));
    		}	
    	} else {
    		if(emailParams.getCreditProtector().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_CreditProtector%%", ""));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_CreditProtector%%", "NOT"));
    		}
    		if(emailParams.getIdentityWatch().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_IdentityWatchClassic%%", ""));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_IdentityWatchClassic%%", "NOT"));
    		}
    		if(emailParams.getProtectionAdvantage().equals("1")){
    			emailformats.put(key,emailformats.get(key).replace("%%OP_ProtectionAdvantage%%", ""));
    		} else {
    			emailformats.put(key,emailformats.get(key).replace("%%OP_ProtectionAdvantage%%", "NOT"));
    		}
    	}
    	return format(key, emailParams);
    } 
    
    private static String format(String key, BRBEmail emailParams)
    {
    	System.out.println("key :"+key+"emailParams:"+emailParams);
    	if(emailParams.getCreditLimit()!=null){
    	emailformats.put(key,emailformats.get(key).replace("%%CreditLimit%%", emailParams.getCreditLimit()));
    	}
    	if(emailParams.getApr()!=null){
        emailformats.put(key,emailformats.get(key).replace("%%apr%%", emailParams.getApr()));	
    	}
    	if(emailParams.getCashApr()!=null){
        emailformats.put(key,emailformats.get(key).replace("%%CashAPR%%", emailParams.getCashApr()));
    	}
    	if(emailParams.getTo()!=null){
    		emailformats.put(key,emailformats.get(key).replace("%%emailaddress%%", emailParams.getTo()));	
    	}
    	
    	//emailformats.put(key,emailformats.get(key).replace("%%LoyaltyNumber%%", emailParams.getLoyaltyMembershipNumber()));
    	
    	return emailformats.get(key).replace("%%CustomerName%%", emailParams.getCustomerName());

    }

    /*public static synchronized BRBEmailUtil getInstance()
    {
	if (_instance == null)
	{
	    _instance = new BRBEmailUtil(String productType);
	}
	return _instance;
    }*/

    public boolean sendEmail(BRBEmail info)
    {
	try
	{
	    EmailMessage message = new EmailMessage(_service);
	    //ExtendedPropertyDefinition xNotifUUIDHdr = new ExtendedPropertyDefinition(DefaultExtendedPropertySet.InternetHeaders, "X-Notif-UUID", MapiPropertyType.String);
	    //message.setExtendedProperty(xNotifUUIDHdr, "<ctfs_notif_uuid:"+uuid+":ctfs_notif_uuid>");
	    message.setSubject(formatSubject(info));
	    // log.info("Subject = " + message.getSubject());
	    MessageBody body = new MessageBody(formatBody(info));
	    message.getReplyTo().add("donotreply@cantire.com");
	    message.setBody(body);
	    // log.info("Body = " + message.getBody());
	    EmailAddress address = new EmailAddress(info.getTo());
	    log.info("To = " + address.getAddress());
	    message.getToRecipients().add(address);
	    //Added for US5071: If there is an Unauthorized Exception while connecting to the mailbox, retry the connection to send the mail again
	    for(int i=0;i<3;)
	    {
				try {
					message.sendAndSaveCopy();
				} catch (microsoft.exchange.webservices.data.HttpErrorException ex) {
					i++;
					continue;
				}
			break;	
	    }
	    log.info(" Message sent to " + address.getAddress() + " and copy saved into sent items.");
	    return true;

	}
	catch (Throwable e)
	{
	    e.printStackTrace();
	    log.severe("Unable to send email due to " + e.getMessage());
	}
	return false;

    }
/*
    public ArrayList<String> scanForUndeliveredEmail()
    {
	ArrayList<String> bouncebacks = new ArrayList<String>();

	ItemView view = new ItemView(50);
	FindItemsResults<Item> findResults;
	ArrayList<ItemId> itemIdLst;
	try
	{
	    log.info("Attempting to access Inbox ...");
	    Folder inBox = Folder.bind(_service, WellKnownFolderName.Inbox);
	    do
	    {
		itemIdLst = new ArrayList<ItemId>();
		// find the items in the box
		findResults = _service.findItems(inBox.getId(), view);
		log.info("Attempting to access Inbox ...");
		if (findResults != null && !findResults.getItems().isEmpty())
		{
		    // for each item, grab the body text
		    _service.loadPropertiesForItems(findResults, PropertySet.FirstClassProperties);
		    // iterate through the results, filtering out undelivered emails with the X-Notif-UUID
		    for (Item item : findResults.getItems())
		    {
			itemIdLst.add(item.getId());
			if ( (item instanceof EmailMessage) && !(item instanceof MeetingMessage))
			{
			    EmailMessage email = (EmailMessage) item;
			    log.info("Parsing email with Subject = " + email.getSubject());
			    //Scan the body to check for occurrence of 
			    //x-notif-uuid: &lt;ctfs_notif_uuid:a2e532f6-0ecf-41fb-a28a-bf9d7816dbba:ctfs_notif_uuid&gt;
			    String body = email.getBody().toString();
			    if(body.contains("&lt;ctfs_notif_uuid:") && body.contains(":ctfs_notif_uuid&gt;"))
			    {
				String uuid = body.substring(body.indexOf("&lt;ctfs_notif_uuid:") + 20, body.indexOf(":ctfs_notif_uuid&gt;"));
				log.info("uuid bouncedback = " + uuid.trim());
				bouncebacks.add(uuid);
			    }
			}
		    }
		    // next 50....
		    view.setOffset(view.getOffset() + 50);
		    _service.deleteItems(itemIdLst, DeleteMode.MoveToDeletedItems, SendCancellationsMode.SendToAllAndSaveCopy, AffectedTaskOccurrence.SpecifiedOccurrenceOnly);
		}
	    }
	    while (findResults.isMoreAvailable());
	}
	catch (Exception e)
	{
	    e.printStackTrace();
	    log.severe("Unable to access inbox for bounceback processing due to " + e.getMessage());
	}
	return bouncebacks;
    }
*/
}
