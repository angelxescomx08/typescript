"use strict";
(() => {
    /**Utilizar upper camel case con las enumeraciones */
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["mid"] = 2] = "mid";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let current = AudioLevel.mid;
    console.log(current);
    console.log(AudioLevel);
})();
