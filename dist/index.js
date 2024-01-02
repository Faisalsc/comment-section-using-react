"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./commentStyles.css");
var _personaCard = _interopRequireDefault(require("./comments-section/personaCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /* eslint-disable class-methods-use-this */
var propTypes = {
  onSubmitAction: _propTypes["default"].func,
  onEditAction: _propTypes["default"].func,
  onReplyAction: _propTypes["default"].func,
  onDeleteAction: _propTypes["default"].func,
  commentData: _propTypes["default"].oneOfType([_propTypes["default"].array]),
  currentUserId: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  classNameProps: _propTypes["default"].oneOfType([_propTypes["default"].object])
};
var defaultProps = {
  commentData: [],
  onSubmitAction: function onSubmitAction() {},
  onEditAction: function onEditAction() {},
  onReplyAction: function onReplyAction() {},
  onDeleteAction: function onDeleteAction() {},
  classNameProps: {}
};
var CommentSection = /*#__PURE__*/function (_Component) {
  _inherits(CommentSection, _Component);
  var _super = _createSuper(CommentSection);
  function CommentSection(props) {
    var _this;
    _classCallCheck(this, CommentSection);
    _this = _super.call(this, props);
    _this.state = {
      commentValue: ''
    };
    return _this;
  }
  _createClass(CommentSection, [{
    key: "renderCard",
    value: function renderCard(m) {
      var _this2 = this;
      var card = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var actions = arguments.length > 2 ? arguments[2] : undefined;
      card.push( /*#__PURE__*/_react["default"].createElement("div", {
        key: m.comId,
        className: m.userId === this.props.currentUserId ? 'current-user' : ''
      }, /*#__PURE__*/_react["default"].createElement(_personaCard["default"], {
        key: m.comId,
        data: m,
        actions: actions
      })));
      if (m.replies && m.replies.length > 0) {
        m.replies.forEach(function (mr) {
          var margin = m.marginLeft || 0;
          _this2.renderCard(_objectSpread(_objectSpread({}, mr), {}, {
            marginLeft: margin + 35
          }), card, actions);
        });
      }
      return card;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var classNameProps = this.props.classNameProps;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classNameProps ? classNameProps.repliesContainer || 'replies-container' : 'replies-container'
      }, this.props.commentData.map(function (m) {
        return _this3.renderCard(m, [], {
          onEditAction: _this3.props.onEditAction,
          onReplyAction: _this3.props.onReplyAction,
          onSubmitAction: _this3.props.onSubmitAction,
          onDeleteAction: _this3.props.onDeleteAction
        });
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classNameProps ? classNameProps.commentsContainer || 'comments-container' : 'comments-container',
        "aria-label": "comment"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        rows: "3",
        "aria-label": "Edit comment",
        onChange: function onChange(e) {
          _this3.setState({
            commentValue: e.target.value
          });
        },
        value: this.state.commentValue
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "primary-btn",
        "aria-label": "Save edit",
        onClick: function onClick() {
          _this3.props.onSubmitAction({
            text: _this3.state.commentValue
          });
          _this3.setState({
            commentValue: ''
          });
        }
      }, "Post")));
    }
  }]);
  return CommentSection;
}(_react.Component);
CommentSection.propTypes = propTypes;
CommentSection.defaultProps = defaultProps;
var _default = exports["default"] = CommentSection;