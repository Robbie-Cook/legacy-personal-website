"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.MobileView = void 0;

var _Colors = _interopRequireDefault(require("./Colors"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * Sizing of views

 */
var Sizes = function Sizes() {
  _classCallCheck(this, Sizes);
};
/**

 * Styles to apply when screen is mobile-sized

 */


exports.Sizes = Sizes;

_defineProperty(Sizes, "mobileSize", "900");

var MobileView =
/*#__PURE__*/
function () {
  function MobileView(style) {
    _classCallCheck(this, MobileView);

    this.style = style;
  }

  _createClass(MobileView, [{
    key: "toString",
    value: function toString() {
      var mSize = Sizes.mobileSize;
      return "\n      @media (max-width: ".concat(mSize, "px) {\n        ").concat(this.style, ";\n      }");
    }
  }]);

  return MobileView;
}();

exports.MobileView = MobileView;

//# sourceMappingURL=Views.js.map