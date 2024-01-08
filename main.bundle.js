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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/background.png */ "./src/Images/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

:root{
    font-family: monospace;
    font-smooth: never;
    -webkit-font-smoothing : none;
    --green : #41FF00;
    --text-glow: 0.01em 0.01em 0.01em rgb(202, 255, 103), 0 0 0.1em blue, 0 0 0.2em rgb(255, 53, 53);
    --border-glow: inset 0.01em 0.01em 0.01em rgb(202, 255, 103), inset 0 0 0.1em blue, inset 0 0 0.2em rgb(255, 53, 53);
}

html {
    box-sizing: border-box; 
}
    
*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    
    
}

#overlay {
    position: fixed; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) repeat;
    opacity: 0.3;
    mix-blend-mode: hard-light;
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    pointer-events: none;
  }

#gameOver{
    position: fixed; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) repeat;
    opacity: 0.85;
    mix-blend-mode: hard-light;
    z-index: 4; /* Specify a stack order in case you're using a different order for other elements */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    text-shadow: var(--text-glow);
    /* Add a pointer on hover */
    transition: 1s;
}

#gameOver .top{
    text-align: center;
}



#gameOver.hidden{
    display: none;
}

#gameSetup{
    position: fixed; /* Sit on top of the page content */
    display: flex; /* Hidden by default */
    flex-direction: column;
    justify-content: space-around;
    width: 60%; /* Full width (cover the whole page) */
    height: 100vh; /* Full height (cover the whole page) */
    background: black;
    top: 0;
    left: 40;
    right: 0;
    bottom: 0;
    opacity: 1;
    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
    padding: 4rem;
    gap: 1rem;
}

#gameSetup .top{
    display: flex; /* Hidden by default */
    flex-direction: column;
    justify-content: space-around;
    width: 100%; /* Full width (cover the whole page) */
    gap: 1rem;
    margin-bottom: auto;
}

#gameSetup .bottom{
    display: flex; /* Hidden by default */
    flex-direction: column;
    justify-content: space-around;
    width: 100%; /* Full width (cover the whole page) */
    gap: 1rem;
    margin-top: auto;
}

#gameSetup .ship{
    margin: auto;
    margin-top: 25%;
    font-size: 4rem;
}

#gameSetup.hidden{
    display: none;
}

body{
    background-color: black;
    color: var(--green);
    text-shadow: var(--text-glow);
}

header, footer{
    height: 3rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}

main{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
}

.gameContainer{
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 8fr 1fr 8fr;
    place-items: center;
    /* background-color: red; */
    height: 80vh;
    /* margin-bottom: auto; */
    margin: auto;
}

.player-container{
    height: 100%;
    width: 100%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
}

.player-container h1{
    text-align:center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.player-container> .board-container{
    display: grid;
    align-self: center;
    grid-template-columns: repeat(10, 1fr);
    width: 65%;
    aspect-ratio: 1;
    /* background-color: purple; */
}

.board-container>div{
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    aspect-ratio: 1;
    outline: var(--green) 1px dashed;
    box-shadow: var(--border-glow);
    margin: 0;
    padding: 0;
    transition: 0.1s;
}

.board-container .filled{
    background-color: var(--green);
}
#left-board .hit{
    background-color: var(--green);
}

#left-board .hit::after{
    content: 'X';
    color: black;
    /* background-color: red; */
}

#right-board .hit::after{
    content: 'X';
    color: var(--text-glow);
    /* background-color: red; */
}

.missed::after{
    content: '-';
    color: var(--green);
    text-shadow: var(--text-glow);
}

.board-container>div:hover{
    background-color: var(--green);
    cursor: pointer;


}

.ship-container, .global-status{
    width: 65%;
    text-align: center;
    margin: auto;
    font-size: 1rem;
    margin-top: 2rem;
}

.ship-container .ship-list{
    
    display: grid;  
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    gap: 1rem;
    
}

.ship-list{
    margin-top: 1rem;
    font-size: 2.5rem
}

.ship{
    padding: 0rem 1rem;
    outline: 1px dashed var(--green);
}


.game-status{
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-between;
    align-items: center;
}

.game-status>ul{
    /* background-color: red; */

    height: 50vh;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    list-style-type: none;
}
.game-status li h1{
    font-size: 2rem;
    outline: 1px var(--green) dashed;
    margin: 1rem;
    padding: 0.5rem;

}


.game-status>li{
    margin-top: 5rem;
}

button{
    background: none;
    border: none;
    outline: 1px dashed var(--green);
    color: var(--green);
    text-shadow: var(--text-glow);
    box-shadow: var(--border-glow);
    font-size: 2rem;
    padding: 1rem;
    font-family: inherit;
    
}

button:hover{
    transition: 0.3s;
    cursor: pointer;
    background-color: var(--green);
    color: black;
    text-shadow: none;
}

hr{
    border: none;
    border-bottom: 1px dashed var(--green);
    margin-bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n:root{\r\n    font-family: monospace;\r\n    font-smooth: never;\r\n    -webkit-font-smoothing : none;\r\n    --green : #41FF00;\r\n    --text-glow: 0.01em 0.01em 0.01em rgb(202, 255, 103), 0 0 0.1em blue, 0 0 0.2em rgb(255, 53, 53);\r\n    --border-glow: inset 0.01em 0.01em 0.01em rgb(202, 255, 103), inset 0 0 0.1em blue, inset 0 0 0.2em rgb(255, 53, 53);\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box; \r\n}\r\n    \r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    \r\n}\r\n\r\n#overlay {\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: block; /* Hidden by default */\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    height: 100%; /* Full height (cover the whole page) */\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('./Images/background.png') repeat;\r\n    opacity: 0.3;\r\n    mix-blend-mode: hard-light;\r\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\r\n    cursor: pointer; /* Add a pointer on hover */\r\n    pointer-events: none;\r\n  }\r\n\r\n#gameOver{\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: block; /* Hidden by default */\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    height: 100%; /* Full height (cover the whole page) */\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('./Images/background.png') repeat;\r\n    opacity: 0.85;\r\n    mix-blend-mode: hard-light;\r\n    z-index: 4; /* Specify a stack order in case you're using a different order for other elements */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    text-shadow: var(--text-glow);\r\n    /* Add a pointer on hover */\r\n    transition: 1s;\r\n}\r\n\r\n#gameOver .top{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#gameOver.hidden{\r\n    display: none;\r\n}\r\n\r\n#gameSetup{\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 60%; /* Full width (cover the whole page) */\r\n    height: 100vh; /* Full height (cover the whole page) */\r\n    background: black;\r\n    top: 0;\r\n    left: 40;\r\n    right: 0;\r\n    bottom: 0;\r\n    opacity: 1;\r\n    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */\r\n    padding: 4rem;\r\n    gap: 1rem;\r\n}\r\n\r\n#gameSetup .top{\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    gap: 1rem;\r\n    margin-bottom: auto;\r\n}\r\n\r\n#gameSetup .bottom{\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    gap: 1rem;\r\n    margin-top: auto;\r\n}\r\n\r\n#gameSetup .ship{\r\n    margin: auto;\r\n    margin-top: 25%;\r\n    font-size: 4rem;\r\n}\r\n\r\n#gameSetup.hidden{\r\n    display: none;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n}\r\n\r\nheader, footer{\r\n    height: 3rem; \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.gameContainer{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 8fr 1fr 8fr;\r\n    place-items: center;\r\n    /* background-color: red; */\r\n    height: 80vh;\r\n    /* margin-bottom: auto; */\r\n    margin: auto;\r\n}\r\n\r\n.player-container{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* background-color: blue; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding: 2rem;\r\n}\r\n\r\n.player-container h1{\r\n    text-align:center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.player-container> .board-container{\r\n    display: grid;\r\n    align-self: center;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 65%;\r\n    aspect-ratio: 1;\r\n    /* background-color: purple; */\r\n}\r\n\r\n.board-container>div{\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    aspect-ratio: 1;\r\n    outline: var(--green) 1px dashed;\r\n    box-shadow: var(--border-glow);\r\n    margin: 0;\r\n    padding: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.board-container .filled{\r\n    background-color: var(--green);\r\n}\r\n#left-board .hit{\r\n    background-color: var(--green);\r\n}\r\n\r\n#left-board .hit::after{\r\n    content: 'X';\r\n    color: black;\r\n    /* background-color: red; */\r\n}\r\n\r\n#right-board .hit::after{\r\n    content: 'X';\r\n    color: var(--text-glow);\r\n    /* background-color: red; */\r\n}\r\n\r\n.missed::after{\r\n    content: '-';\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n}\r\n\r\n.board-container>div:hover{\r\n    background-color: var(--green);\r\n    cursor: pointer;\r\n\r\n\r\n}\r\n\r\n.ship-container, .global-status{\r\n    width: 65%;\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.ship-container .ship-list{\r\n    \r\n    display: grid;  \r\n    grid-template-columns: repeat(3,1fr);\r\n    place-items: center;\r\n    gap: 1rem;\r\n    \r\n}\r\n\r\n.ship-list{\r\n    margin-top: 1rem;\r\n    font-size: 2.5rem\r\n}\r\n\r\n.ship{\r\n    padding: 0rem 1rem;\r\n    outline: 1px dashed var(--green);\r\n}\r\n\r\n\r\n.game-status{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 80vh;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.game-status>ul{\r\n    /* background-color: red; */\r\n\r\n    height: 50vh;\r\n    width: 10rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    list-style-type: none;\r\n}\r\n.game-status li h1{\r\n    font-size: 2rem;\r\n    outline: 1px var(--green) dashed;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n\r\n}\r\n\r\n\r\n.game-status>li{\r\n    margin-top: 5rem;\r\n}\r\n\r\nbutton{\r\n    background: none;\r\n    border: none;\r\n    outline: 1px dashed var(--green);\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n    box-shadow: var(--border-glow);\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n    font-family: inherit;\r\n    \r\n}\r\n\r\nbutton:hover{\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    background-color: var(--green);\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nhr{\r\n    border: none;\r\n    border-bottom: 1px dashed var(--green);\r\n    margin-bottom: 1rem;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/gameComponents/boardHandler.js":
/*!********************************************!*\
  !*** ./src/gameComponents/boardHandler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class GameBoard{
    constructor(){
        this.board = new Array(100).fill(0)
    }

    resetGameBoard(){
        this.board = Array(100).fill(0)
    }


    validPlacement(ship, index, direction){
        let placement = false
        if(direction === 'h'){
            placement = index%10+ship.length<=10 ? true : false
            if(placement){
                for(let i=0; i<ship.length; i++){
                    if(this.board[index+i] !== 0){
                        placement = false
                        break
                    }
                }
            }
        }else if(direction === 'v'){
            placement = index +10*ship.length-10<100 ? true : false
            if(placement){
                for(let i=0; i<ship.length; i++){
                    if(this.board[index+i*10] !== 0){
                        placement = false
                        break
                    }
                }
            }
        }
        return placement
    }

    // can place anywhere but should require validPlacement before used
    placeShip(ship, index, direction){
        if(direction === 'h'){
            for(let i=0; i<ship.length; i++){
                this.board[index+i] = 1
            }
        }else if(direction === 'v'){
            for(let i=0; i<ship.length; i++){
                this.board[index+i*10] = 1
            }
        }

    }

    receiveAttack(index){
        if(this.board.indexOf(0)!==-1){
            if(this.board[index]===1){
                this.board[index]=-1
                console.log("Hit")
                return true
            }else if(this.board[index]===0){
                this.board[index]=-2
                console.log("Missed")
                return false
            }
        }return false
    }

    checkAllSunk(){
        if(this.board.indexOf(1) === -1){
            console.log('All ship has sunk')
            return true
        }else{
            console.log('there are still ships hiding')
            return false
        }
    }


    printBoard(){
        let prev = 0
        let text = ``
        for(let i =1; i<11; i++){
            text += this.board.slice(prev, i*10).join(" ") +'\n'
            prev +=10
        }
        console.log(text)
    }
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);

/***/ }),

/***/ "./src/gameComponents/displayer.js":
/*!*****************************************!*\
  !*** ./src/gameComponents/displayer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = () =>{

    let turn = 0
    let remaining = 17
    let lastAttack1 = '--'
    let lastAttack2 = '--'
    let battleStatus = 'attack'
    let totalTurns = 0
    let totalGames = 0
    let totalHits = 0
    let totalShots = 0
    let totalWin = 0

    let placementCount = 1

    const resetScore = () => {
        turn = 0
        remaining = 17
        lastAttack1 = '--'
        lastAttack2 = '--'
        battleStatus = 'attack'
    }

    const gridCreator = (player) =>{
        let div = ``
        for(let i =0; i<100; i++){
            div += `<div id='${player}${i}'></div>`
        }
        return div
    }

    const initialRender =()=>{
        const main = document.querySelector('main')
        main.innerHTML = `
        <header><h1>BATTLESHIP</h1></header>
        <article class="gameContainer">

            <section class="player-container player-left">
                <h1>You</h1>
                <div class="board-container left" id="left-board">
                    ${gridCreator('a')}
                </div>
                <div class="ship-container">
                    <div class="ship-title"><h2>Your Ships</h2></div>
                    <hr>
                    <div class="ship-list">
                        <div id="ship1" class="ship">##</div>
                        <div id="ship2" class="ship">###</div>
                        <div id="ship3" class="ship">###</div>
                        <div id="ship4" class="ship">####</div>
                        <div id="ship5" class="ship">#####</div>
                    </div>
                </div>
            </section>

            <section class="game-status middle">
                <ul class="currrent-status">
                    <li class="status-container" id="turn">
                        <h2>Turn</h2>
                        <h1>${turn}</h1>
                    </li>
                    <li class="status-container" id="remaining">
                        <h2>remaining</h2>
                        <h1>${remaining}</h1>
                    </li>
                    <li class="status-container" id="attack-p1">
                        <h2>Last Attack: You</h2>
                        <h1>${lastAttack1}</h1>
                    </li>
                    <li class="status-container" id="attack-p2">
                        <h2>Last Attack: Enemy</h2>
                        <h1>${lastAttack2}</h1>
                    </li>
                    <li class="status-container" id="Battle-Status">
                        <h2>Battle Status</h2>
                        <h1>${battleStatus}</h1>
                    </li>
                </ul>
                <button id="reset">Reset</button>
            </section>

            <section class="player-container player-right">
                <h1>Enemy</h1>
                <div class="board-container right" id="right-board">
                    ${gridCreator('b')}
                </div>
                <div class="global-status">
                    <div>
                        <h2>status:</h2>
                    </div>
                    <hr>
                    <div class="global-status-grid">
                        <h3 id="game-count">Number of Games: ${totalGames}</h3>
                        <h3 id="sunk-count">Number of Times Hit: ${totalHits}</h3>
                        <h3 id="win-count">Number of Games Won: ${totalWin}</h3>
                        <h3 id="shot-count">Number of Shots Fired: ${totalShots}</h3>
                    </div>

                </div>
            </section>
            </section>
        </article>
        <footer><h1></h1></footer>    
        `
    }


    const placementOverlayRender = (placementCount, ship)=>{
        if(ship){
            const placementOverlay = document.querySelector('#gameSetup .top')
            placementOverlay.innerHTML = `
                <h1>Please Organize Your Ships: ${placementCount++}/5</h1>
                <h2>To place the Current Ship, Hover Over the Grid and Left Click.</h2>
                <h2>Game Will Start Automatically Once All Ships are Placed.</h2>
                <br>
                <hr>
                <h2>You Are Currently Placing:</h2>
                <h1 class="ship">${'#'.repeat(ship.length)}</h1>
            `
        }
    }

    const placementRender = (player, shipList, shipCount)=>{
        let ship = shipList[shipCount]
        let shipPlaced = 1
        const playerBoard = document.querySelector('#left-board')
        generateUserBoard(player)
        
        if(shipCount >= 0){
            const rotate = document.querySelector('#rotate')
            let rotation = 'h'
            rotate.addEventListener('click', e=>{
                e.stopPropagation
                rotation = rotation === 'h' ? 'v' : 'h'
                const currentShip = document.querySelector('#gameSetup .ship')
                // currentShip.innerHTML = rotation ==='h' ? `${'#'.repeat(ship.length)}` : `${'#<br>'.repeat(ship.length)}`
                currentShip.innerHTML = `${'#'.repeat(ship.length)}`
            })

            const randomPlacement = document.querySelector('#random-placement')
            randomPlacement.addEventListener('click', e=>{
                player.resetBoard()
                player.randomPlacement()
                const placementOverlay = document.querySelector('#gameSetup')
                    placementOverlay.classList.add('hidden')
                    console.log('done')
                shipCount = -1
                player.board.printBoard()
                generateUserBoard(player)
                return

            })

            playerBoard.childNodes.forEach(box => {
                box.addEventListener('mouseover', function hoverHandler(e){
                    if(shipCount >= 0){
                        let index = String(e.target.id).slice(1)
                        if(player.board.validPlacement(ship,Number(index),rotation)){
                            indicator(player, ship,Number(index),rotation)
                        }else{
                            indicatorOff(player, ship,Number(index),rotation)
                        }
                    }
                })
                box.addEventListener('click', function clickHandler(e){
                    if(shipCount >= 0){
                        let index = String(e.target.id).slice(1)
                        if(player.board.validPlacement(ship,Number(index),rotation)){
                            player.chosenPlacement(ship,Number(index),rotation)
                            // box.removeEventListener('click', clickHandler(e))
                           
                            ship = shipList[--shipCount]
                            shipPlaced++
                            if(shipCount >= 0){
                                placementOverlayRender(shipPlaced, ship)
                            }else{
                                const placementOverlay = document.querySelector('#gameSetup')
                                placementOverlay.classList.add('hidden')
                                console.log('done')
                            }
                        }
                    }
                    
                })
                })
            }

    }

    function indicatorOff(player, ship, index, rotation){
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(e => {
            if(player.board.board[Number(String(e.id).slice(1))] == 0){
                e.className = ''
            }
        })
    }

    function indicator(player, ship, index, rotation){
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(e => {
            if(player.board.board[Number(String(e.id).slice(1))] == 0){
                e.className = ''
            }
        })
        if(rotation === 'h' && player.board.validPlacement(ship,index,rotation)){
                for(let i=0; i<ship.length; i++){
                    playerBoard.childNodes[index+i+1].className = 'filled'
                    
                }
        }else if(rotation === 'v'){
                for(let i=0; i<ship.length; i++){
                    playerBoard.childNodes[index+i*10+1].className = 'filled'
                }
        }


    }

    const statusUpdate = () =>{
        // Middle Status
        const currentTurn = document.querySelector('#turn h1')
        currentTurn.textContent = turn
        const currentRemaining = document.querySelector('#remaining h1')
        currentRemaining.textContent = remaining
        const playerAttack = document.querySelector('#attack-p1 h1')
        playerAttack.textContent = lastAttack1
        const enemyAttack = document.querySelector('#attack-p2 h1')
        enemyAttack.textContent = lastAttack2
        const currentBattle = document.querySelector('#Battle-Status h1')
        currentBattle.textContent = battleStatus
        // Global Status
        const globalStatus = document.querySelector('.global-status-grid')
        globalStatus.innerHTML = `
            <h3 id="game-count">Number of Games: ${totalGames}</h3>
            <h3 id="sunk-count">Number of Times Hit: ${totalHits}</h3>
            <h3 id="win-count">Number of Games Won: ${totalWin}</h3>
            <h3 id="shot-count">Number of Shots Fired: ${totalShots}</h3>
        `
    }

    const generateUserBoard = (player) => {
        const playerBoard = document.querySelector('#left-board')
        playerBoard.childNodes.forEach(box => {
            let loc = String(box.id).slice(1)
            if(loc){
                if(player.board.board[loc] === 1){
                    box.className = 'filled'   
                }else if(player.board.board[loc] === -1){
                    box.classList.add('hit')
                }else if(player.board.board[loc] === -2){
                    box.className = 'missed' 
                }else{
                    box.className = ''
                }
            }
        });
    }

    const generateEnemyBoard = (player)=>{
        const enemyBoard = document.querySelector('#right-board')
        enemyBoard.childNodes.forEach(box => {
            let loc = String(box.id).slice(1)
            if(loc){
                if(player.enemyBoard[loc] === -1){
                    box.className = 'hit'   
                }else if(player.enemyBoard[loc] === -2){
                    box.classList.add('missed')
                }else{
                    box.className = ''
                }
            }
        })

    }

    const gameOverOverlay = (victory=true, player, enemy)=>{
        const overOverlay = document.querySelector('#gameOver')
        console.log(overOverlay)
        overOverlay.className = ''
        const overOverlayScore = document.querySelector('#gameOver .top')
        overOverlayScore.innerHTML = `
            <h4>YOU ${victory? 'WON' : 'LOST'} IN</h4>
            <h1>${turn} Turns</h1>
            <h4>Play Again?</h4>
            <br>
        `
        

    }


    

    const enemyBoardEvent = (player, enemy)=>{
        const enemyBoard = document.querySelector('#right-board')
        enemyBoard.childNodes.forEach(box => {
                box.addEventListener('click', e =>{
                     console.log(turn)
                    e.stopPropagation
                    if(player){
                        let coordinate =  String(e.target.id).slice(1)
                        let [attack, attackStatus] = player.hitEnemy(coordinate, enemy)
                        if(attack){
                            lastAttack1 = attackStatus
                            generateEnemyBoard(player)
                            if(enemy.randomHitEasy(player)){
                                totalHits++
                                lastAttack2 = 'Hit'
                            }else{
                                lastAttack2 = 'Missed'
                            }
                            generateUserBoard(player)
                            turn++
                            totalShots++
                            remaining = enemy.hp
                            statusUpdate()
                        }
                        if(enemy.hp===0  || turn ===100){
                            console.log('game Finished')
                            gameOverOverlay(true, player, enemy)
                            totalGames++
                            totalWin++
                            remaining = 17
                        }else if(player.hp===0){
                            console.log('game Finished')
                            gameOverOverlay(false, player, enemy)
                            totalGames++
                            remaining = 17
                        }
                        
                    }
                })
            }
        )

    }


    


 return {initialRender, generateUserBoard, generateEnemyBoard, statusUpdate, enemyBoardEvent, placementRender, resetScore}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/gameComponents/playerHandler.js":
/*!*********************************************!*\
  !*** ./src/gameComponents/playerHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boardHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardHandler */ "./src/gameComponents/boardHandler.js");
/* harmony import */ var _shipHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipHandler */ "./src/gameComponents/shipHandler.js");




class Player{
    static #play = 0
    static #updatePlayerCount (){
        Player.#play+=1}

    constructor(){
        this.player = Player.#play
        Player.#updatePlayerCount()
        this.board = new _boardHandler__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.enemyBoard = new Array(100).fill(0)
        this.shipList = [new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](5),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](4),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](3),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](3),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](2)]
        this.score=0
        this.hp = 17
        this.turn = false
    }

    changeTurn(){this.turn ? this.turn = false : this.turn = true}

    resetBoard(){
        this.board.resetGameBoard()
        this.enemyBoard = Array(100).fill(0)
        this.shipList = [new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](5),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](4),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](3),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](3),new _shipHandler__WEBPACK_IMPORTED_MODULE_1__["default"](2)]
        this.hp = 17
        this.turn = false
    }


    randomPlacement(){
        for(let ship of this.shipList){
            let placed = false
            while(!placed){
                let placement_index = Math.floor(Math.random() * 100)
                let placement_direction = Math.floor(Math.random() * 2) ? 'h' : 'v'
                if(this.board.validPlacement(ship, placement_index, placement_direction)){
                    this.board.placeShip(ship, placement_index, placement_direction)
                    placed = true
                }
            }
        }
        console.log('all ships have been placed')
    }

    chosenPlacement(ship, index, direction){
        if(this.board.validPlacement(ship, index, direction)){
            this.board.placeShip(ship, index, direction)
            console.log('placed')
        }
    }


    randomHitEasy(enemy){
        if(this.enemyBoard.indexOf(0)!==-1 && !enemy.board.checkAllSunk()){
            let currentHit = false
            while(!currentHit){
                let hitIndex = Math.floor(Math.random() * 100)
                if(this.enemyBoard[hitIndex]===0){
                    currentHit = true
                    this.enemyBoard[hitIndex] = enemy.board.receiveAttack(hitIndex) ? -1 : -2
                    if(this.enemyBoard[hitIndex] === -1){
                        enemy.hp = enemy.hp-1
                        return true
                    }
                }
            }   
        }
    }

    hitEnemy(coordinate, enemy){
        console.log('attacked', coordinate)
        if(this.enemyBoard.indexOf(0)!==-1 && !enemy.board.checkAllSunk()){
            let hitIndex = coordinate
            if(this.enemyBoard[hitIndex]===0){
                if(enemy.board.receiveAttack(hitIndex)){
                    this.enemyBoard[hitIndex] = -1
                    enemy.hp -=1
                    return[true, 'Hit']
                }else{
                    this.enemyBoard[hitIndex] = -2
                    return [true, 'Missed']
                }
                
            }
            
        }
        return [false, '--']

    }

}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/gameComponents/shipHandler.js":
/*!*******************************************!*\
  !*** ./src/gameComponents/shipHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {

    constructor(length, hitCount=0, sunk=false){
        this.length = length
        this.hitCount = hitCount
        this.sunk = sunk
    }

    isHit(){++this.hitCount}

    isSunk(){
        this.length <= this.hitCount ? this.sunk=true : this.sunk=false
        return this.sunk
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/Images/background.png":
/*!***********************************!*\
  !*** ./src/Images/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b6e66409b37f30fa478.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameComponents_shipHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameComponents/shipHandler */ "./src/gameComponents/shipHandler.js");
/* harmony import */ var _gameComponents_boardHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameComponents/boardHandler */ "./src/gameComponents/boardHandler.js");
/* harmony import */ var _gameComponents_playerHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameComponents/playerHandler */ "./src/gameComponents/playerHandler.js");
/* harmony import */ var _gameComponents_displayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameComponents/displayer */ "./src/gameComponents/displayer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


 



let p1 = new _gameComponents_playerHandler__WEBPACK_IMPORTED_MODULE_2__["default"]()
let p2 = new _gameComponents_playerHandler__WEBPACK_IMPORTED_MODULE_2__["default"]()
let dom = (0,_gameComponents_displayer__WEBPACK_IMPORTED_MODULE_3__["default"])()
dom.initialRender()

const playAgain = document.querySelector('#play-again')

playAgain.addEventListener('click', e => {
    dom.resetScore()
    const overOverlay = document.querySelector('#gameOver')
    p1.resetBoard();
    p2.resetBoard();
    p2.randomPlacement()

    dom.generateUserBoard(p1)
    dom.generateEnemyBoard(p1)
    
    dom.statusUpdate()

    overOverlay.classList.toggle('hidden')
    const placementOverlay = document.querySelector('#gameSetup')
    placementOverlay.classList.toggle('hidden')
    dom.enemyBoardEvent(p1, p2)
    dom.placementRender(p1, p1.shipList, 4)
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', e =>{
    window.location.reload()
})



// dom.placementRender(p1, p1.shipList, 4)





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9nYW1lQ29tcG9uZW50cy9ib2FyZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL2dhbWVDb21wb25lbnRzL2Rpc3BsYXllci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvZ2FtZUNvbXBvbmVudHMvcGxheWVySGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvZ2FtZUNvbXBvbmVudHMvc2hpcEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSW1hZ2VzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcclxuXHJcbjpyb290e1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc21vb3RoOiBuZXZlcjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmcgOiBub25lO1xyXG4gICAgLS1ncmVlbiA6ICM0MUZGMDA7XHJcbiAgICAtLXRleHQtZ2xvdzogMC4wMWVtIDAuMDFlbSAwLjAxZW0gcmdiKDIwMiwgMjU1LCAxMDMpLCAwIDAgMC4xZW0gYmx1ZSwgMCAwIDAuMmVtIHJnYigyNTUsIDUzLCA1Myk7XHJcbiAgICAtLWJvcmRlci1nbG93OiBpbnNldCAwLjAxZW0gMC4wMWVtIDAuMDFlbSByZ2IoMjAyLCAyNTUsIDEwMyksIGluc2V0IDAgMCAwLjFlbSBibHVlLCBpbnNldCAwIDAgMC4yZW0gcmdiKDI1NSwgNTMsIDUzKTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxufVxyXG4gICAgXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuI292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XHJcbiAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiNnYW1lT3ZlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIHJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcclxuICAgIHotaW5kZXg6IDQ7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtZ2xvdyk7XHJcbiAgICAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuI2dhbWVPdmVyIC50b3B7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuI2dhbWVPdmVyLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNnYW1lU2V0dXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xyXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiA2MCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA0MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDM7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNnYW1lU2V0dXAgLnRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4jZ2FtZVNldHVwIC5ib3R0b217XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuI2dhbWVTZXR1cCAuc2hpcHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuI2dhbWVTZXR1cC5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtZ2xvdyk7XHJcbn1cclxuXHJcbmhlYWRlciwgZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAzcmVtOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2FtZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmciA4ZnI7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogYXV0bzsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBsYXllci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLnBsYXllci1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wbGF5ZXItY29udGFpbmVyPiAuYm9hcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cclxufVxyXG5cclxuLmJvYXJkLWNvbnRhaW5lcj5kaXZ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIG91dGxpbmU6IHZhcigtLWdyZWVuKSAxcHggZGFzaGVkO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLWdsb3cpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuXHJcbi5ib2FyZC1jb250YWluZXIgLmZpbGxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG4jbGVmdC1ib2FyZCAuaGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG59XHJcblxyXG4jbGVmdC1ib2FyZCAuaGl0OjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdYJztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuI3JpZ2h0LWJvYXJkIC5oaXQ6OmFmdGVye1xyXG4gICAgY29udGVudDogJ1gnO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ2xvdyk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbn1cclxuXHJcbi5taXNzZWQ6OmFmdGVye1xyXG4gICAgY29udGVudDogJy0nO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyPmRpdjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4uc2hpcC1jb250YWluZXIsIC5nbG9iYWwtc3RhdHVze1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5zaGlwLWNvbnRhaW5lciAuc2hpcC1saXN0e1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBncmlkOyAgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zaGlwLWxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW1cclxufVxyXG5cclxuLnNoaXB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuXHJcbi5nYW1lLXN0YXR1c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtc3RhdHVzPnVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG5cclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmdhbWUtc3RhdHVzIGxpIGgxe1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgb3V0bGluZTogMXB4IHZhcigtLWdyZWVuKSBkYXNoZWQ7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG59XHJcblxyXG5cclxuLmdhbWUtc3RhdHVzPmxpe1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLWdsb3cpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgXHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixnR0FBZ0c7SUFDaEcsb0hBQW9IO0FBQ3hIOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVOzs7QUFHZDs7QUFFQTtJQUNJLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDBEQUFpRDtJQUNqRCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFVBQVUsRUFBRSxvRkFBb0Y7SUFDaEcsZUFBZSxFQUFFLDJCQUEyQjtJQUM1QyxvQkFBb0I7RUFDdEI7O0FBRUY7SUFDSSxlQUFlLEVBQUUsbUNBQW1DO0lBQ3BELGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxZQUFZLEVBQUUsdUNBQXVDO0lBQ3JELE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCwwREFBaUQ7SUFDakQsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixVQUFVLEVBQUUsb0ZBQW9GO0lBQ2hHLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixjQUFj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cUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7O0FBRW5COzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zbW9vdGg6IG5ldmVyO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nIDogbm9uZTtcXHJcXG4gICAgLS1ncmVlbiA6ICM0MUZGMDA7XFxyXFxuICAgIC0tdGV4dC1nbG93OiAwLjAxZW0gMC4wMWVtIDAuMDFlbSByZ2IoMjAyLCAyNTUsIDEwMyksIDAgMCAwLjFlbSBibHVlLCAwIDAgMC4yZW0gcmdiKDI1NSwgNTMsIDUzKTtcXHJcXG4gICAgLS1ib3JkZXItZ2xvdzogaW5zZXQgMC4wMWVtIDAuMDFlbSAwLjAxZW0gcmdiKDIwMiwgMjU1LCAxMDMpLCBpbnNldCAwIDAgMC4xZW0gYmx1ZSwgaW5zZXQgMCAwIDAuMmVtIHJnYigyNTUsIDUzLCA1Myk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcXHJcXG59XFxyXFxuICAgIFxcclxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL0ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpIHJlcGVhdDtcXHJcXG4gICAgb3BhY2l0eTogMC4zO1xcclxcbiAgICBtaXgtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG4gICAgei1pbmRleDogMjsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuI2dhbWVPdmVye1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vSW1hZ2VzL2JhY2tncm91bmQucG5nJykgcmVwZWF0O1xcclxcbiAgICBvcGFjaXR5OiAwLjg1O1xcclxcbiAgICBtaXgtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcXHJcXG4gICAgei1pbmRleDogNDsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1nbG93KTtcXHJcXG4gICAgLyogQWRkIGEgcG9pbnRlciBvbiBob3ZlciAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVPdmVyIC50b3B7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2dhbWVPdmVyLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVTZXR1cHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA2MCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDQwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB6LWluZGV4OiAzOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVTZXR1cCAudG9we1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNnYW1lU2V0dXAgLmJvdHRvbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZVNldHVwIC5zaGlwe1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1JTtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZVNldHVwLmhpZGRlbntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsIGZvb3RlcntcXHJcXG4gICAgaGVpZ2h0OiAzcmVtOyBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZUNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmciA4ZnI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgICAvKiBtYXJnaW4tYm90dG9tOiBhdXRvOyAqL1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1jb250YWluZXIgaDF7XFxyXFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItY29udGFpbmVyPiAuYm9hcmQtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRhaW5lcj5kaXZ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tZ3JlZW4pIDFweCBkYXNoZWQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJvcmRlci1nbG93KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udGFpbmVyIC5maWxsZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuI2xlZnQtYm9hcmQgLmhpdHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1ib2FyZCAuaGl0OjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ1gnO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LWJvYXJkIC5oaXQ6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnWCc7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdsb3cpO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi5taXNzZWQ6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnLSc7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY29udGFpbmVyPmRpdjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvbnRhaW5lciwgLmdsb2JhbC1zdGF0dXN7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvbnRhaW5lciAuc2hpcC1saXN0e1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDsgIFxcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaGlwLWxpc3R7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtXFxyXFxufVxcclxcblxcclxcbi5zaGlwe1xcclxcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XFxyXFxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ2FtZS1zdGF0dXN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1zdGF0dXM+dWx7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuLmdhbWUtc3RhdHVzIGxpIGgxe1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIG91dGxpbmU6IDFweCB2YXIoLS1ncmVlbikgZGFzaGVkO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdhbWUtc3RhdHVzPmxpe1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogMXB4IGRhc2hlZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItZ2xvdyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ocntcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuY2xhc3MgR2FtZUJvYXJke1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0R2FtZUJvYXJkKCl7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbCgwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YWxpZFBsYWNlbWVudChzaGlwLCBpbmRleCwgZGlyZWN0aW9uKXtcclxuICAgICAgICBsZXQgcGxhY2VtZW50ID0gZmFsc2VcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdoJyl7XHJcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IGluZGV4JTEwK3NoaXAubGVuZ3RoPD0xMCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICBpZihwbGFjZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtpbmRleCtpXSAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAndicpe1xyXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBpbmRleCArMTAqc2hpcC5sZW5ndGgtMTA8MTAwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHBsYWNlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2luZGV4K2kqMTBdICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbiBwbGFjZSBhbnl3aGVyZSBidXQgc2hvdWxkIHJlcXVpcmUgdmFsaWRQbGFjZW1lbnQgYmVmb3JlIHVzZWRcclxuICAgIHBsYWNlU2hpcChzaGlwLCBpbmRleCwgZGlyZWN0aW9uKXtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdoJyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleCtpXSA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3YnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4K2kqMTBdID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlQXR0YWNrKGluZGV4KXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkLmluZGV4T2YoMCkhPT0tMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbaW5kZXhdPT09MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XT0tMVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaXRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuYm9hcmRbaW5kZXhdPT09MCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XT0tMlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNaXNzZWRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfXJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQWxsU3Vuaygpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQuaW5kZXhPZigxKSA9PT0gLTEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxsIHNoaXAgaGFzIHN1bmsnKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhlcmUgYXJlIHN0aWxsIHNoaXBzIGhpZGluZycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpbnRCb2FyZCgpe1xyXG4gICAgICAgIGxldCBwcmV2ID0gMFxyXG4gICAgICAgIGxldCB0ZXh0ID0gYGBcclxuICAgICAgICBmb3IobGV0IGkgPTE7IGk8MTE7IGkrKyl7XHJcbiAgICAgICAgICAgIHRleHQgKz0gdGhpcy5ib2FyZC5zbGljZShwcmV2LCBpKjEwKS5qb2luKFwiIFwiKSArJ1xcbidcclxuICAgICAgICAgICAgcHJldiArPTEwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZCIsImNvbnN0IGRpc3BsYXkgPSAoKSA9PntcclxuXHJcbiAgICBsZXQgdHVybiA9IDBcclxuICAgIGxldCByZW1haW5pbmcgPSAxN1xyXG4gICAgbGV0IGxhc3RBdHRhY2sxID0gJy0tJ1xyXG4gICAgbGV0IGxhc3RBdHRhY2syID0gJy0tJ1xyXG4gICAgbGV0IGJhdHRsZVN0YXR1cyA9ICdhdHRhY2snXHJcbiAgICBsZXQgdG90YWxUdXJucyA9IDBcclxuICAgIGxldCB0b3RhbEdhbWVzID0gMFxyXG4gICAgbGV0IHRvdGFsSGl0cyA9IDBcclxuICAgIGxldCB0b3RhbFNob3RzID0gMFxyXG4gICAgbGV0IHRvdGFsV2luID0gMFxyXG5cclxuICAgIGxldCBwbGFjZW1lbnRDb3VudCA9IDFcclxuXHJcbiAgICBjb25zdCByZXNldFNjb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIHR1cm4gPSAwXHJcbiAgICAgICAgcmVtYWluaW5nID0gMTdcclxuICAgICAgICBsYXN0QXR0YWNrMSA9ICctLSdcclxuICAgICAgICBsYXN0QXR0YWNrMiA9ICctLSdcclxuICAgICAgICBiYXR0bGVTdGF0dXMgPSAnYXR0YWNrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdyaWRDcmVhdG9yID0gKHBsYXllcikgPT57XHJcbiAgICAgICAgbGV0IGRpdiA9IGBgXHJcbiAgICAgICAgZm9yKGxldCBpID0wOyBpPDEwMDsgaSsrKXtcclxuICAgICAgICAgICAgZGl2ICs9IGA8ZGl2IGlkPScke3BsYXllcn0ke2l9Jz48L2Rpdj5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsUmVuZGVyID0oKT0+e1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcclxuICAgICAgICBtYWluLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aGVhZGVyPjxoMT5CQVRUTEVTSElQPC9oMT48L2hlYWRlcj5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImdhbWVDb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGxheWVyLWNvbnRhaW5lciBwbGF5ZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPllvdTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyIGxlZnRcIiBpZD1cImxlZnQtYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dyaWRDcmVhdG9yKCdhJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLXRpdGxlXCI+PGgyPllvdXIgU2hpcHM8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGlwMVwiIGNsYXNzPVwic2hpcFwiPiMjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGlwMlwiIGNsYXNzPVwic2hpcFwiPiMjIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hpcDNcIiBjbGFzcz1cInNoaXBcIj4jIyM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNoaXA0XCIgY2xhc3M9XCJzaGlwXCI+IyMjIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hpcDVcIiBjbGFzcz1cInNoaXBcIj4jIyMjIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZ2FtZS1zdGF0dXMgbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjdXJycmVudC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWQ9XCJ0dXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UdXJuPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7dHVybn08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGlkPVwicmVtYWluaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5yZW1haW5pbmc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHtyZW1haW5pbmd9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZD1cImF0dGFjay1wMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGFzdCBBdHRhY2s6IFlvdTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke2xhc3RBdHRhY2sxfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWQ9XCJhdHRhY2stcDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxhc3QgQXR0YWNrOiBFbmVteTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke2xhc3RBdHRhY2syfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWQ9XCJCYXR0bGUtU3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5CYXR0bGUgU3RhdHVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7YmF0dGxlU3RhdHVzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXRcIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBsYXllci1jb250YWluZXIgcGxheWVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+RW5lbXk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lciByaWdodFwiIGlkPVwicmlnaHQtYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2dyaWRDcmVhdG9yKCdiJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnN0YXR1czo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2xvYmFsLXN0YXR1cy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cImdhbWUtY291bnRcIj5OdW1iZXIgb2YgR2FtZXM6ICR7dG90YWxHYW1lc308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJzdW5rLWNvdW50XCI+TnVtYmVyIG9mIFRpbWVzIEhpdDogJHt0b3RhbEhpdHN9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPVwid2luLWNvdW50XCI+TnVtYmVyIG9mIEdhbWVzIFdvbjogJHt0b3RhbFdpbn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJzaG90LWNvdW50XCI+TnVtYmVyIG9mIFNob3RzIEZpcmVkOiAke3RvdGFsU2hvdHN9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxmb290ZXI+PGgxPjwvaDE+PC9mb290ZXI+ICAgIFxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgcGxhY2VtZW50T3ZlcmxheVJlbmRlciA9IChwbGFjZW1lbnRDb3VudCwgc2hpcCk9PntcclxuICAgICAgICBpZihzaGlwKXtcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lU2V0dXAgLnRvcCcpXHJcbiAgICAgICAgICAgIHBsYWNlbWVudE92ZXJsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGgxPlBsZWFzZSBPcmdhbml6ZSBZb3VyIFNoaXBzOiAke3BsYWNlbWVudENvdW50Kyt9LzU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyPlRvIHBsYWNlIHRoZSBDdXJyZW50IFNoaXAsIEhvdmVyIE92ZXIgdGhlIEdyaWQgYW5kIExlZnQgQ2xpY2suPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMj5HYW1lIFdpbGwgU3RhcnQgQXV0b21hdGljYWxseSBPbmNlIEFsbCBTaGlwcyBhcmUgUGxhY2VkLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICA8aDI+WW91IEFyZSBDdXJyZW50bHkgUGxhY2luZzo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2hpcFwiPiR7JyMnLnJlcGVhdChzaGlwLmxlbmd0aCl9PC9oMT5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwbGFjZW1lbnRSZW5kZXIgPSAocGxheWVyLCBzaGlwTGlzdCwgc2hpcENvdW50KT0+e1xyXG4gICAgICAgIGxldCBzaGlwID0gc2hpcExpc3Rbc2hpcENvdW50XVxyXG4gICAgICAgIGxldCBzaGlwUGxhY2VkID0gMVxyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtYm9hcmQnKVxyXG4gICAgICAgIGdlbmVyYXRlVXNlckJvYXJkKHBsYXllcilcclxuICAgICAgICBcclxuICAgICAgICBpZihzaGlwQ291bnQgPj0gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKVxyXG4gICAgICAgICAgICBsZXQgcm90YXRpb24gPSAnaCdcclxuICAgICAgICAgICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb25cclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uID0gcm90YXRpb24gPT09ICdoJyA/ICd2JyA6ICdoJ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVNldHVwIC5zaGlwJylcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRTaGlwLmlubmVySFRNTCA9IHJvdGF0aW9uID09PSdoJyA/IGAkeycjJy5yZXBlYXQoc2hpcC5sZW5ndGgpfWAgOiBgJHsnIzxicj4nLnJlcGVhdChzaGlwLmxlbmd0aCl9YFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXAuaW5uZXJIVE1MID0gYCR7JyMnLnJlcGVhdChzaGlwLmxlbmd0aCl9YFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmFuZG9tUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbS1wbGFjZW1lbnQnKVxyXG4gICAgICAgICAgICByYW5kb21QbGFjZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVzZXRCb2FyZCgpXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmFuZG9tUGxhY2VtZW50KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVNldHVwJylcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgc2hpcENvdW50ID0gLTFcclxuICAgICAgICAgICAgICAgIHBsYXllci5ib2FyZC5wcmludEJvYXJkKClcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlVXNlckJvYXJkKHBsYXllcilcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIGhvdmVySGFuZGxlcihlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwQ291bnQgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IFN0cmluZyhlLnRhcmdldC5pZCkuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkLnZhbGlkUGxhY2VtZW50KHNoaXAsTnVtYmVyKGluZGV4KSxyb3RhdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yKHBsYXllciwgc2hpcCxOdW1iZXIoaW5kZXgpLHJvdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGljYXRvck9mZihwbGF5ZXIsIHNoaXAsTnVtYmVyKGluZGV4KSxyb3RhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpcENvdW50ID49IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBTdHJpbmcoZS50YXJnZXQuaWQpLnNsaWNlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZC52YWxpZFBsYWNlbWVudChzaGlwLE51bWJlcihpbmRleCkscm90YXRpb24pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jaG9zZW5QbGFjZW1lbnQoc2hpcCxOdW1iZXIoaW5kZXgpLHJvdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSBzaGlwTGlzdFstLXNoaXBDb3VudF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZWQrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcENvdW50ID49IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudE92ZXJsYXlSZW5kZXIoc2hpcFBsYWNlZCwgc2hpcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlbWVudE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVNldHVwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnRPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5kaWNhdG9yT2ZmKHBsYXllciwgc2hpcCwgaW5kZXgsIHJvdGF0aW9uKXtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWJvYXJkJylcclxuICAgICAgICBwbGF5ZXJCb2FyZC5jaGlsZE5vZGVzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZC5ib2FyZFtOdW1iZXIoU3RyaW5nKGUuaWQpLnNsaWNlKDEpKV0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBlLmNsYXNzTmFtZSA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluZGljYXRvcihwbGF5ZXIsIHNoaXAsIGluZGV4LCByb3RhdGlvbil7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1ib2FyZCcpXHJcbiAgICAgICAgcGxheWVyQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQuYm9hcmRbTnVtYmVyKFN0cmluZyhlLmlkKS5zbGljZSgxKSldID09IDApe1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc05hbWUgPSAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gJ2gnICYmIHBsYXllci5ib2FyZC52YWxpZFBsYWNlbWVudChzaGlwLGluZGV4LHJvdGF0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5jaGlsZE5vZGVzW2luZGV4K2krMV0uY2xhc3NOYW1lID0gJ2ZpbGxlZCdcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihyb3RhdGlvbiA9PT0gJ3YnKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmNoaWxkTm9kZXNbaW5kZXgraSoxMCsxXS5jbGFzc05hbWUgPSAnZmlsbGVkJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXR1c1VwZGF0ZSA9ICgpID0+e1xyXG4gICAgICAgIC8vIE1pZGRsZSBTdGF0dXNcclxuICAgICAgICBjb25zdCBjdXJyZW50VHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuIGgxJylcclxuICAgICAgICBjdXJyZW50VHVybi50ZXh0Q29udGVudCA9IHR1cm5cclxuICAgICAgICBjb25zdCBjdXJyZW50UmVtYWluaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbWFpbmluZyBoMScpXHJcbiAgICAgICAgY3VycmVudFJlbWFpbmluZy50ZXh0Q29udGVudCA9IHJlbWFpbmluZ1xyXG4gICAgICAgIGNvbnN0IHBsYXllckF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2stcDEgaDEnKVxyXG4gICAgICAgIHBsYXllckF0dGFjay50ZXh0Q29udGVudCA9IGxhc3RBdHRhY2sxXHJcbiAgICAgICAgY29uc3QgZW5lbXlBdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNrLXAyIGgxJylcclxuICAgICAgICBlbmVteUF0dGFjay50ZXh0Q29udGVudCA9IGxhc3RBdHRhY2syXHJcbiAgICAgICAgY29uc3QgY3VycmVudEJhdHRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNCYXR0bGUtU3RhdHVzIGgxJylcclxuICAgICAgICBjdXJyZW50QmF0dGxlLnRleHRDb250ZW50ID0gYmF0dGxlU3RhdHVzXHJcbiAgICAgICAgLy8gR2xvYmFsIFN0YXR1c1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nbG9iYWwtc3RhdHVzLWdyaWQnKVxyXG4gICAgICAgIGdsb2JhbFN0YXR1cy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxoMyBpZD1cImdhbWUtY291bnRcIj5OdW1iZXIgb2YgR2FtZXM6ICR7dG90YWxHYW1lc308L2gzPlxyXG4gICAgICAgICAgICA8aDMgaWQ9XCJzdW5rLWNvdW50XCI+TnVtYmVyIG9mIFRpbWVzIEhpdDogJHt0b3RhbEhpdHN9PC9oMz5cclxuICAgICAgICAgICAgPGgzIGlkPVwid2luLWNvdW50XCI+TnVtYmVyIG9mIEdhbWVzIFdvbjogJHt0b3RhbFdpbn08L2gzPlxyXG4gICAgICAgICAgICA8aDMgaWQ9XCJzaG90LWNvdW50XCI+TnVtYmVyIG9mIFNob3RzIEZpcmVkOiAke3RvdGFsU2hvdHN9PC9oMz5cclxuICAgICAgICBgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2VuZXJhdGVVc2VyQm9hcmQgPSAocGxheWVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1ib2FyZCcpXHJcbiAgICAgICAgcGxheWVyQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2MgPSBTdHJpbmcoYm94LmlkKS5zbGljZSgxKVxyXG4gICAgICAgICAgICBpZihsb2Mpe1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkLmJvYXJkW2xvY10gPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnZmlsbGVkJyAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyLmJvYXJkLmJvYXJkW2xvY10gPT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZCgnaGl0JylcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHBsYXllci5ib2FyZC5ib2FyZFtsb2NdID09PSAtMil7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdtaXNzZWQnIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUVuZW15Qm9hcmQgPSAocGxheWVyKT0+e1xyXG4gICAgICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtYm9hcmQnKVxyXG4gICAgICAgIGVuZW15Qm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2MgPSBTdHJpbmcoYm94LmlkKS5zbGljZSgxKVxyXG4gICAgICAgICAgICBpZihsb2Mpe1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmVuZW15Qm9hcmRbbG9jXSA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc05hbWUgPSAnaGl0JyAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyLmVuZW15Qm9hcmRbbG9jXSA9PT0gLTIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnYW1lT3Zlck92ZXJsYXkgPSAodmljdG9yeT10cnVlLCBwbGF5ZXIsIGVuZW15KT0+e1xyXG4gICAgICAgIGNvbnN0IG92ZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJylcclxuICAgICAgICBjb25zb2xlLmxvZyhvdmVyT3ZlcmxheSlcclxuICAgICAgICBvdmVyT3ZlcmxheS5jbGFzc05hbWUgPSAnJ1xyXG4gICAgICAgIGNvbnN0IG92ZXJPdmVybGF5U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXIgLnRvcCcpXHJcbiAgICAgICAgb3Zlck92ZXJsYXlTY29yZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxoND5ZT1UgJHt2aWN0b3J5PyAnV09OJyA6ICdMT1NUJ30gSU48L2g0PlxyXG4gICAgICAgICAgICA8aDE+JHt0dXJufSBUdXJuczwvaDE+XHJcbiAgICAgICAgICAgIDxoND5QbGF5IEFnYWluPzwvaDQ+XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICBgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBlbmVteUJvYXJkRXZlbnQgPSAocGxheWVyLCBlbmVteSk9PntcclxuICAgICAgICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LWJvYXJkJylcclxuICAgICAgICBlbmVteUJvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codHVybilcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllcil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0gIFN0cmluZyhlLnRhcmdldC5pZCkuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFthdHRhY2ssIGF0dGFja1N0YXR1c10gPSBwbGF5ZXIuaGl0RW5lbXkoY29vcmRpbmF0ZSwgZW5lbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF0dGFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QXR0YWNrMSA9IGF0dGFja1N0YXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVFbmVteUJvYXJkKHBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVuZW15LnJhbmRvbUhpdEVhc3kocGxheWVyKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxIaXRzKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QXR0YWNrMiA9ICdIaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0QXR0YWNrMiA9ICdNaXNzZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVVzZXJCb2FyZChwbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJuKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2hvdHMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nID0gZW5lbXkuaHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1VwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW5lbXkuaHA9PT0wICB8fCB0dXJuID09PTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBGaW5pc2hlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3Zlck92ZXJsYXkodHJ1ZSwgcGxheWVyLCBlbmVteSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsR2FtZXMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxXaW4rK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nID0gMTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyLmhwPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZSBGaW5pc2hlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lT3Zlck92ZXJsYXkoZmFsc2UsIHBsYXllciwgZW5lbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEdhbWVzKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZyA9IDE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiByZXR1cm4ge2luaXRpYWxSZW5kZXIsIGdlbmVyYXRlVXNlckJvYXJkLCBnZW5lcmF0ZUVuZW15Qm9hcmQsIHN0YXR1c1VwZGF0ZSwgZW5lbXlCb2FyZEV2ZW50LCBwbGFjZW1lbnRSZW5kZXIsIHJlc2V0U2NvcmV9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXkiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2JvYXJkSGFuZGxlclwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwSGFuZGxlclwiO1xyXG5cclxuXHJcbmNsYXNzIFBsYXllcntcclxuICAgIHN0YXRpYyAjcGxheSA9IDBcclxuICAgIHN0YXRpYyAjdXBkYXRlUGxheWVyQ291bnQgKCl7XHJcbiAgICAgICAgUGxheWVyLiNwbGF5Kz0xfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBQbGF5ZXIuI3BsYXlcclxuICAgICAgICBQbGF5ZXIuI3VwZGF0ZVBsYXllckNvdW50KClcclxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpXHJcbiAgICAgICAgdGhpcy5lbmVteUJvYXJkID0gbmV3IEFycmF5KDEwMCkuZmlsbCgwKVxyXG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbbmV3IFNoaXAoNSksbmV3IFNoaXAoNCksbmV3IFNoaXAoMyksbmV3IFNoaXAoMyksbmV3IFNoaXAoMildXHJcbiAgICAgICAgdGhpcy5zY29yZT0wXHJcbiAgICAgICAgdGhpcy5ocCA9IDE3XHJcbiAgICAgICAgdGhpcy50dXJuID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUdXJuKCl7dGhpcy50dXJuID8gdGhpcy50dXJuID0gZmFsc2UgOiB0aGlzLnR1cm4gPSB0cnVlfVxyXG5cclxuICAgIHJlc2V0Qm9hcmQoKXtcclxuICAgICAgICB0aGlzLmJvYXJkLnJlc2V0R2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLmVuZW15Qm9hcmQgPSBBcnJheSgxMDApLmZpbGwoMClcclxuICAgICAgICB0aGlzLnNoaXBMaXN0ID0gW25ldyBTaGlwKDUpLG5ldyBTaGlwKDQpLG5ldyBTaGlwKDMpLG5ldyBTaGlwKDMpLG5ldyBTaGlwKDIpXVxyXG4gICAgICAgIHRoaXMuaHAgPSAxN1xyXG4gICAgICAgIHRoaXMudHVybiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJhbmRvbVBsYWNlbWVudCgpe1xyXG4gICAgICAgIGZvcihsZXQgc2hpcCBvZiB0aGlzLnNoaXBMaXN0KXtcclxuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHdoaWxlKCFwbGFjZWQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlbWVudF9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcclxuICAgICAgICAgICAgICAgIGxldCBwbGFjZW1lbnRfZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPyAnaCcgOiAndidcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmQudmFsaWRQbGFjZW1lbnQoc2hpcCwgcGxhY2VtZW50X2luZGV4LCBwbGFjZW1lbnRfZGlyZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgcGxhY2VtZW50X2luZGV4LCBwbGFjZW1lbnRfZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQnKVxyXG4gICAgfVxyXG5cclxuICAgIGNob3NlblBsYWNlbWVudChzaGlwLCBpbmRleCwgZGlyZWN0aW9uKXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkLnZhbGlkUGxhY2VtZW50KHNoaXAsIGluZGV4LCBkaXJlY3Rpb24pKXtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgaW5kZXgsIGRpcmVjdGlvbilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByYW5kb21IaXRFYXN5KGVuZW15KXtcclxuICAgICAgICBpZih0aGlzLmVuZW15Qm9hcmQuaW5kZXhPZigwKSE9PS0xICYmICFlbmVteS5ib2FyZC5jaGVja0FsbFN1bmsoKSl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SGl0ID0gZmFsc2VcclxuICAgICAgICAgICAgd2hpbGUoIWN1cnJlbnRIaXQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGhpdEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5lbmVteUJvYXJkW2hpdEluZGV4XT09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIaXQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkW2hpdEluZGV4XSA9IGVuZW15LmJvYXJkLnJlY2VpdmVBdHRhY2soaGl0SW5kZXgpID8gLTEgOiAtMlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlCb2FyZFtoaXRJbmRleF0gPT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkuaHAgPSBlbmVteS5ocC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpdEVuZW15KGNvb3JkaW5hdGUsIGVuZW15KXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXR0YWNrZWQnLCBjb29yZGluYXRlKVxyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlCb2FyZC5pbmRleE9mKDApIT09LTEgJiYgIWVuZW15LmJvYXJkLmNoZWNrQWxsU3VuaygpKXtcclxuICAgICAgICAgICAgbGV0IGhpdEluZGV4ID0gY29vcmRpbmF0ZVxyXG4gICAgICAgICAgICBpZih0aGlzLmVuZW15Qm9hcmRbaGl0SW5kZXhdPT09MCl7XHJcbiAgICAgICAgICAgICAgICBpZihlbmVteS5ib2FyZC5yZWNlaXZlQXR0YWNrKGhpdEluZGV4KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkW2hpdEluZGV4XSA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgZW5lbXkuaHAgLT0xXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuW3RydWUsICdIaXQnXVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUJvYXJkW2hpdEluZGV4XSA9IC0yXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCAnTWlzc2VkJ11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2ZhbHNlLCAnLS0nXVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyIiwiY2xhc3MgU2hpcCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBoaXRDb3VudD0wLCBzdW5rPWZhbHNlKXtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxyXG4gICAgICAgIHRoaXMuaGl0Q291bnQgPSBoaXRDb3VudFxyXG4gICAgICAgIHRoaXMuc3VuayA9IHN1bmtcclxuICAgIH1cclxuXHJcbiAgICBpc0hpdCgpeysrdGhpcy5oaXRDb3VudH1cclxuXHJcbiAgICBpc1N1bmsoKXtcclxuICAgICAgICB0aGlzLmxlbmd0aCA8PSB0aGlzLmhpdENvdW50ID8gdGhpcy5zdW5rPXRydWUgOiB0aGlzLnN1bms9ZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9nYW1lQ29tcG9uZW50cy9zaGlwSGFuZGxlclwiO1xyXG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVDb21wb25lbnRzL2JvYXJkSGFuZGxlclwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2dhbWVDb21wb25lbnRzL3BsYXllckhhbmRsZXJcIiBcclxuaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vZ2FtZUNvbXBvbmVudHMvZGlzcGxheWVyXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5sZXQgcDEgPSBuZXcgUGxheWVyKClcclxubGV0IHAyID0gbmV3IFBsYXllcigpXHJcbmxldCBkb20gPSBkaXNwbGF5KClcclxuZG9tLmluaXRpYWxSZW5kZXIoKVxyXG5cclxuY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktYWdhaW4nKVxyXG5cclxucGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBkb20ucmVzZXRTY29yZSgpXHJcbiAgICBjb25zdCBvdmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT3ZlcicpXHJcbiAgICBwMS5yZXNldEJvYXJkKCk7XHJcbiAgICBwMi5yZXNldEJvYXJkKCk7XHJcbiAgICBwMi5yYW5kb21QbGFjZW1lbnQoKVxyXG5cclxuICAgIGRvbS5nZW5lcmF0ZVVzZXJCb2FyZChwMSlcclxuICAgIGRvbS5nZW5lcmF0ZUVuZW15Qm9hcmQocDEpXHJcbiAgICBcclxuICAgIGRvbS5zdGF0dXNVcGRhdGUoKVxyXG5cclxuICAgIG92ZXJPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgICBjb25zdCBwbGFjZW1lbnRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVTZXR1cCcpXHJcbiAgICBwbGFjZW1lbnRPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbiAgICBkb20uZW5lbXlCb2FyZEV2ZW50KHAxLCBwMilcclxuICAgIGRvbS5wbGFjZW1lbnRSZW5kZXIocDEsIHAxLnNoaXBMaXN0LCA0KVxyXG59KVxyXG5cclxuY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQnKVxyXG5yZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxufSlcclxuXHJcblxyXG5cclxuLy8gZG9tLnBsYWNlbWVudFJlbmRlcihwMSwgcDEuc2hpcExpc3QsIDQpXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=