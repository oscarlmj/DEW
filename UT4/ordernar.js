function ordenarYMostrar() {
    const elementosInput = document.getElementById('elementosInput').value;
    const elementosArray = elementosInput.split(',');

    const numeros = elementosArray.filter(elemento => !isNaN(elemento));
    const letras = elementosArray.filter(elemento => isNaN(elemento));

    numeros.sort((a, b) => a - b);
    letras.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    const elementosOrdenados = [...numeros.map(String), ...letras];

    const resultadoDesordenado = document.getElementById('resultadoDesordenado');
    resultadoDesordenado.innerHTML = "Vector Desordenado: " + elementosArray.join(', ');

    const resultadoOrdenado = document.getElementById('resultadoOrdenado');
    resultadoOrdenado.innerHTML = "Vector Ordenado: " + elementosOrdenados.join(', ');

    const elementosAlReves = elementosArray.slice().reverse();
    const resultadoAlReves = document.getElementById('resultadoAlReves');
    resultadoAlReves.innerHTML = "Vector al Revés: " + elementosAlReves.join(', ');
}