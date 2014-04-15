package com.ctfs.BRB.TestCase;

import java.security.PublicKey;
import org.apache.commons.codec.binary.Base64;
import org.junit.Assert;
import org.junit.Test;
import com.ctfs.BRB.Helper.CryptoUtils.PANCryptoUtil;

public class PANDecryptionTests
{

	@Test
	public void test_that_keystore_can_be_accessed_upon_instantiation()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		Assert.assertTrue(systemUnderTest.getKeyStore() != null);
	}

	@Test
	public void test_that_private_key_is_retrievable_from_keystore()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();

		// wiciprivate
		Assert.assertTrue(systemUnderTest.getKeyByName("wiciprivate") != null);
	}

	@Test
	public void test_that_public_cert_is_retrievable_from_keystore()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();

		// newpubcer
		Assert.assertTrue(systemUnderTest.getKeyByName("newpubcer") != null);
	}

	@Test
	public void test_that_format_of_private_key_can_be_known()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();

		Assert.assertEquals("PKCS#8", systemUnderTest.getKeyFormatByName("wiciprivate"));
	}

	@Test
	public void test_that_if_key_is_not_in_keystore_we_get_null()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		Assert.assertTrue(systemUnderTest.getKeyByName("asdfasdf") == null);
	}

	// @Test
	public void test_that_the_cert_was_signed_using_the_private_key_that_corresponds_to_the_specificed_public_key()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		Assert.assertTrue(systemUnderTest.certificateIsVerified((PublicKey) systemUnderTest.getKeyByName("newpubcer")));
	}

	@Test
	public void test_that_some_arbitrary_string_can_be_encrypted_to_non_null_byte_array()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		byte[] encryptedBytes = systemUnderTest.encrypt("Test");

		Assert.assertTrue(encryptedBytes != null);
	}

	@Test
	public void test_that_it_can_decrypt_a_base64encoded_PAN()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		String base64EncodedEncryptedPAN = "lxyuOGC7/cNbAJMpSEF8NGNzZkb42Bq6yUcczPUL/KHb+Xyx1dyLjNkEi0XZB9QHmZ0K62AeEUcvLcuvmN/seXDczgJO42D0yZxtJk82luuFyOTzigl1oO6EzAe0L3+XL2xwGcf/I8FjhBcLVCu1a6ZlywO5c0Is9+0lxdtBqrMUtM8vj9HTCWuVs4qW2l+x3lQ7UCqYN4P4+Stn2xXw6E0gBOc5Hx/r64IklSoUyxJ67wBmGTYQa2Y4kyuPrN6L+IhVgHRgdGtOzm3H36Ne/2+X/ksIzWsO7BFpvhklDvN7QHSB5QpcRJ37RoHakOZI0b/c2sVghtXC8VPU83e+ps+sF1yiuFuAbQV8LPBTHW/Rg61Cn3azR43CPrCDkH/8nCksnpC/EJLy1qRvPlz1UBeMesgOcYx/jC9LfY9DdbNtp+z0vDMSx6ZX6ejhf+a/QdtuKGurztVjT7KFJH2Q02CPEre17Kl38r8bbrHzcjbgwWQNEWHlf5mw9IasOFKX/aav53+3vIHIvhwyozmGaLjb3EMBHDtVY69BtCO9kj3y/0SYNMUx1HCUuweuDeNFYmovGKcPQMh2FNR2Ky9iTVs2j+qLYYnKPzWIOpI3uUczoM4yCFEHtsYNhRL4MTQtfXvUk3J7ZAME7qQnJZBW8BIlMPEb1AI83Ng3Cv4JCog=";

		byte[] base64DecodedEncryptedPAN = Base64.decodeBase64(base64EncodedEncryptedPAN);

		String decryptedPAN = systemUnderTest.decrypt(base64DecodedEncryptedPAN);
		Assert.assertEquals("5446122212797842", decryptedPAN);
	}

	@Test
	public void test_that_it_can_decrpyt_when_a_base64_encoded_PAN_is_passed_without_decoding()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		String base64EncodedEncryptedPAN = "lxyuOGC7/cNbAJMpSEF8NGNzZkb42Bq6yUcczPUL/KHb+Xyx1dyLjNkEi0XZB9QHmZ0K62AeEUcvLcuvmN/seXDczgJO42D0yZxtJk82luuFyOTzigl1oO6EzAe0L3+XL2xwGcf/I8FjhBcLVCu1a6ZlywO5c0Is9+0lxdtBqrMUtM8vj9HTCWuVs4qW2l+x3lQ7UCqYN4P4+Stn2xXw6E0gBOc5Hx/r64IklSoUyxJ67wBmGTYQa2Y4kyuPrN6L+IhVgHRgdGtOzm3H36Ne/2+X/ksIzWsO7BFpvhklDvN7QHSB5QpcRJ37RoHakOZI0b/c2sVghtXC8VPU83e+ps+sF1yiuFuAbQV8LPBTHW/Rg61Cn3azR43CPrCDkH/8nCksnpC/EJLy1qRvPlz1UBeMesgOcYx/jC9LfY9DdbNtp+z0vDMSx6ZX6ejhf+a/QdtuKGurztVjT7KFJH2Q02CPEre17Kl38r8bbrHzcjbgwWQNEWHlf5mw9IasOFKX/aav53+3vIHIvhwyozmGaLjb3EMBHDtVY69BtCO9kj3y/0SYNMUx1HCUuweuDeNFYmovGKcPQMh2FNR2Ky9iTVs2j+qLYYnKPzWIOpI3uUczoM4yCFEHtsYNhRL4MTQtfXvUk3J7ZAME7qQnJZBW8BIlMPEb1AI83Ng3Cv4JCog=";

		String decryptedPAN = systemUnderTest.decrypt(base64EncodedEncryptedPAN.getBytes());
		Assert.assertEquals("5446122212797842", decryptedPAN);
	}


	@Test
	public void test_that_it_can_decrypt_another_base64encoded_PAN()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		String base64EncodedEncryptedPAN = "maktFoAp51qsRswEprlHq8SYeQ2pQ4Rzgc8m68RBuGYn1jB+XcMLnJ2ABlHvTKMFoKTgMONIpUdy0R4W4ongNWXSde0iP3lcxgWXpSEp6yZ+5chVHTt0YGdfqelcnZ5hwEuWp+xxMGNZJO7plTNFwE12jzVtFAIGWF2V3R1viqEoclsm94NTpurZbOYhi63yCc32OvIQYAz8i4ofy8J0ASYxRWsN2BczYG9yxb7qWuQylKgyMtKyEowEOJHqOzoBJxkwKt+YKbV8vXS1ns/vwNXP68foeJvUY/DnkTiD3TIAR5a2rgtAXhGEnCwqQm474quLCIiYF/HZMszpeYH2UBT01030sIWxGbY2jYsZDLwiNf0Ud/LMwDB9cEuLEsA12cvJ7FYrkv9rGVuScyhpdUKX79+CO0kUyKechgS+u1cRl8P4iMba/d5MzMo7PWvX3Puzcfgjm9RSWpgC2a5teahzA2Tbuur0KOs61mAAo/7E6xPzmKAF8VSzd5VN4MzGwkCSzIZ1erfwKCqWmYdcNk1fZ5L9OoVFtPT+0DiuG2W8moBvdvtZWxC0vHoZKb/J13WRvv0pQBi8S3w3flCq0t/3nMFnKoKDiMRQ7PxN48Z9BT5dHUe/n+zUgLNBrBpmexh77Dmd1yLL2W6IeaDUsDwyHoDyaySMEfrU7rhh8i8=";

		byte[] base64DecodedEncryptedPAN = Base64.decodeBase64(base64EncodedEncryptedPAN);

		String decryptedPAN = systemUnderTest.decrypt(base64DecodedEncryptedPAN);
		Assert.assertEquals("5259950763551291", decryptedPAN);
	}

	@Test
	public void test_that_the_word_Test_can_be_encrypted_then_decrypted()
	{
		PANCryptoUtil systemUnderTest = new PANCryptoUtil();
		byte[] encryptedBytes = systemUnderTest.encrypt("Test");

		Assert.assertTrue(encryptedBytes != null);

		String decryptedString = systemUnderTest.decrypt(encryptedBytes);
		Assert.assertEquals("Test", decryptedString);
	}

}
