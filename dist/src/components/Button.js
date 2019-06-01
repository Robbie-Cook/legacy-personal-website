"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWrapper = exports.ButtonGenerator = exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grommet = require("grommet");

var _Globals = _interopRequireDefault(require("../components/Globals"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dimensions = _interopRequireDefault(require("../components/Dimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      display: flex;\n      ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      color: ", ";\n      margin: 0;\n      text-decoration: none;\n      border-bottom: 1px solid ", ";\n      line-height: 20px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      border: 3px solid ", ";\n      border-radius: 6px;\n      color: ", ";\n      transition: 0.03s;\n\n      /* for svg icons */\n      fill: ", ";\n      stroke: ", ";\n\n      &:hover {\n        & p {\n          border-bottom: 1px solid transparent;\n        }\n        background-color: ", ";\n      }\n\n      background-color: transparent;\n      margin: ", ";\n      color: ", ";\n      line-height: 27px;\n      font-size: 16px;\n      padding: 5px 12px;\n      font-weight: normal;\n      ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**

 * A class for generic buttons.

 * Takes a title and a function.

 */
var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      /* Styling */
      var customTheme = {
        button: {
          border: {
            color: _Globals["default"].link.color
          }
        }
      };
      var MyButton = (0, _styledComponents["default"])(_grommet.Button)(_templateObject(), _Globals["default"].link.color, _Globals["default"].text.color, _Globals["default"].text.color, _Globals["default"].text.color, _Globals["default"].link.color, this.props.margin ? this.props.margin : new _Dimensions["default"](10, 20), _Globals["default"].textColor, this.props.style);

      var BorderedText = _styledComponents["default"].p(_templateObject2(), _Globals["default"].textColor, _Globals["default"].text.color);

      var innerDom = _react["default"].createElement(MyButton, {
        icon: this.props.icon,
        label: _react["default"].createElement(BorderedText, null, this.props.label),
        onClick: this.props["function"],
        href: this.props.to
      });

      return _react["default"].createElement(_grommet.Grommet, {
        theme: customTheme
      }, innerDom);
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;
Button.propTypes = {
  style: _propTypes["default"].string,
  color: _propTypes["default"].string,
  borderColor: _propTypes["default"].string,
  "function": _propTypes["default"].func,
  icon: _propTypes["default"].elementType,
  to: _propTypes["default"].string,
  // Signifies the button is a link, this is the link address
  label: _propTypes["default"].string // Label for the button

  /**

   * A group of Buttons, given an array of button titles, and an array of

   * corresponding functions.

   */

};

var ButtonGenerator =
/*#__PURE__*/
function (_Component2) {
  _inherits(ButtonGenerator, _Component2);

  function ButtonGenerator() {
    _classCallCheck(this, ButtonGenerator);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonGenerator).apply(this, arguments));
  }

  _createClass(ButtonGenerator, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (
        /* 

        Returns buttons, each with a function passed to the button

        as a prop.

        */
        _react["default"].createElement(ButtonWrapper, {
          buttonRow: this.props.buttonRow
        }, this.props.titles.map(function (item, index) {
          return _react["default"].createElement(Button, {
            "function": _this.props.functions[index],
            margin: _this.props.buttonMargin,
            style: _this.props.buttonStyle,
            label: item
          });
        }))
      );
    }
  }]);

  return ButtonGenerator;
}(_react.Component);

exports.ButtonGenerator = ButtonGenerator;
ButtonGenerator.propTypes = {
  titles: _propTypes["default"].array.isRequired,
  functions: _propTypes["default"].array,
  // Should be an array of functions
  buttonRow: _propTypes["default"].bool,
  // Whether to display the buttons as a row
  buttonStyle: _propTypes["default"].string // Styles passed to the button

  /* 

  A wrapper for buttons.

  Used when buttons don't have to be dynamically generated -- can be 

  passed as children

  */

};

var ButtonWrapper =
/*#__PURE__*/
function (_Component3) {
  _inherits(ButtonWrapper, _Component3);

  function ButtonWrapper() {
    _classCallCheck(this, ButtonWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonWrapper).apply(this, arguments));
  }

  _createClass(ButtonWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var ButtonContainer = _styledComponents["default"].div(_templateObject3(), function () {
        /*

        Set the flex direction of the container to "row" if 

        this.props.buttonRow is true.

        */
        return (
          /*

           * Sets flex direction to row by default, and column if buttonRow

           * is true

           */
          "flex-direction: " + (_this2.props.buttonRow !== false ? "row" : "column") + ";"
        );
      }(), this.props.style);

      return _react["default"].createElement(ButtonContainer, null, this.props.children);
    }
  }]);

  return ButtonWrapper;
}(_react.Component);

exports.ButtonWrapper = ButtonWrapper;
ButtonWrapper.propTypes = {
  buttonRow: _propTypes["default"].bool // Whether or not the buttons should be displayed
  // as a row or column. Defaults to true.

};

//# sourceMappingURL=Button.js.map