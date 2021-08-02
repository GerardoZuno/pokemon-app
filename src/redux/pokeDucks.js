import axios from "axios"
//constantes
const dataInicial = {
   count: 0,
   next: null,
   previous: null,
   results: [],
}

//types
const OBTENER_POKEMONES_EXITO_PAGE1 = 'OBTENER_POKEMONES_EXITO_PAGE1'
const OBTENER_POKEMONES_EXITO_NEXT = 'OBTENER_POKEMONES_EXITO_NEXT'
const OBTENER_POKEMONES_EXITO_PREV = 'OBTENER_POKEMONES_EXITO_PREV'



//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO_PAGE1:
            return {
                ...state, ...action.payload
            }
        case OBTENER_POKEMONES_EXITO_NEXT:
            return {
                ...state, ...action.payload
            }
        case OBTENER_POKEMONES_EXITO_PREV:
                    return {
                        ...state, ...action.payload      
                
            }    
            default: return state
    }
}


//actions

export const obternerPokemonesPage1 = () => async (dispatch, getState) => {
    //console.log('get state:', getState().pokemones.offset)
    //Forma antigua const offset = getState().pokemones.offset
    //forma nueva
    /*const {offset} = getState().pokemones
    console.log(offset)*/
    

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
            type:  OBTENER_POKEMONES_EXITO_PAGE1,
            payload: res.data
        })
   }catch(err){
       console.log(err)
   }
}

export const obternerPokemonesNext = () => async (dispatch, getState) => {
    /*const {offset} = getState().pokemones
    const next = offset + numero
    const {limit} = getState().pokemones
     //opcion 1const limite = limit + 20
    //opcion 2
    const limite = limit + numero*/
    const {next} = getState().pokemones
    console.log(next)  

    
    try {
         const res = await axios.get(next)
         dispatch({
             type:  OBTENER_POKEMONES_EXITO_NEXT,
             payload: res.data
         })
    }catch(err){
        console.log(err)
    }
 }

 export const obternerPokemonesPrev = () => async (dispatch, getState) => {
     const {previous} = getState().pokemones

    try {
        const res = await axios.get(previous)
        dispatch({
            type:  OBTENER_POKEMONES_EXITO_PREV,
            payload: res.data
        })
   }catch(err){
       console.log(err)
   }
}
 

 