"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class converting css-style dimensions (padding etc.) to an object
var Dimensions =
/*#__PURE__*/
function () {
  // e.g. padding: 0 5px;
  function Dimensions(top, right) {
    var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : top;
    var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : right;

    _classCallCheck(this, Dimensions);

    // String values given
    if (typeof top === "string") {
      this.top = top;
      this.right = right;
      this.bottom = bottom;
      this.left = left;
    } else {
      // Numeric values given
      this.top = "".concat(top, "px");
      this.right = "".concat(right, "px");
      this.bottom = "".concat(bottom, "px");
      this.left = "".concat(left, "px");
    }
  }

  _createClass(Dimensions, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.top, " ").concat(this.right, " ").concat(this.bottom, " ").concat(this.left);
    }
  }]);

  return Dimensions;
}();

var _default = Dimensions;
exports["default"] = _default;

//# sourceMappingURL=Dimensions.js.map