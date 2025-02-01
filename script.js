// Agregar interactividad
document.getElementById('boton-interactivo').addEventListener('click', function() {
    const mensajeOculto = document.getElementById('mensaje-oculto');
    mensajeOculto.classList.toggle('oculto');
  
    // Cambiar el texto del botón
    if (mensajeOculto.classList.contains('oculto')) {
      this.textContent = 'Haz clic aqui';
    } else {
      this.textContent = '🤍Espero te guste🤍';
    }
  });
