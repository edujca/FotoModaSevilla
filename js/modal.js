$(document).ready(function(){
    $('.imagen-proyecto').on('click', function(){

        var rutaImagen = $(this).attr('src');
        var modal = '<div class="modal" id="modal"><img src="'+rutaImagen + '" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';

        $('#proyectos').after(modal);

        $('#btnCerrar').on('click', function(){
            $('#modal').remove();
        })
    })

        $(document).on('keyup', function (e) {      //keyup hace que se ejecute un evento cuando una tecla sube
            if (e.which == 27) {                    //wich sirve para identificar la tecla. 27 es ESC en Ascii
                $('#modal').remove();
            }
        })         
    
})