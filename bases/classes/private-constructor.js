"use strict";
(() => {
    /**
     * Un uso de los constructores privados es por ejemplo crear una clase que siempre te regrese
     * la misma instancia
     */
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis");
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    /* const apocalipsis = new Apocalipsis("Soy apocalipsis1");
    const apocalipsis2 = new Apocalipsis("Soy apocalipsis2");
    const apocalipsis3 = new Apocalipsis("Soy apocalipsis3"); */
})();
