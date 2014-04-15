package com.ctfs.wicimobile.tests;

import static org.junit.Assert.*;
import org.junit.Test;
import android.test.InstrumentationTestCase;
import com.ctfs.wicimobile.util.crypto.WICICryptoHelper;

public class CryptoHelperTests extends InstrumentationTestCase  {
    protected static final String TextToDecryptUTF8 = "rIIOlNq/1rVcQHgrMcailpI00tN6Q4j3tvy+DcXSBGnLdErqWtAyB9/dQKIL3s2hrHf3mBoV7YLD\n9kXRjdhf+E21AfwAvqNcGtHeYwPT7dtzTZHlvp9bdCpfR9TuKhe44jzUKhB5ebnVUX189YfF36AK\nl1y9ltGe5iT7ZlUVjrcjaT+iVKJ3d7cCGrLu+lO7K5gjURgCBdgYzjd8GBYNTnGS8egZspQ/GRQD\noH96ZeqXSM3pLJOQr2wuVpzMivkoc4MO6gqyOkd50IRTnPlyKOjJizoQyOGA4ZOH5bPs4evmqnpm\nOOqdWInQ3Pw3Uk6I4cvQ2aBcSm1fd0ezGWFPWI346UnZ0LQKrcd8CjuRpwB4c0mc1H0ggl8MOqDf\nB+wdHf7DCjScXbO+5B6OcN9QX07WD1QsAO1qjgtqbWh0n7DFMADQsesPxr/L/70EkScmLfTZQIyC\n4k94VXOmr3+msTc2wbZiCqRqpHvkHOjocbuN8cs20Jqym5l8LgugIQlp3rexoI/mYgh5sosTGata\n0Nk7gvbLo9f6rBdgTn/rKtJ5pHyaoWkQsAajxpU+wc087cr7Ij/bN5sDd4kewsM0wU0SDBg+Xsfs\nhQSplhE1MjVo5Y5d08bZQxhBs3x2zHuiw/OAZkF1zsKg8xLvWQ8PnAVZOhhSpLYgMxc9yWqCPuw\u003d";  
  
    /*@Test
    public void testDecryptRSA() {       
        try {
            String decryptedText = WICICryptoHelper.getInstance().decryptRSA(getInstrumentation().getContext(), TextToDecryptUTF8);
            
            assertNull(decryptedText);
            assertTrue(decryptedText.length() > 0);
            assertEquals("5446122841582284", decryptedText);
        } catch (Exception ex) {
            fail(ex.getMessage());
        }
    }*/
}
