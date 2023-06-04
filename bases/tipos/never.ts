(() => {

    /**
     * Never no debe tener un punto alcanzable, debe retornar un error
     */
    const error = (mensaje: string): never => {
        throw new Error(mensaje)
    }

    error('Auxilio')
})()