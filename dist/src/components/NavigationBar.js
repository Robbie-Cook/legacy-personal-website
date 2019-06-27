"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _gatsby = require("gatsby");

var _styles = require("@material-ui/core/styles");

var _Colors = _interopRequireDefault(require("./Colors"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MobileNav = _interopRequireDefault(require("./MobileNav"));

var _Views = require("./Views");

var _Sizes = _interopRequireDefault(require("./Sizes"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MyAnilink = _interopRequireDefault(require("./MyAnilink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                font-weight: bold;\n\n                color: ", ";\n\n                &.active {\n                  color: ", ";\n                }\n\n                &:hover {\n                  color: ", ";\n                }\n\n                height: ", ";\n                text-decoration: none;\n                margin-right: 97px;\n                transition: 0.1s;\n              "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      z-index: 150;\n      margin-left: ", ";\n      padding: 0;\n      ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar(props) {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationBar).call(this, props));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this = this;

      /* CSS */
      var StyledAppBar = (0, _styles.withStyles)({
        root: {
          backgroundColor: _Colors["default"].backgroundColor
        }
      })(_AppBar["default"]);
      var StyledTabs = (0, _styles.withStyles)({
        root: _defineProperty({}, "@media (max-width:".concat(_Views.Sizes.mobileSize, "px)"), {
          display: "none"
        })
      })(_Tabs["default"]);
      var StyledToolbar = (0, _styledComponents["default"])(_Toolbar["default"])(_templateObject(), _Sizes["default"].page.sideMargin, new _Views.MobileView("\n        margin-left: 20px;\n      "));
      return _react["default"].createElement(StyledAppBar, {
        position: "static",
        color: "primary",
        colorPrimary: true
      }, _react["default"].createElement(StyledToolbar, null, _react["default"].createElement(_MobileNav["default"], {
        pages: this.props.pages
      }), _react["default"].createElement(StyledTabs, null, function () {
        var StyledTab = _styledComponents["default"].p(_templateObject2(), _Colors["default"].textColor, _Colors["default"].link.color, _Colors["default"].link.color, _Sizes["default"].navbar.height);

        var array = [];

        _this.props.pages.map(function (item) {
          // If the current URL is the same as the item path, mark Tab as active
          array.push(_react["default"].createElement(_MyAnilink["default"], {
            path: item.path
          }, _react["default"].createElement(StyledTab, null, item.name)));
        });

        return array;
      }())));
    }
  }]);

  return NavigationBar;
}(_react["default"].Component);

var _default = NavigationBar;
exports["default"] = _default;

//# sourceMappingURL=NavigationBar.js.map