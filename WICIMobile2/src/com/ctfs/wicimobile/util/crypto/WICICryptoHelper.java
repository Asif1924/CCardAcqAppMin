package com.ctfs.wicimobile.util.crypto;

import android.content.Context;
import android.util.Base64;

public class WICICryptoHelper {
    private static WICICryptoHelper instance = null;

    private WICICryptoHelper() {
    }

    public static WICICryptoHelper getInstance() {
        if (instance == null) {
            instance = new WICICryptoHelper();
        }
        return instance;
    }

    public String decryptRSA(Context context, String stringToDecryptUTF8) {
        String accountNumber = null;
        try {
            Cryptographer crypto = new Cryptographer(context);
            String privateKeyAliasToDecryptWith = "wiciprivate";
            //String certificateAliasToEncryptWith = "newpubcer";

            byte[] decodedBytes = Base64.decode(stringToDecryptUTF8, Base64.DEFAULT);

            crypto.loadPrivateKeyList();
            accountNumber = crypto.decrypt(decodedBytes, privateKeyAliasToDecryptWith);
        } catch (CryptographyException e) {
            e.printStackTrace();
        }
        return accountNumber;
    }
}
