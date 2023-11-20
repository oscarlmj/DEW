function validarFechaHora(fechaHora) {
    let fechaHoraFormato = new Date(fechaHora);
    let fechaHoraActual = new Date();

    // Verifica que la fecha y hora estén en el pasado en comparación con la fecha y hora actuales
    if (!isNaN(fechaHoraFormato) && fechaHoraFormato < fechaHoraActual) {
      return fechaHoraFormato;
    } else {
      return null;
    }
}

function calcularPrecio() {
    let fechaHoraEntrada = document.getElementById('fechaHoraEntrada').value;

    // Valida la entrada del usuario
    let fechaHoraEntradaValida = validarFechaHora(fechaHoraEntrada);

    if (fechaHoraEntradaValida) {
      // Calcula el precio
      let precio = calcularPrecioEstancia(fechaHoraEntradaValida);

      // Muestra el resultado
      mostrarResultado(precio);
    } else {
      alert("Error: La fecha y hora de entrada no es válida o es posterior a la fecha y hora actual.");
    }
}

function calcularPrecioEstancia(fechaHoraEntrada) {
    let fechaHoraActual = new Date();
    let tiempoTranscurrido = fechaHoraActual - fechaHoraEntrada;

    // Calcula el número total de días y horas
    let diasTotales = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
    let horasTotales = Math.ceil((tiempoTranscurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Aplica la tarifa de precios
    let precioTotal = 0;

    // Tarifa por día completo (máximo 20 euros por día)
    precioTotal += diasTotales * 20;

    // Tarifa por las horas restantes
    if (horasTotales > 0) {
      // Tarifa por la primera hora o fracción
      precioTotal += 1.2;
      horasTotales--; // Resta una hora ya que la primera hora ya ha sido contada

      // Tarifa por las restantes horas o fracciones a razón de 1,5 €
      precioTotal += Math.max(horasTotales - 1, 0) * 1.5;
    }

    return precioTotal.toFixed(2);
  }
function mostrarResultado(precio) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "Fecha y hora del sistema: " + obtenerFechaHoraActual() + "<br>Precio de estancia: " + precio + " euros";
}

function reiniciar() {
    // Limpiar el campo de entrada y el resultado
    document.getElementById('fechaHoraEntrada').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function obtenerFechaHoraActual() {
    let fechaHoraActual = new Date();
    let formato = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return fechaHoraActual.toLocaleDateString('es-ES', formato);
}