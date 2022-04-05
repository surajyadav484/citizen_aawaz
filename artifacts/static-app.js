(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimaryComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);






function PrimaryComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-div-parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"], {
    to: "/post/".concat(props.pk)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "box-div"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-danger mb-4"
  }, props.categaory), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", props.headline, "  "))));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(49);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(51);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(24);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(19);

var _helpers = __webpack_require__(52);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(19);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(50)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_fb_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _images_fb_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_fb_image_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _images_insta_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_insta_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_youtube_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _images_youtube_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_youtube_png__WEBPACK_IMPORTED_MODULE_6__);







function FooterComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "ml-auto mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "logo",
    className: "logo mt-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "white-color mt-4 font-weight-bold"
  }, "\u0938\u093F\u091F\u0940\u091C\u0928 \u0906\u0935\u093E\u095B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-light"
  }, "\u0938\u093F\u091F\u0940\u091C\u0928 \u0906\u0935\u093E\u095B \u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u0939\u093F\u0902\u0926\u0940 \u0938\u092E\u093E\u091A\u093E\u0930 \u092A\u0924\u094D\u0930 \u0915\u093E \u0935\u0947\u092C \u0935\u0930\u094D\u091C\u0928 \u0935\u0947\u092C \u0928\u094D\u092F\u0942\u091C\u093C \u092A\u094B\u0930\u094D\u091F\u0932 \u0939\u0948 \u0964 \u091C\u093F\u0938\u092E\u0947\u0902 \u0906\u092A\u0915\u0947 \u0939\u0930 \u090F\u0915 \u0938\u092E\u0938\u094D\u092F\u093E \u0915\u094B \u092E\u0940\u0921\u093F\u092F\u093E \u0915\u0947 \u092E\u093E\u0927\u094D\u092F\u092E \u0938\u0947 \u0938\u0930\u0915\u093E\u0930 \u0924\u0915 \u092A\u0939\u0941\u0902\u091A\u093E\u0928\u093E \u0939\u092E\u093E\u0930\u0940 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E \u0964 \u0915\u094B\u0936\u093F\u0936 \u0939\u0948 \u0906\u092A\u0915\u0940 \u0938\u0930\u0932 \u092D\u093E\u0937\u093E \u092E\u0947\u0902, \u0906\u092A\u0915\u0947 \u0932\u093F\u090F \u0938\u0930\u0932 \u092D\u093E\u0937\u093E \u092E\u0947 \u0916\u092C\u0930 \u0964 \u0910\u0938\u093E \u092E\u0902\u091A \u091C\u094B \u0906\u092A\u0915\u0940 \u0906\u0935\u093E\u091C\u093C \u0909\u0920\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0928\u093F\u0930\u0902\u0924\u0930 \u092C\u0940\u0924\u0947 \u092A\u093E\u0901\u091A \u0935\u0930\u094D\u0937\u094B \u0938\u0947 \u0915\u093E\u0930\u094D\u092F\u0930\u0924 \u0964 \u092F\u0939\u093E\u0902 \u092A\u093E\u090F\u0902\u0917\u0947 \u0924\u093E\u091C\u093C\u093E\u0924\u0930\u0940\u0928 \u0916\u092C\u0930\u094B\u0902 \u0938\u0947 \u0932\u0947\u0915\u0930 \u0928\u094C\u0915\u0930\u0940, \u0936\u093F\u0915\u094D\u0937\u093E \u0914\u0930 \u0928\u090F \u090F\u0915\u094D\u0938\u0915\u094D\u0932\u0942\u0938\u093F\u0935 \u091C\u0928\u0939\u093F\u0924 \u0916\u092C\u0930 \u0964 \u0916\u0947\u0932, \u0938\u093F\u0928\u0947\u092E\u093E \u0914\u0930 \u0935\u093F\u0926\u0947\u0936 \u0915\u0940 \u0916\u092C\u0930 \u0938\u093E\u092B \u0938\u0941\u0925\u0930\u0947 \u0924\u0930\u0940\u0915\u094B\u0902 \u092E\u0947 \u0964 \u090F\u0915\u094D\u0938\u0915\u094D\u0932\u0942\u0938\u093F\u0935 \u0907\u0902\u091F\u0930\u0935\u094D\u092F\u0942 \u092A\u094D\u0930\u0936\u093E\u0938\u0928\u093F\u0915 \u0905\u0927\u093F\u0915\u093E\u0930\u0940 \u090F\u0935\u0902 \u091C\u0928\u092A\u094D\u0930\u0924\u093F\u0928\u093F\u0927\u093F \u0915\u0947 \u0938\u093E\u0925 \u091C\u0928\u0924\u093E \u0915\u0947 \u0938\u0935\u093E\u0932\u094B \u0915\u094B \u0932\u0947\u0915\u0930 \u0964 www.citizenawaaz.com \u0915\u093E \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0938\u094D\u0935\u093E\u092E\u093F\u0924\u094D\u0935 \u0938\u093F\u091F\u0940\u091C\u0928 \u0906\u0935\u093E\u095B \u0938\u092E\u093E\u091A\u093E\u0930 \u092A\u0924\u094D\u0930 \u0915\u0947 \u0938\u0902\u0938\u094D\u0925\u093E\u092A\u0915 \u0938\u0902\u092A\u093E\u0926\u0915 \u092A\u0902\u0915\u091C \u0915\u0941\u092E\u093E\u0930 \u091D\u093E \u0915\u0947 \u092A\u093E\u0938 \u0939\u0948 \u0964 www.citizenawaaz.com \u092A\u0930 \u092A\u094D\u0930\u0915\u093E\u0936\u093F\u0924 \u0938\u092D\u0940 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0938\u0930\u094D\u0935\u093E\u0927\u093F\u0915\u093E\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948 \u0914\u0930 \u0907\u0938\u0915\u0940 \u0915\u093F\u0938\u0940 \u092D\u0940 \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0915\u093E \u0915\u093F\u0938\u0940 \u092D\u0940 \u0930\u0942\u092A \u092E\u0947\u0902 \u092A\u0941\u0928:\u092A\u094D\u0930\u0915\u093E\u0936\u0928 \u0905\u0925\u0935\u093E \u0935\u093F\u0924\u0930\u0923 \u092A\u094D\u0930\u0924\u093F\u092C\u0902\u0927\u093F\u0924 \u0939\u0948 \u0964"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-light mt-4 mb-4 font-weight-bold"
  }, "Contact us +91 9431459485"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-light  font-weight-bold"
  }, "Email : citizenawazindia@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-5",
    style: {
      marginTop: "30%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "social-image",
    src: _images_fb_image_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "fb image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "social-image",
    src: _images_insta_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "instagram image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "social-image",
    src: _images_youtube_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "youtube image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "social-image",
    src: _images_twitter_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "twitter image"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      backgroundColor: "white"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-auto mr-auto text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-light"
  }, "Copyright \xA9 2015 by Citizenawaaz All rights reserved")))));
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _myStyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var _myStyle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_myStyle_css__WEBPACK_IMPORTED_MODULE_4__);



 // import  "..Pages/myStyle.css"


function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    fixed: "top ",
    className: "bg-blue",
    variant: "dark",
    expand: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_citizenAawaz_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "logo",
    style: {
      height: "50px",
      width: "50px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-4 font-weight-bold"
  }, "\u0938\u093F\u091F\u0940\u091C\u0928 \u0906\u0935\u093E\u095B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "ml-auto mr-4  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/national"
  }, "National"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/sport"
  }, "Sport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/health"
  }, "Health"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/education"
  }, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/crime"
  }, "Crime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/entertainment"
  }, "Entertainment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/darbhanga"
  }, "Darbhanga"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-light text-decoration-none m-2",
    to: "/madhubani"
  }, "Madhubani"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"], {
    title: "More",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-dark text-decoration-none",
    to: "/patna"
  }, "Patna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-dark text-decoration-none",
    to: "/samastipur"
  }, "Smastipur")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-dark text-decoration-none",
    to: "/gujrat"
  }, "Gujrat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-dark text-decoration-none",
    to: "/delhi"
  }, "Delhi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NavDropdown"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    className: "text-dark text-decoration-none",
    to: "/videos"
  }, "Videos")))))));
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeconadaryIframe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function SeconadaryIframe(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: "m-0 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "m-0 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "m-0 p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "130px",
    height: "90px",
    style: {
      borderRadius: "10px"
    },
    src: "https://www.youtube.com/embed/".concat(props.id),
    alt: "video"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/embed/".concat(props.id),
    target: props.target,
    className: "text-dark text-decoration-none"
  }, props.text))))));
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackToTopButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import { Button } from 'react-bootstrap';
// import window from 'global/window'
// const ScrollButton = () =>{ 
//   const [visible, setVisible] = useState(false) 
//   const toggleVisible = () => { 
//     const scrolled = document.documentElement.scrollTop; 
//     if (scrolled > 300){ 
//       setVisible(true) 
//     }  
//     else if (scrolled <= 300){ 
//       setVisible(false) 
//     } 
//   }; 
//   const scrollToTop = () =>{ 
//     window.scrollTo({ 
//       top: 0,  
//       behavior: 'smooth'
//       /* you can also use 'auto' behaviour 
//          in place of 'smooth' */
//     }); 
//   }; 
//   window.addEventListener('scroll', toggleVisible); 
//   return ( 
//     <div className = "back-to-top text-center p-2" 
//     onClick={scrollToTop} 
//     style={{display: visible ? 'inline' : 'none'}} 
//     >
//     <em className = "text-light"> ▲ </em> 
//     </div> 
//   ); 
// } 
// export default ScrollButton; 

function BackToTopButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/Router.js
var Router = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/images/new-logo.jpeg
var new_logo = __webpack_require__(60);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/app.css
var app = __webpack_require__(61);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/FooterComponent.js
var FooterComponent = __webpack_require__(12);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/pages/Header.js
var Header = __webpack_require__(13);

// EXTERNAL MODULE: external "react-back-to-top-button"
var external_react_back_to_top_button_ = __webpack_require__(42);
var external_react_back_to_top_button_default = /*#__PURE__*/__webpack_require__.n(external_react_back_to_top_button_);

// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/App.js

 //







 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(Header["default"], null), /*#__PURE__*/external_react_default.a.createElement(external_react_back_to_top_button_default.a, {
    className: "text-center",
    style: {
      backgroundColor: "#d71821"
    },
    children: /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "text-light",
      style: {
        overflow: "hidden",
        height: "50px"
      }
    }, " \u2191 "),
    showAt: 100,
    speed: 2000,
    easing: "easeInOutQuint"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), /*#__PURE__*/external_react_default.a.createElement(FooterComponent["a" /* default */], null));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(10);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\surajyad\\module 3\\React\\React-static-demo\\citizenaawaz\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BackToTopButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_facebook_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64);
/* harmony import */ var _images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_twitter_svg__WEBPACK_IMPORTED_MODULE_7__);








function News() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_3__["useRouteData"])(),
      post = _useRouteData.post;

  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  var date = new Date("".concat(post.date));
  var publishDate = date.toLocaleDateString("en-US", options); // Saturday, September 17, 2016

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, " Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "title",
    content: post.headline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: post.headline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://citizenaawaz.netlify.app/test"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: post.headline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: post.data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: post.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:url",
    content: "https://citizenaawaz.netlify.app/test"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:title",
    content: post.headline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:description",
    content: post.headline
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "twitter:image",
    content: post.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BackToTopButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-main-div mt-70 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, post.headline)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: post.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "share-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappShareButton"], {
    className: "m-2",
    url: "https://citizenaawaz-v-2.netlify.app/post/".concat(post.pk),
    quote: "pls subscribe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["WhatsappIcon"], {
    style: {
      width: "50px",
      height: "50px"
    },
    logoFillColor: "white",
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
    className: "m-2",
    url: "https://citizenaawaz-v-2.netlify.app/post/".concat(post.pk),
    quote: "pls subscribe",
    onClick: "window.open()"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    style: {
      width: "50px",
      height: "50px"
    },
    logoFillColor: "white",
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    className: "m-2",
    url: "https://citizenaawaz-v-2.netlify.app/post/".concat(post.pk),
    quote: "pls subscribe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    style: {
      width: "50px",
      height: "50px"
    },
    logoFillColor: "white",
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramShareButton"], {
    className: "m-2",
    url: "https://citizenaawaz-v-2.netlify.app/post/".concat(post.pk),
    quote: "pls subscribe"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramIcon"], {
    style: {
      width: "50px",
      height: "50px"
    },
    logoFillColor: "white",
    round: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, publishDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-content"
  }, post.data, "  ")));
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



function VideoComponent() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      video = _useRouteData.video;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bgColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "100%",
    height: "530px",
    src: "https://www.youtube.com/embed/".concat(video.id)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, video.text)));
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Videos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SecondaryIframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);




function Videos() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      videoPosts = _useRouteData.videoPosts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-70"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-main-div"
  }, videoPosts.map(function (video, index) {
    return index < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      width: "100%",
      height: "400px",
      name: "iframe_a",
      autoplay: "1",
      src: "https://www.youtube.com/embed/".concat(video.id, "?autoplay=1&mute=0")
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scroller"
  }, videoPosts.map(function (video, index) {
    return index >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SecondaryIframe__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      id: video.id,
      target: "iframe_a",
      pk: video.pk,
      text: video.text
    }));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "75%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null)));
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Category; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/Router.js
var Router = __webpack_require__(2);

// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/DisplayCategory.js


function DisplayCategory(props) {
  return /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("h3", null, props.categaory, " "), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/post/".concat(props.pk)
  }, props.headline)));
}
// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/PrimaryComponent.js
var PrimaryComponent = __webpack_require__(6);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/BackToTopButton.js
var BackToTopButton = __webpack_require__(16);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/FooterComponent.js
var FooterComponent = __webpack_require__(12);

// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/containers/Category.js








function Category() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      data = _useRouteData.data;

  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("title", null, "  Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News"), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "https://example.com/myicon.ico"
  }), /*#__PURE__*/external_react_default.a.createElement(BackToTopButton["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mt-70 category-card-conatiner-primary "
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, data.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      categaory: post.categaory,
      image: post.image,
      pk: post.pk,
      headline: post.headline
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "category-card-conatiner"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, data.map(function (post, index) {
    return index >= 1 && /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
      to: "/post/".concat(post.pk)
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Card"], {
      className: "mobile-card-view"
    }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Card"].Img, {
      src: post.image,
      alt: "image",
      className: "card-image"
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Card"].Body, null, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Card"].Text, null, /*#__PURE__*/external_react_default.a.createElement("strong", null, /*#__PURE__*/external_react_default.a.createElement("a", {
      href: "#",
      className: "text-dark"
    }, post.headline), " ")))));
  }))));
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "bootstrap/dist/css/bootstrap.min.css"
var bootstrap_min_css_ = __webpack_require__(20);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/Router.js
var Router = __webpack_require__(2);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(9);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/PrimaryComponent.js
var PrimaryComponent = __webpack_require__(6);

// EXTERNAL MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/SecondaryIframe.js
var SecondaryIframe = __webpack_require__(15);

// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/components/SecondayComponent.js






function SecondaryComponent(props) {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Table"], {
    className: "m-0 p-0"
  }, /*#__PURE__*/external_react_default.a.createElement("tr", {
    className: "m-0 p-0"
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/post/".concat(props.pk)
  }, /*#__PURE__*/external_react_default.a.createElement("td", {
    className: "m-0 p-0"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: props.image,
    alt: "image",
    className: "rectangular-image m-0 p-0"
  })), /*#__PURE__*/external_react_default.a.createElement("td", null, /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", {
    className: "text-dark text-decoration-none"
  }, props.headline)))))));
}
// CONCATENATED MODULE: C:/Users/surajyad/module 3/React/React-static-demo/citizenaawaz/src/pages/index.js
// import React from 'react'
// export default () => (
//   <div style={{ textAlign: 'center' }}>
//     <h1>Welcome to React-Static</h1>
//   </div>
// )









/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      posts = _useRouteData.posts,
      videoPosts = _useRouteData.videoPosts;

  var nationalPosts = posts.filter(function (post) {
    return post.categaory == "National";
  });
  var sportPosts = posts.filter(function (post) {
    return post.categaory == "Sport";
  });
  var crimePosts = posts.filter(function (post) {
    return post.categaory == "Crime";
  });
  var entertainmentPosts = posts.filter(function (post) {
    return post.categaory == "Entertainment";
  });
  var healthPosts = posts.filter(function (post) {
    return post.categaory == "Health";
  });
  var darbhangaPosts = posts.filter(function (post) {
    return post.categaory == "Darbhanga";
  });
  var patnaPosts = posts.filter(function (post) {
    return post.categaory == "Patna";
  });
  var madhubaniPosts = posts.filter(function (post) {
    return post.categaory == "Madhubani";
  });
  var samastipurPosts = posts.filter(function (post) {
    return post.categaory == "Samastipur";
  });
  var gujratPosts = posts.filter(function (post) {
    return post.categaory == "Gujrat";
  });
  var delhiPosts = posts.filter(function (post) {
    return post.categaory == "Delhi";
  });
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "  Citizen Aawaz - Latest News, Breaking News, Bollywood, Sports, Business and Political News")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor  mt-70"
  }, /*#__PURE__*/external_react_default.a.createElement("h4", {
    className: "headline-font"
  }, "LATEST"), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, posts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, posts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor   mt-4"
  }, /*#__PURE__*/external_react_default.a.createElement("h4", {
    className: "headline-font"
  }, "TRENDING"), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "horizontal-snap"
  }, posts.map(function (post, index) {
    return index < 20 && /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "div-body  text-center  bg-white"
    }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
      to: "/post/".concat(post.pk)
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      className: "m-2",
      src: post.image
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "mt-4 text-dark font-weight-bold"
    }, post.headline, " ")));
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "National"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/national",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, nationalPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, nationalPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Videos"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/videos",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, videoPosts.map(function (video, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement("iframe", {
      width: "100%",
      height: "400px",
      name: "iframe-primary",
      src: "https://www.youtube.com/embed/".concat(video.id),
      allowfullscreen: true
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "scroller"
  }, videoPosts.map(function (video, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(SecondaryIframe["a" /* default */], {
      id: video.id,
      target: "iframe-primary",
      pk: video.pk,
      text: video.text
    }));
  }))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Sport"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/sport",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, sportPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, sportPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Health"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/health",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, healthPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, healthPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Crime"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/crime",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, crimePosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, crimePosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Entertainment"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/entertainment",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, entertainmentPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, entertainmentPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "header-font"
  }, "darbhanga"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/darbhanga",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, darbhangaPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, darbhangaPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: " header-font"
  }, "Patna"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/patna",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, patnaPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, patnaPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "header-font"
  }, "Madhubani"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/madhubani",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, madhubaniPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, madhubaniPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "header-font"
  }, "Samastipur"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/samastipur",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, samastipurPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, samastipurPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "header-font"
  }, "Gujrat"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/gujrat",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, gujratPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, gujratPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bgColor mt-4 "
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "header-font"
  }, "Delhi"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/delhi",
    className: "float-right text-primary"
  }, "View more ", ">>")), /*#__PURE__*/external_react_default.a.createElement("hr", {
    className: "bg-dark"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Row"], {
    className: "ml-0 mr-0"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "home-main-div"
  }, delhiPosts.map(function (post, index) {
    return index < 1 && /*#__PURE__*/external_react_default.a.createElement(PrimaryComponent["a" /* default */], {
      pk: post.pk,
      image: post.image,
      headline: post.headline,
      categaory: post.categaory
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(external_react_bootstrap_["Col"], {
    sm: true,
    xs: 12
  }, delhiPosts.map(function (post, index) {
    return index >= 1 && index < 5 && /*#__PURE__*/external_react_default.a.createElement(SecondaryComponent, {
      pk: post.pk,
      image: post.image,
      headline: post.headline
    });
  })))));
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(11);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fb-image.f2c62ab2.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/insta.cf674abf.png";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/youtube.3e400ecf.png";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-back-to-top-button");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(46);
module.exports = __webpack_require__(53);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(45)["default"];

var _require = __webpack_require__(22),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(22),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(47),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);


















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Header.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Header.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Header";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/Header.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/News",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/News */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/News');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/News";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/containers/News';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Category",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Category */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Category');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Category";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/containers/Category';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/VideoComponent",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/VideoComponent */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/VideoComponent');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/VideoComponent";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/containers/VideoComponent';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Videos",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Videos */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Videos');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Videos";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/containers/Videos'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/about.js': t_1,
  '__react_static_root__/src/pages/Header.js': t_2,
  '__react_static_root__/src/pages/index.js': t_3,
  '__react_static_root__/src/containers/News': t_4,
  '__react_static_root__/src/containers/Category': t_5,
  '__react_static_root__/src/containers/VideoComponent': t_6,
  '__react_static_root__/src/containers/Videos': t_7
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(19);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 10,
	"./": 10,
	"./index": 10,
	"./index.js": 10
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 50;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(18);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(24);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(26);

var _interopRequireWildcard = __webpack_require__(27);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(54);

var _Suspense = _interopRequireDefault(__webpack_require__(55));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(58)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\surajyad\\module 3\\React\\React-static-demo\\citizenaawaz\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(27);

var _interopRequireDefault = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(56));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(57));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)(module)))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/new-logo.f98945d7.jpeg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Noto Sans', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #f2f7f8;\n  font-weight: bold;\n}\n\nlogo-img {\n  position: absolute;\n  width: 329px;\n  height: 73px;\n  left: 232px;\n  top: 40px;\n  \n  background: #EA3136;\n  border-radius: 0px 10px 10px 0px;\n}\n\n/* nav {\n  width: 100%;\n  background: #002866;\n  position: fixed;\n  z-index: 310;\n  \n} */\n\n\n/* nav div{\n  margin-left: auto;\n \n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n} */\n\n.content {\n  padding: 1rem;\n}\n\n.box-div-parent{\n  position: relative;\n}\n\n.box-div{\n  position: relative;\n left: 0;\n  bottom: 0;\n  width: 100%;\n  background: linear-gradient(\n    to bottom,\n    transparent 0%,\n    rgba(0, 0, 0, 0.2) 30%,\n    rgba(0, 0, 0, 1) 90%\n  );\n}\n\n.box-div p{\n \n /* margin-top: 180px; */\n margin-bottom: 0px;\n position: absolute;\n left: 0;\n  bottom: 0;\n  padding: 1rem;\n  font-weight: 600;\n  color: #fff;\n  font-size: 1.5rem;\n}\n\n/* .home-main-div div{\n\n position: absolute;\n  width: 100%;\n  height: 380px;\n} */\n.home-main-div img{\n\n  -o-object-fit: cover;\n\n     object-fit: cover;\n  width: 100%;\n  border-radius: 10px;\n  height: 60vh;\n  \n}\n\n.rectangular-image{\n  width: 130px;\n  height: 90px;\n  border-radius: 10px;\n}\n\n.div-body{\n  height: 350px;\n  width: 280px;\n  /* border: 1px solid black; */\n  border-radius: 10px;\n  scroll-snap-align: center;\n}\n\n.div-body img {\n  height: 200px;\n  width: 95%;\n  border-radius: 10px;\n  margin-right: 5px;\n  \n}\n\n.bgColor{\n  background: #F1F1F1;\n  \n}\n\n.header-font{\n  font-family: Montserrat,Verdana,arial,sans-serif;\n  font-weight: 600;\n  font-size: 1.5em;\n  \n}\n\n\n  \n  .horizontal-snap {\n    margin: 0 auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 1rem;\n   \n    \n    \n    overflow-y: auto;\n    overscroll-behavior-x: contain;\n    -ms-scroll-snap-type: x mandatory;\n        scroll-snap-type: x mandatory;\n    -ms-overflow-style: none; \n    scrollbar-width: none;\n  }\n  \n  .horizontal-snap::-webkit-scrollbar {\n    display: none;\n  }\n\n  .horizontal-snap > a {\n    scroll-snap-align: center;\n  }\n\n\n.back-to-top{\n    width: 50px;\n    height: 50px;\n    background: #d71821;\n    border-radius: 50px;\n    box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 50%);\n    cursor: pointer;\n    display: inline-block;\n    position: fixed;\n    bottom: 170px;\n    right: 20px;\n    z-index: 310;\n    padding: auto;\n    transition: all 0.3s ease;\n \n \n}\n\n.category-card-conatiner{\n  width: 80%;\n}\n\n.news-main-div{\n  width: 65%;\n \n\n}\n.news-main-div img{\n  width: 95%;\n  height: 500px;\n margin-left: 20px;\n margin-right: 20px;\n}\n\n.news-main-div h1{\n  padding: 20px;\n}\n\n.news-main-div p{\n  color: #333333;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  margin-top: 10px;\n  padding: 10px;\n}\n\n.share-btn{\n  float: right;\nmargin-bottom: 10px;\nmargin-right: 20px;\n}\n\n.mt-70{\n margin-top: 70px;\n\n}\n\n.bg-blue{\n  background-color: #002866;\n  box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.news-content{\n  color: #333333;\n  word-spacing: 5px ;\n  margin-bottom: 10px;\n  font-size: 20px;\n  margin-top: 10px;\n  padding: 10px;\n line-height: 1.6;\n}\n\n.scroller {\n  width: 100%;\n  height: 600px;\n  overflow-y: scroll;\n  scrollbar-color: rebeccapurple green;\n  scrollbar-width: thin;\n}\n\n.headline-font{\n  font-family: Montserrat,Verdana,arial,sans-serif;\n  font-weight: 600;\n}\n\n/* img{\n  transition: all .2s ease-in-out;\n}\nimg:hover {\n  transform: scale(1.05);\n} */\n\n.share-social-icons img{\n  width: 50px;\n  height: 50px;\n\n}\n\n.mobile-card-view{\n  width: 18rem;\n  margin: 1.5rem;\n}\n\n@media only screen and (max-width: 600px) {\n  .news-main-div{\n    width: 100%;\n    height: auto;\n  }\n\n\n  .category-card-conatiner{\n    width: 100%;\n  }\n  .category-card-conatiner Row{\n    flex-wrap: nowrap;\n  }\n  .mobile-card-view{\n    display: flex !important;\n    flex-direction: row !important;\n    width: 100%;\n    height: auto;\n    margin: 5px;\n\n  }\n  .card-image{\n    height: 80px !important;\n    width: 90px !important ;\n  }\n\n  .mobile-card-view .card-body{\n    padding: 0;\n    margin-left: 10px;\n    margin-right: 3px;\n    font-size: 13px;\n  }\n\n  .category-card-conatiner-primary .row{\n    display: flex;\n    flex-wrap: nowrap;\n    flex-direction: column;\n  }\n  .category-card-conatiner-primary .col{\n    padding: 0;\n  }\n\n  .box-div-parent{\n    height: 50vh;\n  }\n\n  .box-div-parent img{\n    height: 100%;\n\n  }\n  .box-div p{\n    font-weight: 500;\n    font-size: 1.3rem;\n  }\n\n  .content{\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  \n  \n.mt-70{ \n  margin: 70px 0px 0px 0px;\n  padding: 0;\n  width: 100%;\n}\n.col{\n\n  flex-basis: 1px;\n padding-left: 0;\n padding-right: 0;\n}\n\n.div-body{\n  height: 350px;\n  width: 250px;\n}\n.news-main-div img{\n  width: 97%;\n  height: 50vh;\n  margin-left: 5px;\n  margin-right: 1px;\n}\n.news-main-div h1{\n  font-size: 1.9rem;\n}\n.scroller{\n \n  height: 200px;\n \n}\n\n\n}", ""]);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// Module
exports.push([module.i, " .nav-text{\r\n    color: rgb(255 255 255);\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar-bg{\r\n    background-color: #212529;\r\n    box-shadow: 0 4px 8px 0 rgb(241, 238, 238), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n   \r\n}\r\nbody{\r\n    margin-top: 100px;\r\n    font-family: 'Noto Sans', sans-serif;\r\n    font-weight: 400;\r\n    text-align: left;\r\n    \r\n}\r\n\r\n.white-color{\r\n    color: rgb(255 255 255);\r\n}\r\n.logo{\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n.social-image{\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n    margin :25px;\r\n}\r\n.latest-table{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    margin-left: 0px;\r\n}\r\n\r\n\r\n.adv-div{\r\n    width: 75%;\r\n    height: 200px;\r\n    border: 1px solid black;\r\n    margin: auto;\r\n    margin-bottom: 50px;\r\n    \r\n    \r\n}\r\n\r\n.content-image{\r\n    width: 70%;\r\n    height: 55vh;\r\n}\r\n.content-div{\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.carasoule-text {\r\n    /* position: absolute;\r\n    bottom: 0;\r\n    width: 100%; */\r\n   \r\n    \r\n    background: linear-gradient(\r\n      to bottom,\r\n      transparent 0%,\r\n      rgba(0, 0, 0, 0.6) 30%,\r\n      rgba(0, 0, 0, 1) 90%\r\n    );\r\n  }\r\n\r\n  /* .conatiner{\r\n      position: relative;\r\n  }\r\n\r\n  .category-text{\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: black;\r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  } */\r\n  \r\n\r\n  .category-text {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 65%;\r\n   \r\n    color: white;\r\n   \r\n    \r\n    background: linear-gradient(\r\n      to bottom,\r\n      transparent 0%,\r\n      rgba(0, 0, 0, 0.6) 30%,\r\n      rgba(0, 0, 0, 1) 90%\r\n    );\r\n  }\r\n\r\n  .card-image{\r\n      width: 100%;\r\n      height: 200px;\r\n  }\r\n\r\n/* .footer-row{\r\n    \r\n} */\r\n\r\n", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktZmFjZWJvb2siIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTE2IDguMDQ5YzAtNC40NDYtMy41ODItOC4wNS04LTguMDVDMy41OCAwLS4wMDIgMy42MDMtLjAwMiA4LjA1YzAgNC4wMTcgMi45MjYgNy4zNDcgNi43NSA3Ljk1MXYtNS42MjVoLTIuMDNWOC4wNUg2Ljc1VjYuMjc1YzAtMi4wMTcgMS4xOTUtMy4xMzEgMy4wMjItMy4xMzEuODc2IDAgMS43OTEuMTU3IDEuNzkxLjE1N3YxLjk4aC0xLjAwOWMtLjk5MyAwLTEuMzAzLjYyMS0xLjMwMyAxLjI1OHYxLjUxaDIuMjE4bC0uMzU0IDIuMzI2SDkuMjVWMTZjMy44MjQtLjYwNCA2Ljc1LTMuOTM0IDYuNzUtNy45NTF6Ii8+Cjwvc3ZnPg=="

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktd2hhdHNhcHAiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTEzLjYwMSAyLjMyNkE3Ljg1NCA3Ljg1NCAwIDAgMCA3Ljk5NCAwQzMuNjI3IDAgLjA2OCAzLjU1OC4wNjQgNy45MjZjMCAxLjM5OS4zNjYgMi43NiAxLjA1NyAzLjk2NUwwIDE2bDQuMjA0LTEuMTAyYTcuOTMzIDcuOTMzIDAgMCAwIDMuNzkuOTY1aC4wMDRjNC4zNjggMCA3LjkyNi0zLjU1OCA3LjkzLTcuOTNBNy44OTggNy44OTggMCAwIDAgMTMuNiAyLjMyNnpNNy45OTQgMTQuNTIxYTYuNTczIDYuNTczIDAgMCAxLTMuMzU2LS45MmwtLjI0LS4xNDQtMi40OTQuNjU0LjY2Ni0yLjQzMy0uMTU2LS4yNTFhNi41NiA2LjU2IDAgMCAxLTEuMDA3LTMuNTA1YzAtMy42MjYgMi45NTctNi41ODQgNi41OTEtNi41ODRhNi41NiA2LjU2IDAgMCAxIDQuNjYgMS45MzEgNi41NTcgNi41NTcgMCAwIDEgMS45MjggNC42NmMtLjAwNCAzLjYzOS0yLjk2MSA2LjU5Mi02LjU5MiA2LjU5MnptMy42MTUtNC45MzRjLS4xOTctLjA5OS0xLjE3LS41NzgtMS4zNTMtLjY0Ni0uMTgyLS4wNjUtLjMxNS0uMDk5LS40NDUuMDk5LS4xMzMuMTk3LS41MTMuNjQ2LS42MjcuNzc1LS4xMTQuMTMzLS4yMzIuMTQ4LS40My4wNS0uMTk3LS4xLS44MzYtLjMwOC0xLjU5Mi0uOTg1LS41OS0uNTI1LS45ODUtMS4xNzUtMS4xMDMtMS4zNzItLjExNC0uMTk4LS4wMTEtLjMwNC4wODgtLjQwMy4wODctLjA4OC4xOTctLjIzMi4yOTYtLjM0Ni4xLS4xMTQuMTMzLS4xOTguMTk4LS4zMy4wNjUtLjEzNC4wMzQtLjI0OC0uMDE1LS4zNDctLjA1LS4wOTktLjQ0NS0xLjA3Ni0uNjEyLTEuNDctLjE2LS4zODktLjMyMy0uMzM1LS40NDUtLjM0LS4xMTQtLjAwNy0uMjQ3LS4wMDctLjM4LS4wMDdhLjcyOS43MjkgMCAwIDAtLjUyOS4yNDdjLS4xODIuMTk4LS42OTEuNjc3LS42OTEgMS42NTQgMCAuOTc3LjcxIDEuOTE2LjgxIDIuMDQ5LjA5OC4xMzMgMS4zOTQgMi4xMzIgMy4zODMgMi45OTIuNDcuMjA1Ljg0LjMyNiAxLjEyOS40MTguNDc1LjE1Mi45MDQuMTI5IDEuMjQ2LjA4LjM4LS4wNTggMS4xNzEtLjQ4IDEuMzM4LS45NDMuMTY0LS40NjQuMTY0LS44Ni4xMTQtLjk0My0uMDQ5LS4wODQtLjE4Mi0uMTMzLS4zOC0uMjMyeiIvPgo8L3N2Zz4="

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktdHdpdHRlciIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4wMjYgMTVjNi4wMzggMCA5LjM0MS01LjAwMyA5LjM0MS05LjMzNCAwLS4xNCAwLS4yODItLjAwNi0uNDIyQTYuNjg1IDYuNjg1IDAgMCAwIDE2IDMuNTQyYTYuNjU4IDYuNjU4IDAgMCAxLTEuODg5LjUxOCAzLjMwMSAzLjMwMSAwIDAgMCAxLjQ0Ny0xLjgxNyA2LjUzMyA2LjUzMyAwIDAgMS0yLjA4Ny43OTNBMy4yODYgMy4yODYgMCAwIDAgNy44NzUgNi4wM2E5LjMyNSA5LjMyNSAwIDAgMS02Ljc2Ny0zLjQyOSAzLjI4OSAzLjI4OSAwIDAgMCAxLjAxOCA0LjM4MkEzLjMyMyAzLjMyMyAwIDAgMSAuNjQgNi41NzV2LjA0NWEzLjI4OCAzLjI4OCAwIDAgMCAyLjYzMiAzLjIxOCAzLjIwMyAzLjIwMyAwIDAgMS0uODY1LjExNSAzLjIzIDMuMjMgMCAwIDEtLjYxNC0uMDU3IDMuMjgzIDMuMjgzIDAgMCAwIDMuMDY3IDIuMjc3QTYuNTg4IDYuNTg4IDAgMCAxIC43OCAxMy41OGE2LjMyIDYuMzIgMCAwIDEtLjc4LS4wNDVBOS4zNDQgOS4zNDQgMCAwIDAgNS4wMjYgMTV6Ii8+Cjwvc3ZnPg=="

/***/ })
/******/ ]);
});