var main = (function(cover) {

console.log(cover);

  cover.colorModule = require ('./color.js');

  cover.toolbarModule = require('./toolbar.js');

  cover.positioningModule = require('./positioning.js');

  cover.canvasModule = require('./canvas.js');

  cover.canvasTextModule = require('./canvas_text.js');

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

})({});

module.exports = main;
