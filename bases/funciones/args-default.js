"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    console.log(fullName('Irom', 'Man'));
    console.log(fullName('Irom'));
    console.log(fullName('Irom', 'Man', true));
})();
