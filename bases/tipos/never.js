"use strict";
(() => {
    /**
     * Never no debe tener un punto alcanzable, debe retornar un error
     */
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    error('Auxilio');
})();
