/**Added a pop_Up with some using a snippet of code from http://jsfiddle.net/SRw67/
*can't figure out how to get the pop up to close on submit without the submit not letting the Employee info append to the DOM
**/

function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });
}

$(function() {
  $('#empButton').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#empButton'));
    return false;
  });

});





$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};





/*$('form#newEmployee').on('submit', 'button', function(){
  var submitVal = $('#newEmployee'.value)
    if (submitVal === true) {
      deselect($('#empButton'));
      return false;
    }

});
*/
