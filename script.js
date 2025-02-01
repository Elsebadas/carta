// Agregar interactividad
document.getElementById('boton-interactivo').addEventListener('click', function() {
    const mensajeOculto = document.getElementById('mensaje-oculto');
    mensajeOculto.classList.toggle('oculto');
  
    // Cambiar el texto del botón
    if (mensajeOculto.classList.contains('oculto')) {
      this.textContent = 'Descubre lo que te quiero';
    } else {
      this.textContent = '¡Wow!';
    }
  });