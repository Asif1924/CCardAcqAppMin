package com.ctfs.BRB.Helper;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import javax.imageio.ImageIO;
import org.apache.commons.codec.binary.Base64;

public class ImageUtils
{

	public byte[] convertPNGDataURLToJPGByteArray(String strDataUrl) throws Exception
	{
		strDataUrl = strDataUrl.substring(22);

		byte[] byteArray = Base64.decodeBase64(strDataUrl);

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		BufferedImage bufferedImage = ImageIO.read(new ByteArrayInputStream(byteArray));

		BufferedImage newBufferedImage = new BufferedImage(bufferedImage.getWidth(), bufferedImage.getHeight(), BufferedImage.TYPE_INT_RGB);

		newBufferedImage.createGraphics().drawImage(bufferedImage, 0, 0, Color.WHITE, null);

		ImageIO.write(newBufferedImage, "jpg", outputStream);

		byte[] rawJPGImageAsByteArray = outputStream.toByteArray();

		byte[] base64EncodedJPGImageAsByteArray = Base64.encodeBase64(rawJPGImageAsByteArray);

		return base64EncodedJPGImageAsByteArray;
	}
}
