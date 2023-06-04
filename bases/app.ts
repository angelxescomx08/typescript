(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum Poder {
    fuerzaFlash = 5,
    fuerzaSuperman = 100,
    fuerzaBatman = 1,
    fuerzaAcuaman = 0
  }
  const fuerzaFlash: Poder = Poder.fuerzaFlash;
  const fuerzaSuperman: Poder = Poder.fuerzaSuperman;
  const fuerzaBatman: Poder = Poder.fuerzaBatman;
  const fuerzaAcuaman: Poder = Poder.fuerzaAcuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);


})()

