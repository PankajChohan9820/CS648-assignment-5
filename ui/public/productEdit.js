"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _fetchGraphQl = _interopRequireDefault(require("./fetchGraphQl.js"));

var _numInp = _interopRequireDefault(require("./numInp.jsx"));

var _textInp = _interopRequireDefault(require("./textInp.jsx"));

var _excluded = ["product_id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var productEdit = /*#__PURE__*/function (_React$Component) {
  _inherits(productEdit, _React$Component);

  var _super = _createSuper(productEdit);

  function productEdit() {
    var _this;

    _classCallCheck(this, productEdit);

    _this = _super.call(this);
    _this.state = {
      product: {},
      isLoading: true
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(productEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.match.params.product_id;
      var product_id = this.props.match.params.product_id;

      if (product_id !== prevId) {
        this.loadData();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event, naturalValue) {
      var _event$target = event.target,
          product_name = _event$target.product_name,
          textValue = _event$target.value;
      var value = naturalValue === undefined ? textValue : naturalValue;
      this.setState(function (prevState) {
        return {
          product: _objectSpread(_objectSpread({}, prevState.product), {}, _defineProperty({}, product_name, value))
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var product, query, product_id, changes, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                product = this.state.product;
                query = "mutation updateProduct(\n      $product_id: Int!\n      $changes: ProductUpdateInputs!\n    ) {\n      updateProduct(\n        product_id: $product_id\n        changes: $changes\n      ) {\n        product_id product_name product_category product_price product_img\n      }\n    }";
                product_id = product.product_id, changes = _objectWithoutProperties(product, _excluded);
                _context.next = 6;
                return (0, _fetchGraphQl.default)(query, {
                  product_id: product_id,
                  changes: changes
                });

              case 6:
                data = _context.sent;

                if (data) {
                  this.setState({
                    product: data.updateProduct
                  });
                  alert('Updated product successfully'); // eslint-disable-line no-alert
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, product_id, data, product;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query product($product_id: Int!) {\n      product(product_id: $product_id) {\n        product_id product_name product_category product_price product_img\n      }\n    }";
                product_id = this.props.match.params.product_id;
                _context2.next = 4;
                return (0, _fetchGraphQl.default)(query, {
                  product_id: parseInt(product_id, 10)
                });

              case 4:
                data = _context2.sent;

                if (data) {
                  product = data.product;
                  product.product_name = product.product_name != null ? product.product_name : '';
                  product.product_category = product.product_category != null ? product.product_category : '';
                  product.product_price = product.product_price != null ? product.product_price : '';
                  product.product_img = product.product_img != null ? product.product_img : '';
                  this.setState({
                    product: product,
                    isLoading: false
                  });
                } else {
                  this.setState({
                    product: {},
                    isLoading: false
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          product_id = _this$state.product.product_id,
          isLoading = _this$state.isLoading;
      var propsId = this.props.match.params.product_id;

      if (product_id == null) {
        if (isLoading) {
          return /*#__PURE__*/_react.default.createElement("h3", null, "Loading Product details...");
        }

        if (propsId != null) {
          return /*#__PURE__*/_react.default.createElement("h3", null, "Product with ID ".concat(propsId, " not found."));
        }

        return null;
      }

      var _this$state$product = this.state.product,
          product_name = _this$state$product.product_name,
          product_category = _this$state$product.product_category,
          product_price = _this$state$product.product_price,
          product_img = _this$state$product.product_img;
      return /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "edit-form"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Editing product: ".concat(product_id)), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Name"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textInp", {
        product_name: "product_name",
        value: product_name,
        onChange: this.onChange,
        key: product_id
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Category"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("select", {
        product_name: "product_category",
        value: product_category,
        className: "add-product-form-select",
        onChange: this.onChange
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Price"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("numInp", {
        product_name: "product_price",
        value: product_price,
        onChange: this.onChange,
        key: product_id,
        isDecimal: true
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Image Url"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textInp", {
        product_name: "product_img",
        value: product_img,
        onChange: this.onChange,
        key: product_id
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        className: "submit-button submit-button-dark"
      }, "Submit"))))));
    }
  }]);

  return productEdit;
}(_react.default.Component);

exports.default = productEdit;