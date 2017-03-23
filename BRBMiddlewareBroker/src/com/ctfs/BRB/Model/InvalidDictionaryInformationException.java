package com.ctfs.BRB.Model;
// US4281
public class InvalidDictionaryInformationException extends Exception {
	private static final long serialVersionUID = 557646797777351452L;	

	public InvalidDictionaryInformationException(String str){
		super(str);
	}
}
