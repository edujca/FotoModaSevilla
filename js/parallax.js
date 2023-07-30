$(document).ready(function(){

    //El siguiente código funciona, pero no es responsive

    $(window).on('scroll', function(){

        var contacto = $('#contacto');

        if ($(window).scrollTop() >= contacto.offset().top - contacto.outerHeight()){
            var posicion = -($(window).scrollTop() - contacto.offset().top)*0.20;

            contacto.css('background-position', '0 ' +posicion+'px')
        }
    })
    //plugin: pixelcog.github.io/parallax.js/


});