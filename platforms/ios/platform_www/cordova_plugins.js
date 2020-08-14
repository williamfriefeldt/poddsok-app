cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-keyboard.keyboard",
    "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
    "pluginId": "cordova-plugin-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-keyboard": "1.2.0",
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-splashscreen": "6.0.0"
};
// BOTTOM OF METADATA
});