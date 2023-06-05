(() => {
    const fullName = (firstName?: string, lastName?: string, upper: boolean = false): string => {
        return `${firstName} ${lastName}`
    }

    console.log(fullName('Irom', 'Man'));
    console.log(fullName('Irom'));
    console.log(fullName('Irom', 'Man', true));
})()