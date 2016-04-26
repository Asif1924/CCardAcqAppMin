package com.ctfs.wicimobile.util.bluetooth;

import android.bluetooth.BluetoothAdapter;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;
import com.ctfs.wicimobile.frw.AsyncCallback;

public class BluetoothServiceImpl implements BluetoothService {
    private static final IntentFilter FILTER = new IntentFilter(BluetoothAdapter.ACTION_STATE_CHANGED);

    private BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

    private Context context;

    private BroadcastReceiver btReceiver;

    public BluetoothServiceImpl(Context context) {
        this.context = context;
    }

    @Override
    public void toggleBluetooth(final AsyncCallback callback) {
        //Check if bluetooth is on - if not, turn on
        if (mBluetoothAdapter.isEnabled()) {
            Log.d("Bluetooth", "Already enabled ... disabling");

            btReceiver = new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {
                    int state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, BluetoothAdapter.ERROR);
                    switch (state) {
                        case BluetoothAdapter.STATE_TURNING_OFF:
                            break;
                        case BluetoothAdapter.STATE_OFF:
                            context.unregisterReceiver(btReceiver);
                            toggleBluetooth(callback);
                            break;
                        default:
                            context.unregisterReceiver(btReceiver);
                            callback.fail(new IllegalStateException("illegal bt state " + state));
                    }
                }
            };
            context.registerReceiver(btReceiver, FILTER);
            mBluetoothAdapter.disable();
        } else {
            Log.d("Bluetooth", "Already disabled ... enabling");

            btReceiver = new BroadcastReceiver() {
                @Override
                public void onReceive(Context context, Intent intent) {
                    int state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, BluetoothAdapter.ERROR);
                    switch (state) {
                        case BluetoothAdapter.STATE_TURNING_ON:
                            break;
                        case BluetoothAdapter.STATE_ON:
                            context.unregisterReceiver(btReceiver);
                            callback.success(null);
                            break;
                        default:
                            context.unregisterReceiver(btReceiver);
                            callback.fail(new IllegalStateException("illegal bt state " + state));
                    }
                }
            };
            context.registerReceiver(btReceiver, FILTER);
            mBluetoothAdapter.enable();
        }
    }
}