$(document).ready(function(){
    //Mostrar y ocultar el botón de Volver arriba
    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function(){
        var proyectosOffsetTop = $('#proyectos').offset().top;
        
        if ($(window).scrollTop() >= proyectosOffsetTop) {
            btnVolverArriba.css('margin-right' , 0);
        }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
            btnVolverArriba.css('margin-right' , '-60px');
        }

    })

    //Movimiento suave de scroll de "Inicio" y "Volver arriba"

    $('a.volver-arriba').on('click', function(e){
        e.preventDefault(); //quiere decir que no haga la acción por defecto

        if($(window).scrollTop() != 0){
            $('html, body').stop().animate({scrollTop: 0}, 1000); //quiere decir que tarde un segundo en volver hacia el top
        }
    })

    // Movimiento suave de scroll de los emás ítems

    $('a.scroll-suave').on('click', function(e){
        e.preventDefault(); 
        var seccionOffsetTop = $($(this).attr('href')).offset().top;  //$($(this).attr('href')) es igual que escribir, por ejemplo, $('#proyectos')
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        
    });
    $('a.scroll-acercaDe').on('click', function(e){
        e.preventDefault(); 
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 122;  
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        
    });
    $('a.scroll-equipo').on('click', function(e){
        e.preventDefault(); 
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 68;  
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        
    });
});