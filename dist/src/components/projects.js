"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectWebLink = exports.ProjectGithubLink = exports.ProjectLink = exports.ProjectBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Globals = _interopRequireDefault(require("../components/Globals"));

var _grommetIcons = require("grommet-icons");

var _Typography = require("../components/Typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 27px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border: 3px solid ", ";\n      border-radius: 6px;\n      display: inline-block;\n      padding: 5px;\n      margin-right: 10px;\n      margin-top: 5px;\n      color: ", ";\n      transition: 0.03s;\n\n      /* for svg icons */\n      fill: ", ";\n      stroke: ", ";\n\n      & p {\n        color: inherit;\n        margin: 0 10px;\n        text-decoration: none;\n        border-bottom: 1px solid ", ";\n      }\n\n      &:hover {\n        & p {\n          border-bottom: 1px solid transparent;\n        }\n        background-color: ", ";\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      margin-top: auto;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      width: auto;\n      height: auto;\n\n      & img {\n        max-height: 113px;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      max-width: 360px;\n      margin-right: 20px !important;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-top: 0;\n      margin-bottom: 0;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n\n      // Responsive design queries\n      @media (max-width: 600px) {\n        flex-direction: column;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      border: 2px solid #dcd6ce;\n      border-radius: 5px;\n      padding: 20px;\n      background-color: #3c3c3c;\n      max-width: 600px;\n      margin-top: 10px;\n      display: flex;\n      flex-direction: column;\n\n      &:nth-child(odd) {\n        margin-right: 31px;\n      }\n\n      // Responsive design queries\n      @media (max-width: 1200px) {\n        margin-right: 0 !important;\n      }\n\n\n    "]);

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

/*

Component representing a project



Example usage:

<ProjectBox title="My title">

    <Icon />

    <p>My description</p>

    <ProjectLink to="mypage.html" text="Check out my page">

        <Icon />

    </ProjectLink>

</ProjectBox>

*/
var ProjectBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectBox, _Component);

  function ProjectBox() {
    _classCallCheck(this, ProjectBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectBox).apply(this, arguments));
  }

  _createClass(ProjectBox, [{
    key: "render",
    value: function render() {
      var ProjectBox = _styledComponents["default"].div(_templateObject());

      var ProjectDescriptionAndImageWrapper = _styledComponents["default"].div(_templateObject2());

      var ProjectTitle = _styledComponents["default"].h3(_templateObject3());

      var ProjectDescription = _styledComponents["default"].p(_templateObject4());

      var ProjectImage = _styledComponents["default"].div(_templateObject5());

      var LinkWrapper = _styledComponents["default"].div(_templateObject6());

      function getGithubLink(link) {
        if (link !== undefined) {
          return _react["default"].createElement(ProjectGithubLink, {
            to: link
          });
        }
      }

      function getWebLink(link) {
        if (link !== undefined) {
          return _react["default"].createElement(ProjectWebLink, {
            to: link[0],
            text: link[1]
          });
        }
      }

      return _react["default"].createElement(ProjectBox, null, _react["default"].createElement(ProjectTitle, null, this.props.title), _react["default"].createElement(ProjectDescriptionAndImageWrapper, null, _react["default"].createElement(ProjectDescription, null, this.props.desc), _react["default"].createElement(ProjectImage, null, _react["default"].createElement("img", {
        src: this.props.image
      }))), _react["default"].createElement(LinkWrapper, null, getGithubLink(this.props.githubLink), getWebLink(this.props.webLink), this.props.children));
    }
  }]);

  return ProjectBox;
}(_react.Component); // Links which sit at the bottom of a project.
// Can be used to make a custom link, or is extended below for
// simple Github and web links


exports.ProjectBox = ProjectBox;

var ProjectLink =
/*#__PURE__*/
function (_Component2) {
  _inherits(ProjectLink, _Component2);

  function ProjectLink() {
    _classCallCheck(this, ProjectLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectLink).apply(this, arguments));
  }

  _createClass(ProjectLink, [{
    key: "render",
    value: function render() {
      //   Original color: #6a77ec
      var ProjectLinkWrapper = _styledComponents["default"].div(_templateObject7(), _Globals["default"].link.color, _Globals["default"].text.color, _Globals["default"].text.color, _Globals["default"].text.color, _Globals["default"].text.color, _Globals["default"].link.color);

      var InnerWrapper = _styledComponents["default"].div(_templateObject8());

      return _react["default"].createElement("a", {
        href: this.props.to
      }, _react["default"].createElement(ProjectLinkWrapper, null, _react["default"].createElement(InnerWrapper, null, this.props.children, " ", _react["default"].createElement("p", null, this.props.text))));
    }
  }]);

  return ProjectLink;
}(_react.Component); // Github link which extends ProjectLink


exports.ProjectLink = ProjectLink;

var ProjectGithubLink =
/*#__PURE__*/
function (_Component3) {
  _inherits(ProjectGithubLink, _Component3);

  function ProjectGithubLink() {
    _classCallCheck(this, ProjectGithubLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectGithubLink).apply(this, arguments));
  }

  _createClass(ProjectGithubLink, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(ProjectLink, {
        to: this.props.to,
        text: "Code on Github"
      }, _react["default"].createElement(_grommetIcons.Github, {
        fill: "inherit",
        color: "inherit"
      }));
    }
  }]);

  return ProjectGithubLink;
}(_react.Component); // Web link which extends ProjectLink


exports.ProjectGithubLink = ProjectGithubLink;

var ProjectWebLink =
/*#__PURE__*/
function (_Component4) {
  _inherits(ProjectWebLink, _Component4);

  function ProjectWebLink() {
    _classCallCheck(this, ProjectWebLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectWebLink).apply(this, arguments));
  }

  _createClass(ProjectWebLink, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(ProjectLink, {
        to: this.props.to,
        text: this.props.text
      }, _react["default"].createElement(_grommetIcons.Link, {
        stroke: "inherit",
        color: "inherit"
      }));
    }
  }]);

  return ProjectWebLink;
}(_react.Component);

exports.ProjectWebLink = ProjectWebLink;

//# sourceMappingURL=projects.js.map