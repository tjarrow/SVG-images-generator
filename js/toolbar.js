module.exports = (function() {

var toolbarText = document.getElementById("toolbar-text");

 function headlineToolbarAppear (headlineTextInit) {

  cover.positioningModule.setPositionX(toolbarText, "center");

  if (toolbarText.classList.contains("toolbar-text--maintext")) {
    toolbarText.classList.remove("toolbar-text--maintext");
  }

    toolbarText.classList.add("toolbar-text--headline");
    toolbarText.classList.add("toolbar-text--visible");

}

function mainTextToolbarAppear (mainTextInit) {

  if (toolbarText.classList.contains("toolbar-text--headline")) {
    toolbarText.classList.remove("toolbar-text--headline");
  }

  toolbarText.classList.add("toolbar-text--maintext");
  toolbarText.classList.add("toolbar-text--visible");

}

return {

  toolbarText : toolbarText,
  headlineToolbarAppear : headlineToolbarAppear,
  mainTextToolbarAppear : mainTextToolbarAppear

};



}());
