module.exports = (function() {
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
  if ((e.target === cover.canvasModule.canvasRect) || (e.target === colorCodeBackground))
    toolbarColor.classList.add('toolbar-color--visible');

    else {
      toolbarColor.classList.remove('toolbar-color--visible');
    }
}
//

function addColorCodeBackground () {
  colorCode.classList.add('color-code-background');
  colorCodeBackground = document.querySelector('.color-code-background');
  colorCodeBackground.addEventListener("keypress", function(e) {enterColor(e)} );
  colorCodeBackground.addEventListener("keyup", function (e) {setBgColor()} );
}

function enterColor(e)
 {
   if (e.keyCode === 13 || e.which === 13) {
 			e.preventDefault();
 			return false;
 		}
 }

 function validTextColour(stringToTest) {

      if (stringToTest === "") { return false; }
      if (stringToTest === "inherit") { return false; }
      if (stringToTest === "transparent") { return false; }

      var image = document.createElement("img");
      image.style.color = "rgb(0, 0, 0)";
      image.style.color = stringToTest;
      if (image.style.color !== "rgb(0, 0, 0)") { return true; }
      image.style.color = "rgb(255, 255, 255)";
      image.style.color = stringToTest;
      return image.style.color !== "rgb(255, 255, 255)";
  }

function setBgColor () {

  var newBgColor = colorCodeBackground.innerHTML;
  if (colorCode.classList.contains("color-code-background"))
  {
  if (validTextColour(newBgColor)) {
    document.querySelector(".color-preview").style.backgroundColor = newBgColor;
    //cover.canvasModule.
    svg.querySelector("#canvas-rect").setAttribute("fill", newBgColor);
  }
  }
}

function setTextColor () {
  var newTextColor = colorCodeText.innerHTML;
  if (colorCode.classList.contains("color-code-text"))
    {
    if (validTextColour(newTextColor)) {
    document.querySelector(".color-preview").style.backgroundColor = newTextColor;
    var texts = document.getElementsByClassName("text-editable");
    for (i = 0; i < texts.length; i++)
    texts[i].style.color = newTextColor;
    }
  }
}

function setHeadlineColor () {
  var newTextColor = colorCodeText.innerHTML;
  if (toolbarColor.classList.contains("toolbar-color--headline"))
    {
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
svg.addEventListener("click", addColorCodeBackground );

document.getElementById("color-preview--text").addEventListener("click", function() {

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


    colorCodeText.addEventListener("keypress", function(e){enterColor(e)} );
     colorCodeText.addEventListener("keyup", function(e) {setTextColor()} );

})

document.getElementById("color-preview--background").addEventListener("click", function() {

  if (toolbarColor.classList.contains("toolbar-color--maintext"))
  {
    toolbarColor.classList.remove("toolbar-color--maintext");
    toolbarText.classList.add("toolbar-text--visible");
  }

  if (toolbarColor.classList.contains("toolbar-color--headline")) {
   toolbarColor.classList.remove("toolbar-color--headline");
   toolbarText.classList.add("toolbar-text--visible");
  }

  colorCode.classList.remove("color-code-text");
  colorCode.classList.add("color-code-background");
})

return {
  showColorToolbar : showColorToolbar,
  addColorCodeBackground : addColorCodeBackground,
  enterColor : enterColor,
  validTextColour : validTextColour,
  setBgColor : setBgColor,
  setTextColor : setTextColor,
  setHeadlineColor : setHeadlineColor

};

}());
