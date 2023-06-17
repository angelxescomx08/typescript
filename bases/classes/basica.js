"use strict";
(() => {
    class Avenger {
        /* constructor(name: string, team: string, realName?: string){
          this.name = name;
          this.team = team;
          this.realName = realName;
        } */
        /**Forma pro de declarar una propiedad y auto asignarla */
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
        }
        bioPrivate() {
        }
    }
    //private name: string = "";
    //public team: string = "";
    //public realName?: string = "";
    Avenger.avgAge = 35;
    const antman = new Avenger('spider-man', 'avengers');
    console.log(antman);
})();
