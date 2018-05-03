module.exports = (function() {

// components for adding text in canvas
var toolbarText,

    mainTextButton = document.getElementById("main-text-button"),
    headlineTextButton = document.getElementById("headline-text-button"),
    headlineText, //= document.getElementById("headline-text"), // = document.querySelector(".headline-text"),
    mainText, //= document.getElementById("main-text"), // = document.querySelector(".main-text"),
    mainTextFO,
    textEditable;

    var headlineTextClicked = function(event) {

      var headlineTextInit = event.target;

      cover.toolbarModule.headlineToolbarAppear(headlineTextInit);

     };

     var mainTextClicked = function(event) {

       var mainTextInit = event.target;

       cover.toolbarModule.mainTextToolbarAppear(mainTextInit);

      };


      function MainTextInit(text, svgElem) {

 //setPositionX(svgElem,'center');
 cover.positioningModule.setPositionY(svgElem,'bottom');

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


    var TextInSVG = document.createElementNS('http://www.w3.org/2000/svg',"foreignObject");

    var TextEditable = document.createElement("h3");

    TextEditable.setAttribute("contenteditable", "true");

    TextEditable.className = "text-editable";

    cover.canvasModule.svg.appendChild(TextInSVG);

     TextInSVG.setAttribute('width', '100%');

    TextInSVG.setAttribute('height', '30px');

    cover.canvasModule.svg.classList.add ("svg-with-text");

    TextInSVG.appendChild(TextEditable);

    if (textType == "main text") {
      TextInSVG.id = "main-text-fo" ;
      mainTextFO = document.getElementById("main-text-fo");
      TextEditable.id = "main-text";
      MainTextInit(TextEditable, TextInSVG);
     mainText = document.getElementById("main-text");
}

       else if (textType == "headline text") {
         TextEditable.id = "headline-text" ;
         TextInSVG.id = ("headline-text-fo") ;
         HeadlineTextInit(TextEditable,TextInSVG);
         headlineText = document.getElementById("headline-text");
       }
}

function textResize(){

      if (toolbarText.classList.contains('toolbar-text--headline')) {
        headlineText.style.fontSize = "150%";
      }

      else if (toolbarText.classList.contains('toolbar-text--maintext')) {
        mainText.style.fontSize = "150%";
      }

}


//events

mainTextButton.addEventListener("click", function() { TextAppend('main text') });

headlineTextButton.addEventListener("click", function() { TextAppend('headline text') });

document.querySelector(".text-resize").addEventListener("click", textResize);


return {

    headlineText : headlineText,

    mainText : mainText,

    headlineTextClicked : headlineTextClicked,

    mainTextClicked : mainTextClicked,

    MainTextInit : MainTextInit,

    HeadlineTextInit : HeadlineTextInit,

    TextAppend : TextAppend,

    textResize : textResize

};

}());
