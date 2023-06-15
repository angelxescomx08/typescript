"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = "";
            this.team = "";
            this.realName = "";
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('spider-man', 'avengers');
    console.log(antman);
})();
