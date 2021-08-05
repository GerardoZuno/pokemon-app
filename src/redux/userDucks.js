import { auth, db, firebase } from "../firebase";
// data inicial

const dataInicial = {
  loading: false,
  activo: false,
};

//types

const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";
const CERRAR_SESION_ACCION = "CERRAR_SESION_ACCION";

//reducer

export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case USUARIO_ERROR:
      return { ...dataInicial, loading: false };

    case USUARIO_EXITO:
      return { ...state, loading: false, user: action.payload, activo: true };
    
    case CERRAR_SESION_ACCION:
        return { ...dataInicial };
          
    default:
      return { ...state };
  }
}

//accions
export const ingresoUsuarioAccion = () => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res.user);

    const usuario = {
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
      photoURL: res.user.photoURL,
    }

    const usuarioDB =  await db.collection('usuarios').doc(usuario.email).get()
    console.log(usuarioDB)

    if(usuarioDB.exists){
      //si user existe
      dispatch({
        type: USUARIO_EXITO,
        payload: usuarioDB.data()
      });
      localStorage.setItem(
        "usuario",
        JSON.stringify(usuarioDB.data())
      );
    } else{
      //no existe el user
      await db.collection('usuarios').doc(usuario.email).set(usuario)
      dispatch({
        type: USUARIO_EXITO,
        payload: usuario
      });
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }   
  } catch (err) {
    console.log(err);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const leerUsuarioActivo = () => async (dispatch, getState) => {
    if (localStorage.getItem('usuario')){
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
    try {


    }catch (err) {
        console.log(err);
    }
}

export const cerrarSesionAccion = () => async (dispatch) => {
         
            auth.signOut()
            localStorage.removeItem('usuario');
             dispatch({
                 type: CERRAR_SESION_ACCION,
                 
             })
              
}