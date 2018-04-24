export default function reducer(state =
    {
        
    }
    , action) {
    switch (action.type) {
        case "LOG": {
            console.log(action.payload);
            return {};
        }    
        case "BUSCAR_NOTICIAS_FULFILLED": {
            return { ...state, articulos: action.payload.data.articles };
        }
    }
    return state;
}