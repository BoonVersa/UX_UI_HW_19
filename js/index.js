$('li a').hover(
  function() {
    $(this).css('color', 'red');
  },
  function() {
    $(this).css('color', '');
  }
);
$('#my-div').wrapInner('<div class="scroll-box"></div>');

$('.scroll-box').css({
  'overflow-y': 'scroll',
  'height': '200px',
  'padding': '10px',
  'border': '1px solid #ccc'
});
$('.scroll-box p').css({
  'margin': '0',
  'line-height': '1.5em'
});
$('#my-divi').wrapInner('<div class="scroll-box"></div>');

$('.scroll-box').css({
  'overflow-y': 'scroll',
  'height': '200px',
  'padding': '10px',
  'border': '1px solid #ccc'
});
$('.scroll-box p').css({
  'margin': '0',
  'line-height': '1.5em'
});
$('#my-divii').wrapInner('<div class="scroll-box"></div>');

$('.scroll-box').css({
  'overflow-y': 'scroll',
  'height': '200px',
  'padding': '10px',
  'border': '1px solid #ccc'
});
$('.scroll-box p').css({
  'margin': '0',
  'line-height': '1.5em'
});