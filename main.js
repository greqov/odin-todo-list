/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background-color: #333;\n  color: #eee;\n  font-family: monospace;\n}\n\nbody {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\na {\n  color: skyblue;\n}\n\n.is-active {\n  color: tomato;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background-color: #333;\n  color: #eee;\n  font-family: monospace;\n}\n\nbody {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\na {\n  color: skyblue;\n}\n\n.is-active {\n  color: tomato;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/LocStorage.js":
/*!******************************!*\
  !*** ./src/js/LocStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function LocStorage() {
  //
}

LocStorage.prototype.save = function (obj) {
  const label = obj.constructor.name;
  const id = obj.id || '';
  localStorage.setItem(`${label}_${id}`, JSON.stringify(obj));
};

LocStorage.prototype.get = function (key) {
  return JSON.parse(localStorage.getItem(key));
};

LocStorage.prototype.remove = function (key) {
  localStorage.removeItem(key);
};

LocStorage.prototype.removeProject = function (key) {
  const keys = this.get(key).todos.map((id) => `Todo_${id}`);
  [...keys, key].forEach((k) => this.remove(k));
};

LocStorage.prototype.isEmpty = function () {
  return localStorage.length === 0;
};

// TODO: is it better to save manager, projects, todos separately?

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocStorage);


/***/ }),

/***/ "./src/js/Project.js":
/*!***************************!*\
  !*** ./src/js/Project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");




function Project(data) {
  // TODO: do I need to add todos param?
  const { id, title, todos } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_1__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  this.todos = todos || [];
}

Project.prototype.storage = null;

// TODO: it's not clear is it a Todo item or {}
Project.prototype.addTodo = function (todo_) {
  // TODO: do something with param reassignment
  let todo = todo_;
  // TODO: not sure about need of check for 'Todo' object
  // use in render new todo already so be aware!
  if (!(todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](todo);
  }
  this.todos.push(todo.id);
  // NOTE: need to add storage obj to proto!
  this.storage.save(todo);
  this.save();

  return todo.id;
};

Project.prototype.removeTodo = function (id) {
  this.todos = this.todos.filter((i) => i !== id);
  this.storage.remove(`Todo_${id}`);
  this.save();
};

Project.prototype.getRestoredTodo = function (id) {
  const obj = this.storage.get(`Todo_${id}`);
  return new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](obj);
};

// TODO: maybe avoid removing todo from storage?
// TODO: maybe pass projectId?
Project.prototype.moveTodo = function (todo, project) {
  console.warn('WARNING! .moveTodo() does not work yet!');
  this.removeTodo(todo.id);
  project.addTodo(todo);
};

Project.prototype.update = function (data) {
  Object.assign(this, data);
  this.save();
};

Project.prototype.save = function () {
  this.storage.save(this);
};

Project.prototype.loadData = function (json) {
  // TODO: do I need this check?
  // TODO: actually can handle array/object cases with
  // console.log(json.constructor.name) or json instanceof Array;
  try {
    json.forEach((item) => {
      this.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](item));
    });
  } catch (err) {
    console.warn('WARNING! Require an array of objects\n', err);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/js/ProjectsManager.js":
/*!***********************************!*\
  !*** ./src/js/ProjectsManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");


function ProjectsManager() {
  this.projects = [];
  this.defaultProject = null;
  this.currentProject = null;
}

ProjectsManager.prototype.storage = null;

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

ProjectsManager.prototype.addProject = function (id) {
  this.projects.push(id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (id) {
  if (id === this.defaultProject) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  if (id === this.currentProject) {
    this.setCurrentProject(this.defaultProject);
  }

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.getRestoredProject = function (id) {
  return new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](this.storage.get(`Project_${id}`));
};

ProjectsManager.prototype.setCurrentProject = function (id) {
  this.currentProject = id;
  this.save();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsManager);


/***/ }),

/***/ "./src/js/Todo.js":
/*!************************!*\
  !*** ./src/js/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");



function Todo(data) {
  const { id, title, dueDate, priority = 'low', complete } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_1__["default"])(title);
  this.dueDate = dueDate || new Date();
  this.priority = priority;
  this.complete = complete; // TODO: not sure (complete === 'on' was here)
}

Todo.prototype.save = function () {
  this.storage.save(this);
};

Todo.prototype.update = function (data) {
  // TODO: assume data doesn't have undefined values
  Object.assign(this, data);
  this.save();
};

// TODO: remove it?
Todo.prototype.toggle = function () {
  this.complete = !this.complete;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "./src/js/handlers.js");


function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
};

function replaceOldItem(container, id, template) {
  const oldItem = container.querySelector(`#${id}`);
  if (oldItem !== null) {
    oldItem.insertAdjacentHTML('afterend', template);
    oldItem.remove();
  } else {
    container.insertAdjacentHTML('beforeend', template);
  }
}

UI.prototype.renderProject = function (id) {
  const container = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const template = `
    <div id="${id}" class="js-project-item ${id === this.pm.currentProject ? 'is-active' : ''}">
      <span class="js-project-item-box">${title}</span>
      <button class="js-btn-project-edit" type="button">edit</button>
      <button class="js-btn-project-delete" type="button">delete</button>
    </div>`;
  // TODO: show todos count?

  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="${id}" class="js-todo-item" style="border-bottom: 1px solid;">
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>
        complete:
        <input type="checkbox" ${complete ? 'checked' : ''} class="js-todo-toggle" />
      </div>
      <div>
        <button class="js-btn-todo-edit" type="button">edit</button>
        <button class="js-btn-todo-delete" type="button">delete</button>
      </div>
    </div>
  `;

  // TODO: refactor render methods
  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.renderProjectTodos = function (projectId = this.pm.currentProject) {
  const data = this.storage.get(`Project_${projectId}`);
  data.todos.forEach((id) => {
    this.renderTodo(id);
  });
};

UI.prototype.addHandlers = function () {
  (0,_handlers__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handlers)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");



function handlers(ui) {
  const { pm, storage } = ui;

  function submitProjectForm(e) {
    e.preventDefault();
    let project;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    // NOTE: update OR create action
    if (data.id) {
      project = pm.getRestoredProject(data.id);
      project.update(data);
    } else {
      project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](data);
      pm.addProject(project.id);
    }

    project.save();
    form.reset();
    form.querySelector('[name="id"]').value = '';
    ui.renderProject(project.id);
  }

  function submitTodoForm(e) {
    e.preventDefault();
    let todo;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    data.complete = !!data.complete; // convert 'on' to true
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);

    // NOTE: update OR create action
    if (data.id) {
      todo = project.getRestoredTodo(data.id);
      todo.update(data);
    } else {
      todo = data;
    }

    const todoId = project.addTodo(todo);
    form.reset();
    form.querySelector('[name="id"]').value = '';
    form.querySelector('[name="complete"]').removeAttribute('checked');
    // TODO: avoid shaking storage 2 times! (on save, on render)
    ui.renderTodo(todoId);
  }

  // TODO: maybe add more precise dom node, not document?
  document.addEventListener('submit', (e) => {
    const { target: el } = e;

    if (el.classList.contains('js-form-add-project')) {
      submitProjectForm(e);
      return;
    }

    if (el.classList.contains('js-form-add-todo')) {
      submitTodoForm(e);
    }
  });

  function removeTodo(el) {
    const todoEl = el.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id;
    // 2. get project (hint: current project)
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
  }

  function editTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);

    const form = document.querySelector('.js-form-add-todo');
    // 2. populate form
    Object.entries(data).forEach(([key, value]) => {
      try {
        if (key !== 'complete') {
          form.querySelector(`[name="${key}"]`).value = value;
        } else {
          form.querySelector(`[name="${key}"]`).checked = value;
        }
      } catch (error) {
        console.warn(`Missing [name="${key}"] element\n`, error);
      }
    });
  }

  function toggleTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);
    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    const complete = el.checked;
    todo.update({ complete });
  }

  const todoList = document.querySelector('.js-todo-list');
  todoList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.classList.contains('js-btn-todo-delete')) {
      removeTodo(el);
    } else if (el.classList.contains('js-btn-todo-edit')) {
      editTodo(el);
    } else if (el.classList.contains('js-todo-toggle')) {
      toggleTodo(el);
    }
  });

  function removeProject(el) {
    const projectEl = el.closest('.js-project-item');
    const projectId = projectEl.id;
    pm.deleteProject(projectId);

    if (projectId !== pm.defaultProject) {
      projectEl.remove();
    }
  }

  function editProject(el) {
    const projectId = el.closest('.js-project-item').id;
    const data = storage.get(`Project_${projectId}`);
    const form = document.querySelector('.js-form-add-project');
    // TODO: add loop
    form.querySelector('[name="title"]').value = data.title;
    form.querySelector('[name="id"]').value = data.id;
  }

  function highlightProject(el) {
    const list = el.closest('.js-projects-list');
    const projectEl = el.closest('.js-project-item');
    try {
      list.querySelectorAll('.is-active')[0].classList.remove('is-active');
    } catch (error) {
      console.log(`INFO: There is no highlighted project\n`, error);
    }
    projectEl.classList.add('is-active');
    pm.setCurrentProject(projectEl.id);
  }

  const projectsList = document.querySelector('.js-projects-list');
  projectsList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.classList.contains('js-btn-project-delete')) {
      removeProject(el);
    } else if (el.classList.contains('js-btn-project-edit')) {
      editProject(el);
    } else if (el.classList.contains('js-project-item-box')) {
      highlightProject(el);
    }
  });
}


/***/ }),

/***/ "./src/js/utils/id.js":
/*!****************************!*\
  !*** ./src/js/utils/id.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const generateId = () => `a${s4()}-${s4()}-${s4()}`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateId);


/***/ }),

/***/ "./src/js/utils/trimStr.js":
/*!*********************************!*\
  !*** ./src/js/utils/trimStr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function trimStr(string = '', defaultValue = 'Untitled') {
  return string.trim().replace(/[<>/]/gi, '') || defaultValue;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimStr);


/***/ }),

/***/ "./src/js/data/archiveTodos.json":
/*!***************************************!*\
  !*** ./src/js/data/archiveTodos.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Look ma! No hands!","dueDate":"2022-02-03","priority":"low","complete":true},{"title":"Such archive todo","dueDate":"2022-02-11","priority":"low","complete":false}]');

/***/ }),

/***/ "./src/js/data/demoTodos.json":
/*!************************************!*\
  !*** ./src/js/data/demoTodos.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"The body is Round","dueDate":"2022-02-03","priority":"middle"},{"title":"Squash that cat","dueDate":"2022-02-08","priority":"middle"},{"title":"Look at this gentleman","dueDate":"2022-02-01","priority":"high"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsManager */ "./src/js/ProjectsManager.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _data_demoTodos_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/demoTodos.json */ "./src/js/data/demoTodos.json");
/* harmony import */ var _data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/archiveTodos.json */ "./src/js/data/archiveTodos.json");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");










const storage = (function initStorage() {
  // TODO: remove clear on load
  localStorage.clear();
  const storageEntity = new _LocStorage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  // TODO: is it a good idea?
  _Todo__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.storage = storageEntity;
  _Project__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.storage = storageEntity;
  _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.storage = storageEntity;
  return storageEntity;
})();

const projectsManager = (function initProjectsManager() {
  const pm = new _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const defautProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]({ title: 'Inbox' });
  defautProject.save();
  const { id } = defautProject;
  pm.defaultProject = id;
  pm.currentProject = id;
  pm.addProject(id);
  // ? add fn to populate storage
  defautProject.loadData(_data_demoTodos_json__WEBPACK_IMPORTED_MODULE_5__);
  // ? check localStorage for data, if so get it!
  return pm;
})();

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

const ui = new _UI__WEBPACK_IMPORTED_MODULE_4__["default"](projectsManager, storage);
ui.addHandlers();

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

const archiveProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]({ title: 'Archive' });
archiveProject.loadData(_data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_6__);
projectsManager.addProject(archiveProject.id);

ui.renderProjectTodos();

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsZ0RBQU8sR0FBRyxrQkFBa0I7QUFDdkQsd0JBQXdCLG9EQUFnQjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Mb2NTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvUHJvamVjdHNNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvaWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvdHJpbVN0ci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBza3libHVlO1xcbn1cXG5cXG4uaXMtYWN0aXZlIHtcXG4gIGNvbG9yOiB0b21hdG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHNreWJsdWU7XFxufVxcblxcbi5pcy1hY3RpdmUge1xcbiAgY29sb3I6IHRvbWF0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIExvY1N0b3JhZ2UoKSB7XG4gIC8vXG59XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGxhYmVsID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGNvbnN0IGlkID0gb2JqLmlkIHx8ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtsYWJlbH1fJHtpZH1gLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuICBjb25zdCBrZXlzID0gdGhpcy5nZXQoa2V5KS50b2Rvcy5tYXAoKGlkKSA9PiBgVG9kb18ke2lkfWApO1xuICBbLi4ua2V5cywga2V5XS5mb3JFYWNoKChrKSA9PiB0aGlzLnJlbW92ZShrKSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8vIFRPRE86IGlzIGl0IGJldHRlciB0byBzYXZlIG1hbmFnZXIsIHByb2plY3RzLCB0b2RvcyBzZXBhcmF0ZWx5P1xuXG5leHBvcnQgZGVmYXVsdCBMb2NTdG9yYWdlO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vdXRpbHMvaWQnO1xuaW1wb3J0IHRyaW1TdHIgZnJvbSAnLi91dGlscy90cmltU3RyJztcblxuZnVuY3Rpb24gUHJvamVjdChkYXRhKSB7XG4gIC8vIFRPRE86IGRvIEkgbmVlZCB0byBhZGQgdG9kb3MgcGFyYW0/XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB0b2RvcyB9ID0gZGF0YTtcblxuICB0aGlzLmlkID0gaWQgfHwgZ2VuZXJhdGVJZCgpO1xuICB0aGlzLnRpdGxlID0gdHJpbVN0cih0aXRsZSk7XG4gIHRoaXMudG9kb3MgPSB0b2RvcyB8fCBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IG51bGw7XG5cbi8vIFRPRE86IGl0J3Mgbm90IGNsZWFyIGlzIGl0IGEgVG9kbyBpdGVtIG9yIHt9XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG9fKSB7XG4gIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIHBhcmFtIHJlYXNzaWdubWVudFxuICBsZXQgdG9kbyA9IHRvZG9fO1xuICAvLyBUT0RPOiBub3Qgc3VyZSBhYm91dCBuZWVkIG9mIGNoZWNrIGZvciAnVG9kbycgb2JqZWN0XG4gIC8vIHVzZSBpbiByZW5kZXIgbmV3IHRvZG8gYWxyZWFkeSBzbyBiZSBhd2FyZSFcbiAgaWYgKCEodG9kbyBpbnN0YW5jZW9mIFRvZG8pKSB7XG4gICAgdG9kbyA9IG5ldyBUb2RvKHRvZG8pO1xuICB9XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvLmlkKTtcbiAgLy8gTk9URTogbmVlZCB0byBhZGQgc3RvcmFnZSBvYmogdG8gcHJvdG8hXG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRvZG8pO1xuICB0aGlzLnNhdmUoKTtcblxuICByZXR1cm4gdG9kby5pZDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpKSA9PiBpICE9PSBpZCk7XG4gIHRoaXMuc3RvcmFnZS5yZW1vdmUoYFRvZG9fJHtpZH1gKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5nZXRSZXN0b3JlZFRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3Qgb2JqID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICByZXR1cm4gbmV3IFRvZG8ob2JqKTtcbn07XG5cbi8vIFRPRE86IG1heWJlIGF2b2lkIHJlbW92aW5nIHRvZG8gZnJvbSBzdG9yYWdlP1xuLy8gVE9ETzogbWF5YmUgcGFzcyBwcm9qZWN0SWQ/XG5Qcm9qZWN0LnByb3RvdHlwZS5tb3ZlVG9kbyA9IGZ1bmN0aW9uICh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnNvbGUud2FybignV0FSTklORyEgLm1vdmVUb2RvKCkgZG9lcyBub3Qgd29yayB5ZXQhJyk7XG4gIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmlkKTtcbiAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmxvYWREYXRhID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgLy8gVE9ETzogZG8gSSBuZWVkIHRoaXMgY2hlY2s/XG4gIC8vIFRPRE86IGFjdHVhbGx5IGNhbiBoYW5kbGUgYXJyYXkvb2JqZWN0IGNhc2VzIHdpdGhcbiAgLy8gY29uc29sZS5sb2coanNvbi5jb25zdHJ1Y3Rvci5uYW1lKSBvciBqc29uIGluc3RhbmNlb2YgQXJyYXk7XG4gIHRyeSB7XG4gICAganNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLmFkZFRvZG8obmV3IFRvZG8oaXRlbSkpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkchIFJlcXVpcmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1xcbicsIGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuXG5mdW5jdGlvbiBQcm9qZWN0c01hbmFnZXIoKSB7XG4gIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IG51bGw7XG4gIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xufVxuXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLnN0b3JhZ2UgPSBudWxsO1xuXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRoaXMpO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5hZGRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRoaXMucHJvamVjdHMucHVzaChpZCk7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuLy8gVE9ETzogYWRkIHdhcm5pbmcgYWJvdXQgZGVsZXRpbmcge259IHRvZG8gaXRlbXNcblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoaWQgPT09IHRoaXMuZGVmYXVsdFByb2plY3QpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IENhbm5vdCBkZWxldGUgZGVmYXVsdCBwcm9qZWN0Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlkID09PSB0aGlzLmN1cnJlbnRQcm9qZWN0KSB7XG4gICAgdGhpcy5zZXRDdXJyZW50UHJvamVjdCh0aGlzLmRlZmF1bHRQcm9qZWN0KTtcbiAgfVxuXG4gIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigoaSkgPT4gaSAhPT0gaWQpO1xuICB0aGlzLnNhdmUoKTtcblxuICB0aGlzLnN0b3JhZ2UucmVtb3ZlUHJvamVjdChgUHJvamVjdF8ke2lkfWApO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZXN0b3JlZFByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0KHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtpZH1gKSk7XG59O1xuXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLnNldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRoaXMuY3VycmVudFByb2plY3QgPSBpZDtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c01hbmFnZXI7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL3V0aWxzL2lkJztcbmltcG9ydCB0cmltU3RyIGZyb20gJy4vdXRpbHMvdHJpbVN0cic7XG5cbmZ1bmN0aW9uIFRvZG8oZGF0YSkge1xuICBjb25zdCB7IGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnbG93JywgY29tcGxldGUgfSA9IGRhdGE7XG5cbiAgdGhpcy5pZCA9IGlkIHx8IGdlbmVyYXRlSWQoKTtcbiAgdGhpcy50aXRsZSA9IHRyaW1TdHIodGl0bGUpO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8IG5ldyBEYXRlKCk7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlOyAvLyBUT0RPOiBub3Qgc3VyZSAoY29tcGxldGUgPT09ICdvbicgd2FzIGhlcmUpXG59XG5cblRvZG8ucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRoaXMpO1xufTtcblxuVG9kby5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgLy8gVE9ETzogYXNzdW1lIGRhdGEgZG9lc24ndCBoYXZlIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG4vLyBUT0RPOiByZW1vdmUgaXQ/XG5Ub2RvLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgaGFuZGxlcnMgZnJvbSAnLi9oYW5kbGVycyc7XG5cbmZ1bmN0aW9uIFVJKHBtLCBzdG9yYWdlKSB7XG4gIC8vIFRPRE86IG1heWJlIGJldHRlciBwYXNzIHN0b3JhZ2U/IERvIEkgbmVlZCBwbT9cbiAgdGhpcy5wbSA9IHBtOyAvLyBkYW1uIVxuICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xufVxuXG5VSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQgZm4nKTtcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VPbGRJdGVtKGNvbnRhaW5lciwgaWQsIHRlbXBsYXRlKSB7XG4gIGNvbnN0IG9sZEl0ZW0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gIGlmIChvbGRJdGVtICE9PSBudWxsKSB7XG4gICAgb2xkSXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgdGVtcGxhdGUpO1xuICAgIG9sZEl0ZW0ucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICB9XG59XG5cblVJLnByb3RvdHlwZS5yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtpZH1gKTtcbiAgLy8gVE9ETzogZ2V0IGlkLCB0aXRsZVxuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLXByb2plY3QtaXRlbSAke2lkID09PSB0aGlzLnBtLmN1cnJlbnRQcm9qZWN0ID8gJ2lzLWFjdGl2ZScgOiAnJ31cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwianMtcHJvamVjdC1pdGVtLWJveFwiPiR7dGl0bGV9PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWVkaXRcIiB0eXBlPVwiYnV0dG9uXCI+ZWRpdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWRlbGV0ZVwiIHR5cGU9XCJidXR0b25cIj5kZWxldGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuICAvLyBUT0RPOiBzaG93IHRvZG9zIGNvdW50P1xuXG4gIC8vIHJlcGxhY2Ugb2xkIHByb2plY3Qgbm9kZSBvbiAnZWRpdC91cGRhdGUnIGFjdGlvblxuICByZXBsYWNlT2xkSXRlbShjb250YWluZXIsIGlkLCB0ZW1wbGF0ZSk7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyVG9kbyA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9kby1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSB9ID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLXRvZG8taXRlbVwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1wiPlxuICAgICAgPGRpdj4ke3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke2R1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PnByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgY29tcGxldGU6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke2NvbXBsZXRlID8gJ2NoZWNrZWQnIDogJyd9IGNsYXNzPVwianMtdG9kby10b2dnbGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtYnRuLXRvZG8tZWRpdFwiIHR5cGU9XCJidXR0b25cIj5lZGl0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJqcy1idG4tdG9kby1kZWxldGVcIiB0eXBlPVwiYnV0dG9uXCI+ZGVsZXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICAvLyBUT0RPOiByZWZhY3RvciByZW5kZXIgbWV0aG9kc1xuICAvLyByZXBsYWNlIG9sZCBwcm9qZWN0IG5vZGUgb24gJ2VkaXQvdXBkYXRlJyBhY3Rpb25cbiAgcmVwbGFjZU9sZEl0ZW0oY29udGFpbmVyLCBpZCwgdGVtcGxhdGUpO1xufTtcblxuVUkucHJvdG90eXBlLnJlbmRlclByb2plY3RUb2RvcyA9IGZ1bmN0aW9uIChwcm9qZWN0SWQgPSB0aGlzLnBtLmN1cnJlbnRQcm9qZWN0KSB7XG4gIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7cHJvamVjdElkfWApO1xuICBkYXRhLnRvZG9zLmZvckVhY2goKGlkKSA9PiB7XG4gICAgdGhpcy5yZW5kZXJUb2RvKGlkKTtcbiAgfSk7XG59O1xuXG5VSS5wcm90b3R5cGUuYWRkSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGhhbmRsZXJzKHRoaXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcnModWkpIHtcbiAgY29uc3QgeyBwbSwgc3RvcmFnZSB9ID0gdWk7XG5cbiAgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdDtcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QoZGF0YS5pZCk7XG4gICAgICBwcm9qZWN0LnVwZGF0ZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGEpO1xuICAgICAgcG0uYWRkUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0LnNhdmUoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSAnJztcbiAgICB1aS5yZW5kZXJQcm9qZWN0KHByb2plY3QuaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0VG9kb0Zvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG9kbztcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcbiAgICBkYXRhLmNvbXBsZXRlID0gISFkYXRhLmNvbXBsZXRlOyAvLyBjb252ZXJ0ICdvbicgdG8gdHJ1ZVxuICAgIGNvbnN0IHByb2plY3RJZCA9IHBtLmN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QocHJvamVjdElkKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHRvZG8gPSBwcm9qZWN0LmdldFJlc3RvcmVkVG9kbyhkYXRhLmlkKTtcbiAgICAgIHRvZG8udXBkYXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvID0gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvSWQgPSBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gJyc7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbXBsZXRlXCJdJykucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgLy8gVE9ETzogYXZvaWQgc2hha2luZyBzdG9yYWdlIDIgdGltZXMhIChvbiBzYXZlLCBvbiByZW5kZXIpXG4gICAgdWkucmVuZGVyVG9kbyh0b2RvSWQpO1xuICB9XG5cbiAgLy8gVE9ETzogbWF5YmUgYWRkIG1vcmUgcHJlY2lzZSBkb20gbm9kZSwgbm90IGRvY3VtZW50P1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiBlbCB9ID0gZTtcblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWZvcm0tYWRkLXByb2plY3QnKSkge1xuICAgICAgc3VibWl0UHJvamVjdEZvcm0oZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybS1hZGQtdG9kbycpKSB7XG4gICAgICBzdWJtaXRUb2RvRm9ybShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvRWwgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJyk7XG4gICAgLy8gMS4gZ2V0IHRvZG8gaWRcbiAgICBjb25zdCB0b2RvSWQgPSB0b2RvRWwuaWQ7XG4gICAgLy8gMi4gZ2V0IHByb2plY3QgKGhpbnQ6IGN1cnJlbnQgcHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwbS5jdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcG0uZ2V0UmVzdG9yZWRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgLy8gMy4gZGVsZXRlIHRvZG8gZnJvbSBwcm9qZWN0XG4gICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XG4gICAgLy8gNC4gdXBkYXRlIFVJXG4gICAgdG9kb0VsLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvSWQgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJykuaWQ7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JhZ2UuZ2V0KGBUb2RvXyR7dG9kb0lkfWApO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtLWFkZC10b2RvJyk7XG4gICAgLy8gMi4gcG9wdWxhdGUgZm9ybVxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2tleX1cIl1gKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2tleX1cIl1gKS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTWlzc2luZyBbbmFtZT1cIiR7a2V5fVwiXSBlbGVtZW50XFxuYCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVG9kbyhlbCkge1xuICAgIGNvbnN0IHRvZG9JZCA9IGVsLmNsb3Nlc3QoJy5qcy10b2RvLWl0ZW0nKS5pZDtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoYFRvZG9fJHt0b2RvSWR9YCk7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGRhdGEpO1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZWwuY2hlY2tlZDtcbiAgICB0b2RvLnVwZGF0ZSh7IGNvbXBsZXRlIH0pO1xuICB9XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9kby1saXN0Jyk7XG4gIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldDogZWwgfSA9IGU7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnanMtYnRuLXRvZG8tZGVsZXRlJykpIHtcbiAgICAgIHJlbW92ZVRvZG8oZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1idG4tdG9kby1lZGl0JykpIHtcbiAgICAgIGVkaXRUb2RvKGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnanMtdG9kby10b2dnbGUnKSkge1xuICAgICAgdG9nZ2xlVG9kbyhlbCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGVsKSB7XG4gICAgY29uc3QgcHJvamVjdEVsID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RFbC5pZDtcbiAgICBwbS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG5cbiAgICBpZiAocHJvamVjdElkICE9PSBwbS5kZWZhdWx0UHJvamVjdCkge1xuICAgICAgcHJvamVjdEVsLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGVsKSB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpLmlkO1xuICAgIGNvbnN0IGRhdGEgPSBzdG9yYWdlLmdldChgUHJvamVjdF8ke3Byb2plY3RJZH1gKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0tYWRkLXByb2plY3QnKTtcbiAgICAvLyBUT0RPOiBhZGQgbG9vcFxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlID0gZGF0YS50aXRsZTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZSA9IGRhdGEuaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KGVsKSB7XG4gICAgY29uc3QgbGlzdCA9IGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEVsID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpO1xuICAgIHRyeSB7XG4gICAgICBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1hY3RpdmUnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coYElORk86IFRoZXJlIGlzIG5vIGhpZ2hsaWdodGVkIHByb2plY3RcXG5gLCBlcnJvcik7XG4gICAgfVxuICAgIHByb2plY3RFbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBwbS5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0RWwuaWQpO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByb2plY3RzLWxpc3QnKTtcbiAgcHJvamVjdHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldDogZWwgfSA9IGU7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnanMtYnRuLXByb2plY3QtZGVsZXRlJykpIHtcbiAgICAgIHJlbW92ZVByb2plY3QoZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1idG4tcHJvamVjdC1lZGl0JykpIHtcbiAgICAgIGVkaXRQcm9qZWN0KGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnanMtcHJvamVjdC1pdGVtLWJveCcpKSB7XG4gICAgICBoaWdobGlnaHRQcm9qZWN0KGVsKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgczQgPSAoKSA9PlxuICBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc3Vic3RyaW5nKDEpO1xuXG5jb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4gYGEke3M0KCl9LSR7czQoKX0tJHtzNCgpfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSWQ7XG4iLCJmdW5jdGlvbiB0cmltU3RyKHN0cmluZyA9ICcnLCBkZWZhdWx0VmFsdWUgPSAnVW50aXRsZWQnKSB7XG4gIHJldHVybiBzdHJpbmcudHJpbSgpLnJlcGxhY2UoL1s8Pi9dL2dpLCAnJykgfHwgZGVmYXVsdFZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmltU3RyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBMb2NTdG9yYWdlIGZyb20gJy4vTG9jU3RvcmFnZSc7XG5pbXBvcnQgUHJvamVjdHNNYW5hZ2VyIGZyb20gJy4vUHJvamVjdHNNYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuaW1wb3J0IGRlbW9Ub2Rvc0RhdGEgZnJvbSAnLi9kYXRhL2RlbW9Ub2Rvcy5qc29uJztcbmltcG9ydCBhcmNoaXZlVG9kb3NEYXRhIGZyb20gJy4vZGF0YS9hcmNoaXZlVG9kb3MuanNvbic7XG5cbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uIGluaXRTdG9yYWdlKCkge1xuICAvLyBUT0RPOiByZW1vdmUgY2xlYXIgb24gbG9hZFxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29uc3Qgc3RvcmFnZUVudGl0eSA9IG5ldyBMb2NTdG9yYWdlKCk7XG4gIC8vIFRPRE86IGlzIGl0IGEgZ29vZCBpZGVhP1xuICBUb2RvLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZUVudGl0eTtcbiAgUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIFByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIHJldHVybiBzdG9yYWdlRW50aXR5O1xufSkoKTtcblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKGZ1bmN0aW9uIGluaXRQcm9qZWN0c01hbmFnZXIoKSB7XG4gIGNvbnN0IHBtID0gbmV3IFByb2plY3RzTWFuYWdlcigpO1xuICBjb25zdCBkZWZhdXRQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0luYm94JyB9KTtcbiAgZGVmYXV0UHJvamVjdC5zYXZlKCk7XG4gIGNvbnN0IHsgaWQgfSA9IGRlZmF1dFByb2plY3Q7XG4gIHBtLmRlZmF1bHRQcm9qZWN0ID0gaWQ7XG4gIHBtLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHBtLmFkZFByb2plY3QoaWQpO1xuICAvLyA/IGFkZCBmbiB0byBwb3B1bGF0ZSBzdG9yYWdlXG4gIGRlZmF1dFByb2plY3QubG9hZERhdGEoZGVtb1RvZG9zRGF0YSk7XG4gIC8vID8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBkYXRhLCBpZiBzbyBnZXQgaXQhXG4gIHJldHVybiBwbTtcbn0pKCk7XG5cbi8vIFRPRE86IG9uIGFkZCB0b2RvIGNoZWNrIGlzIHRoZXJlIGFueSBwcm9qZWN0IChjcmVhdGUgZGVmYXVsdCBvbmUgdGhlbiEpXG4vLyBUT0RPOiBjcmVhdGUgc2FuZSBpbml0KCkgZm4/XG5cbmNvbnN0IHVpID0gbmV3IFVJKHByb2plY3RzTWFuYWdlciwgc3RvcmFnZSk7XG51aS5hZGRIYW5kbGVycygpO1xuXG4vLyBUT0RPOiBhdXRvIGFkZCB0b2RvIHRvIHByb2plY3Qgb24gY3JlYXRlXG4vLyBUT0RPOiBzYXZlIHByb2plY3QgaW1tZWRpYXRlbHkgYWZ0ZXIgY3JlYXRpb24/XG5cbmNvbnN0IGFyY2hpdmVQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0FyY2hpdmUnIH0pO1xuYXJjaGl2ZVByb2plY3QubG9hZERhdGEoYXJjaGl2ZVRvZG9zRGF0YSk7XG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChhcmNoaXZlUHJvamVjdC5pZCk7XG5cbnVpLnJlbmRlclByb2plY3RUb2RvcygpO1xuXG5wcm9qZWN0c01hbmFnZXIucHJvamVjdHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgdWkucmVuZGVyUHJvamVjdChpZCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==