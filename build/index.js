/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/boxes/index.js":
/*!****************************!*\
  !*** ./src/boxes/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var PanelBody = wp.components.PanelBody; // Logo para el bloque


/**  
        ---7 Pasos para crear un Bloque en Gutenberg ---
    1.- Importar el componente(s) que utilizarás
    2.- Coloca el componente donde deseas utilizarlo.
    3.- Crea una función que lea los contenidos
    4.- Registra un atributo
    5.- Extraer el contenido desde props
    6.- Guarda el contenido con setAttributes
    7.- Lee los contenidos guardados en save()
*/

registerBlockType("lapizzeria/boxes", {
  title: "Pizzeria Cajas",
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "lapizzeria",
  attributes: {
    headingBox: {
      type: "string",
      source: "html",
      selector: ".box h2"
    },
    textoBox: {
      type: "string",
      source: "html",
      selector: ".box p"
    },
    colorFondo: {
      type: "string"
    },
    colorTexto: {
      type: "string"
    },
    alineacionContenido: {
      type: "string",
      default: "center"
    }
  },
  edit: function edit(props) {
    console.log(props); // Extraer el contenido desde props

    var _props$attributes = props.attributes,
        headingBox = _props$attributes.headingBox,
        textoBox = _props$attributes.textoBox,
        colorFondo = _props$attributes.colorFondo,
        colorTexto = _props$attributes.colorTexto,
        alineacionContenido = _props$attributes.alineacionContenido,
        setAttributes = props.setAttributes;

    var onChangeHeadingBox = function onChangeHeadingBox(nuevoHeading) {
      setAttributes({
        headingBox: nuevoHeading
      });
    };

    var onChangeTextoBox = function onChangeTextoBox(nuevoTexto) {
      setAttributes({
        textoBox: nuevoTexto
      });
    };

    var onChangeColorFondo = function onChangeColorFondo(nuevoColor) {
      setAttributes({
        colorFondo: nuevoColor
      });
    };

    var onChangeColorTexto = function onChangeColorTexto(nuevoColor) {
      setAttributes({
        colorTexto: nuevoColor
      });
    };

    var onChangeAlinearContenido = function onChangeAlinearContenido(nuevaAlineacion) {
      setAttributes({
        alineacionContenido: nuevaAlineacion
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de Fondo",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Fondo"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorFondo,
      value: colorFondo
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: "Color de Texto",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Color de Texto"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      onChange: onChangeColorTexto,
      value: colorTexto
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAlinearContenido
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "box",
      style: {
        backgroundColor: colorFondo,
        textAlign: alineacionContenido
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el Encabezado",
      onChange: onChangeHeadingBox,
      value: headingBox
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el Texto",
      onChange: onChangeTextoBox,
      value: textoBox
    }))));
  },
  save: function save(props) {
    console.log(props); // Extraer el contenido desde props

    var _props$attributes2 = props.attributes,
        headingBox = _props$attributes2.headingBox,
        textoBox = _props$attributes2.textoBox,
        colorFondo = _props$attributes2.colorFondo,
        colorTexto = _props$attributes2.colorTexto,
        alineacionContenido = _props$attributes2.alineacionContenido;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "box",
      style: {
        backgroundColor: colorFondo,
        textAlign: alineacionContenido
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: headingBox
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        color: colorTexto
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoBox
    })));
  }
});

/***/ }),

/***/ "./src/contenedor/index.js":
/*!*********************************!*\
  !*** ./src/contenedor/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    InnerBlocks = _wp$editor.InnerBlocks;
var IconButton = wp.components.IconButton; // Logo para el bloque


registerBlockType("lapizzeria/contenedor", {
  title: "Pizzeria Contenedor",
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "lapizzeria",
  attributes: {
    imagenFondo: {
      type: "string",
      selector: ".bloque-contenedor"
    }
  },
  edit: function edit(props) {
    // extraer los valores
    var imagenFondo = props.attributes.imagenFondo,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenFondo: nuevaImagen.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloque-contenedor",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-bloque"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-fondo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloques-internos"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))));
  },
  save: function save(props) {
    // extraer los valores
    var imagenFondo = props.attributes.imagenFondo;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloque-contenedor",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-bloque"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-fondo"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bloques-internos"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/galeria/index.js":
/*!******************************!*\
  !*** ./src/galeria/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");


var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var IconButton = wp.components.IconButton; // Logo para el bloque


/**  
        ---7 Pasos para crear un Bloque en Gutenberg ---
    1.- Importar el componente(s) que utilizarás
    2.- Coloca el componente donde deseas utilizarlo.
    3.- Crea una función que lea los contenidos
    4.- Registra un atributo
    5.- Extraer el contenido desde props
    6.- Guarda el contenido con setAttributes
    7.- Lee los contenidos guardados en save()
*/

registerBlockType("lapizzeria/galeria", {
  title: "La Pizzeria Galeria",
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "lapizzeria",
  attributes: {
    imagenes: {
      type: "array"
    }
  },
  edit: function edit(props) {
    var _props$attributes$ima = props.attributes.imagenes,
        imagenes = _props$attributes$ima === void 0 ? [] : _props$attributes$ima,
        setAttributes = props.setAttributes;

    var borrarImagen = function borrarImagen(imagenIndex) {
      var nuevasImagenes = imagenes.filter(function (imagen, index) {
        return index !== imagenIndex;
      });
      setAttributes({
        imagenes: nuevasImagenes
      });
    };

    var onSeleccionarNuevaImagen = function onSeleccionarNuevaImagen(nuevaImagen) {
      var imagen = {
        thumb: nuevaImagen.sizes.medium.url,
        full: nuevaImagen.sizes.full.url,
        id: nuevaImagen.id
      };
      setAttributes({
        imagenes: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(imagenes), [imagen])
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "galeria-pizzeria"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarNuevaImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "texto-primario"
    }, "Galer\xEDa"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "listado-imagenes"
    }, imagenes.map(function (imagen, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        className: "imagen"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "borrar-imagen",
        onClick: function onClick() {
          return borrarImagen(index);
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
        className: "dashicons dashicons-trash"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: imagen.thumb
      }));
    })));
  },
  save: function save(props) {
    var _props$attributes$ima2 = props.attributes.imagenes,
        imagenes = _props$attributes$ima2 === void 0 ? [] : _props$attributes$ima2;

    if (imagenes.length === 0) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "No hay imagenes");
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "galeria-pizzeria"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "texto-primario"
    }, "Galer\xEDa"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "listado-imagenes"
    }, imagenes.map(function (imagen) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
        className: "imagen"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        href: imagen.full,
        "data-lightbox": "galeria"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: imagen.thumb
      })));
    })));
  }
});

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl; // Logo para el bloque


registerBlockType('lapizzeria/hero', {
  title: 'La Pizzeria Hero',
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: 'lapizzeria',
  attributes: {
    imagenHero: {
      type: 'string',
      selector: '.hero-block'
    },
    tituloHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block h1'
    },
    textoHero: {
      type: 'string',
      source: 'html',
      selector: '.hero-block p'
    },
    urlHero: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    alinearContenido: {
      type: 'string',
      default: 'center'
    },
    alturaHero: {
      type: 'number'
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit: function edit(props) {
    // extraer los valores
    var _props$attributes = props.attributes,
        imagenHero = _props$attributes.imagenHero,
        tituloHero = _props$attributes.tituloHero,
        textoHero = _props$attributes.textoHero,
        urlHero = _props$attributes.urlHero,
        alinearContenido = _props$attributes.alinearContenido,
        alturaHero = _props$attributes.alturaHero,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenHero: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloHero: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        textoHero: nuevoTexto
      });
    };

    var onChangeURL = function onChangeURL(nuevaUrl) {
      setAttributes({
        urlHero: nuevaUrl
      });
    };

    var onChangeAlinearContenido = function onChangeAlinearContenido(nuevaAlineacion) {
      setAttributes({
        alinearContenido: nuevaAlineacion
      });
    };

    var onChangeAlturaHero = function onChangeAlturaHero(nuevaAltura) {
      setAttributes({
        alturaHero: parseInt(nuevaAltura)
      });
    };

    console.log(props);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Altura Hero',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Altura en Pixeles"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      type: "number",
      min: 300,
      max: 700,
      step: 10,
      onChange: onChangeAlturaHero,
      value: alturaHero || 500
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url( ".concat(imagenHero, " )"),
        textAlign: alinearContenido,
        height: "".concat(alturaHero || 500, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      onChange: onChangeAlinearContenido,
      value: alinearContenido
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Titulo del Hero',
      onChange: onChangeTitulo,
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: 'Agrega el Texto del Hero',
      onChange: onChangeTexto,
      value: textoHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlHero,
      className: "boton boton-primario"
    }, "Leer M\xE1s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeURL,
      url: urlHero
    }))));
  },
  save: function save(props) {
    // extraer los valores
    var _props$attributes2 = props.attributes,
        imagenHero = _props$attributes2.imagenHero,
        tituloHero = _props$attributes2.tituloHero,
        textoHero = _props$attributes2.textoHero,
        urlHero = _props$attributes2.urlHero,
        alinearContenido = _props$attributes2.alinearContenido,
        alturaHero = _props$attributes2.alturaHero;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "hero-block",
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url( ".concat(imagenHero, " )"),
        textAlign: alinearContenido,
        height: "".concat(alturaHero || 500, "px")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoHero
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: urlHero,
      className: "boton boton-primario"
    }, "Leer M\xE1s"))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes */ "./src/boxes/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu/index.js");
/* harmony import */ var _galeria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galeria */ "./src/galeria/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _textoimagen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textoimagen */ "./src/textoimagen/index.js");
/* harmony import */ var _contenedor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contenedor */ "./src/contenedor/index.js");







/***/ }),

/***/ "./src/menu/index.js":
/*!***************************!*\
  !*** ./src/menu/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");


var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl; // Logo para el bloque


registerBlockType("lapizzeria/menu", {
  title: "La Pizzeria Menu",
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"]
  },
  category: "lapizzeria",
  attributes: {
    cantidadMostrar: {
      type: "number"
    },
    categoriaMenu: {
      type: "number"
    },
    tituloBloque: {
      type: "string",
      default: "Titulo Bloque"
    }
  },
  edit: withSelect(function (select, props) {
    console.log(props); // extraer los valores

    var _props$attributes = props.attributes,
        cantidadMostrar = _props$attributes.cantidadMostrar,
        categoriaMenu = _props$attributes.categoriaMenu,
        setAttributes = props.setAttributes;

    var onChangeCantidadMostrar = function onChangeCantidadMostrar(nuevaCantidad) {
      setAttributes({
        cantidadMostrar: parseInt(nuevaCantidad)
      });
    };

    var onChangeCategoriaMenu = function onChangeCategoriaMenu(nuevaCategoria) {
      setAttributes({
        categoriaMenu: nuevaCategoria
      });
    };

    var onChangeTituloBloque = function onChangeTituloBloque(nuevoTitulo) {
      setAttributes({
        tituloBloque: nuevoTitulo
      });
    };

    return {
      categorias: select("core").getEntityRecords("taxonomy", "categoria-menu"),
      // Enviar una petición a la api
      especialidades: select("core").getEntityRecords("postType", "especialidades", {
        "categoria-menu": categoriaMenu,
        per_page: cantidadMostrar || 4
      }),
      onChangeCantidadMostrar: onChangeCantidadMostrar,
      onChangeCategoriaMenu: onChangeCategoriaMenu,
      onChangeTituloBloque: onChangeTituloBloque,
      props: props
    };
  })(function (_ref) {
    var categorias = _ref.categorias,
        especialidades = _ref.especialidades,
        onChangeCantidadMostrar = _ref.onChangeCantidadMostrar,
        onChangeCategoriaMenu = _ref.onChangeCategoriaMenu,
        onChangeTituloBloque = _ref.onChangeTituloBloque,
        props = _ref.props;
    // extraer los props
    var _props$attributes2 = props.attributes,
        cantidadMostrar = _props$attributes2.cantidadMostrar,
        categoriaMenu = _props$attributes2.categoriaMenu,
        tituloBloque = _props$attributes2.tituloBloque; // Verificar especialidades

    if (!especialidades) {
      return "Cargando...";
    } // Si no hay especialidades


    if (especialidades && especialidades.length === 0) {
      return "No hay resultados";
    } // console.log(categorias);
    // Verificar categorias


    if (!categorias) {
      console.log("No hay categorias");
      return null;
    }

    if (categorias && categorias.length === 0) {
      console.log("No hay resultados");
      return null;
    } // Generar label y value a categorias


    categorias.forEach(function (categoria) {
      categoria["label"] = categoria.name;
      categoria["value"] = categoria.id;
    }); // Arreglo con valores por default

    var opcionDefault = [{
      value: "",
      label: " -- Todos -- "
    }];
    var listadoCategorias = [].concat(opcionDefault, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categorias));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Cantidad a Mostrar",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Cantidad a Mostrar"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      onChange: onChangeCantidadMostrar,
      min: 2,
      max: 10,
      value: cantidadMostrar || 4
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Categoría de Especialidad",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Categor\xEDa de Especialidad"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      options: listadoCategorias,
      onChange: onChangeCategoriaMenu,
      value: categoriaMenu
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Titulo Bloque",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      className: "components-base-control__label"
    }, "Titulo Bloque"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      onChange: onChangeTituloBloque,
      value: tituloBloque
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", {
      className: "titulo-menu"
    }, tituloBloque), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", {
      className: "nuestro-menu"
    }, especialidades.map(function (especialidad) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        src: especialidad.imagen_destacada
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "platillo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "precio-titulo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, especialidad.title.rendered), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "$ ", especialidad.precio)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "contenido-platillo"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
        value: especialidad.content.rendered.substring(0, 180)
      })))));
    })));
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/pizzeria-icon.svg":
/*!*******************************!*\
  !*** ./src/pizzeria-icon.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgPizzeriaIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#1B6606",
  d: "M-.405-1.612h27.09v27.255H-.405z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#FFF"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M2.965 18.784V5.228h3.293v10.703h5.246v2.853H2.965zM23.316 9.402c0 .792-.146 1.459-.439 2.001a3.62 3.62 0 01-1.188 1.312 5.255 5.255 0 01-1.723.728 8.844 8.844 0 01-2.029.229H16.31v5.112h-3.275V5.228h4.979c.74 0 1.433.073 2.077.22.645.148 1.206.383 1.685.709.479.325.855.754 1.131 1.282.273.53.409 1.185.409 1.963zm-3.273.018c0-.319-.063-.581-.191-.785s-.3-.362-.517-.478a2.165 2.165 0 00-.737-.229 6.053 6.053 0 00-.852-.058H16.31v3.197h1.377c.307 0 .601-.025.882-.076a2.39 2.39 0 00.756-.269c.224-.127.398-.297.526-.508.128-.209.192-.473.192-.794z"
}));

function SvgPizzeriaIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 25.16,
    height: 23.954
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0KCmltcG9ydCAqIGFzIFJlYWN0IGZyb20gInJlYWN0IjsKCnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoInBhdGgiLCB7CiAgZmlsbDogIiMxQjY2MDYiLAogIGQ6ICJNLS40MDUtMS42MTJoMjcuMDl2MjcuMjU1SC0uNDA1eiIKfSk7Cgp2YXIgX3JlZjIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudCgiZyIsIHsKICBmaWxsOiAiI0ZGRiIKfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgicGF0aCIsIHsKICBkOiAiTTIuOTY1IDE4Ljc4NFY1LjIyOGgzLjI5M3YxMC43MDNoNS4yNDZ2Mi44NTNIMi45NjV6TTIzLjMxNiA5LjQwMmMwIC43OTItLjE0NiAxLjQ1OS0uNDM5IDIuMDAxYTMuNjIgMy42MiAwIDAxLTEuMTg4IDEuMzEyIDUuMjU1IDUuMjU1IDAgMDEtMS43MjMuNzI4IDguODQ0IDguODQ0IDAgMDEtMi4wMjkuMjI5SDE2LjMxdjUuMTEyaC0zLjI3NVY1LjIyOGg0Ljk3OWMuNzQgMCAxLjQzMy4wNzMgMi4wNzcuMjIuNjQ1LjE0OCAxLjIwNi4zODMgMS42ODUuNzA5LjQ3OS4zMjUuODU1Ljc1NCAxLjEzMSAxLjI4Mi4yNzMuNTMuNDA5IDEuMTg1LjQwOSAxLjk2M3ptLTMuMjczLjAxOGMwLS4zMTktLjA2My0uNTgxLS4xOTEtLjc4NXMtLjMtLjM2Mi0uNTE3LS40NzhhMi4xNjUgMi4xNjUgMCAwMC0uNzM3LS4yMjkgNi4wNTMgNi4wNTMgMCAwMC0uODUyLS4wNThIMTYuMzF2My4xOTdoMS4zNzdjLjMwNyAwIC42MDEtLjAyNS44ODItLjA3NmEyLjM5IDIuMzkgMCAwMC43NTYtLjI2OWMuMjI0LS4xMjcuMzk4LS4yOTcuNTI2LS41MDguMTI4LS4yMDkuMTkyLS40NzMuMTkyLS43OTR6Igp9KSk7CgpmdW5jdGlvbiBTdmdQaXp6ZXJpYUljb24ocHJvcHMpIHsKICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgic3ZnIiwgX2V4dGVuZHMoewogICAgd2lkdGg6IDI1LjE2LAogICAgaGVpZ2h0OiAyMy45NTQKICB9LCBwcm9wcyksIF9yZWYsIF9yZWYyKTsKfQoKZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE5pNHdMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa05oY0dGZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpRFFvSklIZHBaSFJvUFNJeU5TNHhObkI0SWlCb1pXbG5hSFE5SWpJekxqazFOSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNalV1TVRZZ01qTXVPVFUwSWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBeU5TNHhOaUF5TXk0NU5UUWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BISmxZM1FnZUQwaUxUQXVOREExSWlCNVBTSXRNUzQyTVRJaUlHWnBiR3c5SWlNeFFqWTJNRFlpSUhkcFpIUm9QU0l5Tnk0d09TSWdhR1ZwWjJoMFBTSXlOeTR5TlRVaUx6NE5DanhuUGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJR1E5SWsweUxqazJOU3d4T0M0M09EUldOUzR5TWpob015NHlPVE4yTVRBdU56QXphRFV1TWpRMmRqSXVPRFV6U0RJdU9UWTFlaUl2UGcwS0NUeHdZWFJvSUdacGJHdzlJaU5HUmtaR1JrWWlJR1E5SWsweU15NHpNVFlzT1M0ME1ESmpNQ3d3TGpjNU1pMHdMakUwTml3eExqUTFPUzB3TGpRek9Td3lMakF3TVdNdE1DNHlPVFFzTUM0MU5ESXRNQzQyT0Rrc01DNDVPQzB4TGpFNE9Dd3hMak14TWcwS0NRbGpMVEF1TkRrNExEQXVNek15TFRFdU1EY3lMREF1TlRjMExURXVOekl6TERBdU56STRZeTB3TGpZMU1Td3dMakUxTXkweExqTXlPQ3d3TGpJeU9TMHlMakF5T1N3d0xqSXlPV2d0TVM0Mk1qZDJOUzR4TVRKb0xUTXVNamMxVmpVdU1qSTRhRFF1T1RjNURRb0pDV013TGpjMExEQXNNUzQwTXpNc01DNHdOek1zTWk0d056Y3NNQzR5TW1Nd0xqWTBOU3d3TGpFME9Dd3hMakl3Tml3d0xqTTRNeXd4TGpZNE5Td3dMamN3T1dNd0xqUTNPU3d3TGpNeU5Td3dMamcxTlN3d0xqYzFOQ3d4TGpFek1Td3hMakk0TWcwS0NRbERNak11TVRnc055NDVOamtzTWpNdU16RTJMRGd1TmpJMExESXpMak14Tml3NUxqUXdNbm9nVFRJd0xqQTBNeXc1TGpReVl6QXRNQzR6TVRrdE1DNHdOak10TUM0MU9ERXRNQzR4T1RFdE1DNDNPRFZ6TFRBdU15MHdMak0yTWkwd0xqVXhOeTB3TGpRM09BMEtDUWxqTFRBdU1qRTRMVEF1TVRFMkxUQXVORFl5TFRBdU1Ua3lMVEF1TnpNM0xUQXVNakk1WXkwd0xqSTNOQzB3TGpBek9TMHdMalUxT1Mwd0xqQTFPQzB3TGpnMU1pMHdMakExT0dndE1TNDBNeloyTXk0eE9UZG9NUzR6Tnpkak1DNHpNRGNzTUN3d0xqWXdNUzB3TGpBeU5Td3dMamc0TWkwd0xqQTNOZzBLQ1Fsak1DNHlPQzB3TGpBMU1pd3dMalV6TWkwd0xqRTBNU3d3TGpjMU5pMHdMakkyT1dNd0xqSXlOQzB3TGpFeU55d3dMak01T0Mwd0xqSTVOeXd3TGpVeU5pMHdMalV3T0VNeE9TNDVOemtzTVRBdU1EQTFMREl3TGpBME15dzVMamMwTVN3eU1DNHdORE1zT1M0ME1ub2lMejROQ2p3dlp6NE5Dand2YzNablBnMEsiOwpleHBvcnQgeyBTdmdQaXp6ZXJpYUljb24gYXMgUmVhY3RDb21wb25lbnQgfTs=");


/***/ }),

/***/ "./src/textoimagen/index.js":
/*!**********************************!*\
  !*** ./src/textoimagen/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pizzeria-icon.svg */ "./src/pizzeria-icon.svg");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInputButton = _wp$editor.URLInputButton,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var IconButton = wp.components.IconButton; // Logo para el bloque


registerBlockType("lapizzeria/textoimagen", {
  title: "Pizzeria Texto e Imagen",
  icon: {
    src: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
  },
  category: "lapizzeria",
  attributes: {
    imagenFondo: {
      type: "string",
      selector: ".ingredientes-bloque"
    },
    tituloBloque: {
      type: "string",
      source: "html",
      selector: ".texto-ingredientes h1"
    },
    textoBloque: {
      type: "string",
      source: "html",
      selector: ".texto-ingredientes p"
    },
    enlaceBloque: {
      type: "string",
      source: "attribute",
      attribute: "href"
    },
    imagenBloque: {
      type: "string",
      source: "attribute",
      selector: ".imagen-ingredientes img",
      attribute: "src",
      default: _pizzeria_icon_svg__WEBPACK_IMPORTED_MODULE_1__["ReactComponent"]
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: function edit(props) {
    // extraer de props
    var _props$attributes = props.attributes,
        imagenFondo = _props$attributes.imagenFondo,
        tituloBloque = _props$attributes.tituloBloque,
        textoBloque = _props$attributes.textoBloque,
        enlaceBloque = _props$attributes.enlaceBloque,
        imagenBloque = _props$attributes.imagenBloque,
        setAttributes = props.setAttributes;

    var onSeleccionarImagen = function onSeleccionarImagen(nuevaImagen) {
      setAttributes({
        imagenFondo: nuevaImagen.sizes.full.url
      });
    };

    var onChangeTitulo = function onChangeTitulo(nuevoTitulo) {
      setAttributes({
        tituloBloque: nuevoTitulo
      });
    };

    var onChangeTexto = function onChangeTexto(nuevoTexto) {
      setAttributes({
        textoBloque: nuevoTexto
      });
    };

    var onChangeURL = function onChangeURL(nuevaUrl) {
      setAttributes({
        enlaceBloque: nuevaUrl
      });
    };

    var onSeleccionarImagenIngredientes = function onSeleccionarImagenIngredientes(nuevaImagen) {
      setAttributes({
        imagenBloque: nuevaImagen.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ingredientes-bloque",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagen,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "texto-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el Titulo del Hero",
      onChange: onChangeTitulo,
      value: tituloBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Agrega el Titulo del Hero",
      onChange: onChangeTexto,
      value: textoBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: enlaceBloque,
      className: "boton boton-secundario"
    }, "Leer M\xE1s")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      onChange: onChangeURL,
      url: enlaceBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenBloque
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSeleccionarImagenIngredientes,
      type: "image",
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(IconButton, {
          className: "lapizzeria-agregar-imagen",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Cambiar Imagen"
        });
      }
    }))));
  },
  save: function save(props) {
    // extraer de props
    var _props$attributes2 = props.attributes,
        imagenFondo = _props$attributes2.imagenFondo,
        tituloBloque = _props$attributes2.tituloBloque,
        textoBloque = _props$attributes2.textoBloque,
        enlaceBloque = _props$attributes2.enlaceBloque,
        imagenBloque = _props$attributes2.imagenBloque;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ingredientes-bloque",
      style: {
        backgroundImage: "url(".concat(imagenFondo, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "contenido-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "texto-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
      className: "titulo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: tituloBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: textoBloque
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: enlaceBloque,
      className: "boton boton-secundario"
    }, "Leer M\xE1s"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "imagen-ingredientes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imagenBloque
    }))));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map