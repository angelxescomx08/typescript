"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor avenger");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor xmen");
        }
        //los getters siempre deben retornar algo
        get fullName() {
            return `${this.name} ${this.realName}`;
        }
        //el setter siempre debe recibir un parametro, uno y solo uno
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("wolverine", "logan", true);
    console.log(wolverine.fullName);
    wolverine.fullName = 'Angel';
    console.log(wolverine.fullName);
})();
