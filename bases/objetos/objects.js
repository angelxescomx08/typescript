"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24
    };
    flash = {
        age: 25,
        name: 'Barry Allen',
        getName() {
            return this.name;
        }
    };
})();
