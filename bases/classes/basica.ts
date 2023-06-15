(() => {
  class Avenger {
    //private name: string = "";
    //public team: string = "";
    //public realName?: string = "";

    static avgAge: number = 35;

    /* constructor(name: string, team: string, realName?: string){
      this.name = name;
      this.team = team;
      this.realName = realName;
    } */

    /**Forma pro de declarar una propiedad y auto asignarla */
    constructor(private name: string, private team: string, private realName?: string){

    }

    public bio(){

    }

    private bioPrivate(){

    }
  }

  const antman = new Avenger('spider-man','avengers')
  console.log(antman);
})();
