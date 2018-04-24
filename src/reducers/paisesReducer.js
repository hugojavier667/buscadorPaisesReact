export default function reducer(state =
    {
        paises: [
            {
                id: 0,
                name: "Cuba"
            },
            {
                id: 1,
                name: "Venezuela"
            }
        ],
        paisSeleccionado : null
    }
    , action) {
    switch (action.type) {
        case "LOG": {
            console.log(action.payload);
            return {};
        }
        case "BUSCAR_PAISES_FULFILLED": {
            return { ...state, paises: action.payload.data };
        }
        case "SELECCIONAR_PAIS": {
            if(action.payload == undefined)
                return {...state};
            return { ...state, paisSeleccionado: action.payload };
        }
    }
    return state;
}