/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: grid;
    grid-template: 40px 1fr 30px / 1fr 4fr;
    height: 100vh;
    text-align: center;
    margin: 0;
    font-family: sans-serif;
}

header,
footer {
    grid-column: span 2;
}


header,
footer,
.sidebar,
.main-content {
    border: 1px solid black;
}

.sidebar {
    display: grid;
}

.task {
    display: grid;
    grid-auto-flow: column;
}

.context-menu-button {
    width: 10px;
    border: 1px solid blue;
}

.important {
    width: 10px;
    border: 1px solid red;
}

.checkbox {
    width: 10px;
    border: 1px solid green;
}

.project {
    display: flex;
}

.selected {
    background-color: blueviolet;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sCAAsC;IACtC,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;;IAEI,mBAAmB;AACvB;;;AAGA;;;;IAII,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["body {\n    display: grid;\n    grid-template: 40px 1fr 30px / 1fr 4fr;\n    height: 100vh;\n    text-align: center;\n    margin: 0;\n    font-family: sans-serif;\n}\n\nheader,\nfooter {\n    grid-column: span 2;\n}\n\n\nheader,\nfooter,\n.sidebar,\n.main-content {\n    border: 1px solid black;\n}\n\n.sidebar {\n    display: grid;\n}\n\n.task {\n    display: grid;\n    grid-auto-flow: column;\n}\n\n.context-menu-button {\n    width: 10px;\n    border: 1px solid blue;\n}\n\n.important {\n    width: 10px;\n    border: 1px solid red;\n}\n\n.checkbox {\n    width: 10px;\n    border: 1px solid green;\n}\n\n.project {\n    display: flex;\n}\n\n.selected {\n    background-color: blueviolet;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/DOMhandling.js":
/*!****************************!*\
  !*** ./src/DOMhandling.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assingProjectValues: () => (/* binding */ assingProjectValues),
/* harmony export */   assingTaskValues: () => (/* binding */ assingTaskValues),
/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm),
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   loadStartPage: () => (/* binding */ loadStartPage),
/* harmony export */   renderMainContent: () => (/* binding */ renderMainContent),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatISO.mjs");








function assingProjectValues(p) {
    p.setName(document.querySelector('input[name=project-name]').value);
}

function assingTaskValues(t) {
    t.setName(document.querySelector('input[name=task-name]').value);
    t.setDescription(document.querySelector('input[name=description]').value);
    t.setDate(document.querySelector('input[name=date]').valueAsDate);
    t.setProjectID(document.querySelector('select[name=projectSelect]').getAttribute('projectID'));
}

function getTasksToShow(viewMode, arg) {
    if (viewMode === 'project') {
        return _logic__WEBPACK_IMPORTED_MODULE_0__.taskList.getList().filter((t) => t.projectID === arg.id);
    }

    else if (viewMode === 'filter') {
        return arg.filterTasks();
    }
}

function getTaskProjectName(t) {
    let foundProject = _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList()[_logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList().findIndex((p) => p.id === t.projectID)];
    return foundProject ? foundProject.name : '';
}

function createProjectElement(p) {
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("projectID", p.id);
    project.addEventListener('click', (e) => {
        let ctxOptions = document.querySelectorAll('div.context-menu > div');
        let found = false;
        ctxOptions.forEach((x) => {
            if (x === e.target) {
                found = true;
                return;
            }
        })
        if (!found) {
            renderMainContent('project', p);
        }
    });

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = p.name;


    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu-button");
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(p, project, e);
        if (document.querySelector('form')) {
            document.querySelector('form').remove();
        }
    });

    project.appendChild(projectName);
    project.appendChild(contextMenu);

    _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.appendChild(project);
}

function createFilterElement(f) {
    const filter = document.createElement("div");
    filter.classList.add("filter");
    filter.setAttribute("name", f.name);
    filter.addEventListener('click', () => {
        renderMainContent('filter', f);
    });

    const filterName = document.createElement("div");
    filterName.classList.add("filter-name");
    filterName.textContent = f.name;

    filter.appendChild(filterName);

    _index__WEBPACK_IMPORTED_MODULE_2__.filtersContainer.appendChild(filter);
}

function renderMainContent(viewMode, arg) {
    _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.textContent = arg.name;
    _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.setAttribute('viewMode', viewMode);
    if (viewMode === 'project') {
        _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.setAttribute('prjOrFilterID', arg.id);
    }
    else if (viewMode === 'filter') {
        _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.setAttribute('prjOrFilterID', arg.name);
    }
    updateTasks(viewMode, arg);
}

function updateTasks(viewMode, arg) {

    if (!viewMode) {
        viewMode = _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.getAttribute('viewMode');
    }

    if (!arg) {
        if (viewMode === 'project') {
            arg = _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList().find((p) => p.id === _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.getAttribute('prjOrFilterID'));
        }

        else if (viewMode === 'filter') {
            arg = _logic__WEBPACK_IMPORTED_MODULE_0__.filterList.getList().find((f) => f.name === _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.getAttribute('prjOrFilterID'));
        }
    }

    let tasks = getTasksToShow(viewMode, arg);


    //remove any content from container
    _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.replaceChildren();

    (tasks.length === 0 && viewMode === 'filter') ? //check if there are tasks to show
        noTasksToShow() : //If not, write that there aren't any
        tasks.forEach((t) => createTaskElement(t, viewMode)); //if yes, render them 


}

function noTasksToShow() {
    const text = document.createElement("div");
    text.classList.add("no-tasks-text");
    text.textContent = 'Nothing to show here!'

    _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.appendChild(text);
}

function createTaskElement(t, viewMode) {

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("taskID", t.id);
    task.setAttribute("projectID", t.projectID);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    if (t.complete) { toggleSelected(checkbox); }
    checkbox.addEventListener('click', () => {
        t.setCompleted();
        updateTasks();
        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.storeListsLocally)();
    });

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");

    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.textContent = t.name;

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = t.description;

    taskText.appendChild(taskName);
    taskText.appendChild(taskDescription);

    const date = document.createElement("div");
    date.classList.add("date");
    t.date ? date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.formatISO)(t.date, { representation: 'date' }) : '';

    let project;

    if (viewMode === 'filter') {
        project = document.createElement("div");
        project.classList.add("project");
        project.textContent = getTaskProjectName(t);
    }

    const important = document.createElement("div");
    important.classList.add("important");
    if (t.important) { toggleSelected(important); }
    important.addEventListener('click', (e) => {
        t.setImportant();
        updateTasks();
        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.storeListsLocally)();
    });

    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu-button");
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(t, task, e);
        if (document.querySelector('form')) {
            document.querySelector('form').remove();
        }


    });

    task.appendChild(checkbox);
    task.appendChild(taskText);
    task.appendChild(date);
    if (viewMode === 'filter') { task.appendChild(project) };
    task.appendChild(important);
    task.appendChild(contextMenu);

    _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.appendChild(task);

}

function toggleSelected(icon) {
    icon.classList.toggle("selected");
}

function openContextMenu(obj, element, e) {

    const ctxMenu = document.createElement('div');
    ctxMenu.classList.add('context-menu');
    const ctxEdit = document.createElement('div');
    ctxEdit.textContent = "Edit";
    const ctxDelete = document.createElement('div');
    ctxDelete.textContent = "Delete";

    ctxMenu.appendChild(ctxEdit);
    ctxMenu.appendChild(ctxDelete);
    element.appendChild(ctxMenu);

    document.addEventListener('click', function (event) {
        if (event.target === ctxEdit) {
            contextEdit(obj, element);
        }

        else if (event.target === ctxDelete) {
            contextDelete(obj, element);
        }

        ctxMenu.remove();

    }, { once: true });

    e.stopPropagation();
}

function contextEdit(obj, element) {
    if (obj.constructor.name === 'Task') {
        createTaskForm(obj, element);
    }

    else if (obj.constructor.name === 'Project') {
        createProjectForm(obj, element);
    }

}

function contextDelete(obj) {
    if (obj.constructor.name === 'Task') {
        _logic__WEBPACK_IMPORTED_MODULE_0__.taskList.removeFromList(obj);
        updateTasks();
        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.storeListsLocally)();
    }
    else if (obj.constructor.name === 'Project') {
        let tasksToClean = getTasksToShow('project', obj);
        tasksToClean.forEach((t) => t.setProjectID(''));
        _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.removeFromList(obj);
        updateProjects();

        //check if the project being deleted is active (if the user is viewing it's tasks)
        if (_index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.getAttribute('prjOrFilterID') === obj.id) {
            renderMainContent('filter', _logic__WEBPACK_IMPORTED_MODULE_0__.filterList.getDefault()); //revert to the default view
        } else { updateTasks(); } //"else", otherwise it will update tasks 2x (renderMainContent already update tasks)

        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.storeListsLocally)();
    }
}

function createTaskForm(existingTask, element) {
    let taskHasForm = _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.querySelector("form") != null;
    let prjHasForm = _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.querySelector("form") != null;


    if (taskHasForm === false) {
        if (prjHasForm) { _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.querySelector("form").remove(); }
        const form = document.createElement("form");
        form.classList.add("task-form")
        form.setAttribute("autocomplete", "off");
        if (existingTask) { form.setAttribute("existing-task", existingTask.id); }

        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.name = "task-name";
        taskNameInput.placeholder = "Enter task name";

        const descriptionInput = document.createElement("input");
        descriptionInput.type = "text";
        descriptionInput.name = "description";
        descriptionInput.placeholder = "Enter task description (optional)";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.name = "date";
        dateInput.id = "date";

        const projectSelect = document.createElement("select");
        projectSelect.name = "projectSelect";
        projectSelect.id = "projectSelect";

        //create and append options on select element
        const projectOptions = createProjectOptions(existingTask);
        projectOptions.forEach(x => projectSelect.appendChild(x));

        //set the select element's projectID attribute to be the same as the selected option's
        const opt = projectSelect.options;
        projectSelect.setAttribute('projectID', opt[opt.selectedIndex].getAttribute('projectID'));
        projectSelect.addEventListener("change", (e) => {
            projectSelect.setAttribute('projectID', opt[opt.selectedIndex].getAttribute('projectID'));
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";


        if (existingTask) {
            taskNameInput.value = existingTask.name;
            if (existingTask.description) { descriptionInput.value = existingTask.description; }
            if (existingTask.date) {
                dateInput.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.formatISO)(existingTask.date, { representation: 'date' });
            }
        }

        form.appendChild(taskNameInput);
        form.appendChild(descriptionInput);
        form.appendChild(dateInput);
        form.appendChild(projectSelect);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        existingTask ?
            element.replaceWith(form) :
            _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.appendChild(form);
    }
}

function createProjectOptions(existingTask) {
    const list = _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList();
    const options = [];

    options[0] = document.createElement('option');
    options[0].setAttribute('projectID', '');
    options[0].textContent = '';

    list.forEach(p => {
        options[(list.indexOf(p)) + 1] = document.createElement('option');
        options[(list.indexOf(p)) + 1].setAttribute('projectID', p.id);
        options[(list.indexOf(p)) + 1].textContent = p.name;
        if (existingTask && options[(list.indexOf(p)) + 1].getAttribute('projectID') === existingTask.projectID) {
            options[(list.indexOf(p)) + 1].selected = true;
        }
        else if (options[(list.indexOf(p)) + 1].getAttribute('projectID') === _index__WEBPACK_IMPORTED_MODULE_2__.mainLabel.getAttribute('prjOrFilterID')) {
            options[(list.indexOf(p)) + 1].selected = true;
        }
    });

    return options;
}

function createProjectForm(existingProject, element) {
    let prjHasForm = _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.querySelector("form") != null;
    let taskHasForm = _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.querySelector("form") != null;


    if (prjHasForm === false) {
        if (taskHasForm) { _index__WEBPACK_IMPORTED_MODULE_2__.tasksContainer.querySelector("form").remove(); }
        const form = document.createElement("form");
        form.classList.add("project-form")
        form.setAttribute("autocomplete", "off");
        if (existingProject) { form.setAttribute("existing-project", existingProject.id); }


        const projectNameInput = document.createElement("input");
        projectNameInput.type = "text";
        projectNameInput.name = "project-name";
        projectNameInput.placeholder = "Enter project name";
        if (existingProject) { projectNameInput.value = existingProject.name; }

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";

        form.appendChild(projectNameInput);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);


        existingProject ?
            element.replaceWith(form) :
            _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.appendChild(form);
    }
}

function renderFilters() {
    _logic__WEBPACK_IMPORTED_MODULE_0__.filterList.getList().forEach((f) => createFilterElement(f));
}

function updateProjects() {

    //remove any content from container
    _index__WEBPACK_IMPORTED_MODULE_2__.projectsSubContainer.replaceChildren();

    //add projects from projectList as elements
    _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList().forEach((p) => createProjectElement(p));

}

function loadStartPage() {
    _logic__WEBPACK_IMPORTED_MODULE_0__.taskList.getLocalStoredTasks();
    _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getLocalStoredProjects();
    (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.storeListsLocally)();
    renderFilters();
    updateProjects();
    renderMainContent('filter', _logic__WEBPACK_IMPORTED_MODULE_0__.filterList.getDefault());
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectBtn: () => (/* binding */ addProjectBtn),
/* harmony export */   addTaskBtn: () => (/* binding */ addTaskBtn),
/* harmony export */   filtersContainer: () => (/* binding */ filtersContainer),
/* harmony export */   mainLabel: () => (/* binding */ mainLabel),
/* harmony export */   projectsSubContainer: () => (/* binding */ projectsSubContainer),
/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _DOMhandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMhandling */ "./src/DOMhandling.js");
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ "./src/localstorage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const filtersContainer = document.querySelector('.filters-container');

const projectsSubContainer = document.querySelector('.projects-subcontainer');
const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
    (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.createProjectForm)();
});

const mainLabel = document.querySelector('.main-label');
const tasksContainer = document.querySelector('.tasks-container');
const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', () => {
    (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.createTaskForm)();
});

projectsSubContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=project-name]').value) { //check if name input is filled
            let prj;
            document.querySelector('.project-form').hasAttribute('existing-project') ?
                prj = _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList().find((p) => p.id === document.querySelector('.project-form').getAttribute('existing-project')) :
                prj = _logic__WEBPACK_IMPORTED_MODULE_0__.projectList.createProject();
            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.assingProjectValues)(prj);
            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.updateProjects)();
            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
            (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.storeListsLocally)();

            //if this project view is open, update view label
            if (mainLabel.getAttribute('prjOrFilterID') === prj.id) {
                (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.renderMainContent)('project', prj);
            }

        }
    }
});

tasksContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=task-name]').value) { //check if name input is filled
            let task;
            document.querySelector('.task-form').hasAttribute('existing-task') ?
                task = _logic__WEBPACK_IMPORTED_MODULE_0__.taskList.getList().find((t) => t.id === document.querySelector('.task-form').getAttribute('existing-task')) :
                task = _logic__WEBPACK_IMPORTED_MODULE_0__.taskList.createTask();
            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.assingTaskValues)(task);
            (0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.updateTasks)();
            (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.storeListsLocally)();
        }
    }

});


(0,_DOMhandling__WEBPACK_IMPORTED_MODULE_1__.loadStartPage)();


/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storeListsLocally: () => (/* binding */ storeListsLocally)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


function storeListsLocally() {
    localStorage.storedTaskList = JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.taskList.getList());
    localStorage.storedProjectList = JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.projectList.getList());
}

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entry: () => (/* binding */ Entry),
/* harmony export */   ListMethods: () => (/* binding */ ListMethods),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   filterList: () => (/* binding */ filterList),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isEqual.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isAfter.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");



class Entry {
    generateId = () => {
        return Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}

class Task {
    constructor({ name, id, projectID, date, description, important, complete }) {
        this.entry = new Entry();
        this.name = name;
        if (!id) {
            this.id = this.entry.generateId();
        } else { this.id = id; }
        this.projectID = projectID;
        this.date = date;
        this.description = description;
        this.important = important;
        this.complete = complete;
    }

    setCompleted() {
        this.complete = !this.complete;
    }

    setName(name) {
        this.name = name;
    }

    setProjectID(projectID) {
        this.projectID = projectID;
    }

    setDate(d) {
        if (d) {
            let date = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
            this.date = date;
        }
        else {
            this.date = null;
        }
    }

    setDescription(description) {
        this.description = description;
    }

    setImportant() {
        this.important = !this.important;
    }

}

class Project {
    constructor({ name, id }) {
        this.entry = new Entry();
        this.name = name;
        if (!id) {
            this.id = this.entry.generateId();
        } else { this.id = id; }
    }

    setName(name) {
        this.name = name;
    }
}

class ListMethods {
    getList = function (list) {
        return list;
    }

    addToList = function (list, entry) {
        list.push(entry);
    }

    removeFromList = function (list, entry) {
        list.splice(list.indexOf(entry), 1);
    }
}

const taskList = (function () {

    const listMethods = new ListMethods();

    let list = [];

    const createTask = () => {
        let task = new Task({});
        listMethods.addToList(list, task);
        return task;
    }

    const getList = () => {
        return listMethods.getList(list);
    }

    const removeFromList = (task) => {
        listMethods.removeFromList(list, task);
    }

    const getLocalStoredTasks = () => {
        try {
            let storedList = JSON.parse(localStorage.storedTaskList);
            storedList.forEach(
                (x) => {
                    list[storedList.indexOf(x)] = new Task({
                        name: x.name,
                        id: x.id,
                        projectID: x.projectID,
                        date: x.date,
                        description: x.description,
                        important: x.important,
                        complete: x.complete
                    });
                }
            );
        } catch { console.log('No task list found on local storage'); }
    }

    return {
        listMethods,
        createTask,
        getList,
        removeFromList,
        getLocalStoredTasks,
    }
})();

const projectList = (function () {
    const listMethods = new ListMethods();
    let list = [];
    const createProject = () => {
        let prj = new Project({});
        listMethods.addToList(list, prj);
        return prj;
    }
    const getList = () => {
        return listMethods.getList(list);
    }

    const removeFromList = (prj) => {
        listMethods.removeFromList(list, prj);
    }

    const getLocalStoredProjects = () => {
        try {
            let storedList = JSON.parse(localStorage.storedProjectList);
            storedList.forEach(
                (x) => {
                    list[storedList.indexOf(x)] = new Project({
                        name: x.name,
                        id: x.id
                    });
                }
            );
        } catch { console.log('No project list found on local storage'); }
    }

    return {
        listMethods,
        createProject,
        getList,
        removeFromList,
        getLocalStoredProjects,
    }
})();


const getAllTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => !t.complete);
    return tasks;
};

const getInboxTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => ((t.projectID === '' || t.projectID === undefined) && !t.complete));
    return tasks;
};

const getImportantTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.important && !t.complete);
    return tasks;
};

const getTodayTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    tasks = taskList.getList().filter((t) => (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isEqual)(t.date, today) && !t.complete);
    return tasks;
};

const get7DaysTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    let next8days = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.add)(today, { days: 8 });
    tasks = taskList.getList().filter((t) => (((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isAfter)(t.date, today) && (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isBefore)(t.date, next8days)) && !t.complete));
    return tasks;
};

const getCompletedTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.complete);
    return tasks;
}


const filterList = (function () {

    const listMethods = new ListMethods();
    const list = [];
    const createFilter = (name, filterMethod) => {
        let filter = {};
        filter.name = name;
        filter.filterTasks = filterMethod;
        listMethods.addToList(list, filter);
        return filter;
    }
    const getList = () => {
        return listMethods.getList(list);
    }
    const setDefault = (name) => {
        list.forEach((f) => {
            f.name === name ? f.isDefault = true : f.isDefault = false;
        })
    }
    const getDefault = () => {
        return list.find((f) => f.isDefault === true);
    }

    createFilter('Inbox', getInboxTasks);
    createFilter('Today', getTodayTasks);
    createFilter('Next 7 Days', get7DaysTasks);
    createFilter('Important', getImportantTasks);
    createFilter('All Tasks', getAllTasks);
    createFilter('Completed Tasks', getCompletedTasks);

    setDefault('All Tasks');

    return {
        listMethods,
        getList,
        setDefault,
        getDefault,
    }

})();



/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/formatISO.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/formatISO.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatISO: () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");



/**
 * The {@link formatISO} function options.
 */

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in loca.l time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);

  if (isNaN(_date.getTime())) {
    throw new RangeError("Invalid time value");
  }

  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";

  let result = "";
  let tzOffset = "";

  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";

  // Representation is either 'date' or 'complete'
  if (representation !== "time") {
    const day = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getDate(), 2);
    const month = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getMonth() + 1, 2);
    const year = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }

  // Representation is either 'time' or 'complete'
  if (representation !== "date") {
    // Add the timezone.
    const offset = _date.getTimezoneOffset();

    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset);
      const hourOffset = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(absoluteOffset % 60, 2);
      // If less than 0, the sign is +, because it is ahead of time.
      const sign = offset < 0 ? "+" : "-";

      tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset = "Z";
    }

    const hour = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getHours(), 2);
    const minute = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getMinutes(), 2);
    const second = (0,_lib_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_1__.addLeadingZeros)(_date.getSeconds(), 2);

    // If there's also date, separate it with time with 'T'
    const separator = result === "" ? "" : "T";

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    const time = [hour, minute, second].join(timeDelimiter);

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${time}${tzOffset}`;
  }

  return result;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatISO);


/***/ }),

/***/ "./node_modules/date-fns/isAfter.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isAfter.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isAfter: () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAfter);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isEqual.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isEqual.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isEqual: () => (/* binding */ isEqual)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(leftDate);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(rightDate);
  return +_dateLeft === +_dateRight;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTWhhbmRsaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkLm1qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGREYXlzLm1qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRNb250aHMubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Zvcm1hdElTTy5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNBZnRlci5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNCZWZvcmUubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRXF1YWwubWpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDMwcHggLyAxZnIgNGZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG5cbmhlYWRlcixcbmZvb3Rlcixcbi5zaWRlYmFyLFxuLm1haW4tY29udGVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uY29udGV4dC1tZW51LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbn1cblxuLmltcG9ydGFudCB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uY2hlY2tib3gge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuXG4ucHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7Ozs7SUFJSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIDMwcHggLyAxZnIgNGZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG5cXG5oZWFkZXIsXFxuZm9vdGVyLFxcbi5zaWRlYmFyLFxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5jb250ZXh0LW1lbnUtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5pbXBvcnRhbnQge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrTGlzdCwgcHJvamVjdExpc3QsIGZpbHRlckxpc3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgc3RvcmVMaXN0c0xvY2FsbHkgfSBmcm9tIFwiLi9sb2NhbHN0b3JhZ2VcIjtcbmltcG9ydCB7IGZpbHRlcnNDb250YWluZXIsIHByb2plY3RzU3ViQ29udGFpbmVyLCBtYWluTGFiZWwsIHRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGZvcm1hdElTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaW5nUHJvamVjdFZhbHVlcyhwKSB7XG4gICAgcC5zZXROYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9cHJvamVjdC1uYW1lXScpLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2luZ1Rhc2tWYWx1ZXModCkge1xuICAgIHQuc2V0TmFtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXRhc2stbmFtZV0nKS52YWx1ZSk7XG4gICAgdC5zZXREZXNjcmlwdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPWRlc2NyaXB0aW9uXScpLnZhbHVlKTtcbiAgICB0LnNldERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1kYXRlXScpLnZhbHVlQXNEYXRlKTtcbiAgICB0LnNldFByb2plY3RJRChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1wcm9qZWN0U2VsZWN0XScpLmdldEF0dHJpYnV0ZSgncHJvamVjdElEJykpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrc1RvU2hvdyh2aWV3TW9kZSwgYXJnKSB7XG4gICAgaWYgKHZpZXdNb2RlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0LmdldExpc3QoKS5maWx0ZXIoKHQpID0+IHQucHJvamVjdElEID09PSBhcmcuaWQpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHZpZXdNb2RlID09PSAnZmlsdGVyJykge1xuICAgICAgICByZXR1cm4gYXJnLmZpbHRlclRhc2tzKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrUHJvamVjdE5hbWUodCkge1xuICAgIGxldCBmb3VuZFByb2plY3QgPSBwcm9qZWN0TGlzdC5nZXRMaXN0KClbcHJvamVjdExpc3QuZ2V0TGlzdCgpLmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gdC5wcm9qZWN0SUQpXTtcbiAgICByZXR1cm4gZm91bmRQcm9qZWN0ID8gZm91bmRQcm9qZWN0Lm5hbWUgOiAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0SURcIiwgcC5pZCk7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBjdHhPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNvbnRleHQtbWVudSA+IGRpdicpO1xuICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgY3R4T3B0aW9ucy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICBpZiAoeCA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICByZW5kZXJNYWluQ29udGVudCgncHJvamVjdCcsIHApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHAubmFtZTtcblxuXG4gICAgY29uc3QgY29udGV4dE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRleHRNZW51LmNsYXNzTGlzdC5hZGQoXCJjb250ZXh0LW1lbnUtYnV0dG9uXCIpO1xuICAgIGNvbnRleHRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZXh0LW1lbnUnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRleHQtbWVudScpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5Db250ZXh0TWVudShwLCBwcm9qZWN0LCBlKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGNvbnRleHRNZW51KTtcblxuICAgIHByb2plY3RzU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXJFbGVtZW50KGYpIHtcbiAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKFwiZmlsdGVyXCIpO1xuICAgIGZpbHRlci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGYubmFtZSk7XG4gICAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW5kZXJNYWluQ29udGVudCgnZmlsdGVyJywgZik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWx0ZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXItbmFtZVwiKTtcbiAgICBmaWx0ZXJOYW1lLnRleHRDb250ZW50ID0gZi5uYW1lO1xuXG4gICAgZmlsdGVyLmFwcGVuZENoaWxkKGZpbHRlck5hbWUpO1xuXG4gICAgZmlsdGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaWx0ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpbkNvbnRlbnQodmlld01vZGUsIGFyZykge1xuICAgIG1haW5MYWJlbC50ZXh0Q29udGVudCA9IGFyZy5uYW1lO1xuICAgIG1haW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ3ZpZXdNb2RlJywgdmlld01vZGUpO1xuICAgIGlmICh2aWV3TW9kZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIG1haW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ3Byak9yRmlsdGVySUQnLCBhcmcuaWQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aWV3TW9kZSA9PT0gJ2ZpbHRlcicpIHtcbiAgICAgICAgbWFpbkxhYmVsLnNldEF0dHJpYnV0ZSgncHJqT3JGaWx0ZXJJRCcsIGFyZy5uYW1lKTtcbiAgICB9XG4gICAgdXBkYXRlVGFza3Modmlld01vZGUsIGFyZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrcyh2aWV3TW9kZSwgYXJnKSB7XG5cbiAgICBpZiAoIXZpZXdNb2RlKSB7XG4gICAgICAgIHZpZXdNb2RlID0gbWFpbkxhYmVsLmdldEF0dHJpYnV0ZSgndmlld01vZGUnKTtcbiAgICB9XG5cbiAgICBpZiAoIWFyZykge1xuICAgICAgICBpZiAodmlld01vZGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICAgICAgYXJnID0gcHJvamVjdExpc3QuZ2V0TGlzdCgpLmZpbmQoKHApID0+IHAuaWQgPT09IG1haW5MYWJlbC5nZXRBdHRyaWJ1dGUoJ3Byak9yRmlsdGVySUQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh2aWV3TW9kZSA9PT0gJ2ZpbHRlcicpIHtcbiAgICAgICAgICAgIGFyZyA9IGZpbHRlckxpc3QuZ2V0TGlzdCgpLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gbWFpbkxhYmVsLmdldEF0dHJpYnV0ZSgncHJqT3JGaWx0ZXJJRCcpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCB0YXNrcyA9IGdldFRhc2tzVG9TaG93KHZpZXdNb2RlLCBhcmcpO1xuXG5cbiAgICAvL3JlbW92ZSBhbnkgY29udGVudCBmcm9tIGNvbnRhaW5lclxuICAgIHRhc2tzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgKHRhc2tzLmxlbmd0aCA9PT0gMCAmJiB2aWV3TW9kZSA9PT0gJ2ZpbHRlcicpID8gLy9jaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgdG8gc2hvd1xuICAgICAgICBub1Rhc2tzVG9TaG93KCkgOiAvL0lmIG5vdCwgd3JpdGUgdGhhdCB0aGVyZSBhcmVuJ3QgYW55XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHQpID0+IGNyZWF0ZVRhc2tFbGVtZW50KHQsIHZpZXdNb2RlKSk7IC8vaWYgeWVzLCByZW5kZXIgdGhlbSBcblxuXG59XG5cbmZ1bmN0aW9uIG5vVGFza3NUb1Nob3coKSB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibm8tdGFza3MtdGV4dFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ05vdGhpbmcgdG8gc2hvdyBoZXJlISdcblxuICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0LCB2aWV3TW9kZSkge1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcInRhc2tJRFwiLCB0LmlkKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZShcInByb2plY3RJRFwiLCB0LnByb2plY3RJRCk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGlmICh0LmNvbXBsZXRlKSB7IHRvZ2dsZVNlbGVjdGVkKGNoZWNrYm94KTsgfVxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0LnNldENvbXBsZXRlZCgpO1xuICAgICAgICB1cGRhdGVUYXNrcygpO1xuICAgICAgICBzdG9yZUxpc3RzTG9jYWxseSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRleHRcIik7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHQubmFtZTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHQuZGVzY3JpcHRpb247XG5cbiAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgdGFza1RleHQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgdC5kYXRlID8gZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdElTTyh0LmRhdGUsIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KSA6ICcnO1xuXG4gICAgbGV0IHByb2plY3Q7XG5cbiAgICBpZiAodmlld01vZGUgPT09ICdmaWx0ZXInKSB7XG4gICAgICAgIHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gZ2V0VGFza1Byb2plY3ROYW1lKHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoXCJpbXBvcnRhbnRcIik7XG4gICAgaWYgKHQuaW1wb3J0YW50KSB7IHRvZ2dsZVNlbGVjdGVkKGltcG9ydGFudCk7IH1cbiAgICBpbXBvcnRhbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0LnNldEltcG9ydGFudCgpO1xuICAgICAgICB1cGRhdGVUYXNrcygpO1xuICAgICAgICBzdG9yZUxpc3RzTG9jYWxseSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRleHRNZW51LmNsYXNzTGlzdC5hZGQoXCJjb250ZXh0LW1lbnUtYnV0dG9uXCIpO1xuICAgIGNvbnRleHRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZXh0LW1lbnUnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRleHQtbWVudScpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5Db250ZXh0TWVudSh0LCB0YXNrLCBlKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBpZiAodmlld01vZGUgPT09ICdmaWx0ZXInKSB7IHRhc2suYXBwZW5kQ2hpbGQocHJvamVjdCkgfTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGltcG9ydGFudCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChjb250ZXh0TWVudSk7XG5cbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxufVxuXG5mdW5jdGlvbiB0b2dnbGVTZWxlY3RlZChpY29uKSB7XG4gICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG59XG5cbmZ1bmN0aW9uIG9wZW5Db250ZXh0TWVudShvYmosIGVsZW1lbnQsIGUpIHtcblxuICAgIGNvbnN0IGN0eE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdHhNZW51LmNsYXNzTGlzdC5hZGQoJ2NvbnRleHQtbWVudScpO1xuICAgIGNvbnN0IGN0eEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdHhFZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgY29uc3QgY3R4RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3R4RGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAgIGN0eE1lbnUuYXBwZW5kQ2hpbGQoY3R4RWRpdCk7XG4gICAgY3R4TWVudS5hcHBlbmRDaGlsZChjdHhEZWxldGUpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3R4TWVudSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjdHhFZGl0KSB7XG4gICAgICAgICAgICBjb250ZXh0RWRpdChvYmosIGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBjdHhEZWxldGUpIHtcbiAgICAgICAgICAgIGNvbnRleHREZWxldGUob2JqLCBlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eE1lbnUucmVtb3ZlKCk7XG5cbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RWRpdChvYmosIGVsZW1lbnQpIHtcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJykge1xuICAgICAgICBjcmVhdGVUYXNrRm9ybShvYmosIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUHJvamVjdCcpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0ob2JqLCBlbGVtZW50KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY29udGV4dERlbGV0ZShvYmopIHtcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdUYXNrJykge1xuICAgICAgICB0YXNrTGlzdC5yZW1vdmVGcm9tTGlzdChvYmopO1xuICAgICAgICB1cGRhdGVUYXNrcygpO1xuICAgICAgICBzdG9yZUxpc3RzTG9jYWxseSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ1Byb2plY3QnKSB7XG4gICAgICAgIGxldCB0YXNrc1RvQ2xlYW4gPSBnZXRUYXNrc1RvU2hvdygncHJvamVjdCcsIG9iaik7XG4gICAgICAgIHRhc2tzVG9DbGVhbi5mb3JFYWNoKCh0KSA9PiB0LnNldFByb2plY3RJRCgnJykpO1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVGcm9tTGlzdChvYmopO1xuICAgICAgICB1cGRhdGVQcm9qZWN0cygpO1xuXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIHByb2plY3QgYmVpbmcgZGVsZXRlZCBpcyBhY3RpdmUgKGlmIHRoZSB1c2VyIGlzIHZpZXdpbmcgaXQncyB0YXNrcylcbiAgICAgICAgaWYgKG1haW5MYWJlbC5nZXRBdHRyaWJ1dGUoJ3Byak9yRmlsdGVySUQnKSA9PT0gb2JqLmlkKSB7XG4gICAgICAgICAgICByZW5kZXJNYWluQ29udGVudCgnZmlsdGVyJywgZmlsdGVyTGlzdC5nZXREZWZhdWx0KCkpOyAvL3JldmVydCB0byB0aGUgZGVmYXVsdCB2aWV3XG4gICAgICAgIH0gZWxzZSB7IHVwZGF0ZVRhc2tzKCk7IH0gLy9cImVsc2VcIiwgb3RoZXJ3aXNlIGl0IHdpbGwgdXBkYXRlIHRhc2tzIDJ4IChyZW5kZXJNYWluQ29udGVudCBhbHJlYWR5IHVwZGF0ZSB0YXNrcylcblxuICAgICAgICBzdG9yZUxpc3RzTG9jYWxseSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKGV4aXN0aW5nVGFzaywgZWxlbWVudCkge1xuICAgIGxldCB0YXNrSGFzRm9ybSA9IHRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpICE9IG51bGw7XG4gICAgbGV0IHByakhhc0Zvcm0gPSBwcm9qZWN0c1N1YkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSAhPSBudWxsO1xuXG5cbiAgICBpZiAodGFza0hhc0Zvcm0gPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChwcmpIYXNGb3JtKSB7IHByb2plY3RzU3ViQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLnJlbW92ZSgpOyB9XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrKSB7IGZvcm0uc2V0QXR0cmlidXRlKFwiZXhpc3RpbmctdGFza1wiLCBleGlzdGluZ1Rhc2suaWQpOyB9XG5cbiAgICAgICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQubmFtZSA9IFwidGFzay1uYW1lXCI7XG4gICAgICAgIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRhc2sgbmFtZVwiO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRhc2sgZGVzY3JpcHRpb24gKG9wdGlvbmFsKVwiO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHByb2plY3RTZWxlY3QubmFtZSA9IFwicHJvamVjdFNlbGVjdFwiO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmlkID0gXCJwcm9qZWN0U2VsZWN0XCI7XG5cbiAgICAgICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBvcHRpb25zIG9uIHNlbGVjdCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gY3JlYXRlUHJvamVjdE9wdGlvbnMoZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaCh4ID0+IHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoeCkpO1xuXG4gICAgICAgIC8vc2V0IHRoZSBzZWxlY3QgZWxlbWVudCdzIHByb2plY3RJRCBhdHRyaWJ1dGUgdG8gYmUgdGhlIHNhbWUgYXMgdGhlIHNlbGVjdGVkIG9wdGlvbidzXG4gICAgICAgIGNvbnN0IG9wdCA9IHByb2plY3RTZWxlY3Qub3B0aW9ucztcbiAgICAgICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJRCcsIG9wdFtvcHQuc2VsZWN0ZWRJbmRleF0uZ2V0QXR0cmlidXRlKCdwcm9qZWN0SUQnKSk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJRCcsIG9wdFtvcHQuc2VsZWN0ZWRJbmRleF0uZ2V0QXR0cmlidXRlKCdwcm9qZWN0SUQnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cblxuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrKSB7XG4gICAgICAgICAgICB0YXNrTmFtZUlucHV0LnZhbHVlID0gZXhpc3RpbmdUYXNrLm5hbWU7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrLmRlc2NyaXB0aW9uKSB7IGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBleGlzdGluZ1Rhc2suZGVzY3JpcHRpb247IH1cbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2suZGF0ZSkge1xuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdElTTyhleGlzdGluZ1Rhc2suZGF0ZSwgeyByZXByZXNlbnRhdGlvbjogJ2RhdGUnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBleGlzdGluZ1Rhc2sgP1xuICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChmb3JtKSA6XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPcHRpb25zKGV4aXN0aW5nVGFzaykge1xuICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0TGlzdC5nZXRMaXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgb3B0aW9uc1swXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKCdwcm9qZWN0SUQnLCAnJyk7XG4gICAgb3B0aW9uc1swXS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGlzdC5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBvcHRpb25zWyhsaXN0LmluZGV4T2YocCkpICsgMV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uc1sobGlzdC5pbmRleE9mKHApKSArIDFdLnNldEF0dHJpYnV0ZSgncHJvamVjdElEJywgcC5pZCk7XG4gICAgICAgIG9wdGlvbnNbKGxpc3QuaW5kZXhPZihwKSkgKyAxXS50ZXh0Q29udGVudCA9IHAubmFtZTtcbiAgICAgICAgaWYgKGV4aXN0aW5nVGFzayAmJiBvcHRpb25zWyhsaXN0LmluZGV4T2YocCkpICsgMV0uZ2V0QXR0cmlidXRlKCdwcm9qZWN0SUQnKSA9PT0gZXhpc3RpbmdUYXNrLnByb2plY3RJRCkge1xuICAgICAgICAgICAgb3B0aW9uc1sobGlzdC5pbmRleE9mKHApKSArIDFdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zWyhsaXN0LmluZGV4T2YocCkpICsgMV0uZ2V0QXR0cmlidXRlKCdwcm9qZWN0SUQnKSA9PT0gbWFpbkxhYmVsLmdldEF0dHJpYnV0ZSgncHJqT3JGaWx0ZXJJRCcpKSB7XG4gICAgICAgICAgICBvcHRpb25zWyhsaXN0LmluZGV4T2YocCkpICsgMV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKGV4aXN0aW5nUHJvamVjdCwgZWxlbWVudCkge1xuICAgIGxldCBwcmpIYXNGb3JtID0gcHJvamVjdHNTdWJDb250YWluZXIucXVlcnlTZWxlY3RvcihcImZvcm1cIikgIT0gbnVsbDtcbiAgICBsZXQgdGFza0hhc0Zvcm0gPSB0YXNrc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSAhPSBudWxsO1xuXG5cbiAgICBpZiAocHJqSGFzRm9ybSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRhc2tIYXNGb3JtKSB7IHRhc2tzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLnJlbW92ZSgpOyB9XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0KSB7IGZvcm0uc2V0QXR0cmlidXRlKFwiZXhpc3RpbmctcHJvamVjdFwiLCBleGlzdGluZ1Byb2plY3QuaWQpOyB9XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgcHJvamVjdCBuYW1lXCI7XG4gICAgICAgIGlmIChleGlzdGluZ1Byb2plY3QpIHsgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IGV4aXN0aW5nUHJvamVjdC5uYW1lOyB9XG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuXG4gICAgICAgIGV4aXN0aW5nUHJvamVjdCA/XG4gICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGZvcm0pIDpcbiAgICAgICAgICAgIHByb2plY3RzU3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRmlsdGVycygpIHtcbiAgICBmaWx0ZXJMaXN0LmdldExpc3QoKS5mb3JFYWNoKChmKSA9PiBjcmVhdGVGaWx0ZXJFbGVtZW50KGYpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKCkge1xuXG4gICAgLy9yZW1vdmUgYW55IGNvbnRlbnQgZnJvbSBjb250YWluZXJcbiAgICBwcm9qZWN0c1N1YkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIC8vYWRkIHByb2plY3RzIGZyb20gcHJvamVjdExpc3QgYXMgZWxlbWVudHNcbiAgICBwcm9qZWN0TGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgocCkgPT4gY3JlYXRlUHJvamVjdEVsZW1lbnQocCkpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3RhcnRQYWdlKCkge1xuICAgIHRhc2tMaXN0LmdldExvY2FsU3RvcmVkVGFza3MoKTtcbiAgICBwcm9qZWN0TGlzdC5nZXRMb2NhbFN0b3JlZFByb2plY3RzKCk7XG4gICAgc3RvcmVMaXN0c0xvY2FsbHkoKTtcbiAgICByZW5kZXJGaWx0ZXJzKCk7XG4gICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICByZW5kZXJNYWluQ29udGVudCgnZmlsdGVyJywgZmlsdGVyTGlzdC5nZXREZWZhdWx0KCkpO1xufVxuXG4iLCJpbXBvcnQgeyB0YXNrTGlzdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tGb3JtLCB1cGRhdGVQcm9qZWN0cywgYXNzaW5nUHJvamVjdFZhbHVlcywgdXBkYXRlVGFza3MsIHJlbmRlck1haW5Db250ZW50LCBhc3NpbmdUYXNrVmFsdWVzLCBsb2FkU3RhcnRQYWdlIH0gZnJvbSBcIi4vRE9NaGFuZGxpbmdcIjtcbmltcG9ydCB7IHN0b3JlTGlzdHNMb2NhbGx5IH0gZnJvbSBcIi4vbG9jYWxzdG9yYWdlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcnMtY29udGFpbmVyJyk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c1N1YkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1zdWJjb250YWluZXInKTtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RGb3JtKCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IG1haW5MYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxhYmVsJyk7XG5leHBvcnQgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVUYXNrRm9ybSgpO1xufSk7XG5cbnByb2plY3RzU3ViQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChlLnRhcmdldC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXByb2plY3QtbmFtZV0nKS52YWx1ZSkgeyAvL2NoZWNrIGlmIG5hbWUgaW5wdXQgaXMgZmlsbGVkXG4gICAgICAgICAgICBsZXQgcHJqO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmhhc0F0dHJpYnV0ZSgnZXhpc3RpbmctcHJvamVjdCcpID9cbiAgICAgICAgICAgICAgICBwcmogPSBwcm9qZWN0TGlzdC5nZXRMaXN0KCkuZmluZCgocCkgPT4gcC5pZCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpLmdldEF0dHJpYnV0ZSgnZXhpc3RpbmctcHJvamVjdCcpKSA6XG4gICAgICAgICAgICAgICAgcHJqID0gcHJvamVjdExpc3QuY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgYXNzaW5nUHJvamVjdFZhbHVlcyhwcmopO1xuICAgICAgICAgICAgdXBkYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKCk7XG4gICAgICAgICAgICBzdG9yZUxpc3RzTG9jYWxseSgpO1xuXG4gICAgICAgICAgICAvL2lmIHRoaXMgcHJvamVjdCB2aWV3IGlzIG9wZW4sIHVwZGF0ZSB2aWV3IGxhYmVsXG4gICAgICAgICAgICBpZiAobWFpbkxhYmVsLmdldEF0dHJpYnV0ZSgncHJqT3JGaWx0ZXJJRCcpID09PSBwcmouaWQpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJNYWluQ29udGVudCgncHJvamVjdCcsIHByaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIHVwZGF0ZVRhc2tzKCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT10YXNrLW5hbWVdJykudmFsdWUpIHsgLy9jaGVjayBpZiBuYW1lIGlucHV0IGlzIGZpbGxlZFxuICAgICAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJykuaGFzQXR0cmlidXRlKCdleGlzdGluZy10YXNrJykgP1xuICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrTGlzdC5nZXRMaXN0KCkuZmluZCgodCkgPT4gdC5pZCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpLmdldEF0dHJpYnV0ZSgnZXhpc3RpbmctdGFzaycpKSA6XG4gICAgICAgICAgICAgICAgdGFzayA9IHRhc2tMaXN0LmNyZWF0ZVRhc2soKTtcbiAgICAgICAgICAgIGFzc2luZ1Rhc2tWYWx1ZXModGFzayk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrcygpO1xuICAgICAgICAgICAgc3RvcmVMaXN0c0xvY2FsbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cblxubG9hZFN0YXJ0UGFnZSgpO1xuIiwiaW1wb3J0IHsgdGFza0xpc3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vbG9naWNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlTGlzdHNMb2NhbGx5KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zdG9yZWRUYXNrTGlzdCA9IEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0LmdldExpc3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnN0b3JlZFByb2plY3RMaXN0ID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QuZ2V0TGlzdCgpKTtcbn0iLCJpbXBvcnQgeyBhZGQsIGlzQmVmb3JlLCBpc0VxdWFsLCBpc0FmdGVyIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuZXhwb3J0IGNsYXNzIEVudHJ5IHtcbiAgICBnZW5lcmF0ZUlkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpICtcbiAgICAgICAgICAgIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwgaWQsIHByb2plY3RJRCwgZGF0ZSwgZGVzY3JpcHRpb24sIGltcG9ydGFudCwgY29tcGxldGUgfSkge1xuICAgICAgICB0aGlzLmVudHJ5ID0gbmV3IEVudHJ5KCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmVudHJ5LmdlbmVyYXRlSWQoKTtcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5pZCA9IGlkOyB9XG4gICAgICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gaW1wb3J0YW50O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgc2V0Q29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdElEKHByb2plY3RJRCkge1xuICAgICAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgICB9XG5cbiAgICBzZXREYXRlKGQpIHtcbiAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZC5nZXRVVENGdWxsWWVhcigpLCBkLmdldFVUQ01vbnRoKCksIGQuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldEltcG9ydGFudCgpIHtcbiAgICAgICAgdGhpcy5pbXBvcnRhbnQgPSAhdGhpcy5pbXBvcnRhbnQ7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGlkIH0pIHtcbiAgICAgICAgdGhpcy5lbnRyeSA9IG5ldyBFbnRyeSgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5lbnRyeS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIH0gZWxzZSB7IHRoaXMuaWQgPSBpZDsgfVxuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3RNZXRob2RzIHtcbiAgICBnZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgYWRkVG9MaXN0ID0gZnVuY3Rpb24gKGxpc3QsIGVudHJ5KSB7XG4gICAgICAgIGxpc3QucHVzaChlbnRyeSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRnJvbUxpc3QgPSBmdW5jdGlvbiAobGlzdCwgZW50cnkpIHtcbiAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKGVudHJ5KSwgMSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdGFza0xpc3QgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgbGlzdE1ldGhvZHMgPSBuZXcgTGlzdE1ldGhvZHMoKTtcblxuICAgIGxldCBsaXN0ID0gW107XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHt9KTtcbiAgICAgICAgbGlzdE1ldGhvZHMuYWRkVG9MaXN0KGxpc3QsIHRhc2spO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGlzdE1ldGhvZHMuZ2V0TGlzdChsaXN0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVGcm9tTGlzdCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxpc3RNZXRob2RzLnJlbW92ZUZyb21MaXN0KGxpc3QsIHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExvY2FsU3RvcmVkVGFza3MgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnN0b3JlZFRhc2tMaXN0KTtcbiAgICAgICAgICAgIHN0b3JlZExpc3QuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0W3N0b3JlZExpc3QuaW5kZXhPZih4KV0gPSBuZXcgVGFzayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJRDogeC5wcm9qZWN0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB4LmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogeC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudDogeC5pbXBvcnRhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogeC5jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHsgY29uc29sZS5sb2coJ05vIHRhc2sgbGlzdCBmb3VuZCBvbiBsb2NhbCBzdG9yYWdlJyk7IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0TWV0aG9kcyxcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZ2V0TGlzdCxcbiAgICAgICAgcmVtb3ZlRnJvbUxpc3QsXG4gICAgICAgIGdldExvY2FsU3RvcmVkVGFza3MsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RMaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsaXN0TWV0aG9kcyA9IG5ldyBMaXN0TWV0aG9kcygpO1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByaiA9IG5ldyBQcm9qZWN0KHt9KTtcbiAgICAgICAgbGlzdE1ldGhvZHMuYWRkVG9MaXN0KGxpc3QsIHByaik7XG4gICAgICAgIHJldHVybiBwcmo7XG4gICAgfVxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0TWV0aG9kcy5nZXRMaXN0KGxpc3QpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUZyb21MaXN0ID0gKHByaikgPT4ge1xuICAgICAgICBsaXN0TWV0aG9kcy5yZW1vdmVGcm9tTGlzdChsaXN0LCBwcmopO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExvY2FsU3RvcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgc3RvcmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnN0b3JlZFByb2plY3RMaXN0KTtcbiAgICAgICAgICAgIHN0b3JlZExpc3QuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAoeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0W3N0b3JlZExpc3QuaW5kZXhPZih4KV0gPSBuZXcgUHJvamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeC5pZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHsgY29uc29sZS5sb2coJ05vIHByb2plY3QgbGlzdCBmb3VuZCBvbiBsb2NhbCBzdG9yYWdlJyk7IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0TWV0aG9kcyxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0TGlzdCxcbiAgICAgICAgcmVtb3ZlRnJvbUxpc3QsXG4gICAgICAgIGdldExvY2FsU3RvcmVkUHJvamVjdHMsXG4gICAgfVxufSkoKTtcblxuXG5jb25zdCBnZXRBbGxUYXNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgdGFza3MgPSB0YXNrTGlzdC5nZXRMaXN0KCkuZmlsdGVyKCh0KSA9PiAhdC5jb21wbGV0ZSk7XG4gICAgcmV0dXJuIHRhc2tzO1xufTtcblxuY29uc3QgZ2V0SW5ib3hUYXNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgdGFza3MgPSB0YXNrTGlzdC5nZXRMaXN0KCkuZmlsdGVyKCh0KSA9PiAoKHQucHJvamVjdElEID09PSAnJyB8fCB0LnByb2plY3RJRCA9PT0gdW5kZWZpbmVkKSAmJiAhdC5jb21wbGV0ZSkpO1xuICAgIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGdldEltcG9ydGFudFRhc2tzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB0YXNrcztcbiAgICB0YXNrcyA9IHRhc2tMaXN0LmdldExpc3QoKS5maWx0ZXIoKHQpID0+IHQuaW1wb3J0YW50ICYmICF0LmNvbXBsZXRlKTtcbiAgICByZXR1cm4gdGFza3M7XG59O1xuXG5jb25zdCBnZXRUb2RheVRhc2tzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB0YXNrcztcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZShub3cuZ2V0VVRDRnVsbFllYXIoKSwgbm93LmdldFVUQ01vbnRoKCksIG5vdy5nZXRVVENEYXRlKCkpO1xuICAgIHRhc2tzID0gdGFza0xpc3QuZ2V0TGlzdCgpLmZpbHRlcigodCkgPT4gaXNFcXVhbCh0LmRhdGUsIHRvZGF5KSAmJiAhdC5jb21wbGV0ZSk7XG4gICAgcmV0dXJuIHRhc2tzO1xufTtcblxuY29uc3QgZ2V0N0RheXNUYXNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUobm93LmdldFVUQ0Z1bGxZZWFyKCksIG5vdy5nZXRVVENNb250aCgpLCBub3cuZ2V0VVRDRGF0ZSgpKTtcbiAgICBsZXQgbmV4dDhkYXlzID0gYWRkKHRvZGF5LCB7IGRheXM6IDggfSk7XG4gICAgdGFza3MgPSB0YXNrTGlzdC5nZXRMaXN0KCkuZmlsdGVyKCh0KSA9PiAoKGlzQWZ0ZXIodC5kYXRlLCB0b2RheSkgJiYgaXNCZWZvcmUodC5kYXRlLCBuZXh0OGRheXMpKSAmJiAhdC5jb21wbGV0ZSkpO1xuICAgIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IGdldENvbXBsZXRlZFRhc2tzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB0YXNrcztcbiAgICB0YXNrcyA9IHRhc2tMaXN0LmdldExpc3QoKS5maWx0ZXIoKHQpID0+IHQuY29tcGxldGUpO1xuICAgIHJldHVybiB0YXNrcztcbn1cblxuXG5leHBvcnQgY29uc3QgZmlsdGVyTGlzdCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBsaXN0TWV0aG9kcyA9IG5ldyBMaXN0TWV0aG9kcygpO1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICBjb25zdCBjcmVhdGVGaWx0ZXIgPSAobmFtZSwgZmlsdGVyTWV0aG9kKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXIgPSB7fTtcbiAgICAgICAgZmlsdGVyLm5hbWUgPSBuYW1lO1xuICAgICAgICBmaWx0ZXIuZmlsdGVyVGFza3MgPSBmaWx0ZXJNZXRob2Q7XG4gICAgICAgIGxpc3RNZXRob2RzLmFkZFRvTGlzdChsaXN0LCBmaWx0ZXIpO1xuICAgICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH1cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGlzdE1ldGhvZHMuZ2V0TGlzdChsaXN0KTtcbiAgICB9XG4gICAgY29uc3Qgc2V0RGVmYXVsdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgICAgICAgZi5uYW1lID09PSBuYW1lID8gZi5pc0RlZmF1bHQgPSB0cnVlIDogZi5pc0RlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgZ2V0RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxpc3QuZmluZCgoZikgPT4gZi5pc0RlZmF1bHQgPT09IHRydWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcignSW5ib3gnLCBnZXRJbmJveFRhc2tzKTtcbiAgICBjcmVhdGVGaWx0ZXIoJ1RvZGF5JywgZ2V0VG9kYXlUYXNrcyk7XG4gICAgY3JlYXRlRmlsdGVyKCdOZXh0IDcgRGF5cycsIGdldDdEYXlzVGFza3MpO1xuICAgIGNyZWF0ZUZpbHRlcignSW1wb3J0YW50JywgZ2V0SW1wb3J0YW50VGFza3MpO1xuICAgIGNyZWF0ZUZpbHRlcignQWxsIFRhc2tzJywgZ2V0QWxsVGFza3MpO1xuICAgIGNyZWF0ZUZpbHRlcignQ29tcGxldGVkIFRhc2tzJywgZ2V0Q29tcGxldGVkVGFza3MpO1xuXG4gICAgc2V0RGVmYXVsdCgnQWxsIFRhc2tzJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0TWV0aG9kcyxcbiAgICAgICAgZ2V0TGlzdCxcbiAgICAgICAgc2V0RGVmYXVsdCxcbiAgICAgICAgZ2V0RGVmYXVsdCxcbiAgICB9XG5cbn0pKCk7XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcbmltcG9ydCB7IGFkZE1vbnRocyB9IGZyb20gXCIuL2FkZE1vbnRocy5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gZHVyYXRpb24gLSBUaGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxcXFwtN1xuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkKGRhdGUsIGR1cmF0aW9uKSB7XG4gIGNvbnN0IHtcbiAgICB5ZWFycyA9IDAsXG4gICAgbW9udGhzID0gMCxcbiAgICB3ZWVrcyA9IDAsXG4gICAgZGF5cyA9IDAsXG4gICAgaG91cnMgPSAwLFxuICAgIG1pbnV0ZXMgPSAwLFxuICAgIHNlY29uZHMgPSAwLFxuICB9ID0gZHVyYXRpb247XG5cbiAgLy8gQWRkIHllYXJzIGFuZCBtb250aHNcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRhdGVXaXRoTW9udGhzID1cbiAgICBtb250aHMgfHwgeWVhcnMgPyBhZGRNb250aHMoX2RhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogX2RhdGU7XG5cbiAgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG4gIGNvbnN0IGRhdGVXaXRoRGF5cyA9XG4gICAgZGF5cyB8fCB3ZWVrcyA/IGFkZERheXMoZGF0ZVdpdGhNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpIDogZGF0ZVdpdGhNb250aHM7XG5cbiAgLy8gQWRkIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXG4gIGNvbnN0IG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICBjb25zdCBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XG4gIGNvbnN0IG1zVG9BZGQgPSBzZWNvbmRzVG9BZGQgKiAxMDAwO1xuICBjb25zdCBmaW5hbERhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcblxuICByZXR1cm4gZmluYWxEYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZDtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGRNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqXG4gKiAvLyBBZGQgb25lIG1vbnRoIHRvIDMwIEphbnVhcnkgMjAyMzpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDIzLCAwLCAzMCksIDEpXG4gKiAvLz0+IFR1ZSBGZWIgMjggMjAyMyAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9udGhzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIGNvbnN0IGRheU9mTW9udGggPSBfZGF0ZS5nZXREYXRlKCk7XG5cbiAgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuICBjb25zdCBlbmRPZkRlc2lyZWRNb250aCA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgX2RhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoX2RhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICBjb25zdCBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBfZGF0ZS5zZXRGdWxsWWVhcihcbiAgICAgIGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksXG4gICAgICBlbmRPZkRlc2lyZWRNb250aC5nZXRNb250aCgpLFxuICAgICAgZGF5T2ZNb250aCxcbiAgICApO1xuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZE1vbnRocztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuL19saWIvYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0SVNPfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0SVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZSBhY2NvcmRpbmcgdG8gdGhlIElTTyA4NjAxIHN0YW5kYXJkIChodHRwczovL3N1cHBvcnQuc2FzLmNvbS9kb2N1bWVudGF0aW9uL2NkbC9lbi9scmRpY3QvNjQzMTYvSFRNTC9kZWZhdWx0L3ZpZXdlci5odG0jYTAwMzE2OTgxNC5odG0pLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0LiBPcHRpb25zIG1heSBiZSBwYXNzZWQgdG8gY29udHJvbCB0aGUgcGFydHMgYW5kIG5vdGF0aW9ucyBvZiB0aGUgZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyAoaW4gbG9jYS5sIHRpbWUgem9uZSlcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCAobG9jYWwgdGltZSB6b25lIGlzIFVUQyk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MikpXG4gKiAvLz0+ICcyMDE5LTA5LTE4VDE5OjAwOjUyWidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxLCBzaG9ydCBmb3JtYXQgKGxvY2FsIHRpbWUgem9uZSBpcyBVVEMpOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0SVNPKG5ldyBEYXRlKDIwMTksIDgsIDE4LCAxOSwgMCwgNTIpLCB7IGZvcm1hdDogJ2Jhc2ljJyB9KVxuICogLy89PiAnMjAxOTA5MThUMTkwMDUyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTggU2VwdGVtYmVyIDIwMTkgaW4gSVNPIDg2MDEgZm9ybWF0LCBkYXRlIG9ubHk6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXRJU08obmV3IERhdGUoMjAxOSwgOCwgMTgsIDE5LCAwLCA1MiksIHsgcmVwcmVzZW50YXRpb246ICdkYXRlJyB9KVxuICogLy89PiAnMjAxOS0wOS0xOCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDE4IFNlcHRlbWJlciAyMDE5IGluIElTTyA4NjAxIGZvcm1hdCwgdGltZSBvbmx5IChsb2NhbCB0aW1lIHpvbmUgaXMgVVRDKTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdElTTyhuZXcgRGF0ZSgyMDE5LCA4LCAxOCwgMTksIDAsIDUyKSwgeyByZXByZXNlbnRhdGlvbjogJ3RpbWUnIH0pXG4gKiAvLz0+ICcxOTowMDo1MlonXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRJU08oZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoaXNOYU4oX2RhdGUuZ2V0VGltZSgpKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0ID0gb3B0aW9ucz8uZm9ybWF0ID8/IFwiZXh0ZW5kZWRcIjtcbiAgY29uc3QgcmVwcmVzZW50YXRpb24gPSBvcHRpb25zPy5yZXByZXNlbnRhdGlvbiA/PyBcImNvbXBsZXRlXCI7XG5cbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGxldCB0ek9mZnNldCA9IFwiXCI7XG5cbiAgY29uc3QgZGF0ZURlbGltaXRlciA9IGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCB0aW1lRGVsaW1pdGVyID0gZm9ybWF0ID09PSBcImV4dGVuZGVkXCIgPyBcIjpcIiA6IFwiXCI7XG5cbiAgLy8gUmVwcmVzZW50YXRpb24gaXMgZWl0aGVyICdkYXRlJyBvciAnY29tcGxldGUnXG4gIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gXCJ0aW1lXCIpIHtcbiAgICBjb25zdCBkYXkgPSBhZGRMZWFkaW5nWmVyb3MoX2RhdGUuZ2V0RGF0ZSgpLCAyKTtcbiAgICBjb25zdCBtb250aCA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XG4gICAgY29uc3QgeWVhciA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRGdWxsWWVhcigpLCA0KTtcblxuICAgIC8vIHl5eXlNTWRkIG9yIHl5eXktTU0tZGQuXG4gICAgcmVzdWx0ID0gYCR7eWVhcn0ke2RhdGVEZWxpbWl0ZXJ9JHttb250aH0ke2RhdGVEZWxpbWl0ZXJ9JHtkYXl9YDtcbiAgfVxuXG4gIC8vIFJlcHJlc2VudGF0aW9uIGlzIGVpdGhlciAndGltZScgb3IgJ2NvbXBsZXRlJ1xuICBpZiAocmVwcmVzZW50YXRpb24gIT09IFwiZGF0ZVwiKSB7XG4gICAgLy8gQWRkIHRoZSB0aW1lem9uZS5cbiAgICBjb25zdCBvZmZzZXQgPSBfZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgY29uc3QgYWJzb2x1dGVPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICAgICAgY29uc3QgaG91ck9mZnNldCA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic29sdXRlT2Zmc2V0IC8gNjApLCAyKTtcbiAgICAgIGNvbnN0IG1pbnV0ZU9mZnNldCA9IGFkZExlYWRpbmdaZXJvcyhhYnNvbHV0ZU9mZnNldCAlIDYwLCAyKTtcbiAgICAgIC8vIElmIGxlc3MgdGhhbiAwLCB0aGUgc2lnbiBpcyArLCBiZWNhdXNlIGl0IGlzIGFoZWFkIG9mIHRpbWUuXG4gICAgICBjb25zdCBzaWduID0gb2Zmc2V0IDwgMCA/IFwiK1wiIDogXCItXCI7XG5cbiAgICAgIHR6T2Zmc2V0ID0gYCR7c2lnbn0ke2hvdXJPZmZzZXR9OiR7bWludXRlT2Zmc2V0fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR6T2Zmc2V0ID0gXCJaXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaG91ciA9IGFkZExlYWRpbmdaZXJvcyhfZGF0ZS5nZXRIb3VycygpLCAyKTtcbiAgICBjb25zdCBtaW51dGUgPSBhZGRMZWFkaW5nWmVyb3MoX2RhdGUuZ2V0TWludXRlcygpLCAyKTtcbiAgICBjb25zdCBzZWNvbmQgPSBhZGRMZWFkaW5nWmVyb3MoX2RhdGUuZ2V0U2Vjb25kcygpLCAyKTtcblxuICAgIC8vIElmIHRoZXJlJ3MgYWxzbyBkYXRlLCBzZXBhcmF0ZSBpdCB3aXRoIHRpbWUgd2l0aCAnVCdcbiAgICBjb25zdCBzZXBhcmF0b3IgPSByZXN1bHQgPT09IFwiXCIgPyBcIlwiIDogXCJUXCI7XG5cbiAgICAvLyBDcmVhdGVzIGEgdGltZSBzdHJpbmcgY29uc2lzdGluZyBvZiBob3VyLCBtaW51dGUsIGFuZCBzZWNvbmQsIHNlcGFyYXRlZCBieSBkZWxpbWl0ZXJzLCBpZiBkZWZpbmVkLlxuICAgIGNvbnN0IHRpbWUgPSBbaG91ciwgbWludXRlLCBzZWNvbmRdLmpvaW4odGltZURlbGltaXRlcik7XG5cbiAgICAvLyBISG1tc3Mgb3IgSEg6bW06c3MuXG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fSR7c2VwYXJhdG9yfSR7dGltZX0ke3R6T2Zmc2V0fWA7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdElTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0gZGF0ZVRvQ29tcGFyZSAtIFRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICpcbiAqIEByZXR1cm5zIFRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQWZ0ZXIobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBfZGF0ZS5nZXRUaW1lKCkgPiBfZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNBZnRlcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNFcXVhbFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGVxdWFsP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGVxdWFsXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIEp1bHkgMjAxNCAwNjozMDo0NS4wMDAgYW5kIDIgSnVseSAyMDE0IDA2OjMwOjQ1LjUwMCBlcXVhbD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzRXF1YWwoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDMwLCA0NSwgNTAwKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChsZWZ0RGF0ZSwgcmlnaHREYXRlKSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShsZWZ0RGF0ZSk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUocmlnaHREYXRlKTtcbiAgcmV0dXJuICtfZGF0ZUxlZnQgPT09ICtfZGF0ZVJpZ2h0O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRXF1YWw7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=