document.addEventListener('DOMContentLoaded', function() {
    let primaria = document.getElementById('primaria');
    let secundaria = document.getElementById('secundaria');
    let secundariaInferior = document.getElementById('secundaria-inferior');
let primariaInferior = document.getElementById('primaria-inferior');

    primaria.addEventListener('mouseover', function() {
        primaria.src = './img/secun-dir.gif';
        primariaInferior.src = './img/secun-indir.gif'
        secundaria.src = './img/prim-dir.gif';
        secundariaInferior.src= './img/prim-indir.gif'
    });

    primaria.addEventListener('mouseout', function() {
        primaria.src = './img/prim-dir.gif';
        primariaInferior.src = './img/prim-indir.gif'
        secundaria.src = './img/secun-dir.gif';
        secundariaInferior.src= './img/secun-indir.gif'

    });

    secundaria.addEventListener('click', function() {
        window.close();
    });
});