(() => {
  interface Hero {
    name: string;
    age: number;
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Alen",
    age: 24,
  };

  let superman: Hero = {
    name: "Clark",
    age: 24,
  };

  /**
   * Diferencias entre interfaces y tipos, las interfaces son extendibles (pueden usar extends y añadir campos en
   * otra declaración), los tipos no pueden hacer esto
   * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
   */

})();
