package com.ctfs.wicimobile.frw;

import android.util.Log;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class PluginProxy extends CordovaPlugin {
    private static final String LOG_TAG = PluginProxy.class.getSimpleName();

    private boolean execute(String action, Class argType, Object arg, CallbackContext context) throws JSONException {
        Log.d(LOG_TAG, "execute action \"" + action + "\"");

        Method method;
        try {
            method = this.getClass().getMethod(action, argType, CallbackContext.class);
        } catch (NoSuchMethodException e) {
            Log.e(LOG_TAG, "execute action \""+action+"\". Can't find corresponding method", e);
            return false; // cause cordova.exec fail handler with "Invalid action" argument
        }

        CordovaMethod annotation = method.getAnnotation(CordovaMethod.class);
        if (annotation == null) {
            Log.e(LOG_TAG, "plugin methods should be annotated with CordovaMethod annotation");
            return false;
        }

        try {
            method.invoke(this, arg, context);
        } catch (IllegalAccessException e) {
            // will never happen
            throw new RuntimeException(e);
        } catch (InvocationTargetException e) {
            Throwable target = e.getTargetException();
            Log.e(LOG_TAG, "exception in action \""+action+"\": " + target.getMessage(), target);

            String msg = "";
            if (target instanceof JSONException) {
                msg = "JSON error " + target.getMessage();
            } else if (target instanceof RuntimeException) {
                msg = "RuntimeException " + target.getClass().getSimpleName() + " " + target.getMessage();
            }
            Log.e(LOG_TAG, msg);

            context.error(msg);
            return true;
        }

        if (annotation.async()) {
            PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
            result.setKeepCallback(true);
            context.sendPluginResult(result);
        }

        return true;
    }

    @Override
    public final boolean execute(String action, String rawArgs, CallbackContext context) throws JSONException {
        return super.execute(action, rawArgs, context);
    }

    @Override
    public final boolean execute(String action, JSONArray args, CallbackContext context) throws JSONException {
        return execute(action, JSONArray.class, args, context);
    }

    @Override
    public final boolean execute(String action, CordovaArgs args, CallbackContext context) throws JSONException {
        return execute(action, CordovaArgs.class, args, context);
    }
}