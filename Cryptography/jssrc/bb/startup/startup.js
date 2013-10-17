//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Cryptography",
    appName: "Cryptography",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: false,
    middlewareContext: "middleware",
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmAppDescriptionGlobals();
    frmCryptoGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmAppDescription.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};