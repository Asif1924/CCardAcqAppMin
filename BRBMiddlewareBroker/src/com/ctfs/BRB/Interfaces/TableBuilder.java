package com.ctfs.BRB.Interfaces;

/**
 * 
 * @param <T> - generic parameter for input Data 
 */
public interface TableBuilder
{	
	static String INSERT_STATMENT_TEMPLATE ="INSERT INTO %s ( %s ) VALUES ( %s )";
	
	void insert(TableActiveRecord tableActiveRecord);
}
