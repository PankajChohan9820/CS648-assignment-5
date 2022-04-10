"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _productList = _interopRequireDefault(require("./productList.jsx"));

var _productEdit = _interopRequireDefault(require("./productEdit.jsx"));

var _productImg = _interopRequireDefault(require("./productImg.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

var Contents = function Contents() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/products",
    component: _productList.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/edit/:id",
    component: _productEdit.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/img/:id",
    component: _productImg.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
};

var _default = Contents;
exports.default = _default;