import React, {useState, useEffect} from "react";
import background from '../../src/img/sean2.png'
import Axios from 'axios';



export function Patient(){
    const [nombre, setNombrePaciente] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

    const crearPaciente = () => {
        Axios.post("http://localhost:3001/api/insert", {
            nombre_paciente: nombre, 
            correo: correo,
            telefono: telefono
        }).then(() =>{
            alert("paciente agregado");
        });
    };

    return(
        <div style={
            { 
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                width: '100vw', 
                height: '100vh'  
        }}>
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group form-group-sm col-sm-5" >
                            <label htmlFor="nombre">Nombre Completo</label>
                            <input type="text" 
                                    className="form-control form-control-sm mr-1" 
                                    name="nombre"  
                                    placeholder="Ingrese nombre completo"
                                    onChange={(e) =>{
                                        setNombrePaciente(e.target.value);}}
                            />
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="correo">Correo electronico</label>
                            <input type="text" 
                                   className="form-control" 
                                   name="correo" 
                                   aria-describedby="emailHelp" 
                                   placeholder='Ingrese correo electronico'
                                   onChange={(e) =>{
                                    setCorreo(e.target.value);}} 
                            />
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" 
                                   className="form-control" 
                                   id="telefono" 
                                   placeholder="Telefono"
                                   onChange={(e) =>{
                                    setTelefono(e.target.value);}} 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary" onClick={crearPaciente}>
                            Crear Paciente
                        </button>
                    </div> 
                </form>
            </div>
        </div>  
    )
}

