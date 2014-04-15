package com.ctfs.wicimobile.util;

import android.util.SparseArray;

public class FrenchForZPLAdapter extends SparseArray<String> {

	public FrenchForZPLAdapter() {
		super();
		
		put(224, "\\85"); // à	u224 133d 85h
		put(226, "\\83"); // â	u226 131d 83h
		put(231, "\\87"); // ç	u231 135d 87h
		put(232, "\\8A"); // è	u232 138d 8Ah
		put(233, "\\82"); // é	u233 130d 82h <--
		put(234, "\\88"); // ê	u234 136d 88h
		put(235, "\\89"); // ë	u235 137d 89h
		put(238, "\\8C"); // î	u238 140d 8Ch
		put(239, "\\8B"); // ï	u239 139d 8Bh
		put(244, "\\93"); // ô	u244 147d 93h
		put(249, "\\97"); // ù	u249 151d 97h
		put(251, "\\96"); // û	u251 150d 96h <--
	}

	public String prepareForZPL(String text) {
		
		String result = "";
		for (int i = 0; i < text.length(); i++) {
			char currentChar = text.charAt(i);
			result += get((int) currentChar, String.valueOf(currentChar));
		}
		
		return result;
	}
}
