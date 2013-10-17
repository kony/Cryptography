//Form JS File
function frmAppDescription_btnContinue_onClick_seq0(eventobject) {
    navigateToFrmCrypto.call(this);
};

function addWidgetsfrmAppDescription() {
    var rTxtDescription = new kony.ui.RichText({
        "id": "rTxtDescription",
        "isVisible": true,
        "text": "This Application will showcase the following features of Cryptography API ",
        "skin": "sknRichNormalSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 4],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    var imgBullet1 = new kony.ui.Image2({
        "id": "imgBullet1",
        "isVisible": true,
        "src": "bullet_white.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var lblDescription1 = new kony.ui.Label({
        "id": "lblDescription1",
        "isVisible": true,
        "text": "Encrypting and Decrypting a given text",
        "skin": "sknLblWhiteSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {});
    var hbxDescription1 = new kony.ui.Box({
        "id": "hbxDescription1",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxDescription1.add(
    imgBullet1, lblDescription1);
    var imgBullet2 = new kony.ui.Image2({
        "id": "imgBullet2",
        "isVisible": true,
        "src": "bullet_white.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var lblDescription2 = new kony.ui.Label({
        "id": "lblDescription2",
        "isVisible": true,
        "text": "Generating checksum",
        "skin": "sknLblWhiteSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {});
    var hbxDescription2 = new kony.ui.Box({
        "id": "hbxDescription2",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxDescription2.add(
    imgBullet2, lblDescription2);
    var btnContinue = new kony.ui.Button({
        "id": "btnContinue",
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmAppDescription_btnContinue_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [7, 11, 7, 4],
        "padding": [1, 3, 1, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmAppDescription.add(
    rTxtDescription, hbxDescription1, hbxDescription2, btnContinue);
};

function frmAppDescriptionGlobals() {
    var MenuId = [];
    frmAppDescription = new kony.ui.Form2({
        "id": "frmAppDescription",
        "title": "Home",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmAppDescription
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};