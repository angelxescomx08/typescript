(() => {

    type Hero = {
        name: string;
        age: number;
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Alen',
        age: 24
    }

    let superman: Hero = {
        name: 'Clark',
        age: 24
    }

})()