import axios from "axios"
//constantes
const dataInicial = {
    array : [],
    offset : 0,
    limit : 0,
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
                ...state, 
                array: action.payload.array, 
                offset: action.payload.offset, 
                limit: action.payload.limit, 

            }    
            default: return state
    }
}


//actions

export const obternerPokemonesPage1 = () => async (dispatch, getState) => {
    //console.log('get state:', getState().pokemones.offset)
    //Forma antigua const offset = getState().pokemones.offset
    //forma nueva
    const {offset} = getState().pokemones
    console.log(offset)
    

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type:  OBTENER_POKEMONES_EXITO_PAGE1,
            payload: res.data.results
        })
   }catch(err){
       console.log(err)
   }
}

export const obternerPokemonesPage2 = (numero) => async (dispatch, getState) => {
    const {offset} = getState().pokemones
    const next = offset + numero
    const {limit} = getState().pokemones
    
    //opcion 1const limite = limit + 20


    //opcion 2
    const limite = limit + numero


    

    
    try {
         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=${limite}`)
         dispatch({
             type:  OBTENER_POKEMONES_EXITO_PAGE2,
             payload: {
                array: res.data.results,
                offset: next,
                limit: limite,
             }
         })
    }catch(err){
        console.log(err)
    }
 }