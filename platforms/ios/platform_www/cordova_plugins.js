cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-keyboard.keyboard",
    "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
    "pluginId": "cordova-plugin-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-fastclick.FastClick",
    "file": "plugins/cordova-plugin-fastclick/www/fastclick.js",
    "pluginId": "cordova-plugin-fastclick",
    "clobbers": [
      "FastClick"
    ]
  },
  {
    "id": "cordova-plugin-fastclick.FastClickBootstrap",
    "file": "plugins/cordova-plugin-fastclick/www/bootstrap.js",
    "pluginId": "cordova-plugin-fastclick",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-keyboard": "1.2.0",
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-splashscreen": "6.0.0",
  "cordova-plugin-fastclick": "1.0.0"
};
// BOTTOM OF METADATA
});