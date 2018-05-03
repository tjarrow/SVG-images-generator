module.exports = (function() {

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

function canvasResize (type) {

  var screenIcons = document.getElementsByClassName("screen-icons"),
      initialWidth = "740px",
      initialHeight = "510px";

  if (type === 'square') {

			canvas.style.width = initialHeight;
			canvas.style.height = initialHeight;

      svg.style.width = initialHeight;
      svg.style.height = initialHeight;

      for (var i = 0; i < screenIcons.length; i++)
          screenIcons[i].classList.remove("active");

      document.querySelector(".screen-icons-square").classList.add("active");

      if (cover.toolbarModule.toolbarText.classList.contains("toolbar-text--maintext"))
      setToolbarPositionY(toolbarText, "bottom-square");

      if (cover.toolbarModule.toolbarText.classList.contains("toolbar-text--headline"))
      setToolbarPositionY(toolbarText, "top-square");

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
			svg.setAttribute("viewBox","0 0 " + parseInt(initialHeight) + " "+ parseInt(initialHeight));
			svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
      svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));

			}

      if (type === 'horizontal') {

        canvas.style.width = initialWidth;
  			canvas.style.height = initialHeight;
        svg.style.width = initialWidth;
        svg.style.height = initialHeight;

        for (i = 0; i < screenIcons.length; i++)
            screenIcons[i].classList.remove("active");

        document.querySelector(".screen-icons-horizontal").classList.add("active");

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
  			svg.setAttribute("viewBox","0 0 " + parseInt(initialWidth) + " "+ parseInt(initialHeight));
  			svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
        svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialWidth));

      }

      if (type === 'vertical') {

        canvas.style.width = initialHeight;
  			canvas.style.height = initialWidth;
        svg.style.width = initialHeight;
        svg.style.height = initialWidth;

        for (i = 0; i < screenIcons.length; i++)
            screenIcons[i].classList.remove("active");

        document.querySelector(".screen-icons-vertical").classList.add("active");

        cover.positioningModule.setPositionY(cover.canvasTextModule.mainTextFO, "bottom-vertical");

        if (toolbarText.classList.contains("toolbar-text--maintext"))
        setToolbarPositionY(toolbarText, "bottom-vertical");
        //toolbarText.style.marginTop = ''

        else if (toolbarText.classList.contains("toolbar-text--headline"))
        setToolbarPositionY(toolbarText, "top-vertical");


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
  			svg.setAttribute("viewBox","0 0 " + parseInt(initialHeight) + " "+ parseInt(initialWidth));
  			svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));
        svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialWidth));

      }

 }

 function createSVGImage(evt) {

    var files = evt.target.files,
        img = document.createElementNS('http://www.w3.org/2000/svg',"image"),
        reader = new FileReader();


    for (var i = 0, f; f = files[i]; i++) {

      if (!f.type.match('image.*')) {
        continue;
      }

      reader.onload = function(e) {

        img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', e.target.result);
        img.setAttributeNS(null, 'width', '200');
        img.setAttributeNS(null, 'height', '200');
        // img.setAttributeNS(null,'x','10');
        // img.setAttributeNS(null,'y','10');
        img.setAttributeNS(null, 'visibility', 'visible');
        cover.positioningModule.setPositionX(img,'center');
        cover.positioningModule.setPositionY(img,'middle');

        svg.appendChild(img);

      };

      reader.readAsDataURL(f);

    }
  }


function SaveCover() {

    let serializer = new window.XMLSerializer(),
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

squareCanvas.addEventListener('click', function() { canvasResize('square') });

horizontalCanvas.addEventListener('click', function() { canvasResize('horizontal') });

verticalCanvas.addEventListener('click', function() { canvasResize('vertical') });

return {
  svg : svg,
  container : container,
  canvasRect : canvasRect,
  canvasResize : canvasResize ,
  createSVGImage : createSVGImage,
  SaveCover : SaveCover

};

}());
