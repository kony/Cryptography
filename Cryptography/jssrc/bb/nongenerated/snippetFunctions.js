/*****************************************************************
 *	Name    : frmCryptoTabPreShow
 *	Author  : Kony
 *	Purpose : To initialize navigation pane and labels on Cryptography Form (Only tablet channels).
 ******************************************************************/
function frmCryptoTabPreShow() {
    // android,Windows supports MD5
    frmCrypto.segNavigation.data = [{
        "lblNavigation": "Encrypt/Decrypt",
        "lblNavigationDescription": "  "
    }, {
        "lblNavigation": "Generate Hash Value",
        "lblNavigationDescription": "(MD5 Algo)"
    }];
    frmCrypto.hbxHashMD5.setVisibility(false);
    frmCrypto.hbxEncryptDecrypt.setVisibility(true);
    frmCrypto.segNavigation.selectedIndex = [0, 0];
}
/*****************************************************************
 *	Name    : segClickEvent
 *	Author  : Kony
 *	Purpose : To set the visibility of widgets when an option is selected from navigation pane.
 ******************************************************************/
function segClickEvent(seguiWidget, sectionIndex, rowIndex) {
    if (frmCrypto.segNavigation.selectedItems[0]["lblNavigation"] == "Encrypt/Decrypt") {
        frmCrypto.hbxHashMD5.setVisibility(false);
        frmCrypto.hbxEncryptDecrypt.setVisibility(true);
    } else if (frmCrypto.segNavigation.selectedItems[0]["lblNavigationDescription"] == "(MD5 Algo)") {
        frmCrypto.hbxEncryptDecrypt.setVisibility(false);
        frmCrypto.hbxHashMD5.setVisibility(true);
    }
}
/*****************************************************************
 *	Name    : navigateToFrmCrypto
 *	Author  : Kony
 *	Purpose : To navigate to FrmCrypto form.
 ******************************************************************/
function navigateToFrmCrypto() {
    frmCrypto.show();
}
/*****************************************************************
 * Name    : frmCryptoPreShow
 * Author  : Kony
 * Purpose : To clear text fields in FrmCrypto form.
 ******************************************************************/
function frmCryptoPreShow() {
    frmCrypto.textEncrypt.text = "";
    frmCrypto.lblEncrypt.text = "";
    frmCrypto.lblDecrypt.text = "";
    frmCrypto.txtMD5Hash.text = "";
    frmCrypto.lblMD5Hash.text = "";
}