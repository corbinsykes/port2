$(document).ready(function() {

  var invertColors = function(divClass, iconClass, color1, color2) {
    $(divClass).css('background-color', color1);
    $(iconClass).css('color', color2);
  };

  var revertColors = function(divClass, iconClass, color1, color2) {
    $(divClass).css('background-color', color2);
    $(iconClass).css('color', color1);
  };

  $('.h').hover(function() {
    invertColors('.h', '.h-icon', '#fff', '#f2c230');
  },function() {
    revertColors('.h', '.h-icon', '#fff', '#f2c230');
  });

  $('.e').hover(function() {
    invertColors('.e', '.e-icon', '#203880', '#fff');
  },function() {
    revertColors('.e', '.e-icon', '#203880', '#fff');
  });

  $('.l-1').hover(function() {
    invertColors('.l-1', '.l-1-icon', '#203880', '#e74c2e');
  },function() {
    revertColors('.l-1', '.l-1-icon', '#203880', '#e74c2e');
  });

  $('.l-2').hover(function() {
    invertColors('.l-2', '.l-2-icon', '#8b3623', '#f2c230');
  },function() {
    revertColors('.l-2', '.l-2-icon', '#8b3623', '#f2c230');
  });

  $('.o').hover(function() {
    invertColors('.o', '.o-icon', '#3078c0', '#203880');
  },function() {
    revertColors('.o', '.o-icon', '#3078c0', '#203880');
  });

  $('#filled-location').hover(function() {
    $('.location-text').css('color', '#fff');
  },function() {
    $('.location-text').css('color', 'transparent');
  });

  $('#filled-coffee').hover(function() {
    $('.coffee-text').css('color', '#fff');
  },function() {
    $('.coffee-text').css('color', 'transparent');
  });

  $('#filled-browser').hover(function() {
    $('.browser-text').css('color', '#fff');
  },function() {
    $('.browser-text').css('color', 'transparent');
  });

  $('#filled-email').hover(function() {
    $('.email-text').css('color', '#fff');
  },function() {
    $('.email-text').css('color', 'transparent');
  });

  $('#filled-suitcase').hover(function() {
    $('.suitcase-text').css('color', '#fff');
  },function() {
    $('.suitcase-text').css('color', 'transparent');
  });

  $('#filled-phone').hover(function() {
    $('.phone-text').css('color', '#fff');
  },function() {
    $('.phone-text').css('color', 'transparent');
  });

  $('#filled-paper').hover(function() {
    $('.paper-text').css('color', '#fff');
  },function() {
    $('.paper-text').css('color', 'transparent');
  });

});