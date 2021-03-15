package com.ctfs.WICI.Helper;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.color.ColorSpace;
import java.awt.image.BufferedImage;
import java.awt.image.ColorConvertOp;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
import javax.imageio.IIOImage;
import javax.imageio.ImageIO;
import javax.imageio.ImageWriteParam;
import javax.imageio.ImageWriter;
import javax.imageio.stream.ImageOutputStream;

import org.apache.commons.codec.binary.Base64;

public class ImageUtils
{
	private static final int _6KB = 6000;

	public byte[] convertPNGDataURLToJPGByteArray(String argJSONImageString) throws Exception
	{
		if (argJSONImageString.startsWith("data:image") && argJSONImageString.contains("base64,"))
			argJSONImageString = argJSONImageString.substring(22); // Offset
																	// from
																	// beginning
																	// of string
																	// to remove
																	// data:image/png;base64,

		byte[] byteArray = Base64.decodeBase64(argJSONImageString);
		byte[] base64EncodedJPGImageAsByteArray = compressRawByteArray(byteArray);

		// if array length that was return from compress method is more than
		// 6KB, lets compress it again
		while (base64EncodedJPGImageAsByteArray.length > _6KB)
		{
			byte[] base64DecodedImage = Base64.decodeBase64(base64EncodedJPGImageAsByteArray);
			base64EncodedJPGImageAsByteArray = compressRawByteArray(base64DecodedImage);
		}
		return base64EncodedJPGImageAsByteArray;
	}

	private byte[] compressRawByteArray(byte[] argByteArray) throws IOException
	{
		ByteArrayOutputStream stream = new ByteArrayOutputStream();
		ImageOutputStream outputStream = ImageIO.createImageOutputStream(stream);
		BufferedImage bufferedImage = ImageIO.read(new ByteArrayInputStream(argByteArray));
		final int scale = 2;
		int height = bufferedImage.getHeight() / scale;
		int width = bufferedImage.getWidth() / scale;

		BufferedImage newBufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphicsObject = newBufferedImage.createGraphics();

		graphicsObject.drawImage(bufferedImage, 0, 0, width, height, Color.WHITE, null);
		graphicsObject.dispose();

		ColorConvertOp colorConverter = new ColorConvertOp(ColorSpace.getInstance(ColorSpace.CS_GRAY), null);
		colorConverter.filter(newBufferedImage, newBufferedImage);

		Iterator<ImageWriter> imageWriterList = ImageIO.getImageWritersByFormatName("jpeg");
		ImageWriter imageWriter = (ImageWriter) imageWriterList.next();
		ImageWriteParam imageWriterParam = imageWriter.getDefaultWriteParam();

		imageWriterParam.setCompressionMode(ImageWriteParam.MODE_EXPLICIT);
		float quality = 0.7f; // reduce quality by 70%
		imageWriterParam.setCompressionQuality(quality);
		imageWriter.setOutput(outputStream);

		IIOImage imageContainer = new IIOImage(newBufferedImage, null, null);
		imageWriter.write(null, imageContainer, imageWriterParam);
		imageWriter.dispose();

		byte[] rawJPGImageAsByteArray = stream.toByteArray();
		byte[] base64EncodedJPGImageAsByteArray = Base64.encodeBase64(rawJPGImageAsByteArray);

		return base64EncodedJPGImageAsByteArray;
	}

	public boolean isBase64EncodedOnlyOnce(byte[] argBase64EncodedImageAsByteArray)
	{
		byte[] base64DecodedByteArray = Base64.decodeBase64(argBase64EncodedImageAsByteArray);
		int decodeCount = 1;
		while (Base64.isBase64(base64DecodedByteArray))
		{
			base64DecodedByteArray = Base64.decodeBase64(base64DecodedByteArray);
			decodeCount++;
		}
		return (decodeCount == 1);
	}

}
