// Agrega un evento de clic al botón
document.getElementById("miBoton").addEventListener("click", function() {
    // Cambia el texto del botón
    document.getElementById("miBoton").innerHTML = "¡Haz clic de nuevo!";
    // Cambia el color de fondo del encabezado
    document.getElementsByTagName("h1")[0].style.backgroundColor = "blue";
  });
  