(() => {
  /**
   * Las clases abstractas sirven para crear otras clases y para asegurarse que se declare lo que se
   * necesita en una clase, o por ejemplo asegurarse de que una clase extiende de la clase abstracta
   */
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {}
  class Villian extends Mutante {}

  const wolverine = new Xmen("wolverine", "logan");

  const imprimirMutante = (mutante: Mutante) => {
    console.log(`${mutante.name}`);
  };
})();
