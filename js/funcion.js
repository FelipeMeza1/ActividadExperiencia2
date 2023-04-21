function CrearCarta() {
    console.log("Creando Carta...");

    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('name').value;
    var apaterno = document.getElementById('apaterno').value;
    var amaterno = document.getElementById('amaterno').value;
    var fecha = document.getElementById('fecha').value;
    var edad = (document.getElementById('edad').value);
    var genero = document.getElementById('genero').value;
    var profesion = document.getElementById('profesion').value;
    var email = document.getElementById('mail').value;
    var celu = document.getElementById('celu').value;
    var razon = document.getElementById('razon').value;

    var card;

    card = ("                    Carta de Presentación \n Rut: " + rut + "\n Nombre: " + nombre + 
    "\n Apellido Paterno: " + apaterno + "\n Apellido Materno: " + amaterno + "\n Fecha de Nacimiento: " + fecha + 
    "\n Edad: " + edad + "\n Genero: " + genero + "\n Profesión: " + profesion + "\n Email: " + email +
    "\n Celular: " + celu + "\n Motivo: " + razon)

    document.getElementById('carta').value=card;
}