import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarUsuarioAccion, editarFotoAccion } from "../redux/userDucks";

const Perfil = () => {
  const usuario = useSelector((store) => store.usuario.user);
  const loading = useSelector((store) => store.usuario.loading);
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState(usuario.displayName);
  const [editar, setEditar] = useState(false);
  const [error, setError] = useState(false);

  const actualizarUsuario = () => {
    if (!nombre.trim()) {
      console.log("nombre vacio");
      return;
    }
    dispatch(actualizarUsuarioAccion(nombre));
    setEditar(false);
  };

  const seleccionarArchivo = (imagen) => {
     console.log(imagen.target.files[0])
     const pngImagen = imagen.target.files[0]
     if(pngImagen === undefined) {
        console.log('Imagen vacia') 
        return
     }

    
     if(pngImagen.type === "image/png" || pngImagen.type === "image/jpg" || pngImagen.type === "image/jpeg"){
        dispatch(editarFotoAccion(pngImagen))
        setError(false)

     }else{
         setError(true)
     }
  }

  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={usuario.photoURL}  width="150px" alt="" className="img-fluid mb-3 " />

          <h5 className="card-title">
            Nombre de Usuario: {usuario.displayName}
          </h5>
          <p className="card-text">Email: {usuario.email}</p>
          <button className="btn btn-info mb-3" onClick={() => setEditar(true)}>
            Editar Nombre
          </button>
          {
           error && (
               <div className='alert alert-warning'>
                    Solo archivos .png o .jpg
               </div>
           )
         }     
          <div className="custom-file">        
         <input 
         type="file" 
         className="custom-file-input" 
         id="inputGroupFile01"
         style={{display: 'none'}}
         onChange={e => seleccionarArchivo(e)}
         disabled={loading}        
         />
       <label
        className={loading ? 'btn btn-info disabled' : 'btn btn-info'} 
        htmlFor="inputGroupFile01"
        
        >
            Actualizar Imagen
        </label>
       </div>
       </div>
        </div>
        {loading && (
          <div className="card-body">
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-md-5">
              {editar ? (
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dark"
                      type="button"
                      onClick={() => actualizarUsuario()}
                    >
                      Actualizar
                    </button>
                    <button
                      className="btn btn-danger ml-3"
                      type="button"
                      onClick={() => setEditar(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Perfil;
