import axios from "axios"
//constantes
const dataInicial = {
    array : []
}

//types
const OBTENER_POKEMONES_EXITO_PAGE1 = 'OBTENER_POKEMONES_EXITO_PAGE1'
const OBTENER_POKEMONES_EXITO_PAGE2 = 'OBTENER_POKEMONES_EXITO_PAGW2'


//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO_PAGE1:
            return {
                ...state, array: action.payload
            }
        case OBTENER_POKEMONES_EXITO_PAGE2:
            return {
                ...state, array: action.payload
            }    
            default: return state
    }
}


//actions

export const obternerPokemonesPage1 = () => async (dispatch, getState) => {
   try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type:  OBTENER_POKEMONES_EXITO_PAGE1,
            payload: res.data.results
        })
   }catch(err){
       console.log(err)
   }
}

export const obternerPokemonesPage2 = () => async (dispatch, getState) => {
    try {
         const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40')
         dispatch({
             type:  OBTENER_POKEMONES_EXITO_PAGE2,
             payload: res.data.results
         })
    }catch(err){
        console.log(err)
    }
 }