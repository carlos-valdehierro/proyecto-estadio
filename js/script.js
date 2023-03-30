var respuestasCorrectas = {
    "pregunta1" : "RespuestaP1-1",
    "pregunta2" : "RespuestaP2-3"
};
function comprobarCorrecta(pregunta) {
    var haAcertado = document.getElementById(respuestasCorrectas[pregunta]).checked;
    if (haAcertado) {
        /** Mostrar mensaje de acierto */
        const hasAcertadoToast = document.getElementById('hasAcertadoToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(hasAcertadoToast);
        toastBootstrap.show();        
    } else {
        /** Mostrar mensaje de fallo */
        const hasAcertadoToast = document.getElementById('hasFalladoToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(hasAcertadoToast);
        toastBootstrap.show();          
    }
    
}