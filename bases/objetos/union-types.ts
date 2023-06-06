(() => {
    type Hero = {
        name: string;
        age: number;
        getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = { name: 'Clark', age: 25 }

    console.log(typeof myCustomVariable);
})()