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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background-color: #333;\n  color: #eee;\n  font-family: monospace;\n}\n\nbody {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\na {\n  color: skyblue;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  background-color: #333;\n  color: #eee;\n  font-family: monospace;\n}\n\nbody {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\na {\n  color: skyblue;\n}\n"],"sourceRoot":""}]);
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
  if (this.defaultProject === id) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  // TODO: update this.currentProject on deleteting current project.

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.getRestoredProject = function (id) {
  return new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](this.storage.get(`Project_${id}`));
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



// TODO: not sure about passing id
function Todo(data) {
  const { id, title, dueDate, priority = 'low', complete } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_1__["default"])(title);
  this.dueDate = dueDate || new Date();
  this.priority = priority;
  this.complete = complete === 'on';
}

// TODO: add save (to storage) method too?

Todo.prototype.update = function (data) {
  // TODO: assume data doesn't have undefined values
  Object.assign(this, data);
};

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
function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
};

UI.prototype.renderProject = function (id) {
  const container = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const template = `
    <div id="${id}" class="js-project-item">
      <span>${title}</span>
      <button class="js-btn-project-edit" type="button">edit</button>
      <button class="js-btn-project-delete" type="button">delete</button>
    </div>`;
  // TODO: show todos count?

  try {
    // delete old project element on 'edit/update' action
    const oldItem = container.querySelector(`#${id}`);
    if (oldItem !== null) oldItem.remove();
  } catch (error) {
    console.log(error);
  }

  // TODO: place on top maybe?
  container.insertAdjacentHTML('beforeend', template);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="${id}" class="js-todo-item" style="border-bottom: 1px solid;">
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>complete: ${complete}</div>
      <div>
        <button class="js-btn-todo-edit" type="button">edit</button>
        <button class="js-btn-todo-delete" type="button">delete</button>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', template);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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

module.exports = JSON.parse('[{"title":"Look ma! No hands!","dueDate":"2022-02-03","priority":"low"},{"title":"Such archive todo","dueDate":"2022-02-11","priority":"low"}]');

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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _data_demoTodos_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/demoTodos.json */ "./src/js/data/demoTodos.json");
/* harmony import */ var _data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/archiveTodos.json */ "./src/js/data/archiveTodos.json");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");



// import Todo from './Todo';






const storage = (function initStorage() {
  // TODO: remove clear on load
  localStorage.clear();
  const storageEntity = new _LocStorage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  // TODO: is it a good idea?
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
  defautProject.loadData(_data_demoTodos_json__WEBPACK_IMPORTED_MODULE_4__);
  // ? check localStorage for data, if so get it!
  return pm;
})();

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

const ui = new _UI__WEBPACK_IMPORTED_MODULE_3__["default"](projectsManager, storage);

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

const archiveProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]({ title: 'Archive' });
archiveProject.loadData(_data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_5__);
projectsManager.addProject(archiveProject.id);

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});

function submitProjectForm(e) {
  e.preventDefault();
  let project = {};
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());

  // NOTE: update OR create action
  if (data.id) {
    project = projectsManager.getRestoredProject(data.id);
    project.update(data);
  } else {
    project = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"](data);
    projectsManager.addProject(project.id);
  }

  project.save();
  form.reset();
  form.querySelector('[name="id"]').value = '';
  ui.renderProject(project.id);
}

// TODO: maybe add more precise dom node, not document?
document.addEventListener('submit', (e) => {
  console.log('submit action');
  const { target } = e;

  if (target.classList.contains('js-form-add-project')) {
    submitProjectForm(e);
    return;
  }

  if (target.classList.contains('js-form-add-todo')) {
    e.preventDefault();
    const form = target;
    const data = Object.fromEntries(new FormData(form).entries());
    form.reset();
    // TODO: add todo to project
    const projectId = projectsManager.currentProject;
    const project = ui.pm.getRestoredProject(projectId);
    const todoId = project.addTodo(data);
    // TODO: avoid shaking storage 2 times! (on save, on render)
    ui.renderTodo(todoId);
  }
});

const todoList = document.querySelector('.js-todo-list');
todoList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-todo-delete')) {
    console.log('do delete action');
    const todoEl = target.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id;
    // 2. get project (hint: current project)
    const projectId = ui.pm.currentProject;
    const project = ui.pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
  } else if (target.classList.contains('js-btn-todo-edit')) {
    console.log('do edit action');
  }
});

const projectsList = document.querySelector('.js-projects-list');
projectsList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-project-delete')) {
    console.log('do delete project action!');
    const projectEl = target.closest('.js-project-item');
    const projectId = projectEl.id;
    // TODO: I don't like ui.pm
    ui.pm.deleteProject(projectId);

    if (projectId !== ui.pm.defaultProject) {
      projectEl.remove();
    }
  } else if (target.classList.contains('js-btn-project-edit')) {
    // 1. get project details
    const projectId = target.closest('.js-project-item').id;
    const data = storage.get(`Project_${projectId}`);
    const form = document.querySelector('.js-form-add-project');
    // TODO: add loop
    form.querySelector('[name="title"]').value = data.title;
    form.querySelector('[name="id"]').value = data.id;
    // 2. TODO: show form with populated data (in modal?)
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLFVBQVUsMkJBQTJCLGdCQUFnQiwyQkFBMkIsR0FBRyxVQUFVLHFCQUFxQixtQkFBbUIsb0JBQW9CLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxTQUFTLHFGQUFxRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsNkJBQTZCLDJCQUEyQixHQUFHLFVBQVUsMkJBQTJCLGdCQUFnQiwyQkFBMkIsR0FBRyxVQUFVLHFCQUFxQixtQkFBbUIsb0JBQW9CLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxxQkFBcUI7QUFDenVCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLEdBQUcsR0FBRztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELEdBQUc7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDVTtBQUNFOztBQUV0QztBQUNBO0FBQ0EsVUFBVSxtQkFBbUI7O0FBRTdCLGtCQUFrQixxREFBVTtBQUM1QixlQUFlLDBEQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCLGVBQWUsNkNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsR0FBRztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0IsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEVTOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsR0FBRztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLEdBQUc7QUFDM0M7O0FBRUE7QUFDQSxhQUFhLGdEQUFPLDZCQUE2QixHQUFHO0FBQ3BEOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0s7QUFDRTs7QUFFdEM7QUFDQTtBQUNBLFVBQVUsaURBQWlEOztBQUUzRCxrQkFBa0IscURBQVU7QUFDNUIsZUFBZSwwREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnBCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsUUFBUSw4QkFBOEIsR0FBRztBQUNuRDtBQUNBO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELEdBQUc7QUFDbkQ7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUscUNBQXFDLDJCQUEyQixHQUFHO0FBQzdFO0FBQ0EsZUFBZSxHQUFHLHVEQUF1RDtBQUN6RSxhQUFhLE1BQU07QUFDbkIsYUFBYSxRQUFRO0FBQ3JCLHVCQUF1QixTQUFTO0FBQ2hDLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwRGxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUs7O0FBRWxELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUDFCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0p2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1U7QUFDaEI7QUFDaEM7QUFDc0I7QUFDNEI7QUFDTTs7QUFFN0I7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBVTtBQUN0QztBQUNBLEVBQUUsa0VBQXlCO0FBQzNCLEVBQUUsMEVBQWlDO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQix3REFBZTtBQUNoQyw0QkFBNEIsZ0RBQU8sR0FBRyxnQkFBZ0I7QUFDdEQ7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBYTtBQUN0QztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLGVBQWUsMkNBQUU7O0FBRWpCO0FBQ0E7O0FBRUEsMkJBQTJCLGdEQUFPLEdBQUcsa0JBQWtCO0FBQ3ZELHdCQUF3QixvREFBZ0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQkFBa0IsZ0RBQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsVUFBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvTG9jU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1Byb2plY3RzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Ub2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL2lkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL3RyaW1TdHIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNlZWU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogc2t5Ymx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6ICNlZWU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogc2t5Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIExvY1N0b3JhZ2UoKSB7XG4gIC8vXG59XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGxhYmVsID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGNvbnN0IGlkID0gb2JqLmlkIHx8ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtsYWJlbH1fJHtpZH1gLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuICBjb25zdCBrZXlzID0gdGhpcy5nZXQoa2V5KS50b2Rvcy5tYXAoKGlkKSA9PiBgVG9kb18ke2lkfWApO1xuICBbLi4ua2V5cywga2V5XS5mb3JFYWNoKChrKSA9PiB0aGlzLnJlbW92ZShrKSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8vIFRPRE86IGlzIGl0IGJldHRlciB0byBzYXZlIG1hbmFnZXIsIHByb2plY3RzLCB0b2RvcyBzZXBhcmF0ZWx5P1xuXG5leHBvcnQgZGVmYXVsdCBMb2NTdG9yYWdlO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vdXRpbHMvaWQnO1xuaW1wb3J0IHRyaW1TdHIgZnJvbSAnLi91dGlscy90cmltU3RyJztcblxuZnVuY3Rpb24gUHJvamVjdChkYXRhKSB7XG4gIC8vIFRPRE86IGRvIEkgbmVlZCB0byBhZGQgdG9kb3MgcGFyYW0/XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB0b2RvcyB9ID0gZGF0YTtcblxuICB0aGlzLmlkID0gaWQgfHwgZ2VuZXJhdGVJZCgpO1xuICB0aGlzLnRpdGxlID0gdHJpbVN0cih0aXRsZSk7XG4gIHRoaXMudG9kb3MgPSB0b2RvcyB8fCBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IG51bGw7XG5cbi8vIFRPRE86IGl0J3Mgbm90IGNsZWFyIGlzIGl0IGEgVG9kbyBpdGVtIG9yIHt9XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG9fKSB7XG4gIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIHBhcmFtIHJlYXNzaWdubWVudFxuICBsZXQgdG9kbyA9IHRvZG9fO1xuICAvLyBUT0RPOiBub3Qgc3VyZSBhYm91dCBuZWVkIG9mIGNoZWNrIGZvciAnVG9kbycgb2JqZWN0XG4gIC8vIHVzZSBpbiByZW5kZXIgbmV3IHRvZG8gYWxyZWFkeSBzbyBiZSBhd2FyZSFcbiAgaWYgKCEodG9kbyBpbnN0YW5jZW9mIFRvZG8pKSB7XG4gICAgdG9kbyA9IG5ldyBUb2RvKHRvZG8pO1xuICB9XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvLmlkKTtcbiAgLy8gTk9URTogbmVlZCB0byBhZGQgc3RvcmFnZSBvYmogdG8gcHJvdG8hXG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRvZG8pO1xuICB0aGlzLnNhdmUoKTtcblxuICByZXR1cm4gdG9kby5pZDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpKSA9PiBpICE9PSBpZCk7XG4gIHRoaXMuc3RvcmFnZS5yZW1vdmUoYFRvZG9fJHtpZH1gKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG4vLyBUT0RPOiBtYXliZSBhdm9pZCByZW1vdmluZyB0b2RvIGZyb20gc3RvcmFnZT9cbi8vIFRPRE86IG1heWJlIHBhc3MgcHJvamVjdElkP1xuUHJvamVjdC5wcm90b3R5cGUubW92ZVRvZG8gPSBmdW5jdGlvbiAodG9kbywgcHJvamVjdCkge1xuICBjb25zb2xlLndhcm4oJ1dBUk5JTkchIC5tb3ZlVG9kbygpIGRvZXMgbm90IHdvcmsgeWV0IScpO1xuICB0aGlzLnJlbW92ZVRvZG8odG9kby5pZCk7XG4gIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9yYWdlLnNhdmUodGhpcyk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5sb2FkRGF0YSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gIC8vIFRPRE86IGRvIEkgbmVlZCB0aGlzIGNoZWNrP1xuICAvLyBUT0RPOiBhY3R1YWxseSBjYW4gaGFuZGxlIGFycmF5L29iamVjdCBjYXNlcyB3aXRoXG4gIC8vIGNvbnNvbGUubG9nKGpzb24uY29uc3RydWN0b3IubmFtZSkgb3IganNvbiBpbnN0YW5jZW9mIEFycmF5O1xuICB0cnkge1xuICAgIGpzb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5hZGRUb2RvKG5ldyBUb2RvKGl0ZW0pKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HISBSZXF1aXJlIGFuIGFycmF5IG9mIG9iamVjdHNcXG4nLCBlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcblxuZnVuY3Rpb24gUHJvamVjdHNNYW5hZ2VyKCkge1xuICB0aGlzLnByb2plY3RzID0gW107XG4gIHRoaXMuZGVmYXVsdFByb2plY3QgPSBudWxsO1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbn1cblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zdG9yYWdlID0gbnVsbDtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLnByb2plY3RzLnB1c2goaWQpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IGFkZCB3YXJuaW5nIGFib3V0IGRlbGV0aW5nIHtufSB0b2RvIGl0ZW1zXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKHRoaXMuZGVmYXVsdFByb2plY3QgPT09IGlkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBDYW5ub3QgZGVsZXRlIGRlZmF1bHQgcHJvamVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRPRE86IHVwZGF0ZSB0aGlzLmN1cnJlbnRQcm9qZWN0IG9uIGRlbGV0ZXRpbmcgY3VycmVudCBwcm9qZWN0LlxuXG4gIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigoaSkgPT4gaSAhPT0gaWQpO1xuICB0aGlzLnNhdmUoKTtcblxuICB0aGlzLnN0b3JhZ2UucmVtb3ZlUHJvamVjdChgUHJvamVjdF8ke2lkfWApO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5nZXRSZXN0b3JlZFByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9qZWN0KHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtpZH1gKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c01hbmFnZXI7XG4iLCJpbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL3V0aWxzL2lkJztcbmltcG9ydCB0cmltU3RyIGZyb20gJy4vdXRpbHMvdHJpbVN0cic7XG5cbi8vIFRPRE86IG5vdCBzdXJlIGFib3V0IHBhc3NpbmcgaWRcbmZ1bmN0aW9uIFRvZG8oZGF0YSkge1xuICBjb25zdCB7IGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkgPSAnbG93JywgY29tcGxldGUgfSA9IGRhdGE7XG5cbiAgdGhpcy5pZCA9IGlkIHx8IGdlbmVyYXRlSWQoKTtcbiAgdGhpcy50aXRsZSA9IHRyaW1TdHIodGl0bGUpO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8IG5ldyBEYXRlKCk7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlID09PSAnb24nO1xufVxuXG4vLyBUT0RPOiBhZGQgc2F2ZSAodG8gc3RvcmFnZSkgbWV0aG9kIHRvbz9cblxuVG9kby5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgLy8gVE9ETzogYXNzdW1lIGRhdGEgZG9lc24ndCBoYXZlIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbn07XG5cblRvZG8ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImZ1bmN0aW9uIFVJKHBtLCBzdG9yYWdlKSB7XG4gIC8vIFRPRE86IG1heWJlIGJldHRlciBwYXNzIHN0b3JhZ2U/IERvIEkgbmVlZCBwbT9cbiAgdGhpcy5wbSA9IHBtOyAvLyBkYW1uIVxuICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xufVxuXG5VSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQgZm4nKTtcbn07XG5cblVJLnByb3RvdHlwZS5yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtpZH1gKTtcbiAgLy8gVE9ETzogZ2V0IGlkLCB0aXRsZVxuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLXByb2plY3QtaXRlbVwiPlxuICAgICAgPHNwYW4+JHt0aXRsZX08L3NwYW4+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwianMtYnRuLXByb2plY3QtZWRpdFwiIHR5cGU9XCJidXR0b25cIj5lZGl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwianMtYnRuLXByb2plY3QtZGVsZXRlXCIgdHlwZT1cImJ1dHRvblwiPmRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG4gIC8vIFRPRE86IHNob3cgdG9kb3MgY291bnQ/XG5cbiAgdHJ5IHtcbiAgICAvLyBkZWxldGUgb2xkIHByb2plY3QgZWxlbWVudCBvbiAnZWRpdC91cGRhdGUnIGFjdGlvblxuICAgIGNvbnN0IG9sZEl0ZW0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgaWYgKG9sZEl0ZW0gIT09IG51bGwpIG9sZEl0ZW0ucmVtb3ZlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG5cbiAgLy8gVE9ETzogcGxhY2Ugb24gdG9wIG1heWJlP1xuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyVG9kbyA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9kby1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSB9ID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLXRvZG8taXRlbVwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1wiPlxuICAgICAgPGRpdj4ke3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke2R1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PnByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgPGRpdj5jb21wbGV0ZTogJHtjb21wbGV0ZX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJqcy1idG4tdG9kby1lZGl0XCIgdHlwZT1cImJ1dHRvblwiPmVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLWJ0bi10b2RvLWRlbGV0ZVwiIHR5cGU9XCJidXR0b25cIj5kZWxldGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImNvbnN0IHM0ID0gKCkgPT5cbiAgTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnN1YnN0cmluZygxKTtcblxuY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IGBhJHtzNCgpfS0ke3M0KCl9LSR7czQoKX1gO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUlkO1xuIiwiZnVuY3Rpb24gdHJpbVN0cihzdHJpbmcgPSAnJywgZGVmYXVsdFZhbHVlID0gJ1VudGl0bGVkJykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5yZXBsYWNlKC9bPD4vXS9naSwgJycpIHx8IGRlZmF1bHRWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJpbVN0cjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTG9jU3RvcmFnZSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3RzTWFuYWdlciBmcm9tICcuL1Byb2plY3RzTWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuLy8gaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcbmltcG9ydCBkZW1vVG9kb3NEYXRhIGZyb20gJy4vZGF0YS9kZW1vVG9kb3MuanNvbic7XG5pbXBvcnQgYXJjaGl2ZVRvZG9zRGF0YSBmcm9tICcuL2RhdGEvYXJjaGl2ZVRvZG9zLmpzb24nO1xuXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxuY29uc3Qgc3RvcmFnZSA9IChmdW5jdGlvbiBpbml0U3RvcmFnZSgpIHtcbiAgLy8gVE9ETzogcmVtb3ZlIGNsZWFyIG9uIGxvYWRcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGNvbnN0IHN0b3JhZ2VFbnRpdHkgPSBuZXcgTG9jU3RvcmFnZSgpO1xuICAvLyBUT0RPOiBpcyBpdCBhIGdvb2QgaWRlYT9cbiAgUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIFByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIHJldHVybiBzdG9yYWdlRW50aXR5O1xufSkoKTtcblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKGZ1bmN0aW9uIGluaXRQcm9qZWN0c01hbmFnZXIoKSB7XG4gIGNvbnN0IHBtID0gbmV3IFByb2plY3RzTWFuYWdlcigpO1xuICBjb25zdCBkZWZhdXRQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0luYm94JyB9KTtcbiAgZGVmYXV0UHJvamVjdC5zYXZlKCk7XG4gIGNvbnN0IHsgaWQgfSA9IGRlZmF1dFByb2plY3Q7XG4gIHBtLmRlZmF1bHRQcm9qZWN0ID0gaWQ7XG4gIHBtLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHBtLmFkZFByb2plY3QoaWQpO1xuICAvLyA/IGFkZCBmbiB0byBwb3B1bGF0ZSBzdG9yYWdlXG4gIGRlZmF1dFByb2plY3QubG9hZERhdGEoZGVtb1RvZG9zRGF0YSk7XG4gIC8vID8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBkYXRhLCBpZiBzbyBnZXQgaXQhXG4gIHJldHVybiBwbTtcbn0pKCk7XG5cbi8vIFRPRE86IG9uIGFkZCB0b2RvIGNoZWNrIGlzIHRoZXJlIGFueSBwcm9qZWN0IChjcmVhdGUgZGVmYXVsdCBvbmUgdGhlbiEpXG4vLyBUT0RPOiBjcmVhdGUgc2FuZSBpbml0KCkgZm4/XG5cbmNvbnN0IHVpID0gbmV3IFVJKHByb2plY3RzTWFuYWdlciwgc3RvcmFnZSk7XG5cbi8vIFRPRE86IGF1dG8gYWRkIHRvZG8gdG8gcHJvamVjdCBvbiBjcmVhdGVcbi8vIFRPRE86IHNhdmUgcHJvamVjdCBpbW1lZGlhdGVseSBhZnRlciBjcmVhdGlvbj9cblxuY29uc3QgYXJjaGl2ZVByb2plY3QgPSBuZXcgUHJvamVjdCh7IHRpdGxlOiAnQXJjaGl2ZScgfSk7XG5hcmNoaXZlUHJvamVjdC5sb2FkRGF0YShhcmNoaXZlVG9kb3NEYXRhKTtcbnByb2plY3RzTWFuYWdlci5hZGRQcm9qZWN0KGFyY2hpdmVQcm9qZWN0LmlkKTtcblxucHJvamVjdHNNYW5hZ2VyLnByb2plY3RzLmZvckVhY2goKGlkKSA9PiB7XG4gIHVpLnJlbmRlclByb2plY3QoaWQpO1xufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgcHJvamVjdCA9IHt9O1xuICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pLmVudHJpZXMoKSk7XG5cbiAgLy8gTk9URTogdXBkYXRlIE9SIGNyZWF0ZSBhY3Rpb25cbiAgaWYgKGRhdGEuaWQpIHtcbiAgICBwcm9qZWN0ID0gcHJvamVjdHNNYW5hZ2VyLmdldFJlc3RvcmVkUHJvamVjdChkYXRhLmlkKTtcbiAgICBwcm9qZWN0LnVwZGF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YSk7XG4gICAgcHJvamVjdHNNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdC5pZCk7XG4gIH1cblxuICBwcm9qZWN0LnNhdmUoKTtcbiAgZm9ybS5yZXNldCgpO1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZSA9ICcnO1xuICB1aS5yZW5kZXJQcm9qZWN0KHByb2plY3QuaWQpO1xufVxuXG4vLyBUT0RPOiBtYXliZSBhZGQgbW9yZSBwcmVjaXNlIGRvbSBub2RlLCBub3QgZG9jdW1lbnQ/XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZygnc3VibWl0IGFjdGlvbicpO1xuICBjb25zdCB7IHRhcmdldCB9ID0gZTtcblxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtZm9ybS1hZGQtcHJvamVjdCcpKSB7XG4gICAgc3VibWl0UHJvamVjdEZvcm0oZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWZvcm0tYWRkLXRvZG8nKSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gdGFyZ2V0O1xuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pLmVudHJpZXMoKSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIC8vIFRPRE86IGFkZCB0b2RvIHRvIHByb2plY3RcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0c01hbmFnZXIuY3VycmVudFByb2plY3Q7XG4gICAgY29uc3QgcHJvamVjdCA9IHVpLnBtLmdldFJlc3RvcmVkUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG9JZCA9IHByb2plY3QuYWRkVG9kbyhkYXRhKTtcbiAgICAvLyBUT0RPOiBhdm9pZCBzaGFraW5nIHN0b3JhZ2UgMiB0aW1lcyEgKG9uIHNhdmUsIG9uIHJlbmRlcilcbiAgICB1aS5yZW5kZXJUb2RvKHRvZG9JZCk7XG4gIH1cbn0pO1xuXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2RvLWxpc3QnKTtcbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1idG4tdG9kby1kZWxldGUnKSkge1xuICAgIGNvbnNvbGUubG9nKCdkbyBkZWxldGUgYWN0aW9uJyk7XG4gICAgY29uc3QgdG9kb0VsID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy10b2RvLWl0ZW0nKTtcbiAgICAvLyAxLiBnZXQgdG9kbyBpZFxuICAgIGNvbnN0IHRvZG9JZCA9IHRvZG9FbC5pZDtcbiAgICAvLyAyLiBnZXQgcHJvamVjdCAoaGludDogY3VycmVudCBwcm9qZWN0KVxuICAgIGNvbnN0IHByb2plY3RJZCA9IHVpLnBtLmN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3QgPSB1aS5wbS5nZXRSZXN0b3JlZFByb2plY3QocHJvamVjdElkKTtcbiAgICAvLyAzLiBkZWxldGUgdG9kbyBmcm9tIHByb2plY3RcbiAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb0lkKTtcbiAgICAvLyA0LiB1cGRhdGUgVUlcbiAgICB0b2RvRWwucmVtb3ZlKCk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtYnRuLXRvZG8tZWRpdCcpKSB7XG4gICAgY29uc29sZS5sb2coJ2RvIGVkaXQgYWN0aW9uJyk7XG4gIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvamVjdHMtbGlzdCcpO1xucHJvamVjdHNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1idG4tcHJvamVjdC1kZWxldGUnKSkge1xuICAgIGNvbnNvbGUubG9nKCdkbyBkZWxldGUgcHJvamVjdCBhY3Rpb24hJyk7XG4gICAgY29uc3QgcHJvamVjdEVsID0gdGFyZ2V0LmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0RWwuaWQ7XG4gICAgLy8gVE9ETzogSSBkb24ndCBsaWtlIHVpLnBtXG4gICAgdWkucG0uZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuXG4gICAgaWYgKHByb2plY3RJZCAhPT0gdWkucG0uZGVmYXVsdFByb2plY3QpIHtcbiAgICAgIHByb2plY3RFbC5yZW1vdmUoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtYnRuLXByb2plY3QtZWRpdCcpKSB7XG4gICAgLy8gMS4gZ2V0IHByb2plY3QgZGV0YWlsc1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHRhcmdldC5jbG9zZXN0KCcuanMtcHJvamVjdC1pdGVtJykuaWQ7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7cHJvamVjdElkfWApO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybS1hZGQtcHJvamVjdCcpO1xuICAgIC8vIFRPRE86IGFkZCBsb29wXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUgPSBkYXRhLnRpdGxlO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gZGF0YS5pZDtcbiAgICAvLyAyLiBUT0RPOiBzaG93IGZvcm0gd2l0aCBwb3B1bGF0ZWQgZGF0YSAoaW4gbW9kYWw/KVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==