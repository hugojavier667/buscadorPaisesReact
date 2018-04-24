export function log(message){
    return {
        type : "LOG",
        payload : message
    }
}

export function seleccionarPais(id){
    return {
        type : "SELECCIONAR_PAIS",
        payload : id
    }
}