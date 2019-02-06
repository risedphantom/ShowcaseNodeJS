/* eslint-disable */
var LAYOUT = (function () {
  'use strict';

  function greet(answer) {
    $.ajax({
      url: '/api/ui/greeting?type=' + answer,
      headers: {
        accept: 'text/plain'
      }
    }).done(function (data) {
      $('#who .trigger')
        .addClass('hidden');
      $('#who .answers')
        .addClass('hidden');
      $('#who .response')
        .removeClass('hidden')
        .text(data);
      localStorage.setItem('greeting', answer);
    });
  }

  return {
    init: function () {
      var greeting;
      $('#who .trigger')
        .on('click', function (e) {
          e.preventDefault();
          $('#who .answers')
            .toggleClass('hidden');
        });

      $('#who .answers A')
        .on('click', function (e) {
          e.preventDefault();

          greet($(this)
            .attr('data-answer'));

        });

      greeting = localStorage.getItem('greeting');

      if (greeting) {
        greet(greeting);
      } else {
        $('#who .trigger')
          .removeClass('hidden');
      }
    }
  };
}());

$(document).ready(LAYOUT.init);
