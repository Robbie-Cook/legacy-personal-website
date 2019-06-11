"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("gatsby");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyLink =
/*#__PURE__*/
function () {
  function MyLink(name, path, component) {
    var exact = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, MyLink);

    this.name = name;
    this.path = path;
    this.exact = exact; // whether or not the path has to be exact
  } // Convert navbar link to a Router element


  _createClass(MyLink, [{
    key: "getRoute",
    value: function getRoute() {
      var route = _react["default"].createElement(_gatsby.Route, {
        path: this.path,
        component: this.component
      });

      if (this.exact) {
        route = _react["default"].createElement(_gatsby.Route, {
          exact: true,
          path: this.path,
          component: this.component
        });
      }

      return route;
    }
  }]);

  return MyLink;
}();

var _default = MyLink;
exports["default"] = _default;

//# sourceMappingURL=MyLink.js.map