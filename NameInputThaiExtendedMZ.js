//=============================================================================
// Name Input Thai Extended MZ
//=============================================================================
/*:
 * @target MZ
 * @plugindesc เพิ่มภาษาไทยใน Name Input 
 * License: MIT License
 * @author XthemeCore
 *
 * @param AllowOnlyThaikeys
 * @text แสดงอักษรไทยเท่านั้น
 * @desc หากเป็นเท็จ (OFF/false) จะแสดงแป้นพิมพ์ภาษาอังกฤษด้วย
 * @type boolean
 * @default false
 * 
 * @param AllowLatinkeys
 * @text แสดงอักษรละติน
 * @desc หากเป็นเท็จ (OFF/false) จะแสดงเฉพาะตัวอักษรภาษาอังกฤษ
 * @type boolean
 * @default false
 * 
 * @help NameInputThaiExtendedMZ.js
 *
 * ปลั๊กอินนี้จะเพิ่มภาษาไทยใน Name Input ของ RMMZ
 * 
 */
(() => { 
    "use strict"; 
    const pluginName = 'NameInputThaiExtendedMZ';  
    const parameters = PluginManager.parameters(pluginName);  
    const allowOnlyThaiKeys = (parameters['AllowOnlyThaikeys'].toLowerCase() === 'true') || false;
    const allowLatinKeys = (parameters['AllowLatinkeys'].toLowerCase() === 'true') || false;

    Window_NameInput.THAI =
        [   "ก", "ข", "ฃ", "ค", "ฅ", "ั", "ะ", "า", "ๅ", "ำ",
            "ฆ", "ง", "จ", "ฉ", "ช", "เ", "แ", "ุ", "ู", "ฺ", 
            "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ิ", "ี", "ึ", "ื", "ํ",
            "ฐ", "ฑ", "ฒ", "ณ", "ด", "่", "้", "๊", "๋", "์",
            "ต", "ถ", "ท", "ธ", "น", "็", "", "โ", "ไ", "ใ",
            "บ", "ป", "ผ", "ฝ", "พ", "ฤ", "ฦ", "ฯ", "ๆ", "",
            "ฟ", "ภ", "ม", "ย", "ร", "๐", "๑", "๒", "๓", "๔",
            "ล", "ว", "ศ", "ษ", "ส", "๕", "๖", "๗", "๘", "๙",
            "ห", "ฬ", "อ", "ฮ", " ", "฿", "", ""];

    if(allowOnlyThaiKeys) { Window_NameInput.THAI.push(""); Window_NameInput.THAI.push("ตกลง"); }
    else { Window_NameInput.THAI.push("Page"); Window_NameInput.THAI.push("OK"); }

    Window_NameInput.prototype.table = function() {
        if ($gameSystem.isJapanese()) {
            return [
                Window_NameInput.JAPAN1,
                Window_NameInput.JAPAN2,
                Window_NameInput.JAPAN3
            ];
        } else if ($gameSystem.isRussian()) {
            return [Window_NameInput.RUSSIA];
        } else if (allowOnlyThaiKeys) {
            return [Window_NameInput.THAI];
        } else if (!allowLatinKeys) {
            return [Window_NameInput.THAI, Window_NameInput.LATIN1];
        } else {
            return [Window_NameInput.THAI, Window_NameInput.LATIN1, Window_NameInput.LATIN2];
        }
    };
})();