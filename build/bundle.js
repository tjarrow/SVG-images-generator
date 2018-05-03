var cover =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var main = function (cover) {

  console.log(cover);

  cover.colorModule = __webpack_require__(1);

  cover.toolbarModule = __webpack_require__(2);

  cover.positioningModule = __webpack_require__(3);

  cover.canvasModule = __webpack_require__(4);

  cover.canvasTextModule = __webpack_require__(5);

  return cover;
  // return {
  //     toolbarModule : toolbarModule,
  //
  //     elementsPositioningModule : elementsPositioningModule,
  //
  //     // colorModule : colorModule,
  //
  //     canvasModule : canvasModule,
  //     // //
  //     // canvasTextModule : canvasTextModule
  // };
}({});

module.exports = main;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  ////color components initialization

  var container = document.querySelector('.container'),


  // cover.canvasModule.svg
  svg = document.querySelector(".svg-form"),
      toolbarColor = document.getElementById("toolbar-color"),
      colorPreview = document.querySelector(".color-preview"),
      colorCode = document.querySelector('.color-code'),
      colorCodeBackground,
      colorCodeText;

  // console.log(cover.canvasModule.svg);

  function showColorToolbar(e) {
    if (e.target === cover.canvasModule.canvasRect || e.target === colorCodeBackground) toolbarColor.classList.add('toolbar-color--visible');else {
      toolbarColor.classList.remove('toolbar-color--visible');
    }
  }
  //

  function addColorCodeBackground() {
    colorCode.classList.add('color-code-background');
    colorCodeBackground = document.querySelector('.color-code-background');
    colorCodeBackground.addEventListener("keypress", function (e) {
      enterColor(e);
    });
    colorCodeBackground.addEventListener("keyup", function (e) {
      setBgColor();
    });
  }

  function enterColor(e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  }

  function validTextColour(stringToTest) {

    if (stringToTest === "") {
      return false;
    }
    if (stringToTest === "inherit") {
      return false;
    }
    if (stringToTest === "transparent") {
      return false;
    }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") {
      return true;
    }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
  }

  function setBgColor() {

    var newBgColor = colorCodeBackground.innerHTML;
    if (colorCode.classList.contains("color-code-background")) {
      if (validTextColour(newBgColor)) {
        document.querySelector(".color-preview").style.backgroundColor = newBgColor;
        //cover.canvasModule.
        svg.querySelector("#canvas-rect").setAttribute("fill", newBgColor);
      }
    }
  }

  function setTextColor() {
    var newTextColor = colorCodeText.innerHTML;
    if (colorCode.classList.contains("color-code-text")) {
      if (validTextColour(newTextColor)) {
        document.querySelector(".color-preview").style.backgroundColor = newTextColor;
        var texts = document.getElementsByClassName("text-editable");
        for (i = 0; i < texts.length; i++) {
          texts[i].style.color = newTextColor;
        }
      }
    }
  }

  function setHeadlineColor() {
    var newTextColor = colorCodeText.innerHTML;
    if (toolbarColor.classList.contains("toolbar-color--headline")) {
      if (validTextColour(newTextColor)) {
        document.querySelector(".color-preview").style.backgroundColor = newTextColor;
        document.querySelector("#headline-text").querySelector(".text-editable").style.color = newTextColor;
      }
    }
  }
  //
  // //events
  //
  container.addEventListener("click", showColorToolbar);

  console.log(window.cover);

  //
  //cover.canvasModule.
  svg.addEventListener("click", addColorCodeBackground);

  document.getElementById("color-preview--text").addEventListener("click", function () {

    if (cover.canvasTextModule.toolbarText.classList.contains("toolbar-text--maintext")) {
      toolbarText.classList.remove("toolbar-text--visible");
      toolbarColor.classList.add("toolbar-color--maintext");
    }

    if (toolbarText.classList.contains("toolbar-text--headline")) {
      toolbarText.classList.remove("toolbar-text--visible");
      toolbarColor.classList.add("toolbar-color--headline");
    }

    colorCode.classList.add("color-code-text");
    colorCode.classList.remove("color-code-background");
    colorCodeText = document.querySelector(".color-code-text");

    colorCodeText.addEventListener("keypress", function (e) {
      enterColor(e);
    });
    colorCodeText.addEventListener("keyup", function (e) {
      setTextColor();
    });
  });

  document.getElementById("color-preview--background").addEventListener("click", function () {

    if (toolbarColor.classList.contains("toolbar-color--maintext")) {
      toolbarColor.classList.remove("toolbar-color--maintext");
      toolbarText.classList.add("toolbar-text--visible");
    }

    if (toolbarColor.classList.contains("toolbar-color--headline")) {
      toolbarColor.classList.remove("toolbar-color--headline");
      toolbarText.classList.add("toolbar-text--visible");
    }

    colorCode.classList.remove("color-code-text");
    colorCode.classList.add("color-code-background");
  });

  return {
    showColorToolbar: showColorToolbar,
    addColorCodeBackground: addColorCodeBackground,
    enterColor: enterColor,
    validTextColour: validTextColour,
    setBgColor: setBgColor,
    setTextColor: setTextColor,
    setHeadlineColor: setHeadlineColor

  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  var toolbarText = document.getElementById("toolbar-text");

  function headlineToolbarAppear(headlineTextInit) {

    cover.positioningModule.setPositionX(toolbarText, "center");

    if (toolbarText.classList.contains("toolbar-text--maintext")) {
      toolbarText.classList.remove("toolbar-text--maintext");
    }

    toolbarText.classList.add("toolbar-text--headline");
    toolbarText.classList.add("toolbar-text--visible");
  }

  function mainTextToolbarAppear(mainTextInit) {

    if (toolbarText.classList.contains("toolbar-text--headline")) {
      toolbarText.classList.remove("toolbar-text--headline");
    }

    toolbarText.classList.add("toolbar-text--maintext");
    toolbarText.classList.add("toolbar-text--visible");
  }

  return {

    toolbarText: toolbarText,
    headlineToolbarAppear: headlineToolbarAppear,
    mainTextToolbarAppear: mainTextToolbarAppear

  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  var textAlignCenter = document.getElementById("align-center"),
      textAlignLeft = document.getElementById("align-left"),
      svg = document.querySelector('.svg-form'),
      textAlignRight = document.getElementById("align-right");

  function TextPositioning(position) {

    if (svg.classList.contains("svg-with-text")) {

      if (cover.toolbarModule.toolbarText.classList.contains('toolbar-text--headline')) {

        cover.canvasTextModule.headlineText.style.textAlign = position;
        setToolbarPositionX(cover.toolbarModule.toolbarText, position);
      }

      if (cover.toolbarModule.toolbarText.classList.contains('toolbar-text--maintext')) {

        cover.canvasTextModule.mainText.style.textAlign = position;
        setToolbarPositionX(cover.toolbarModule.toolbarText, position);
      }
    }
  }

  function setPositionX(element, positionX) {

    switch (positionX) {

      case 'center':
        element.setAttribute('x', '300');
        break;

      case 'left':
        element.setAttribute('x', '10');
        break;

      case 'right':
        element.setAttribute('x', '600');
        break;

      case 'center-square':
        element.setAttribute('x', '200');
        break;

      case 'center-vertical':
        element.setAttribute('x', '300');
        break;

    }
  }

  function setToolbarPositionX(toolbar, positionX) {

    switch (positionX) {
      case 'center':
        toolbar.style.marginLeft = 'auto';
        toolbar.style.marginRight = 'auto';
        break;

      case 'left':
        toolbar.style.marginLeft = '20px';
        break;

      case 'right':
        toolbar.style.marginRight = '20px';
        break;

    }
  }

  function setPositionY(element, positionY) {

    switch (positionY) {

      case 'top':
        element.setAttribute('y', '40');
        break;

      case 'middle':
        element.setAttribute('y', '150');
        break;

      case 'bottom':
        element.setAttribute('y', '280');
        break;

      case 'top-vertical':
        element.setAttribute('y', '40');
        break;

      case 'middle-vertical':
        element.setAttribute('y', '280');
        break;

      case 'bottom-vertical':
        element.setAttribute('y', '510');
        break;
    }
  }

  function setToolbarPositionY(toolbar, positionY) {

    switch (positionY) {

      case 'top-vertical':
        toolbar.style.bottom = '100% ';
        toolbar.style.marginTop = 'inherit ';
        break;

      case 'middle-vertical':
        break;

      case 'bottom-vertical':
        toolbar.style.marginTop = '-50%';
        break;

      case 'top-vertical':
        toolbar.style.bottom = '100% ';
        toolbar.style.marginTop = 'inherit ';
        break;

      case 'top-square':
        toolbar.style.marginTop = '-97% !important ';
        break;

      case 'bottom-square':
        toolbar.style.marginTop = '-50%';
        break;

    }
  }

  //events
  textAlignCenter.addEventListener("click", function () {
    TextPositioning('center');
  });

  textAlignLeft.addEventListener("click", function () {
    TextPositioning('left');
  });

  textAlignRight.addEventListener("click", function () {
    TextPositioning('right');
  });

  return {
    TextPositioning: TextPositioning,
    setPositionX: setPositionX,
    setToolbarPositionX: setToolbarPositionX,
    setPositionY: setPositionY,
    setToolbarPositionY: setToolbarPositionY
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

      var container = document.querySelector('.container'),
          canvas = document.getElementById('canvas'),
          svg = document.querySelector('.svg-form'),
          canvasRect = document.getElementById('canvas-rect'),


      //buttons for canvas resize
      squareCanvas = document.getElementById('square'),
          horizontalCanvas = document.getElementById('horizontal'),
          verticalCanvas = document.getElementById('vertical'),


      // button for canvas download
      downloadButton = document.querySelector('.buttons__download');

      function canvasResize(type) {

            var screenIcons = document.getElementsByClassName("screen-icons"),
                initialWidth = "740px",
                initialHeight = "510px";

            if (type === 'square') {

                  canvas.style.width = initialHeight;
                  canvas.style.height = initialHeight;

                  svg.style.width = initialHeight;
                  svg.style.height = initialHeight;

                  for (var i = 0; i < screenIcons.length; i++) {
                        screenIcons[i].classList.remove("active");
                  }document.querySelector(".screen-icons-square").classList.add("active");

                  if (cover.toolbarModule.toolbarText.classList.contains("toolbar-text--maintext")) setToolbarPositionY(toolbarText, "bottom-square");

                  if (cover.toolbarModule.toolbarText.classList.contains("toolbar-text--headline")) setToolbarPositionY(toolbarText, "top-square");

                  svg.querySelector("rect").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("rect").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialHeight) - 4);
                  svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialHeight) - 4);
                  svg.querySelector("mask").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("mask").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialHeight));
                  svg.setAttribute("width", initialHeight);
                  svg.setAttribute("height", initialHeight);
                  svg.setAttribute("viewBox", "0 0 " + parseInt(initialHeight) + " " + parseInt(initialHeight));
                  svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));
            }

            if (type === 'horizontal') {

                  canvas.style.width = initialWidth;
                  canvas.style.height = initialHeight;
                  svg.style.width = initialWidth;
                  svg.style.height = initialHeight;

                  for (i = 0; i < screenIcons.length; i++) {
                        screenIcons[i].classList.remove("active");
                  }document.querySelector(".screen-icons-horizontal").classList.add("active");

                  svg.querySelector("rect").setAttribute("width", parseInt(initialWidth));
                  svg.querySelector("rect").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialWidth) - 4);
                  svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialHeight) - 4);
                  svg.querySelector("mask").setAttribute("width", parseInt(initialWidth));
                  svg.querySelector("mask").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialWidth));
                  svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialHeight));
                  svg.setAttribute("width", initialWidth);
                  svg.setAttribute("height", initialHeight);
                  svg.setAttribute("viewBox", "0 0 " + parseInt(initialWidth) + " " + parseInt(initialHeight));
                  svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
                  svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialWidth));
            }

            if (type === 'vertical') {

                  canvas.style.width = initialHeight;
                  canvas.style.height = initialWidth;
                  svg.style.width = initialHeight;
                  svg.style.height = initialWidth;

                  for (i = 0; i < screenIcons.length; i++) {
                        screenIcons[i].classList.remove("active");
                  }document.querySelector(".screen-icons-vertical").classList.add("active");

                  cover.positioningModule.setPositionY(cover.canvasTextModule.mainTextFO, "bottom-vertical");

                  if (toolbarText.classList.contains("toolbar-text--maintext")) setToolbarPositionY(toolbarText, "bottom-vertical");
                  //toolbarText.style.marginTop = ''

                  else if (toolbarText.classList.contains("toolbar-text--headline")) setToolbarPositionY(toolbarText, "top-vertical");

                  svg.querySelector("rect").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("rect").setAttribute("height", parseInt(initialWidth));
                  svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialHeight) - 4);
                  svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialWidth) - 4);
                  svg.querySelector("mask").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("mask").setAttribute("height", parseInt(initialWidth));
                  svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialWidth));
                  svg.setAttribute("width", initialHeight);
                  svg.setAttribute("height", initialWidth);
                  svg.setAttribute("viewBox", "0 0 " + parseInt(initialHeight) + " " + parseInt(initialWidth));
                  svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));
                  svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialWidth));
            }
      }

      function createSVGImage(evt) {

            var files = evt.target.files,
                img = document.createElementNS('http://www.w3.org/2000/svg', "image"),
                reader = new FileReader();

            for (var i = 0, f; f = files[i]; i++) {

                  if (!f.type.match('image.*')) {
                        continue;
                  }

                  reader.onload = function (e) {

                        img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e.target.result);
                        img.setAttributeNS(null, 'width', '200');
                        img.setAttributeNS(null, 'height', '200');
                        // img.setAttributeNS(null,'x','10');
                        // img.setAttributeNS(null,'y','10');
                        img.setAttributeNS(null, 'visibility', 'visible');
                        cover.positioningModule.setPositionX(img, 'center');
                        cover.positioningModule.setPositionY(img, 'middle');

                        svg.appendChild(img);
                  };

                  reader.readAsDataURL(f);
            }
      }

      function SaveCover() {

            var serializer = new window.XMLSerializer(),
                source = serializer.serializeToString(svg),
                link = document.createElement('a');

            if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
                  source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
            }

            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
            link.style.display = 'none';
            link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source));
            link.setAttribute('download', 'cover.svg');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      }

      //events

      document.getElementById('image-loader').addEventListener('change', createSVGImage, false);

      downloadButton.addEventListener('click', SaveCover);

      squareCanvas.addEventListener('click', function () {
            canvasResize('square');
      });

      horizontalCanvas.addEventListener('click', function () {
            canvasResize('horizontal');
      });

      verticalCanvas.addEventListener('click', function () {
            canvasResize('vertical');
      });

      return {
            svg: svg,
            container: container,
            canvasRect: canvasRect,
            canvasResize: canvasResize,
            createSVGImage: createSVGImage,
            SaveCover: SaveCover

      };
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

    // components for adding text in canvas
    var toolbarText,
        mainTextButton = document.getElementById("main-text-button"),
        headlineTextButton = document.getElementById("headline-text-button"),
        headlineText,
        //= document.getElementById("headline-text"), // = document.querySelector(".headline-text"),
    mainText,
        //= document.getElementById("main-text"), // = document.querySelector(".main-text"),
    mainTextFO,
        textEditable;

    var headlineTextClicked = function headlineTextClicked(event) {

        var headlineTextInit = event.target;

        cover.toolbarModule.headlineToolbarAppear(headlineTextInit);
    };

    var mainTextClicked = function mainTextClicked(event) {

        var mainTextInit = event.target;

        cover.toolbarModule.mainTextToolbarAppear(mainTextInit);
    };

    function MainTextInit(text, svgElem) {

        //setPositionX(svgElem,'center');
        cover.positioningModule.setPositionY(svgElem, 'bottom');

        text.innerHTML = "Main text";
        text.addEventListener('click', mainTextClicked, false);
        //mainText = document.getElementById("main-text");
    }

    function HeadlineTextInit(text, svgElem) {

        cover.positioningModule.setPositionY(svgElem, 'top');

        text.innerHTML = "Headline";
        text.addEventListener('click', headlineTextClicked, false);
        //headlineText = document.querySelector(".headline-text");
        //headlineText = document.getElementById("headline-text");
    }

    function TextAppend(textType) {

        var TextInSVG = document.createElementNS('http://www.w3.org/2000/svg', "foreignObject");

        var TextEditable = document.createElement("h3");

        TextEditable.setAttribute("contenteditable", "true");

        TextEditable.className = "text-editable";

        cover.canvasModule.svg.appendChild(TextInSVG);

        TextInSVG.setAttribute('width', '100%');

        TextInSVG.setAttribute('height', '30px');

        cover.canvasModule.svg.classList.add("svg-with-text");

        TextInSVG.appendChild(TextEditable);

        if (textType == "main text") {
            TextInSVG.id = "main-text-fo";
            mainTextFO = document.getElementById("main-text-fo");
            TextEditable.id = "main-text";
            MainTextInit(TextEditable, TextInSVG);
            mainText = document.getElementById("main-text");
        } else if (textType == "headline text") {
            TextEditable.id = "headline-text";
            TextInSVG.id = "headline-text-fo";
            HeadlineTextInit(TextEditable, TextInSVG);
            headlineText = document.getElementById("headline-text");
        }
    }

    function textResize() {

        if (toolbarText.classList.contains('toolbar-text--headline')) {
            headlineText.style.fontSize = "150%";
        } else if (toolbarText.classList.contains('toolbar-text--maintext')) {
            mainText.style.fontSize = "150%";
        }
    }

    //events

    mainTextButton.addEventListener("click", function () {
        TextAppend('main text');
    });

    headlineTextButton.addEventListener("click", function () {
        TextAppend('headline text');
    });

    document.querySelector(".text-resize").addEventListener("click", textResize);

    return {

        headlineText: headlineText,

        mainText: mainText,

        headlineTextClicked: headlineTextClicked,

        mainTextClicked: mainTextClicked,

        MainTextInit: MainTextInit,

        HeadlineTextInit: HeadlineTextInit,

        TextAppend: TextAppend,

        textResize: textResize

    };
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map