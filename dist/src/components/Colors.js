"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*

Styling for entire website. All common variables are being migrated here from

css/global-styles.css. 



This is to be replaced with React.Context, where this is an object passed 

through a color context

*/
var Colors = function Colors() {
  _classCallCheck(this, Colors);
};

_defineProperty(Colors, "textColor", "#dcd6ce");

_defineProperty(Colors, "backgroundColor", "#0f0f0f");

_defineProperty(Colors, "link", {
  color: '#6385a9',
  // also defined in global-styles.css
  colorActive: '#1565c0',
  colorHighlight: '#6385a9'
});

_defineProperty(Colors, "text", {
  color: '#dcd6ce' // also defined in global-styles.css

});

_defineProperty(Colors, "page", {
  backgroundColor: '#0f0f0f',
  secondaryColor: '#EB6D6D' // reddish

});

var _default = Colors;
exports["default"] = _default;

//# sourceMappingURL=Colors.js.map