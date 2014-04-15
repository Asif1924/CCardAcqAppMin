package com.ctfs.WICI.TestCase;


import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import com.ctfs.WICI.Helper.ImageUtils;
import org.apache.commons.codec.binary.Base64;


public class ImageUtilsTest {
	
	String inputFile = "test/WEB-INF/inputfiles/signature.png";
	
	String outputFileSream 			= "test/WEB-INF/outputfiles/out_from_stream.jpg";
	String outputFileFromPngFile 	= "test/WEB-INF/outputfiles/out_from_png_file.jpg";
	String outputFileImageUtils 	= "test/WEB-INF/outputfiles/out_convertPngDataUrlToJpgByteArray.jpg";
	
	//luk: input string that we get from the client:
	//luk: NOTE: this stream is not the same as [inputFile = "test/WEB-INF/1.png";]
	String inputStrDataUrl = "data:image/png;base64,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";

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void ImageUtils_convertPngDataUrlToJpgByteArray() throws Exception{
		
		
		ImageUtils utils = new ImageUtils();
		byte[] byteArray = utils.convertPNGDataURLToJPGByteArray(this.inputStrDataUrl);
		
		FileOutputStream fos = new FileOutputStream(outputFileImageUtils);
		fos.write(byteArray);
		fos.close();
	}
	
	@Test
	public void png_file_to_jpg(){
		
	
		
		
		BufferedImage bufferedImage;
		 
		try {
	 
		  //read image file
		  bufferedImage = ImageIO.read(new File(inputFile));
	 
		  // create a blank, RGB, same width and height, and a white background
		  BufferedImage newBufferedImage = new BufferedImage(bufferedImage.getWidth(),
				bufferedImage.getHeight(), BufferedImage.TYPE_INT_RGB);
		  newBufferedImage.createGraphics().drawImage(bufferedImage, 0, 0, Color.WHITE, null);
	 
		  // write to jpeg file
		  boolean success = ImageIO.write(newBufferedImage, "jpg", new File(outputFileFromPngFile));
	 
		  Assert.assertTrue(success);
		  
		  //luk: lets try to check whether the output file exists and it is not empty:
		  File f = new File(outputFileFromPngFile);
		  Assert.assertTrue(f.exists());
		  
		  Assert.assertTrue(f.length()>0);
		  
	 
		} catch (IOException e) {
	 
		  e.printStackTrace();
		  Assert.fail(e.getLocalizedMessage());
	 
		}
	}
	@Test
	public void png_stream_to_jpg() throws Exception{
		
		//lets cut the [data:image/png;base64,]:
		String strDataUrl = inputStrDataUrl.substring(22);
		
		byte[] byteArray = Base64.decodeBase64(strDataUrl);
		
		BufferedImage bufferedImage;
		 
		try {
	 
		  //read image file
		  //bufferedImage = ImageIO.read(new File(inputFile));
		  
			//luk: read from byte array:
		  bufferedImage = ImageIO.read(new ByteArrayInputStream(byteArray));
	 
		  // create a blank, RGB, same width and height, and a white background
		  BufferedImage newBufferedImage = new BufferedImage(bufferedImage.getWidth(),
				bufferedImage.getHeight(), BufferedImage.TYPE_INT_RGB);
		  newBufferedImage.createGraphics().drawImage(bufferedImage, 0, 0, Color.WHITE, null);
	 
		  // write to jpeg file
		  boolean success = ImageIO.write(newBufferedImage, "jpg", new File(outputFileSream));
	 
		  Assert.assertTrue(success);
		  
		  //luk: lets try to check whether the output file exists and it is not empty:
		  File f = new File(outputFileSream);
		  Assert.assertTrue(f.exists());
		  
		  Assert.assertTrue(f.length()>0);
		  
	 
		} catch (IOException e) {
	 
		  e.printStackTrace();
		  Assert.fail(e.getLocalizedMessage());
	 
		}
	}
}
