// data inicial

const dataInicial = {
    loading: false,
    activo: false,
}

//types

const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'


//reducer

export default function usuarioReducer(state = dataInicial, action){
    switch(action.type){

        case LOADING:
            return {...state, loading: true}

        case USUARIO_ERROR:
            return {...dataInicial}

        default: 
                 return{...state}
    }
}



//accions
export const ingresoUsuarioAccion = () => async (dispatch, getState) => {
    dispatch({
        type: LOADING,
        
    })
    try {

    }catch(err){
        console.log(err)
        dispatch({
           type: USUARIO_ERROR,
        })
    }
}

