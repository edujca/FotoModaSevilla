$(document).ready(function(){

    var formulario = $('#formulario');
    var nombre = $('#nombre');
    var email = $('#email');
    var mensaje = $('#mensaje');

    function valNombre(e)  {
        if (nombre.val() == '' || nombre.val() == null) {
            e.preventDefault();
            $('input[type="text"] + .error').css('display', 'block');                //se indica que seleccione la clase error "hermana" de los imput de titpo texto
        }else{
            $('input[type="text"] + .error').css('display', 'none'); 
        }
    }

    function valEmail(e)  {
        if (email.val() == '' || email.val() == null) {
            e.preventDefault();
            $('input[type="email"] + .error').css('display', 'block');                //se indica que seleccione la clase error "hermana" de los imput de titpo texto
        }else{
            $('input[type="email"] + .error').css('display', 'none'); 
        }
    }

    function valMensaje(e)  {
        if (mensaje.val() == '' || mensaje.val() == null) {
            e.preventDefault();
            $('textarea + .error').css('display', 'block');                //se indica que seleccione la clase error "hermana" de los imput de titpo texto
        }else{
            $('textarea + .error').css('display', 'none'); 
        }
    }

    function validacion(e){
        valNombre(e);
        valEmail(e);
        valMensaje(e);
    }

    formulario.on('submit', validacion);

});