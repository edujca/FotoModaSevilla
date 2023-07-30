$(document).ready(function(){

        var fixedHeader = $('#fixedHeader');

        $(window).on('scroll', function(){
            var proyectosOffsetTop = $('#proyectos').offset().top;
            //el método offset devuelve dos valores, la distandia que hay desde la izquierda
            //hasta el elemento y la que hay desde el top hasta el elemento. Con .top le digo
            //que sólo quiero el valor de esa propiedad, y la almaceno
            ;
            if ($(window).scrollTop() >= proyectosOffsetTop) {
                fixedHeader.css('margin-top' , 0);
            }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
                fixedHeader.css('margin-top' , '-68px');
            }

        })

});