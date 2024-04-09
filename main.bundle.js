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
}


@media screen and (min-width: 1501px) {
    #errorMessage {
        z-index: 9999;
        display: none;
    }
    
  }

@media screen and (max-width: 1500px) {
    #errorMessage {
        z-index: 9999;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #overlay, #gameOver, #gameSetup, .game{
        display: none;
    } 
    
}




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n:root{\r\n    font-family: monospace;\r\n    font-smooth: never;\r\n    -webkit-font-smoothing : none;\r\n    --green : #41FF00;\r\n    --text-glow: 0.01em 0.01em 0.01em rgb(202, 255, 103), 0 0 0.1em blue, 0 0 0.2em rgb(255, 53, 53);\r\n    --border-glow: inset 0.01em 0.01em 0.01em rgb(202, 255, 103), inset 0 0 0.1em blue, inset 0 0 0.2em rgb(255, 53, 53);\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box; \r\n}\r\n    \r\n*, *:before, *:after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    \r\n}\r\n\r\n\r\n#overlay {\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: block; /* Hidden by default */\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    height: 100%; /* Full height (cover the whole page) */\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('./Images/background.png') repeat;\r\n    opacity: 0.3;\r\n    mix-blend-mode: hard-light;\r\n    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */\r\n    cursor: pointer; /* Add a pointer on hover */\r\n    pointer-events: none;\r\n  }\r\n\r\n#gameOver{\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: block; /* Hidden by default */\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    height: 100%; /* Full height (cover the whole page) */\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url('./Images/background.png') repeat;\r\n    opacity: 0.85;\r\n    mix-blend-mode: hard-light;\r\n    z-index: 4; /* Specify a stack order in case you're using a different order for other elements */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    text-shadow: var(--text-glow);\r\n    /* Add a pointer on hover */\r\n    transition: 1s;\r\n}\r\n\r\n#gameOver .top{\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#gameOver.hidden{\r\n    display: none;\r\n}\r\n\r\n#gameSetup{\r\n    position: fixed; /* Sit on top of the page content */\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 60%; /* Full width (cover the whole page) */\r\n    height: 100vh; /* Full height (cover the whole page) */\r\n    background: black;\r\n    top: 0;\r\n    left: 40;\r\n    right: 0;\r\n    bottom: 0;\r\n    opacity: 1;\r\n    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */\r\n    padding: 4rem;\r\n    gap: 1rem;\r\n}\r\n\r\n#gameSetup .top{\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    gap: 1rem;\r\n    margin-bottom: auto;\r\n}\r\n\r\n#gameSetup .bottom{\r\n    display: flex; /* Hidden by default */\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    width: 100%; /* Full width (cover the whole page) */\r\n    gap: 1rem;\r\n    margin-top: auto;\r\n}\r\n\r\n#gameSetup .ship{\r\n    margin: auto;\r\n    margin-top: 25%;\r\n    font-size: 4rem;\r\n}\r\n\r\n#gameSetup.hidden{\r\n    display: none;\r\n}\r\n\r\nbody{\r\n    background-color: black;\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n}\r\n\r\nheader, footer{\r\n    height: 3rem; \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.gameContainer{\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 8fr 1fr 8fr;\r\n    place-items: center;\r\n    /* background-color: red; */\r\n    height: 80vh;\r\n    /* margin-bottom: auto; */\r\n    margin: auto;\r\n}\r\n\r\n.player-container{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* background-color: blue; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding: 2rem;\r\n}\r\n\r\n.player-container h1{\r\n    text-align:center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.player-container> .board-container{\r\n    display: grid;\r\n    align-self: center;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    width: 65%;\r\n    aspect-ratio: 1;\r\n    /* background-color: purple; */\r\n}\r\n\r\n.board-container>div{\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    aspect-ratio: 1;\r\n    outline: var(--green) 1px dashed;\r\n    box-shadow: var(--border-glow);\r\n    margin: 0;\r\n    padding: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.board-container .filled{\r\n    background-color: var(--green);\r\n}\r\n#left-board .hit{\r\n    background-color: var(--green);\r\n}\r\n\r\n#left-board .hit::after{\r\n    content: 'X';\r\n    color: black;\r\n    /* background-color: red; */\r\n}\r\n\r\n#right-board .hit::after{\r\n    content: 'X';\r\n    color: var(--text-glow);\r\n    /* background-color: red; */\r\n}\r\n\r\n.missed::after{\r\n    content: '-';\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n}\r\n\r\n.board-container>div:hover{\r\n    background-color: var(--green);\r\n    cursor: pointer;\r\n\r\n\r\n}\r\n\r\n.ship-container, .global-status{\r\n    width: 65%;\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 1rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.ship-container .ship-list{\r\n    \r\n    display: grid;  \r\n    grid-template-columns: repeat(3,1fr);\r\n    place-items: center;\r\n    gap: 1rem;\r\n    \r\n}\r\n\r\n.ship-list{\r\n    margin-top: 1rem;\r\n    font-size: 2.5rem\r\n}\r\n\r\n.ship{\r\n    padding: 0rem 1rem;\r\n    outline: 1px dashed var(--green);\r\n}\r\n\r\n\r\n.game-status{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 80vh;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.game-status>ul{\r\n    /* background-color: red; */\r\n\r\n    height: 50vh;\r\n    width: 10rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    text-align: center;\r\n    list-style-type: none;\r\n}\r\n.game-status li h1{\r\n    font-size: 2rem;\r\n    outline: 1px var(--green) dashed;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n\r\n}\r\n\r\n\r\n.game-status>li{\r\n    margin-top: 5rem;\r\n}\r\n\r\nbutton{\r\n    background: none;\r\n    border: none;\r\n    outline: 1px dashed var(--green);\r\n    color: var(--green);\r\n    text-shadow: var(--text-glow);\r\n    box-shadow: var(--border-glow);\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n    font-family: inherit;\r\n    \r\n}\r\n\r\nbutton:hover{\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    background-color: var(--green);\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nhr{\r\n    border: none;\r\n    border-bottom: 1px dashed var(--green);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n@media screen and (min-width: 1501px) {\r\n    #errorMessage {\r\n        z-index: 9999;\r\n        display: none;\r\n    }\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 1500px) {\r\n    #errorMessage {\r\n        z-index: 9999;\r\n        display: flex;\r\n        text-align: center;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100vh;\r\n    }\r\n\r\n    #overlay, #gameOver, #gameSetup, .game{\r\n        display: none;\r\n    } \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNNO0FBQ0g7QUFDRjtBQUM3QjtBQUNwQjtBQUNBLGFBQWEscUVBQU07QUFDbkIsYUFBYSxxRUFBTTtBQUNuQixVQUFVLHFFQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlLy4vc3JjL2dhbWVDb21wb25lbnRzL2JvYXJkSGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvLi9zcmMvZ2FtZUNvbXBvbmVudHMvZGlzcGxheWVyLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9nYW1lQ29tcG9uZW50cy9wbGF5ZXJIYW5kbGVyLmpzIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9nYW1lQ29tcG9uZW50cy9zaGlwSGFuZGxlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmFuaWxsYUpzV2VicGFja1RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly92YW5pbGxhSnNXZWJwYWNrVGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZhbmlsbGFKc1dlYnBhY2tUZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxyXG5cclxuOnJvb3R7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zbW9vdGg6IG5ldmVyO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZyA6IG5vbmU7XHJcbiAgICAtLWdyZWVuIDogIzQxRkYwMDtcclxuICAgIC0tdGV4dC1nbG93OiAwLjAxZW0gMC4wMWVtIDAuMDFlbSByZ2IoMjAyLCAyNTUsIDEwMyksIDAgMCAwLjFlbSBibHVlLCAwIDAgMC4yZW0gcmdiKDI1NSwgNTMsIDUzKTtcclxuICAgIC0tYm9yZGVyLWdsb3c6IGluc2V0IDAuMDFlbSAwLjAxZW0gMC4wMWVtIHJnYigyMDIsIDI1NSwgMTAzKSwgaW5zZXQgMCAwIDAuMWVtIGJsdWUsIGluc2V0IDAgMCAwLjJlbSByZ2IoMjU1LCA1MywgNTMpO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG59XHJcbiAgICBcclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuI292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgcmVwZWF0O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XHJcbiAgICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiNnYW1lT3ZlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIHJlcGVhdDtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogaGFyZC1saWdodDtcclxuICAgIHotaW5kZXg6IDQ7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtZ2xvdyk7XHJcbiAgICAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuI2dhbWVPdmVyIC50b3B7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuI2dhbWVPdmVyLmhpZGRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNnYW1lU2V0dXB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xyXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiA2MCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA0MDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDM7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cclxuICAgIHBhZGRpbmc6IDRyZW07XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNnYW1lU2V0dXAgLnRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4jZ2FtZVNldHVwIC5ib3R0b217XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuI2dhbWVTZXR1cCAuc2hpcHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuI2dhbWVTZXR1cC5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtZ2xvdyk7XHJcbn1cclxuXHJcbmhlYWRlciwgZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAzcmVtOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2FtZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDFmciA4ZnI7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogYXV0bzsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBsYXllci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLnBsYXllci1jb250YWluZXIgaDF7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wbGF5ZXItY29udGFpbmVyPiAuYm9hcmQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTsgKi9cclxufVxyXG5cclxuLmJvYXJkLWNvbnRhaW5lcj5kaXZ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGFzcGVjdC1yYXRpbzogMTtcclxuICAgIG91dGxpbmU6IHZhcigtLWdyZWVuKSAxcHggZGFzaGVkO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLWdsb3cpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuXHJcbi5ib2FyZC1jb250YWluZXIgLmZpbGxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG4jbGVmdC1ib2FyZCAuaGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG59XHJcblxyXG4jbGVmdC1ib2FyZCAuaGl0OjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdYJztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuI3JpZ2h0LWJvYXJkIC5oaXQ6OmFmdGVye1xyXG4gICAgY29udGVudDogJ1gnO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ2xvdyk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbn1cclxuXHJcbi5taXNzZWQ6OmFmdGVye1xyXG4gICAgY29udGVudDogJy0nO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyPmRpdjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4uc2hpcC1jb250YWluZXIsIC5nbG9iYWwtc3RhdHVze1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5zaGlwLWNvbnRhaW5lciAuc2hpcC1saXN0e1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBncmlkOyAgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zaGlwLWxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW1cclxufVxyXG5cclxuLnNoaXB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuXHJcbi5nYW1lLXN0YXR1c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtc3RhdHVzPnVse1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG5cclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLmdhbWUtc3RhdHVzIGxpIGgxe1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgb3V0bGluZTogMXB4IHZhcigtLWdyZWVuKSBkYXNoZWQ7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG59XHJcblxyXG5cclxuLmdhbWUtc3RhdHVzPmxpe1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0LWdsb3cpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLWdsb3cpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgXHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAxcHgpIHtcclxuICAgICNlcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgI2Vycm9yTWVzc2FnZSB7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgI292ZXJsYXksICNnYW1lT3ZlciwgI2dhbWVTZXR1cCwgLmdhbWV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH0gXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0dBQWdHO0lBQ2hHLG9IQUFvSDtBQUN4SDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTs7O0FBR2Q7OztBQUdBO0lBQ0ksZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLFdBQVcsRUFBRSxzQ0FBc0M7SUFDbkQsWUFBWSxFQUFFLHVDQUF1QztJQUNyRCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsMERBQWlEO0lBQ2pELFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsVUFBVSxFQUFFLG9GQUFvRjtJQUNoRyxlQUFlLEVBQUUsMkJBQTJCO0lBQzVDLG9CQUFvQjtFQUN0Qjs7QUFFRjtJQUNJLGVBQWUsRUFBRSxtQ0FBbUM7SUFDcEQsY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxXQUFXLEVBQUUsc0NBQXNDO0lBQ25ELFlBQVksRUFBRSx1Q0FBdUM7SUFDckQsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULDBEQUFpRDtJQUNqRCxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFVBQVUsRUFBRSxvRkFBb0Y7SUFDaEcsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLGNBQWM7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QjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7O0VBRUY7O0FBRUY7SUFDSTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc21vb3RoOiBuZXZlcjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZyA6IG5vbmU7XFxyXFxuICAgIC0tZ3JlZW4gOiAjNDFGRjAwO1xcclxcbiAgICAtLXRleHQtZ2xvdzogMC4wMWVtIDAuMDFlbSAwLjAxZW0gcmdiKDIwMiwgMjU1LCAxMDMpLCAwIDAgMC4xZW0gYmx1ZSwgMCAwIDAuMmVtIHJnYigyNTUsIDUzLCA1Myk7XFxyXFxuICAgIC0tYm9yZGVyLWdsb3c6IGluc2V0IDAuMDFlbSAwLjAxZW0gMC4wMWVtIHJnYigyMDIsIDI1NSwgMTAzKSwgaW5zZXQgMCAwIDAuMWVtIGJsdWUsIGluc2V0IDAgMCAwLjJlbSByZ2IoMjU1LCA1MywgNTMpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxyXFxufVxcclxcbiAgICBcXHJcXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9JbWFnZXMvYmFja2dyb3VuZC5wbmcnKSByZXBlYXQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuMztcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxuICAgIHotaW5kZXg6IDI7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiNnYW1lT3ZlcntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL0ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpIHJlcGVhdDtcXHJcXG4gICAgb3BhY2l0eTogMC44NTtcXHJcXG4gICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XFxyXFxuICAgIHotaW5kZXg6IDQ7IC8qIFNwZWNpZnkgYSBzdGFjayBvcmRlciBpbiBjYXNlIHlvdSdyZSB1c2luZyBhIGRpZmZlcmVudCBvcmRlciBmb3Igb3RoZXIgZWxlbWVudHMgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHQtZ2xvdyk7XFxyXFxuICAgIC8qIEFkZCBhIHBvaW50ZXIgb24gaG92ZXIgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbiNnYW1lT3ZlciAudG9we1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNnYW1lT3Zlci5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNnYW1lU2V0dXB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogNjAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiA0MDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgei1pbmRleDogMzsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNnYW1lU2V0dXAgLnRvcHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZVNldHVwIC5ib3R0b217XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVTZXR1cCAuc2hpcHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVTZXR1cC5oaWRkZW57XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1nbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLCBmb290ZXJ7XFxyXFxuICAgIGhlaWdodDogM3JlbTsgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciAxZnIgOGZyO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogYXV0bzsgKi9cXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWNvbnRhaW5lcntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItY29udGFpbmVyIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLWNvbnRhaW5lcj4gLmJvYXJkLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7ICovXFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jb250YWluZXI+ZGl2e1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLWdyZWVuKSAxcHggZGFzaGVkO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3JkZXItZ2xvdyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRhaW5lciAuZmlsbGVke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxufVxcclxcbiNsZWZ0LWJvYXJkIC5oaXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtYm9hcmQgLmhpdDo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdYJztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbiNyaWdodC1ib2FyZCAuaGl0OjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ1gnO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1nbG93KTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJy0nO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1nbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbnRhaW5lcj5kaXY6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIsIC5nbG9iYWwtc3RhdHVze1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIgLnNoaXAtbGlzdHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7ICBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1saXN0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHtcXHJcXG4gICAgcGFkZGluZzogMHJlbSAxcmVtO1xcclxcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkIHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdhbWUtc3RhdHVze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtc3RhdHVzPnVse1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxyXFxuXFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcbi5nYW1lLXN0YXR1cyBsaSBoMXtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBvdXRsaW5lOiAxcHggdmFyKC0tZ3JlZW4pIGRhc2hlZDtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5nYW1lLXN0YXR1cz5saXtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQgdmFyKC0tZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogdmFyKC0tdGV4dC1nbG93KTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm9yZGVyLWdsb3cpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVye1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaHJ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDFweCkge1xcclxcbiAgICAjZXJyb3JNZXNzYWdlIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xcclxcbiAgICAjZXJyb3JNZXNzYWdlIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjb3ZlcmxheSwgI2dhbWVPdmVyLCAjZ2FtZVNldHVwLCAuZ2FtZXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH0gXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5jbGFzcyBHYW1lQm9hcmR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkoMTAwKS5maWxsKDApXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRHYW1lQm9hcmQoKXtcclxuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkoMTAwKS5maWxsKDApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhbGlkUGxhY2VtZW50KHNoaXAsIGluZGV4LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgIGxldCBwbGFjZW1lbnQgPSBmYWxzZVxyXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2gnKXtcclxuICAgICAgICAgICAgcGxhY2VtZW50ID0gaW5kZXglMTArc2hpcC5sZW5ndGg8PTEwID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHBsYWNlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2luZGV4K2ldICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICd2Jyl7XHJcbiAgICAgICAgICAgIHBsYWNlbWVudCA9IGluZGV4ICsxMCpzaGlwLmxlbmd0aC0xMDwxMDAgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgaWYocGxhY2VtZW50KXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbaW5kZXgraSoxMF0gIT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGxhY2VtZW50XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FuIHBsYWNlIGFueXdoZXJlIGJ1dCBzaG91bGQgcmVxdWlyZSB2YWxpZFBsYWNlbWVudCBiZWZvcmUgdXNlZFxyXG4gICAgcGxhY2VTaGlwKHNoaXAsIGluZGV4LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2gnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4K2ldID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAndicpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXgraSoxMF0gPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2soaW5kZXgpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQuaW5kZXhPZigwKSE9PS0xKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFtpbmRleF09PT0xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdPS0xXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpdFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5ib2FyZFtpbmRleF09PT0wKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdPS0yXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1pc3NlZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9cmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBbGxTdW5rKCl7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZC5pbmRleE9mKDEpID09PSAtMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgc2hpcCBoYXMgc3VuaycpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGVyZSBhcmUgc3RpbGwgc2hpcHMgaGlkaW5nJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcmludEJvYXJkKCl7XHJcbiAgICAgICAgbGV0IHByZXYgPSAwXHJcbiAgICAgICAgbGV0IHRleHQgPSBgYFxyXG4gICAgICAgIGZvcihsZXQgaSA9MTsgaTwxMTsgaSsrKXtcclxuICAgICAgICAgICAgdGV4dCArPSB0aGlzLmJvYXJkLnNsaWNlKHByZXYsIGkqMTApLmpvaW4oXCIgXCIpICsnXFxuJ1xyXG4gICAgICAgICAgICBwcmV2ICs9MTBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkIiwiY29uc3QgZGlzcGxheSA9ICgpID0+e1xyXG5cclxuICAgIGxldCB0dXJuID0gMFxyXG4gICAgbGV0IHJlbWFpbmluZyA9IDE3XHJcbiAgICBsZXQgbGFzdEF0dGFjazEgPSAnLS0nXHJcbiAgICBsZXQgbGFzdEF0dGFjazIgPSAnLS0nXHJcbiAgICBsZXQgYmF0dGxlU3RhdHVzID0gJ2F0dGFjaydcclxuICAgIGxldCB0b3RhbFR1cm5zID0gMFxyXG4gICAgbGV0IHRvdGFsR2FtZXMgPSAwXHJcbiAgICBsZXQgdG90YWxIaXRzID0gMFxyXG4gICAgbGV0IHRvdGFsU2hvdHMgPSAwXHJcbiAgICBsZXQgdG90YWxXaW4gPSAwXHJcblxyXG4gICAgbGV0IHBsYWNlbWVudENvdW50ID0gMVxyXG5cclxuICAgIGNvbnN0IHJlc2V0U2NvcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdHVybiA9IDBcclxuICAgICAgICByZW1haW5pbmcgPSAxN1xyXG4gICAgICAgIGxhc3RBdHRhY2sxID0gJy0tJ1xyXG4gICAgICAgIGxhc3RBdHRhY2syID0gJy0tJ1xyXG4gICAgICAgIGJhdHRsZVN0YXR1cyA9ICdhdHRhY2snXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ3JpZENyZWF0b3IgPSAocGxheWVyKSA9PntcclxuICAgICAgICBsZXQgZGl2ID0gYGBcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGk8MTAwOyBpKyspe1xyXG4gICAgICAgICAgICBkaXYgKz0gYDxkaXYgaWQ9JyR7cGxheWVyfSR7aX0nPjwvZGl2PmBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpdlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxSZW5kZXIgPSgpPT57XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoZWFkZXI+PGgxPkJBVFRMRVNISVA8L2gxPjwvaGVhZGVyPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiZ2FtZUNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwbGF5ZXItY29udGFpbmVyIHBsYXllci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+WW91PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXIgbGVmdFwiIGlkPVwibGVmdC1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z3JpZENyZWF0b3IoJ2EnKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtdGl0bGVcIj48aDI+WW91ciBTaGlwczwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNoaXAxXCIgY2xhc3M9XCJzaGlwXCI+IyM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNoaXAyXCIgY2xhc3M9XCJzaGlwXCI+IyMjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGlwM1wiIGNsYXNzPVwic2hpcFwiPiMjIzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2hpcDRcIiBjbGFzcz1cInNoaXBcIj4jIyMjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaGlwNVwiIGNsYXNzPVwic2hpcFwiPiMjIyMjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJnYW1lLXN0YXR1cyBtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImN1cnJyZW50LXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZD1cInR1cm5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlR1cm48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHt0dXJufTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzdGF0dXMtY29udGFpbmVyXCIgaWQ9XCJyZW1haW5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnJlbWFpbmluZzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke3JlbWFpbmluZ308L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGlkPVwiYXR0YWNrLXAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MYXN0IEF0dGFjazogWW91PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7bGFzdEF0dGFjazF9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZD1cImF0dGFjay1wMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGFzdCBBdHRhY2s6IEVuZW15PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7bGFzdEF0dGFjazJ9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN0YXR1cy1jb250YWluZXJcIiBpZD1cIkJhdHRsZS1TdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkJhdHRsZSBTdGF0dXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHtiYXR0bGVTdGF0dXN9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZXNldFwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGxheWVyLWNvbnRhaW5lciBwbGF5ZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5FbmVteTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyIHJpZ2h0XCIgaWQ9XCJyaWdodC1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7Z3JpZENyZWF0b3IoJ2InKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+c3RhdHVzOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtc3RhdHVzLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPVwiZ2FtZS1jb3VudFwiPk51bWJlciBvZiBHYW1lczogJHt0b3RhbEdhbWVzfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cInN1bmstY291bnRcIj5OdW1iZXIgb2YgVGltZXMgSGl0OiAke3RvdGFsSGl0c308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9XCJ3aW4tY291bnRcIj5OdW1iZXIgb2YgR2FtZXMgV29uOiAke3RvdGFsV2lufTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cInNob3QtY291bnRcIj5OdW1iZXIgb2YgU2hvdHMgRmlyZWQ6ICR7dG90YWxTaG90c308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGZvb3Rlcj48aDE+PC9oMT48L2Zvb3Rlcj4gICAgXHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBwbGFjZW1lbnRPdmVybGF5UmVuZGVyID0gKHBsYWNlbWVudENvdW50LCBzaGlwKT0+e1xyXG4gICAgICAgIGlmKHNoaXApe1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVTZXR1cCAudG9wJylcclxuICAgICAgICAgICAgcGxhY2VtZW50T3ZlcmxheS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aDE+UGxlYXNlIE9yZ2FuaXplIFlvdXIgU2hpcHM6ICR7cGxhY2VtZW50Q291bnQrK30vNTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDI+VG8gcGxhY2UgdGhlIEN1cnJlbnQgU2hpcCwgSG92ZXIgT3ZlciB0aGUgR3JpZCBhbmQgTGVmdCBDbGljay48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyPkdhbWUgV2lsbCBTdGFydCBBdXRvbWF0aWNhbGx5IE9uY2UgQWxsIFNoaXBzIGFyZSBQbGFjZWQuPC9oMj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgIDxoMj5Zb3UgQXJlIEN1cnJlbnRseSBQbGFjaW5nOjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzaGlwXCI+JHsnIycucmVwZWF0KHNoaXAubGVuZ3RoKX08L2gxPlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYWNlbWVudFJlbmRlciA9IChwbGF5ZXIsIHNoaXBMaXN0LCBzaGlwQ291bnQpPT57XHJcbiAgICAgICAgbGV0IHNoaXAgPSBzaGlwTGlzdFtzaGlwQ291bnRdXHJcbiAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSAxXHJcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGVmdC1ib2FyZCcpXHJcbiAgICAgICAgZ2VuZXJhdGVVc2VyQm9hcmQocGxheWVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNoaXBDb3VudCA+PSAwKXtcclxuICAgICAgICAgICAgY29uc3Qgcm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdGF0ZScpXHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbiA9ICdoJ1xyXG4gICAgICAgICAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvblxyXG4gICAgICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiA9PT0gJ2gnID8gJ3YnIDogJ2gnXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lU2V0dXAgLnNoaXAnKVxyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFNoaXAuaW5uZXJIVE1MID0gcm90YXRpb24gPT09J2gnID8gYCR7JyMnLnJlcGVhdChzaGlwLmxlbmd0aCl9YCA6IGAkeycjPGJyPicucmVwZWF0KHNoaXAubGVuZ3RoKX1gXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcC5pbm5lckhUTUwgPSBgJHsnIycucmVwZWF0KHNoaXAubGVuZ3RoKX1gXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCByYW5kb21QbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZG9tLXBsYWNlbWVudCcpXHJcbiAgICAgICAgICAgIHJhbmRvbVBsYWNlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PntcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZXNldEJvYXJkKClcclxuICAgICAgICAgICAgICAgIHBsYXllci5yYW5kb21QbGFjZW1lbnQoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lU2V0dXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXHJcbiAgICAgICAgICAgICAgICBzaGlwQ291bnQgPSAtMVxyXG4gICAgICAgICAgICAgICAgcGxheWVyLmJvYXJkLnByaW50Qm9hcmQoKVxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVVc2VyQm9hcmQocGxheWVyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcGxheWVyQm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gaG92ZXJIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaXBDb3VudCA+PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gU3RyaW5nKGUudGFyZ2V0LmlkKS5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQudmFsaWRQbGFjZW1lbnQoc2hpcCxOdW1iZXIoaW5kZXgpLHJvdGF0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IocGxheWVyLCBzaGlwLE51bWJlcihpbmRleCkscm90YXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yT2ZmKHBsYXllciwgc2hpcCxOdW1iZXIoaW5kZXgpLHJvdGF0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzaGlwQ291bnQgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IFN0cmluZyhlLnRhcmdldC5pZCkuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkLnZhbGlkUGxhY2VtZW50KHNoaXAsTnVtYmVyKGluZGV4KSxyb3RhdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNob3NlblBsYWNlbWVudChzaGlwLE51bWJlcihpbmRleCkscm90YXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHNoaXBMaXN0Wy0tc2hpcENvdW50XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlZCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzaGlwQ291bnQgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50T3ZlcmxheVJlbmRlcihzaGlwUGxhY2VkLCBzaGlwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lU2V0dXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbmRpY2F0b3JPZmYocGxheWVyLCBzaGlwLCBpbmRleCwgcm90YXRpb24pe1xyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtYm9hcmQnKVxyXG4gICAgICAgIHBsYXllckJvYXJkLmNoaWxkTm9kZXMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyLmJvYXJkLmJvYXJkW051bWJlcihTdHJpbmcoZS5pZCkuc2xpY2UoMSkpXSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGUuY2xhc3NOYW1lID0gJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5kaWNhdG9yKHBsYXllciwgc2hpcCwgaW5kZXgsIHJvdGF0aW9uKXtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWJvYXJkJylcclxuICAgICAgICBwbGF5ZXJCb2FyZC5jaGlsZE5vZGVzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBsYXllci5ib2FyZC5ib2FyZFtOdW1iZXIoU3RyaW5nKGUuaWQpLnNsaWNlKDEpKV0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBlLmNsYXNzTmFtZSA9ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHJvdGF0aW9uID09PSAnaCcgJiYgcGxheWVyLmJvYXJkLnZhbGlkUGxhY2VtZW50KHNoaXAsaW5kZXgscm90YXRpb24pKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmNoaWxkTm9kZXNbaW5kZXgraSsxXS5jbGFzc05hbWUgPSAnZmlsbGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHJvdGF0aW9uID09PSAndicpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY2hpbGROb2Rlc1tpbmRleCtpKjEwKzFdLmNsYXNzTmFtZSA9ICdmaWxsZWQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzVXBkYXRlID0gKCkgPT57XHJcbiAgICAgICAgLy8gTWlkZGxlIFN0YXR1c1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUdXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cm4gaDEnKVxyXG4gICAgICAgIGN1cnJlbnRUdXJuLnRleHRDb250ZW50ID0gdHVyblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZW1haW5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtYWluaW5nIGgxJylcclxuICAgICAgICBjdXJyZW50UmVtYWluaW5nLnRleHRDb250ZW50ID0gcmVtYWluaW5nXHJcbiAgICAgICAgY29uc3QgcGxheWVyQXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFjay1wMSBoMScpXHJcbiAgICAgICAgcGxheWVyQXR0YWNrLnRleHRDb250ZW50ID0gbGFzdEF0dGFjazFcclxuICAgICAgICBjb25zdCBlbmVteUF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2stcDIgaDEnKVxyXG4gICAgICAgIGVuZW15QXR0YWNrLnRleHRDb250ZW50ID0gbGFzdEF0dGFjazJcclxuICAgICAgICBjb25zdCBjdXJyZW50QmF0dGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0JhdHRsZS1TdGF0dXMgaDEnKVxyXG4gICAgICAgIGN1cnJlbnRCYXR0bGUudGV4dENvbnRlbnQgPSBiYXR0bGVTdGF0dXNcclxuICAgICAgICAvLyBHbG9iYWwgU3RhdHVzXHJcbiAgICAgICAgY29uc3QgZ2xvYmFsU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsb2JhbC1zdGF0dXMtZ3JpZCcpXHJcbiAgICAgICAgZ2xvYmFsU3RhdHVzLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGgzIGlkPVwiZ2FtZS1jb3VudFwiPk51bWJlciBvZiBHYW1lczogJHt0b3RhbEdhbWVzfTwvaDM+XHJcbiAgICAgICAgICAgIDxoMyBpZD1cInN1bmstY291bnRcIj5OdW1iZXIgb2YgVGltZXMgSGl0OiAke3RvdGFsSGl0c308L2gzPlxyXG4gICAgICAgICAgICA8aDMgaWQ9XCJ3aW4tY291bnRcIj5OdW1iZXIgb2YgR2FtZXMgV29uOiAke3RvdGFsV2lufTwvaDM+XHJcbiAgICAgICAgICAgIDxoMyBpZD1cInNob3QtY291bnRcIj5OdW1iZXIgb2YgU2hvdHMgRmlyZWQ6ICR7dG90YWxTaG90c308L2gzPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZVVzZXJCb2FyZCA9IChwbGF5ZXIpID0+IHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWJvYXJkJylcclxuICAgICAgICBwbGF5ZXJCb2FyZC5jaGlsZE5vZGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYyA9IFN0cmluZyhib3guaWQpLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIGlmKGxvYyl7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYm9hcmQuYm9hcmRbbG9jXSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdmaWxsZWQnICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwbGF5ZXIuYm9hcmQuYm9hcmRbbG9jXSA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocGxheWVyLmJvYXJkLmJvYXJkW2xvY10gPT09IC0yKXtcclxuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJ21pc3NlZCcgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlRW5lbXlCb2FyZCA9IChwbGF5ZXIpPT57XHJcbiAgICAgICAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC1ib2FyZCcpXHJcbiAgICAgICAgZW5lbXlCb2FyZC5jaGlsZE5vZGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYyA9IFN0cmluZyhib3guaWQpLnNsaWNlKDEpXHJcbiAgICAgICAgICAgIGlmKGxvYyl7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZW5lbXlCb2FyZFtsb2NdID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdoaXQnICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihwbGF5ZXIuZW5lbXlCb2FyZFtsb2NdID09PSAtMil7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NOYW1lID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhbWVPdmVyT3ZlcmxheSA9ICh2aWN0b3J5PXRydWUsIHBsYXllciwgZW5lbXkpPT57XHJcbiAgICAgICAgY29uc3Qgb3Zlck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG92ZXJPdmVybGF5KVxyXG4gICAgICAgIG92ZXJPdmVybGF5LmNsYXNzTmFtZSA9ICcnXHJcbiAgICAgICAgY29uc3Qgb3Zlck92ZXJsYXlTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT3ZlciAudG9wJylcclxuICAgICAgICBvdmVyT3ZlcmxheVNjb3JlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGg0PllPVSAke3ZpY3Rvcnk/ICdXT04nIDogJ0xPU1QnfSBJTjwvaDQ+XHJcbiAgICAgICAgICAgIDxoMT4ke3R1cm59IFR1cm5zPC9oMT5cclxuICAgICAgICAgICAgPGg0PlBsYXkgQWdhaW4/PC9oND5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgIGBcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGVuZW15Qm9hcmRFdmVudCA9IChwbGF5ZXIsIGVuZW15KT0+e1xyXG4gICAgICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtYm9hcmQnKVxyXG4gICAgICAgIGVuZW15Qm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0dXJuKVxyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSAgU3RyaW5nKGUudGFyZ2V0LmlkKS5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgW2F0dGFjaywgYXR0YWNrU3RhdHVzXSA9IHBsYXllci5oaXRFbmVteShjb29yZGluYXRlLCBlbmVteSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXR0YWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBdHRhY2sxID0gYXR0YWNrU3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUVuZW15Qm9hcmQocGxheWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW5lbXkucmFuZG9tSGl0RWFzeShwbGF5ZXIpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEhpdHMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBdHRhY2syID0gJ0hpdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RBdHRhY2syID0gJ01pc3NlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVXNlckJvYXJkKHBsYXllcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cm4rK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTaG90cysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmcgPSBlbmVteS5ocFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVXBkYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbmVteS5ocD09PTAgIHx8IHR1cm4gPT09MTAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lIEZpbmlzaGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyT3ZlcmxheSh0cnVlLCBwbGF5ZXIsIGVuZW15KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxHYW1lcysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFdpbisrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmcgPSAxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihwbGF5ZXIuaHA9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lIEZpbmlzaGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyT3ZlcmxheShmYWxzZSwgcGxheWVyLCBlbmVteSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsR2FtZXMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nID0gMTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuIHJldHVybiB7aW5pdGlhbFJlbmRlciwgZ2VuZXJhdGVVc2VyQm9hcmQsIGdlbmVyYXRlRW5lbXlCb2FyZCwgc3RhdHVzVXBkYXRlLCBlbmVteUJvYXJkRXZlbnQsIHBsYWNlbWVudFJlbmRlciwgcmVzZXRTY29yZX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheSIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vYm9hcmRIYW5kbGVyXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBIYW5kbGVyXCI7XHJcblxyXG5cclxuY2xhc3MgUGxheWVye1xyXG4gICAgc3RhdGljICNwbGF5ID0gMFxyXG4gICAgc3RhdGljICN1cGRhdGVQbGF5ZXJDb3VudCAoKXtcclxuICAgICAgICBQbGF5ZXIuI3BsYXkrPTF9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnBsYXllciA9IFBsYXllci4jcGxheVxyXG4gICAgICAgIFBsYXllci4jdXBkYXRlUGxheWVyQ291bnQoKVxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZUJvYXJkKClcclxuICAgICAgICB0aGlzLmVuZW15Qm9hcmQgPSBuZXcgQXJyYXkoMTAwKS5maWxsKDApXHJcbiAgICAgICAgdGhpcy5zaGlwTGlzdCA9IFtuZXcgU2hpcCg1KSxuZXcgU2hpcCg0KSxuZXcgU2hpcCgzKSxuZXcgU2hpcCgzKSxuZXcgU2hpcCgyKV1cclxuICAgICAgICB0aGlzLnNjb3JlPTBcclxuICAgICAgICB0aGlzLmhwID0gMTdcclxuICAgICAgICB0aGlzLnR1cm4gPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVR1cm4oKXt0aGlzLnR1cm4gPyB0aGlzLnR1cm4gPSBmYWxzZSA6IHRoaXMudHVybiA9IHRydWV9XHJcblxyXG4gICAgcmVzZXRCb2FyZCgpe1xyXG4gICAgICAgIHRoaXMuYm9hcmQucmVzZXRHYW1lQm9hcmQoKVxyXG4gICAgICAgIHRoaXMuZW5lbXlCb2FyZCA9IEFycmF5KDEwMCkuZmlsbCgwKVxyXG4gICAgICAgIHRoaXMuc2hpcExpc3QgPSBbbmV3IFNoaXAoNSksbmV3IFNoaXAoNCksbmV3IFNoaXAoMyksbmV3IFNoaXAoMyksbmV3IFNoaXAoMildXHJcbiAgICAgICAgdGhpcy5ocCA9IDE3XHJcbiAgICAgICAgdGhpcy50dXJuID0gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmFuZG9tUGxhY2VtZW50KCl7XHJcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHRoaXMuc2hpcExpc3Qpe1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2VcclxuICAgICAgICAgICAgd2hpbGUoIXBsYWNlZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VtZW50X2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlbWVudF9kaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICdoJyA6ICd2J1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZC52YWxpZFBsYWNlbWVudChzaGlwLCBwbGFjZW1lbnRfaW5kZXgsIHBsYWNlbWVudF9kaXJlY3Rpb24pKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBwbGFjZW1lbnRfaW5kZXgsIHBsYWNlbWVudF9kaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCcpXHJcbiAgICB9XHJcblxyXG4gICAgY2hvc2VuUGxhY2VtZW50KHNoaXAsIGluZGV4LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmQudmFsaWRQbGFjZW1lbnQoc2hpcCwgaW5kZXgsIGRpcmVjdGlvbikpe1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBpbmRleCwgZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGxhY2VkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJhbmRvbUhpdEVhc3koZW5lbXkpe1xyXG4gICAgICAgIGlmKHRoaXMuZW5lbXlCb2FyZC5pbmRleE9mKDApIT09LTEgJiYgIWVuZW15LmJvYXJkLmNoZWNrQWxsU3VuaygpKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIaXQgPSBmYWxzZVxyXG4gICAgICAgICAgICB3aGlsZSghY3VycmVudEhpdCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGl0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmVuZW15Qm9hcmRbaGl0SW5kZXhdPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEhpdCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmRbaGl0SW5kZXhdID0gZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhoaXRJbmRleCkgPyAtMSA6IC0yXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5lbmVteUJvYXJkW2hpdEluZGV4XSA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteS5ocCA9IGVuZW15LmhwLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGl0RW5lbXkoY29vcmRpbmF0ZSwgZW5lbXkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhdHRhY2tlZCcsIGNvb3JkaW5hdGUpXHJcbiAgICAgICAgaWYodGhpcy5lbmVteUJvYXJkLmluZGV4T2YoMCkhPT0tMSAmJiAhZW5lbXkuYm9hcmQuY2hlY2tBbGxTdW5rKCkpe1xyXG4gICAgICAgICAgICBsZXQgaGl0SW5kZXggPSBjb29yZGluYXRlXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlCb2FyZFtoaXRJbmRleF09PT0wKXtcclxuICAgICAgICAgICAgICAgIGlmKGVuZW15LmJvYXJkLnJlY2VpdmVBdHRhY2soaGl0SW5kZXgpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmRbaGl0SW5kZXhdID0gLTFcclxuICAgICAgICAgICAgICAgICAgICBlbmVteS5ocCAtPTFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5bdHJ1ZSwgJ0hpdCddXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Qm9hcmRbaGl0SW5kZXhdID0gLTJcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsICdNaXNzZWQnXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbZmFsc2UsICctLSddXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiLCJjbGFzcyBTaGlwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdENvdW50PTAsIHN1bms9ZmFsc2Upe1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IGhpdENvdW50XHJcbiAgICAgICAgdGhpcy5zdW5rID0gc3Vua1xyXG4gICAgfVxyXG5cclxuICAgIGlzSGl0KCl7Kyt0aGlzLmhpdENvdW50fVxyXG5cclxuICAgIGlzU3Vuaygpe1xyXG4gICAgICAgIHRoaXMubGVuZ3RoIDw9IHRoaXMuaGl0Q291bnQgPyB0aGlzLnN1bms9dHJ1ZSA6IHRoaXMuc3Vuaz1mYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bmtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTaGlwIGZyb20gXCIuL2dhbWVDb21wb25lbnRzL3NoaXBIYW5kbGVyXCI7XHJcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUNvbXBvbmVudHMvYm9hcmRIYW5kbGVyXCI7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vZ2FtZUNvbXBvbmVudHMvcGxheWVySGFuZGxlclwiIFxyXG5pbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9nYW1lQ29tcG9uZW50cy9kaXNwbGF5ZXJcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmxldCBwMSA9IG5ldyBQbGF5ZXIoKVxyXG5sZXQgcDIgPSBuZXcgUGxheWVyKClcclxubGV0IGRvbSA9IGRpc3BsYXkoKVxyXG5kb20uaW5pdGlhbFJlbmRlcigpXHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1hZ2FpbicpXHJcblxyXG5wbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGRvbS5yZXNldFNjb3JlKClcclxuICAgIGNvbnN0IG92ZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJylcclxuICAgIHAxLnJlc2V0Qm9hcmQoKTtcclxuICAgIHAyLnJlc2V0Qm9hcmQoKTtcclxuICAgIHAyLnJhbmRvbVBsYWNlbWVudCgpXHJcblxyXG4gICAgZG9tLmdlbmVyYXRlVXNlckJvYXJkKHAxKVxyXG4gICAgZG9tLmdlbmVyYXRlRW5lbXlCb2FyZChwMSlcclxuICAgIFxyXG4gICAgZG9tLnN0YXR1c1VwZGF0ZSgpXHJcblxyXG4gICAgb3Zlck92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICAgIGNvbnN0IHBsYWNlbWVudE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZVNldHVwJylcclxuICAgIHBsYWNlbWVudE92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICAgIGRvbS5lbmVteUJvYXJkRXZlbnQocDEsIHAyKVxyXG4gICAgZG9tLnBsYWNlbWVudFJlbmRlcihwMSwgcDEuc2hpcExpc3QsIDQpXHJcbn0pXHJcblxyXG5jb25zdCByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpXHJcbnJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG59KVxyXG5cclxuXHJcblxyXG4vLyBkb20ucGxhY2VtZW50UmVuZGVyKHAxLCBwMS5zaGlwTGlzdCwgNClcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==