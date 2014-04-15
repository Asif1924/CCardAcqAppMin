package com.ctfs.wicimobile.tests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import com.ctfs.wicimobile.util.WICIExpiryDateReplacementStrategy;

public class ExpiryDateReplacementStrategyTests {
    protected static final String ReceivedDate = "1608";
    protected static final String SerachTemplate = "Expiry date:m #[ExpiryDate]";
    protected static final String ReplasedExpiryDate = "08/16";
    private static final String EMPTY_STRING = "";
        
    private String _replacedText;
    
    @Before
    public void setUp() throws Exception {
        setReplacedText(null);
    }

    @After
    public void tearDown() throws Exception {
    }
    
    @Test
    public void testApplyReplacementSuccess() {
        try {
            WICIExpiryDateReplacementStrategy expirityDateReplacementStrategy = new WICIExpiryDateReplacementStrategy(ReceivedDate);
            
            setReplacedText(expirityDateReplacementStrategy.applyReplacement(SerachTemplate));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), EMPTY_STRING);
            assertTrue("No such text found", getReplacedText().contains(ReplasedExpiryDate));
            assertFalse("#[ExpiryDate] exist in text", getReplacedText().contains("#[ExpiryDate]"));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    @Test
    public void testApplyReplacementEmptyInput() {
        try {
            WICIExpiryDateReplacementStrategy expirityDateReplacementStrategy = new WICIExpiryDateReplacementStrategy(EMPTY_STRING);
            
            setReplacedText(expirityDateReplacementStrategy.applyReplacement(SerachTemplate));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), EMPTY_STRING);
            assertFalse("Serach text found", getReplacedText().contains(ReplasedExpiryDate));
            assertFalse("#[ExpiryDate] exist in text", getReplacedText().contains("#[ExpiryDate]"));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    @Test
    public void testApplyReplacementNullInput() {
        try {
            WICIExpiryDateReplacementStrategy expirityDateReplacementStrategy = new WICIExpiryDateReplacementStrategy(null);
            
            setReplacedText(expirityDateReplacementStrategy.applyReplacement(SerachTemplate));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), EMPTY_STRING);
            assertFalse("Serach text found", getReplacedText().contains(ReplasedExpiryDate));
            assertFalse("#[ExpiryDate] exist in text", getReplacedText().contains("#[ExpiryDate]"));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    /**
     * @return the replacedText
     */
    public String getReplacedText() {
        return _replacedText;
    }

    /**
     * @param replacedText
     *            the replacedText to set
     */
    public void setReplacedText(String replacedText) {
        this._replacedText = replacedText;
    }
}
