package Utils;

import org.testng.Assert;

import com.jayway.restassured.response.Response;



/**
 * Created by Selay on 19-Jul-19.
 */
public class TestUtils {

    //Verify the http response status returned. Check Status Code is 200?
    public void checkStatusIs200 (Response res) {
        Assert.assertEquals(res.getStatusCode(),200, "Status Check Failed!");
    }
   
}
