import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const Perfil = () => {
  const usuario = useSelector((store) => store.usuario.user);
  console.log(usuario);

  const [nombre, setNombre] = useState(usuario.displayName)
  const [editar, setEditar] = useState(false)

  const actualizarUsuario = () => {

  }
  return (
    <div className="mt-5 text-center">
      <div className="card">
        <div className="card-body">
          <img src={usuario.photoURL} alt="" className="img-fluid mb-3" />
          <h5 className="card-title">
            Nombre de Usuario: {usuario.displayName}
          </h5>
          <p className="card-text">Email: {usuario.email}</p>
          <button 
          className="btn btn-info"
          onClick={() =>setEditar(true)}
          >Editar Nombre</button>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-md-5">
                {
                   editar  ? (<div className="input-group mb-3">
                   <input 
                   type="text" 
                   className="form-control" value={nombre}
                   onChange={(e) =>setNombre(e.target.value)}/>
                   <div className="input-group-append">
                     <button 
                     className="btn btn-dark" 
                     type="button"
                     onClick={() => actualizarUsuario()}>
                       Actualizar
                     </button>
                     <button 
                     className="btn btn-danger ml-3" 
                     type="button"
                     onClick={() =>setEditar(false)}>
                       Cancelar
                     </button>
                   </div>
                 </div>) : null
                }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
