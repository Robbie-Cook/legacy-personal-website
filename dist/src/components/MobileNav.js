"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _gatsby = require("gatsby");

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _styles = require("@material-ui/core/styles");

var _Colors = _interopRequireDefault(require("./Colors"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Views = require("./Views");

var _Sizes = _interopRequireDefault(require("./Sizes"));

var _MyAnilink = _interopRequireDefault(require("./MyAnilink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      font-weight: bold;\n      &.active {\n        color: ", ";\n      }\n    "]);

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

/**

 * A class representing a mobile nav.

 *

 * This class is used by NavigationBar, and should be refactored and added to this class

 * in the future.

 */
var MobileNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileNav, _React$Component);

  function MobileNav(props) {
    var _this;

    _classCallCheck(this, MobileNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileNav).call(this, props));
    _this.anchorEl = _react["default"].createRef();
    _this.state = {
      open: false // Bind 'this' to functions so functions can use 'this' keyword

    };
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    return _this;
  } // Generates the mobile menu


  _createClass(MobileNav, [{
    key: "generateMobileNav",
    value: function generateMobileNav() {
      var array = [];
      var StyledMenuItem = (0, _styledComponents["default"])(_MenuItem["default"])(_templateObject(), _Colors["default"].link.color);
      this.props.pages.map(function (item) {
        return array.push(_react["default"].createElement(StyledMenuItem, {
          component: _gatsby.Link,
          activeClassName: "active"
        }, _react["default"].createElement(_MyAnilink["default"], {
          style: "color: ".concat(_Colors["default"].link.color),
          path: item.path
        }, item.name)));
      });
      return array;
    } // Toggle 'open' state of navmenu

  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(event) {
      if (this.anchorEl.current.contains(event.target)) {
        return;
      }

      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _root,
          _root2,
          _this2 = this;

      /* CSS */
      var StyledIconButton = (0, _styles.withStyles)({
        root: (_root = {}, _defineProperty(_root, "@media (min-width:".concat(_Views.Sizes.mobileSize, "px)"), {
          display: "none"
        }), _defineProperty(_root, "marginTop", "10px"), _root)
      })(_IconButton["default"]);
      var StyledMenuList = (0, _styles.withStyles)({
        root: (_root2 = {}, _defineProperty(_root2, "@media (min-width:".concat(_Views.Sizes.mobileSize, "px)"), {
          display: "none"
        }), _defineProperty(_root2, "marginTop", _Sizes["default"].navbar.height), _root2)
      })(_MenuList["default"]);
      return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(StyledIconButton, {
        buttonRef: this.anchorEl,
        "aria-owns": this.state.open ? "menu-list-grow" : undefined,
        "aria-haspopup": "true",
        "aria-label": "Menu",
        color: "inherit",
        onClick: this.handleToggle
      }, _react["default"].createElement(_Menu["default"], null)), _react["default"].createElement(_Popper["default"], {
        open: this.state.open,
        anchorEl: this.anchorEl.current,
        transition: true,
        disablePortal: true
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return _react["default"].createElement(_Grow["default"], _extends({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          }
        }), _react["default"].createElement(_Paper["default"], null, _react["default"].createElement(_ClickAwayListener["default"], {
          onClickAway: _this2.handleClose
        }, _react["default"].createElement(StyledMenuList, null, _this2.generateMobileNav()))));
      })));
    }
  }]);

  return MobileNav;
}(_react["default"].Component);

var _default = MobileNav;
exports["default"] = _default;

//# sourceMappingURL=MobileNav.js.map