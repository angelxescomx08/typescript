(() => {
    let flash: { name: string, age: number, getName?: () => string; } = {
        name: 'Barry Alen',
        age: 24
    }

    flash = {
        age: 25,
        name: 'Barry Allen',
        getName() {
            return this.name
        }
    }
})()