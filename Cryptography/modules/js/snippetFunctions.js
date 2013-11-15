/*****************************************************************
*	Name    : frmCryptoTabPreShow
*	Author  : Kony
*	Purpose : To initialize navigation pane and labels on Cryptography Form (Only tablet channels).
******************************************************************/
function frmCryptoTabPreShow()
{	
	//#ifdef ipad
	// iPad supports MD2,MD4,MD5	
	frmCrypto.segNavigation.data= [	{"lblNavigation":"Encrypt/Decrypt","lblNavigationDescription":"  "},
										{"lblNavigation":"Generate Hash Value","lblNavigationDescription":"(MD2 Algo)"},
										{"lblNavigation":"Generate Hash Value","lblNavigationDescription":"(MD4 Algo)"},
									{"lblNavigation":"Generate Hash Value","lblNavigationDescription":"(MD5 Algo)"}];
	frmCrypto.hbxHashMD2.setVisibility(false);
	frmCrypto.hbxHashMD4.setVisibility(false);
	frmCrypto.hbxHashMD5.setVisibility(false);
	frmCrypto.hbxEncryptDecrypt.setVisibility(true);
	frmCrypto.lblEncrypt.setVisibility(false);
	frmCrypto.lblDecrypt.setVisibility(false);
	//#else
	// android,Windows supports MD5
		frmCrypto.segNavigation.data= [	{"lblNavigation":"Encrypt/Decrypt","lblNavigationDescription":"  "},
										{"lblNavigation":"Generate Hash Value","lblNavigationDescription":"(MD5 Algo)"}];
	frmCrypto.hbxHashMD5.setVisibility(false);
	frmCrypto.hbxEncryptDecrypt.setVisibility(true);
	frmCrypto.lblEncrypt.setVisibility(false);
	frmCrypto.lblDecrypt.setVisibility(false);
	//#endif
	frmCrypto.segNavigation.selectedIndex=[0,0];
}
/*****************************************************************
*	Name    : segClickEvent
*	Author  : Kony
*	Purpose : To set the visibility of widgets when an option is selected from navigation pane.
******************************************************************/		
function segClickEvent(seguiWidget, sectionIndex, rowIndex){
	//#ifdef ipad
		if(frmCrypto.segNavigation.selectedItems[0]["lblNavigation"]=="Encrypt/Decrypt"){
			frmCrypto.hbxHashMD2.setVisibility(false);
			frmCrypto.hbxHashMD4.setVisibility(false);
			frmCrypto.hbxHashMD5.setVisibility(false);
			frmCrypto.hbxEncryptDecrypt.setVisibility(true);
			frmCrypto.lblEncrypt.setVisibility(false);
			frmCrypto.lblDecrypt.setVisibility(false);
			}
		else if(frmCrypto.segNavigation.selectedItems[0]["lblNavigationDescription"]=="(MD2 Algo)"){
				frmCrypto.hbxEncryptDecrypt.setVisibility(false);
				frmCrypto.hbxHashMD4.setVisibility(false);			
				frmCrypto.hbxHashMD5.setVisibility(false);
				frmCrypto.hbxHashMD2.setVisibility(true);
				frmCrypto.lblMD2Hash.setVisibility(false);
		}
		else if(frmCrypto.segNavigation.selectedItems[0]["lblNavigationDescription"]=="(MD4 Algo)"){
				frmCrypto.hbxEncryptDecrypt.setVisibility(false);
				frmCrypto.hbxHashMD2.setVisibility(false);
				frmCrypto.hbxHashMD5.setVisibility(false);
				frmCrypto.hbxHashMD4.setVisibility(true);
				frmCrypto.lblMD4Hash.setVisibility(false);			
		}
		else if(frmCrypto.segNavigation.selectedItems[0]["lblNavigationDescription"]=="(MD5 Algo)"){
				frmCrypto.hbxEncryptDecrypt.setVisibility(false);
				frmCrypto.hbxHashMD2.setVisibility(false);
				frmCrypto.hbxHashMD4.setVisibility(false);
				frmCrypto.hbxHashMD5.setVisibility(true);
				frmCrypto.lblMD5Hash.setVisibility(false);
		}
	//#else
		if(frmCrypto.segNavigation.selectedItems[0]["lblNavigation"]=="Encrypt/Decrypt"){
			frmCrypto.hbxHashMD5.setVisibility(false);
			frmCrypto.hbxEncryptDecrypt.setVisibility(true);
			frmCrypto.lblEncrypt.setVisibility(false);
			frmCrypto.lblDecrypt.setVisibility(false);			}
		else if(frmCrypto.segNavigation.selectedItems[0]["lblNavigationDescription"]=="(MD5 Algo)"){
				frmCrypto.hbxEncryptDecrypt.setVisibility(false);
				frmCrypto.hbxHashMD5.setVisibility(true);
				frmCrypto.lblMD5Hash.setVisibility(false);
		}
		//#endif
}
/*****************************************************************
*	Name    : navigateToFrmCrypto
*	Author  : Kony
*	Purpose : To navigate to FrmCrypto form.
******************************************************************/
function navigateToFrmCrypto(){
	frmCrypto.show();
}
/*****************************************************************
* Name    : frmCryptoPreShow
* Author  : Kony
* Purpose : To clear text fields in FrmCrypto form.
******************************************************************/
function frmCryptoPreShow()
{
  frmCrypto.textEncrypt.text ="";
  frmCrypto.lblEncrypt.setVisibility(false);
  frmCrypto.lblDecrypt.setVisibility(false);
  //#ifdef iphone
   frmCrypto.txtMd2Hash.text = "";
   frmCrypto.lblMD2Hash.setVisibility(false);
   frmCrypto.txtMD4Hash.text = "";
   frmCrypto.lblMD4Hash.setVisibility(false);
  //#else
   
  //#endif
  frmCrypto.txtMD5Hash.text = "";
  //frmCrypto.lblMD5Hash.text = "";
  frmCrypto.lblMD5Hash.setVisibility(false);
}