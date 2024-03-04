

if (!$('#myCanvas').tagcanvas({
  textColour: '#08FDD8',
  outlineThickness: 0.5,
  outlineColour: '#FE0853',
  maxSpeed: 0.06,
  freezeActive: true,
  shuffleTags: true,
  shape: 'sphere',
  zoom: 0.8,
  wheelZoom: false,
  noSelect: true,
  textFont: null,
  freezeDecel: true,
  weightMode: 'size',
  weight: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 1.1
}, 'tags-skils')) {
  // something went wrong, hide the canvas container
  $('#myCanvasContainer').hide();
}

$('.sAHTI button').click(function () {
  // removemos la clase "dHdZWh" de todos los botones
  $('.sAHTI button').removeClass('dHdZWh').addClass('gHbkvF');
  // agregamos la clase "dHdZWh" al botón clickeado
  $(this).removeClass('gHbkvF').addClass('dHdZWh');
  // escondemos todos los paneles
  $('.jbGgbG > div').attr('aria-hidden', 'true').prop('hidden', true);
  // obtenemos el ID del panel correspondiente
  var panelId = $(this).attr('aria-controls');
  // hacemos visible el panel correspondiente
  $('#' + panelId).attr('aria-hidden', 'false').prop('hidden', false);
  var valuecolumn = $(this).data('valuecolumn');
  //utilizar la variable --tab-height
  var transformedValue = parseInt(valuecolumn) * 42;
  $('.fLsUSJ').css('transform', `translateY(calc(${transformedValue}px))`);
});
