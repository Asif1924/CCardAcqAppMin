package com.ctfs.wicimobile.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Locale;

public class WICISimpleTextReplacementStrategy implements ReplacementStrategy {
    private Hashtable<String, String> _mappingTable;
    private static final String EMPTY_STRING = "";

    public WICISimpleTextReplacementStrategy(String firstName, String middleInitial, String lastName, String apr, String cashAPR) {
        // Initialize MappingTable
        _mappingTable = new Hashtable<String, String>();

        // TODO: Improve below logic
        if (middleInitial.isEmpty()) {
            middleInitial = lastName;
            lastName = " ";
        }
        _mappingTable.put("#[FirstName]", firstName);
        _mappingTable.put("#[MiddleInitial]", middleInitial);
        _mappingTable.put("#[LastName]", lastName);
        _mappingTable.put("#[Apr]", apr);
        _mappingTable.put("#[CashAPR]", cashAPR);
        _mappingTable.put("#[CouponNowDate]", GetCouponNowDateTimeStamp());
        _mappingTable.put("#[CouponNextDate]", GetCouponNextDateTimeStamp());
        _mappingTable.put("#[CouponNextTwoWeeksDate]", GetCouponNextTwoWeeksDateTimeStamp());
    }

    @Override
    public String applyReplacement(String source) {
        if (source != null && !source.isEmpty()) {
            // Get all search patterns
            Enumeration<String> enumKeys = _mappingTable.keys();
            while (enumKeys.hasMoreElements()) {
                String key = enumKeys.nextElement();
                source = source.replace(key, _mappingTable.get(key));
            }
        }

        return source;
    }

    private String GetCouponNowDateTimeStamp() {
        try {
            String currentDate = new SimpleDateFormat("MMM dd, yyyy", Locale.CANADA).format(Calendar.getInstance().getTime());

            return currentDate;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }

    private String GetCouponNextDateTimeStamp() {
        try {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DAY_OF_YEAR, 1);

            String nextDate = new SimpleDateFormat("MMM dd, yyyy", Locale.CANADA).format(calendar.getTime());

            return nextDate;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }

    private String GetCouponNextTwoWeeksDateTimeStamp() {
        try {
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.DAY_OF_YEAR, 14);

            String nextDate = new SimpleDateFormat("MMM dd, yyyy", Locale.CANADA).format(calendar.getTime());

            return nextDate;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return EMPTY_STRING;
    }
}
