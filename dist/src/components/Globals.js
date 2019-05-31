"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Dimensions = _interopRequireDefault(require("./Dimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Globals = function Globals() {
  _classCallCheck(this, Globals);
};

_defineProperty(Globals, "centralTextColor", "#dcd6ce");

_defineProperty(Globals, "textColor", Globals.centralTextColor);

_defineProperty(Globals, "backgroundColor", "#0f0f0f");

_defineProperty(Globals, "link", {
  color: '#6385a9',
  // also defined in global-styles.css
  colorActive: '#1565c0',
  colorHighlight: '#6385a9'
});

_defineProperty(Globals, "text", {
  color: '#dcd6ce' // also defined in global-styles.css

});

_defineProperty(Globals, "page", {
  padding: new _Dimensions["default"](40, 90, 0, 90),
  item: {
    padding: new _Dimensions["default"](0, 20)
  },
  backgroundColor: '#0f0f0f' // Navbar styles

});

_defineProperty(Globals, "navbar", {
  height: "64",
  textColor: Globals.centralTextColor,
  textColorHighlight: Globals.link.color,
  activeLinkColor: Globals.link.color,
  font: "'Roboto Slab', sans-serif",
  padding: new _Dimensions["default"](0, 90),
  // Navbar border styles
  border: {
    backgroundColor: _get(_getPrototypeOf(Globals), "textColor", Globals)
  }
});

_defineProperty(Globals, "mobile", {
  colMargin: new _Dimensions["default"](0, 20, 20, 20),
  size: "900",
  padding: new _Dimensions["default"](20, 30),
  navbar: {
    padding: new _Dimensions["default"](20, 40)
  }
});

var _default = Globals;
exports["default"] = _default;

//# sourceMappingURL=Globals.js.map