(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor avenger");
    }

    private getFullName() {
      return `${this.name} ${this.realName}`;
    }

    /**
     * private - solo se puede usar en la propia clase
     * protected - solo se puede usar en la propia clase o clases que hereden de esta
     * public - se puede usar hasta a fuera de la clase
     */
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor xmen");

      
    }

    //los getters siempre deben retornar algo
    get fullName(){
      return `${this.name} ${this.realName}`;
    }

    //el setter siempre debe recibir un parametro, uno y solo uno
    set fullName(name: string){
      this.name = name;
    }
  }

  const wolverine = new Xmen("wolverine", "logan", true);

  console.log(wolverine.fullName);

  wolverine.fullName = 'Angel'

  console.log(wolverine.fullName);
})();
