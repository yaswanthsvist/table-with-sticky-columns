(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("chargebee", ["React"], factory);
	else if(typeof exports === 'object')
		exports["chargebee"] = factory(require("react"));
	else
		root["chargebee"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/table/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/table/styles.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"table {\\n  display: block;\\n  overflow: scroll;\\n  height: 100%;\\n  width: 100%;\\n  border-spacing: 0;\\n}\\nthead tr th,\\ntbody tr td,\\ntbody tr th {\\n  white-space: nowrap;\\n  background-color: #fefefe;\\n  padding: 5px;\\n  border-bottom: 1px solid #888;\\n}\\ntr.emptyCelles td {\\n  padding: 5px;\\n  height: 32px;\\n}\\n\\n.empty-cell {\\n  background-color: #ddd;\\n  height: 100%;\\n  border-radius: 32px;\\n}\\n.sticky-item {\\n  position: sticky;\\n  left: 0;\\n  border-right: 1px solid #888;\\n  background-color: #efefef;\\n  border-left: 1px solid #888;\\n}\\n.sticky-header th {\\n  position: sticky;\\n  top: 0;\\n  z-index: 1;\\n  border-bottom: 1px solid #888;\\n}\\nth.sticky-item {\\n  z-index: 2;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://chargebee/./src/table/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://chargebee/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction addModulesToDom(id, list, options) {\n  id = options.base ? id + options.base : id;\n\n  if (!stylesInDom[id]) {\n    stylesInDom[id] = [];\n  }\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var part = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n    var styleInDomById = stylesInDom[id];\n\n    if (styleInDomById[i]) {\n      styleInDomById[i].updater(part);\n    } else {\n      styleInDomById.push({\n        updater: addStyle(part, options)\n      });\n    }\n  }\n\n  for (var j = list.length; j < stylesInDom[id].length; j++) {\n    stylesInDom[id][j].updater();\n  }\n\n  stylesInDom[id].length = list.length;\n\n  if (stylesInDom[id].length === 0) {\n    delete stylesInDom[id];\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (id, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  addModulesToDom(id, list, options);\n  return function update(newList) {\n    addModulesToDom(id, newList || [], options);\n  };\n};\n\n//# sourceURL=webpack://chargebee/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _table_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/table */ \"./src/table/table.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Table\", function() { return _table_table__WEBPACK_IMPORTED_MODULE_1__[\"Table\"]; });\n\n\n\n\n//# sourceURL=webpack://chargebee/./src/index.js?");

/***/ }),

/***/ "./src/table/styles.css":
/*!******************************!*\
  !*** ./src/table/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/table/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../../node_modules/css-loader/dist/cjs.js!./styles.css\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://chargebee/./src/table/styles.css?");

/***/ }),

/***/ "./src/table/table.js":
/*!****************************!*\
  !*** ./src/table/table.js ***!
  \****************************/
/*! exports provided: TableHeader, TableBody, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableHeader\", function() { return TableHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableBody\", function() { return TableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Table\", function() { return Table; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/table/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LEFT_BORDER = 1;\nconst TableHeader = ({\n  stickyHeader,\n  header,\n  stickyColumns\n}) => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n    className: stickyHeader && 'sticky-header'\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, header.map((cell, coulumnIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    key: coulumnIndex,\n    \"data-column-id\": coulumnIndex,\n    className: stickyColumns[coulumnIndex] ? 'sticky-item' : '',\n    style: stickyColumns[coulumnIndex] ? {\n      left: stickyColumns[coulumnIndex].left\n    } : {}\n  }, cell))));\n};\nconst TableBody = ({\n  rows = [],\n  stickyColumns = {},\n  emptyRows = [],\n  extraRows = []\n}) => {\n  const allRows = [...rows, ...extraRows];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, allRows.map((row, rowIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    key: rowIndex\n  }, row.map((cell, columnIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    key: columnIndex,\n    className: stickyColumns[columnIndex] ? 'sticky-item' : '',\n    style: stickyColumns[columnIndex] ? {\n      left: stickyColumns[columnIndex].left\n    } : {}\n  }, cell)))), emptyRows.map((row, rowIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"emptyCelles\",\n    key: 'empty' + rowIndex\n  }, row.map((cell, columnIndex) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: stickyColumns[columnIndex] ? 'sticky-item' : '',\n    style: stickyColumns[columnIndex] ? {\n      left: stickyColumns[columnIndex].left\n    } : {},\n    key: 'empty' + columnIndex\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"empty-cell\"\n  }))))));\n};\nconst Table = ({\n  tableData,\n  extraRows,\n  onHitScrollBottom\n}) => {\n  const {\n    stickyColumns: stickColumnProps,\n    rows,\n    emptyRows\n  } = tableData;\n  const [stickyColumns, setStickyColumns] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(stickColumnProps || {});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const list = document.querySelectorAll('thead th.sticky-item');\n    let left = 0;\n    list && Object.keys(list).map(key => {\n      const node = list[key];\n      const {\n        attributes\n      } = node;\n      const columnId = attributes['data-column-id'].value;\n      const bounds = node.getBoundingClientRect();\n      stickyColumns[columnId].left = left;\n      left += bounds.width - LEFT_BORDER;\n    });\n    setStickyColumns({ ...stickyColumns\n    });\n  }, [stickColumnProps]);\n\n  const onScroll = e => {\n    const {\n      scrollHeight,\n      clientHeight,\n      scrollTop\n    } = e.target;\n\n    if (scrollHeight <= clientHeight + scrollTop + 80) {\n      if (onHitScrollBottom) onHitScrollBottom();\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"custom-table\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    onScroll: onScroll\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableHeader, {\n    stickyHeader: true,\n    header: rows[0],\n    stickyColumns: stickyColumns\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableBody, {\n    stickyColumns: stickyColumns,\n    rows: rows.slice(1),\n    emptyRows: emptyRows,\n    extraRows: extraRows\n  })));\n};\n\n//# sourceURL=webpack://chargebee/./src/table/table.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://chargebee/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?");

/***/ })

/******/ });
});