"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function ajaxData(_ref) {
    var _ref$url = _ref.url,
        url = _ref$url === void 0 ? "" : _ref$url,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? "get" : _ref$type,
        data = _ref.data,
        rest = _objectWithoutProperties(_ref, ["url", "type", "data"]);

    return new Promise(function (resolve, reject) {
      if (!url) throw new Error("request url must be valid");
      $.ajax(_objectSpread({
        url: url,
        type: type.toUpperCase(),
        data: data
      }, rest, {
        success: function success(res) {
          resolve(res);
        },
        error: function error(err) {
          var error = new Error(err.statusText || err.status);
          reject(error);
          throw error;
        }
      }));
    }).catch(function (err) {
      swal({
        text: err.message,
        icon: "error"
      });
    });
  }

  function throttle(fn, delay) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          return timer = null;
        }, delay);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn && fn.apply(this, args);
      }
    };
  }

  _export("ajaxData", ajaxData);

  _export("throttle", throttle);

  return {
    setters: [],
    execute: function () {}
  };
});