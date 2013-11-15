/*****************************************************************
*	Name    : Encrypt
*	Author  : Kony 
*	Purpose : To encrypt the user text and display the encrypted text.
******************************************************************/
function Encrypt()
{
	try
	{
		frmCrypto.lblDecrypt.setVisibility(false);
		var algo="aes";
		var prptobj;
		frmCrypto.lblEncrypt.setVisibility(true);
		if(kony.os.deviceInfo().name == "blackberry")
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		else
			var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});
		if (frmCrypto.textEncrypt.text == "" || frmCrypto.textEncrypt.text ==null)
		{
			frmCrypto.lblEncrypt.text =  "Please enter the text to encrypt";
		}
		else
		{
			var inputstr=frmCrypto.textEncrypt.text;
			prptobj={padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
			var myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
			var myEncryptedText  = kony.convertToBase64(myEncryptedTextRaw);
			if(kony.os.deviceInfo().name == "Windows 8")
			{
				frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedTextRaw.toString();
			}else
			{
				frmCrypto.lblEncrypt.text = "Encrypted text = "+myEncryptedText.toString();
			}
			myClearText = kony.crypto.decrypt(algo,encryptDecryptKey,myEncryptedTextRaw,prptobj);
		}
	}
	catch(err)
	{
		alert(err.message);
	}
	//#ifdef ipad
		frmCrypto.line19302198661535.setVisibility(true);	
	//#else
		
	//#endif
	//#ifdef tabrcandroid
		frmCrypto.line19302198661535.setVisibility(true);
	//#else
		
	//#endif
	
}
/*****************************************************************
*	Name    : decrypt
*	Author  : Kony 
*	Purpose : To decrypt the encrypted text and display the decrypted text.
******************************************************************/
function decrypt()
{
	try
	{
		if (frmCrypto.lblEncrypt.text == "" ||frmCrypto.lblEncrypt.text ==null || frmCrypto.lblEncrypt.text == "Please enter the text to encrypt")
		{
			frmCrypto.lblDecrypt.text ="Please enter the text to encrypt and then try decrypt.";
		}else
		{
			frmCrypto.lblDecrypt.text ="Decrypted text = "+myClearText.toString();
			frmCrypto.lblDecrypt.setVisibility(true);
		}
	}
	catch(err)
	{
		alert(err.message);
	}
}
/*****************************************************************
*	Name    : createHashMD2
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD2" Algorithm.
******************************************************************/
function createHashMD2()
{
	frmCrypto.lblMD2Hash.setVisibility(true);
	try
    {
		var algo="md2";
		//var algo="sha1";
		var inputstr=frmCrypto.txtMd2Hash.text;
		if ( inputstr== "" || inputstr ==null)
		{
			frmCrypto.lblMD2Hash.text =  "Please enter the string";
		}
		else
		{	//alert(inputstr);
			var myHashValue = kony.crypto.createHash(algo,inputstr);
			//alert(myHashValue);
			frmCrypto.lblMD2Hash.text = myHashValue;
		}
	}
    catch(err)
    {
		alert(err.message);
		//alert("Error in callbackCreateHashMD2 : "+err );
	}
	//#ifdef ipad
		frmCrypto.line19302198663509.setVisibility(true);
	//#else
		
	//#endif
}
/*****************************************************************
*	Name    : createHashMD4
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD4" Algorithm.
******************************************************************/
function createHashMD4()
{
	frmCrypto.lblMD4Hash.setVisibility(true);
	try
    {
		var algo="md4";
		var inputstr=frmCrypto.txtMD4Hash.text;
		if (inputstr== "" || inputstr ==null)
		{
			frmCrypto.lblMD4Hash.text =  "Please enter the string";
		}
		else
		{
			var myHashValue = kony.crypto.createHash(algo,inputstr);
			frmCrypto.lblMD4Hash.text = myHashValue;
		}	
	}
    catch(err)
    {
		alert(err.message);
		//alert("Error in callbackCreateHashMD4 : "+err );
	}
	//#ifdef ipad
		frmCrypto.line19302198663512.setVisibility(true);
	//#else
		
	//#endif
}
/*****************************************************************
*	Name    : createHashMD5
*	Author  : Kony 
*	Purpose : To create hash value for the user text using "MD5" Algorithm.
******************************************************************/
function createHashMD5()
{
	frmCrypto.lblMD5Hash.setVisibility(true);
	try
    {
		var algo="md5";
		var inputstr=frmCrypto.txtMD5Hash.text;
		if (inputstr== "" || inputstr ==null)
		{
			frmCrypto.lblMD5Hash.text =  "Please enter the string";
		}
		else
		{
			var myHashValue = kony.crypto.createHash(algo,inputstr);
			frmCrypto.lblMD5Hash.text = myHashValue;
		}		
	}
    catch(err)
    {
		alert(err.message);
	}
	//#ifdef ipad
		frmCrypto.line19302198663503.setVisibility(true);
	//#else
		
	//#endif
	//#ifdef tabrcandroid
		frmCrypto.line19302198663503.setVisibility(true);
	//#else
		
	//#endif
}