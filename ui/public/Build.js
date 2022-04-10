"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _contents = _interopRequireDefault(require("./contents.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav-bar"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/"
  }, "Home"));
};
/* Home component which shows the static Navbar and the Contents */


var Build = function Build() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NavBar, null), /*#__PURE__*/_react.default.createElement(_contents.default, null));
};

var _default = Build;
exports.default = _default;