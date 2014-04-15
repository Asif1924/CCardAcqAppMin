package com.ctfs.BRB.TestCase;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

import org.junit.*;

@Ignore
public class TestDataHelper
{
	private List<File> storage;
	private ListIterator<File> iterator;

	public TestDataHelper(String storagePath)
	{
		if (storagePath == null || storagePath.isEmpty())
			throw new IllegalArgumentException("Storage path can`t  be empty or null reference");
		init(storagePath);
	}

	/**
	 * @return if folder has files to read
	 */
	public boolean hasSomethingToRead()
	{
		return iterator.hasNext();
	}

	public String getNextDataForTest()
	{
		File file = iterator.next();
		StringBuffer stringBuffer = new StringBuffer();
		try
		{
			String line;
			BufferedReader bufer = new BufferedReader(new FileReader(file));
			while ((line = bufer.readLine()) != null)
			{
				stringBuffer.append(line);
			}

		}
		catch (FileNotFoundException e)
		{
			e.printStackTrace();
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
		return stringBuffer.toString();
	}

	/**
	 * Important to call That method before call other
	 *
	 * @param folderWithTestsName
	 */
	private void init(String folderWithTestsName)
	{
		if (storage == null)
		{
			storage = new ArrayList<File>();
			File directory = new File(folderWithTestsName);
			File[] list = directory.listFiles();
			if (list == null)
				throw new IllegalArgumentException("path to current folder: " + folderWithTestsName + " doent`s exist");
			for (File file : list)
			{
				if (file.canRead() && file.getName().contains(".txt"))
				{
					storage.add(file);
				}
			}
			iterator = storage.listIterator();
		}
	}

	public static String getNodeByTag(String nodeName, String request)
	{
		int startPoint = request.indexOf("<" + nodeName + ">");
		if (startPoint == -1)
		{
			return "";
		}
		int endPoint = request.indexOf("</" + nodeName + ">") + ("</" + nodeName + ">").length();
		return request.substring(startPoint, endPoint);
	}
}
