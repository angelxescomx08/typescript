"use strict";
(() => {
    const sumar = (...numeros) => {
        return numeros.reduce((acumulado, valorActual) => acumulado + valorActual, 0);
    };
    const resultado = sumar(1 + 2 + 3 + 4 + 5);
    console.log(resultado);
})();
