module.exports = (function() {



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
textAlignCenter.addEventListener("click", function() { TextPositioning ('center') });

textAlignLeft.addEventListener("click", function() { TextPositioning ('left') });

textAlignRight.addEventListener("click", function() { TextPositioning ('right') });

return {
  TextPositioning : TextPositioning,
  setPositionX : setPositionX,
  setToolbarPositionX : setToolbarPositionX,
  setPositionY : setPositionY,
  setToolbarPositionY : setToolbarPositionY
};

}());
