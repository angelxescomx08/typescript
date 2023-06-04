(() => {

    /**Utilizar upper camel case con las enumeraciones */
    enum AudioLevel {
        min = 1,
        mid,
        max = 10
    }

    let current: AudioLevel = AudioLevel.mid
    console.log(current);
    console.log(AudioLevel);
})()