"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spacer = _interopRequireDefault(require("./Spacer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("./Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n      font-weight: bold;\n      font-family: \"Roboto Slab\", sans-serif;\n      color: ", ";\n      opacity: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** Icons to display with text */
var TextIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(TextIcon, _Component);

  function TextIcon() {
    _classCallCheck(this, TextIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextIcon).apply(this, arguments));
  }

  _createClass(TextIcon, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, this.props.content);
    }
  }]);

  return TextIcon;
}(_react.Component);

TextIcon.propTypes = {
  position: _propTypes["default"].string // where the icon is to be displayed relative to the content (left, right, ...)
  // Sample component

};

var Codify =
/*#__PURE__*/
function (_Component2) {
  _inherits(Codify, _Component2);

  function Codify() {
    _classCallCheck(this, Codify);

    return _possibleConstructorReturn(this, _getPrototypeOf(Codify).apply(this, arguments));
  }

  _createClass(Codify, [{
    key: "render",
    value: function render() {
      var Wrapper = _styledComponents["default"].div(_templateObject());
      /* 

        Icons currently hard-coded, but should be passed as a prop if 

        custom icons are needed for headers 

       */


      var MyIcon = _styledComponents["default"].span(_templateObject2(), this.props.fontSize, this.props.color, this.props.opacity);

      var leftIcon = _react["default"].createElement(MyIcon, null, "<");

      var rightIcon = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Spacer["default"], {
        width: this.props.rightTagSpacing
      }), _react["default"].createElement(MyIcon, null, " />"));

      return _react["default"].createElement(Wrapper, null, _react["default"].createElement(TextIcon, {
        position: "left",
        content: leftIcon
      }), this.props.children, _react["default"].createElement(TextIcon, {
        position: "right",
        content: rightIcon
      }));
    }
  }]);

  return Codify;
}(_react.Component);

Codify.propTypes = {
  color: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  rightTagSpacing: _propTypes["default"].string,
  opacity: _propTypes["default"].string
};
Codify.defaultProps = {
  color: _Colors["default"].page.secondaryColor,
  fontSize: "69px",
  rightTagSpacing: "13px",
  opacity: "1"
};
var _default = Codify;
exports["default"] = _default;

//# sourceMappingURL=Codify.js.map