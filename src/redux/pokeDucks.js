//constantes
const dataInicial = {
    array : []
}

//types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'


//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {
                ...state, array: action.payload
            }
            default: return state
    }
}


//actions

export const obternerPokemonesAccion = () => async (dispatch, getState) {
   try {
        const res = await axio.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type:  OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
   }catch(err){
       console.log(err)
   }
}