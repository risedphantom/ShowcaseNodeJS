var LAYOUT = (function () {
    'use strict';

	function greet(answer) {
        var qs = {
            type: answer
        };

        $.get('/greeting', qs, function (data) {
            $('#who .trigger').addClass('hidden');
            $('#who .answers').addClass('hidden');
            $('#who .response').removeClass('hidden').text(data);
            localStorage.setItem('greeting', answer);
        });
    }

    return {
		init: function () {
            var greeting;
            $('#who .trigger').on('click', function (e) {
                e.preventDefault();
                $('#who .answers').toggleClass('hidden');
            });

            $('#who .answers A').on('click', function (e) {
                e.preventDefault();

                greet($(this).attr('data-answer'));

            });

            greeting = localStorage.getItem('greeting');

            if (greeting) {
                greet(greeting);
            } else {
                $('#who .trigger').removeClass('hidden');
            }
        }
    };
}());

$(document).ready(LAYOUT.init);