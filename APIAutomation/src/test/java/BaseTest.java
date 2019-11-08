import Utils.TestUtils;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import com.jayway.restassured.response.Response;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import utils.ApiUtils;

/**
 * Created by Selay on 19-Jul-19.
 */
public class BaseTest {

    public Response res = null; //Response
    public JsonPath jp = null; //JsonPath

    //Instantiate a Helper Test Methods (testUtils) Object
    TestUtils testUtils = new TestUtils();

    @BeforeClass
    public void setup (){
        //Test Setup
        ApiUtils.setBaseURI(); //Setup Base URI
        ApiUtils.setBasePath("WICIMiddlewareBroker2"); //Setup Base Path
        ApiUtils.setContentType(ContentType.JSON); //Setup Content Type
    }

    @AfterClass
    public void afterTest (){
        //Reset Values
        ApiUtils.resetBaseURI();
        ApiUtils.resetBasePath();
    }

}
