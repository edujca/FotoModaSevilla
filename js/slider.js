$(document).ready(function(){

    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    //Pasar el último slide al primer lugar
    $('#slider .slide:last').insertBefore('#slider .slide:first');

    //Añadimos un margen negativo para que se vuelva a mostrar el primer slide
    slider.css('margin-left', '-43%');

    //Función para que el slider se mueva a la derecha. Ahora, el que está de primero, pasa a la última posición, y así sucesivamente
    function moverDerecha(){

        if(!slider.is(':animated')){    //is comprueba que se cumpla un filtro (true o false). :animated es un estado de Jquery que indica si está animado
            slider.animate({
                marginLeft: '-105.6%'
            }, 700, function(){
                $('#slider .slide:first').insertAfter('#slider .slide:last'); //inserta el primer slider después del último
                slider.css('margin-left', '-43%');
                resetInterval();
            });
        }
        
    }

    btnSiguiente.on('click', moverDerecha);

    //Función para que el slider se mueva a la izquierda.

    function moverIzquierda(){
        if(!slider.is(':animated')){ 
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            slider.css('margin-left', '-105.6%');
            slider.animate({
                marginLeft: '-43%'
            }, 700, function(){
                resetInterval();
            });
        }
    }

    btnAnterior.on('click', moverIzquierda);

    //Movimiento automático
    var interval = setInterval(moverDerecha, 3500);

    function resetInterval(){
        clearInterval(interval);
        interval = setInterval(moverDerecha, 3500);
    }

});
