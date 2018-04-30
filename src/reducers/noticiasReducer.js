export default function reducer(state =
    {
        buscando : false
    }
    , action) {
    switch (action.type) {
        case "LOG": {
            console.log(action.payload);
            return {};
        }    
        case "BUSCAR_NOTICIAS_FULFILLED": {
            return { ...state, articulos: action.payload.data.articles , buscando: false};
        }
        case "BUSCAR_NOTICIAS_PENDING": {
            return { ...state, buscando: true};
        }
    }
    return state;
}