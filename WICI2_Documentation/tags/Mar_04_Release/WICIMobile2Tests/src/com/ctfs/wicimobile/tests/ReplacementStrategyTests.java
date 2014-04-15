package com.ctfs.wicimobile.tests;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.ctfs.wicimobile.util.WICICardReplacementStrategy;

public class ReplacementStrategyTests {
    protected static final String OMCCardText = "Options® MasterCard®";
    protected static final String OMPCardText = "Gas Advantage® MasterCard®";
    protected static final String OMRCardText = "Cash Advantage® MasterCard®";

    protected static final String OMCCard = "OMC";
    protected static final String OMPCard = "OMP";
    protected static final String OMRCard = "OMR";

    protected static final String SerachText = "Congratulations on becoming our new #[CardType] cardmember!";

    private String _replacedText;

    @Before
    public void setUp() throws Exception {
        setReplacedText(null);
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void testOMCReplacementStrategySuccess() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMCCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("No such text found", getReplacedText().contains(OMCCardText));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }

    @Test
    public void testOMPReplacementStrategySuccess() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMPCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("No such text found", getReplacedText().contains(OMPCardText));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }

    @Test
    public void testOMRReplacementStrategySuccess() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMRCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("No such text found", getReplacedText().contains(OMRCardText));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    @Test
    public void testOMCReplacementStrategyFail() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMCCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("Text should not be found", !getReplacedText().contains(OMPCardText));
            assertTrue("Text should not be found", !getReplacedText().contains(OMRCardText));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    @Test
    public void testOMRReplacementStrategyFail() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMRCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("Text should not be found", !getReplacedText().contains(OMCCardText));
            assertTrue("Text should not be found", !getReplacedText().contains(OMPCardText));
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }
    
    @Test
    public void testOMPReplacementStrategyFail() {
        try {
            WICICardReplacementStrategy cardReplacementStrategy = new WICICardReplacementStrategy(OMPCard);

            setReplacedText(cardReplacementStrategy.applyReplacement(SerachText));
            
            assertNotNull("ReplacedText is NULL!", getReplacedText());
            assertNotSame(getReplacedText(), "");
            assertTrue("Text should not be found", !getReplacedText().contains(OMRCardText));
            assertTrue("Text should not be found", !getReplacedText().contains(OMCCardText));
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
