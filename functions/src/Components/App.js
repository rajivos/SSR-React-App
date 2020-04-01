"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _HomePage = _interopRequireDefault(require("./HomePage/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, "App Level", /*#__PURE__*/_react["default"].createElement(_HomePage["default"], null));
};

var _default = App;
exports["default"] = _default;