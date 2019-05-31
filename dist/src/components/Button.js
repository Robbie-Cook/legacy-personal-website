"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grommet = require("grommet");

var _Globals = _interopRequireDefault(require("../components/Globals"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dimensions = _interopRequireDefault(require("../components/Dimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      display: flex;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      background-color: transparent;\n      margin: ", ";\n      color: ", ";\n      line-height: 28px;\n      font-size: 14px;\n      padding: 0 15px;\n      font-weight: normal;\n      ", ";\n    "]);

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
      var customTheme = {
        button: {
          border: {
            color: _Globals["default"].link.color
          }
        }
      };
      var MyButton = (0, _styledComponents["default"])(_grommet.Button)(_templateObject(), this.props.margin ? this.props.margin : new _Dimensions["default"](10, 20), _Globals["default"].textColor, this.props.style);
      return _react["default"].createElement(_grommet.Grommet, {
        theme: customTheme
      }, _react["default"].createElement(MyButton, {
        label: this.props.children,
        onClick: this.props["function"]
      }));
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;
Button.propTypes = {
  style: _propTypes["default"].string,
  color: _propTypes["default"].string,
  borderColor: _propTypes["default"].string,
  "function": _propTypes["default"].func.isRequired
  /**

   * A group of Buttons, given an array of button titles, and an array of

   * corresponding functions.

   */

};

var ButtonGroup =
/*#__PURE__*/
function (_Component2) {
  _inherits(ButtonGroup, _Component2);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroup).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var _this = this;

      var ButtonContainer = _styledComponents["default"].div(_templateObject2(), function () {
        /*

          Set the flex direction of the container to "row" if 

          this.props.buttonRow is true.

        */
        return "flex-direction: " + (_this.props.buttonRow ? "row" : "column") + ";";
      }());

      return (
        /* 

        Returns buttons, each with a function passed to the button

        as a prop.

        */
        _react["default"].createElement(ButtonContainer, null, this.props.titles.map(function (item, index) {
          return _react["default"].createElement(Button, {
            "function": _this.props.functions[index],
            margin: _this.props.buttonMargin,
            style: _this.props.buttonStyle
          }, item);
        }))
      );
    }
  }]);

  return ButtonGroup;
}(_react.Component);

exports.ButtonGroup = ButtonGroup;
ButtonGroup.propTypes = {
  titles: _propTypes["default"].array.isRequired,
  functions: _propTypes["default"].array.isRequired,
  // Should be an array of functions
  buttonRow: _propTypes["default"].bool,
  // Whether to display the buttons as a row
  buttonStyle: _propTypes["default"].string // Styles passed to the button

};

//# sourceMappingURL=Button.js.map