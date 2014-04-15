package com.ctfs.wicimobile.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import com.ctfs.wicimobile.enums.PrinterNetworkType;
import android.content.Context;
import android.os.Environment;
import android.util.JsonReader;
import android.util.JsonWriter;

public class WICIExternalStorageStrategy implements StorageStrategy {
    private static final String PRINTER_ADDRESS_KEY = "PrinterAddress";
    private static final String PRINTER_NAME_KEY = "PrinterName";
    private static final String PRINTER_TYPE_KEY = "PrinterType";
    
    private static final String APP_LANGUAGE_KEY = "AppLanguage";
    
    private static final String WICI_ROOT_FOLDER_TEMPLATE = "/Android/.";
    private static final String WICI_SETTINGS_FILE_PREFIX = ".wiciSettings";
    private static final String WICI_SETTINGS_FILE_SUFFIX = ".json";

    private Context _currentContext;

    public WICIExternalStorageStrategy(Context appContext) {
        setCurrentContext(appContext);
    }

    @Override
    public boolean saveData(Settings accessData) {
        try {
            File packageFolder = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + WICI_ROOT_FOLDER_TEMPLATE
                    + _currentContext.getPackageName());

            boolean success = true;
            if (!packageFolder.exists()) {
                success = packageFolder.mkdir();
            }

            if (success) {
                File settingsFile = createSettingsFile(packageFolder);
                if (settingsFile == null) {
                    return false;
                }
                writeJsonFile(settingsFile, accessData);
            } else {
                return false;
            }

            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public Settings getData() {
        Settings appSettings = null;
        try {
            String settingsFilePath = Environment.getExternalStorageDirectory().getAbsolutePath() + WICI_ROOT_FOLDER_TEMPLATE
                    + _currentContext.getPackageName();
            String settingsFileName = WICI_SETTINGS_FILE_PREFIX + WICI_SETTINGS_FILE_SUFFIX;
            
            File settingsFile = new File(settingsFilePath, settingsFileName);

            appSettings = readJsonFile(settingsFile);

        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return appSettings;
    }

    public Context getCurrentContext() {
        return _currentContext;
    }

    public void setCurrentContext(Context appContext) {
        this._currentContext = appContext;
    }

    private void writeJsonStream(OutputStream out, Settings accessData) throws IOException {
        JsonWriter writer = new JsonWriter(new OutputStreamWriter(out, "UTF-8"));
        writer.setIndent("  ");
        writeObject(writer, accessData);
        writer.close();
    }

    private void writeObject(JsonWriter writer, Settings accessData) throws IOException {
        writer.beginObject();

        writer.name(PRINTER_ADDRESS_KEY).value(accessData.getPrinterMacAddress());
        writer.name(PRINTER_NAME_KEY).value(accessData.getPrinterName());
        writer.name(PRINTER_TYPE_KEY).value(accessData.getPrinterType().name());
        
        writer.name(APP_LANGUAGE_KEY).value(accessData.getAppLanguage());

        writer.endObject();
    }

    private Settings readJsonStream(InputStream in) throws IOException {
        JsonReader reader = new JsonReader(new InputStreamReader(in, "UTF-8"));
        try {
            return readObject(reader);
        } finally {
            reader.close();
        }
    }

    private Settings readObject(JsonReader reader) {
        Settings appSettings = new WICIApplicationSettings();
        try {
            reader.beginObject();

            while (reader.hasNext()) {
                String name = reader.nextName();
                if (name.equals(PRINTER_ADDRESS_KEY)) {
                    appSettings.setPrinterMacAddress(reader.nextString());
                } else if (name.equals(PRINTER_NAME_KEY)) {
                    appSettings.setPrinterName(reader.nextString());
                } else if (name.equals(PRINTER_TYPE_KEY)) {
                    appSettings.setPrinterType(PrinterNetworkType.valueOf(reader.nextString()));
                } else if (name.equals(APP_LANGUAGE_KEY)) {
                	appSettings.setAppLanguage(reader.nextString());
                } else {
                    reader.skipValue();
                }
            }

            reader.endObject();

            // Update printer port for network printer type
            if (appSettings.getPrinterType() == PrinterNetworkType.Network) {
                String[] addressAndPort = appSettings.getPrinterMacAddress().split(":");
                appSettings.setPrinterMacAddress(addressAndPort[0]);
                appSettings.setPrinterPort(addressAndPort[1]);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return appSettings;
    }

    private File createSettingsFile(File parentFolder) {
        File settingsFile = null;
        try {
            settingsFile = new File(parentFolder.getAbsolutePath(), WICI_SETTINGS_FILE_PREFIX + WICI_SETTINGS_FILE_SUFFIX);            
        } catch (Exception e) {
            e.printStackTrace();
        }

        return settingsFile;
    }

    private void writeJsonFile(File settingsFile, Settings accessData) throws IOException {
        OutputStream out = null;
        try {
            out = new BufferedOutputStream(new FileOutputStream(settingsFile));
            writeJsonStream(out, accessData);
        } finally {
            if (out != null) {
                out.close();
            }
        }
    }
    
    private Settings readJsonFile(File settingsFile) throws IOException {
        Settings appSettings = null;
        InputStream in = null;
        try {
            in = new BufferedInputStream(new FileInputStream(settingsFile));
            appSettings = readJsonStream(in);
        } finally {
            if (in != null) {
                in.close();
            }
        }
     
        return appSettings;
    }
}
