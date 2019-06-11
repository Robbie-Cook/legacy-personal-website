"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Heading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      margin: 12px 0;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      font-size: 20px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      font-size: 25px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      font-size: 30px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      font-size: 40px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      font-size: 50px;\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 *  Common components relating to text. This includes

 *  <Text> and <Heading>.

 */

/**

 * Heading section for a page

 * Should be used for all headings. Currently, only supports h1 and h2.

 * Example usage: <Heading type="h2">My heading</Heading>

 */
var Heading =
/*#__PURE__*/
function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Heading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Heading)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "propTypes", {
      type: _propTypes["default"].string
      /**

       *  Get appropriate heading

       *  Type: h1, h2, etc,

       *  Content: The child elements

       */

    });

    return _this;
  }

  _createClass(Heading, [{
    key: "getHeading",
    value: function getHeading(type, style, className) {
      var myStyles = "\n      font-family: \"Roboto\", sans-serif;\n      font-weight: bold;\n      margin: 0 0 20px 0;\n    ";

      var H1 = _styledComponents["default"].h1(_templateObject(), myStyles); // H2 inherits and overrides styles from H1


      var H2 = _styledComponents["default"].h2(_templateObject2(), myStyles);

      var H3 = _styledComponents["default"].h3(_templateObject3(), myStyles);

      var H4 = _styledComponents["default"].h4(_templateObject4(), myStyles);

      var H5 = _styledComponents["default"].h5(_templateObject5(), myStyles);

      var headingElementToUse; // Probably should use TypeScript for this

      if (type === "h1" || type === undefined) {
        headingElementToUse = H1;
      } else if (type === "h2") {
        headingElementToUse = H2;
      } else if (type === "h3") {
        headingElementToUse = H3;
      } else if (type === "h4") {
        headingElementToUse = H4;
      } else if (type === "h5") {
        headingElementToUse = H5;
      }

      return _react["default"].createElement(headingElementToUse, {
        style: style,
        className: className
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return this.getHeading(this.props.type, this.props.style, this.props.className);
    }
  }]);

  return Heading;
}(_react.Component);
/**

 * Text element for a page.

 * Should be used in place of <p>, because this

 * is a globally-styled version

 */


exports.Heading = Heading;

var Text =
/*#__PURE__*/
function (_Component2) {
  _inherits(Text, _Component2);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      Text = _styledComponents["default"].p(_templateObject6());
      return _react["default"].createElement(Text, null, this.props.children);
    }
  }]);

  return Text;
}(_react.Component);

exports.Text = Text;

//# sourceMappingURL=Typography.js.map