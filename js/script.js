function recibir() {
    var nomId = document.getElementById("nom").value;
    var apeName = document.getElementsByName("apellido")[0].value;
    document.getElementById("escribir").innerHTML = " \ Tu nombre es: " + nomId + " \
     <br>Tu apellido es: "+ apeName;
}
function borrar() {
    document.getElementById("escribir").innerHTML = " ";
}