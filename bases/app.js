"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Poder;
    (function (Poder) {
        Poder[Poder["fuerzaFlash"] = 5] = "fuerzaFlash";
        Poder[Poder["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        Poder[Poder["fuerzaBatman"] = 1] = "fuerzaBatman";
        Poder[Poder["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(Poder || (Poder = {}));
    const fuerzaFlash = Poder.fuerzaFlash;
    const fuerzaSuperman = Poder.fuerzaSuperman;
    const fuerzaBatman = Poder.fuerzaBatman;
    const fuerzaAcuaman = Poder.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
