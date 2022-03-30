import React, { useState } from "react";

const Schedule = () => {
  return (
          <form className="row">
              <div className="col-sm align-self-center">
                  <h4>Buscar Paciente</h4>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Seleccionar Paciente</option>
                    <option value="1">Limpieza Dental</option>
                    <option value="2">Extraccion</option>
                    <option value="3">Cirugia</option>
                </select>
              </div>
              <div className='col-sm' >
                <h4>Fecha de cita</h4>
                <input type="date" 
                       className="form-control form-control-sm mr-1" 
                       name="date"
                />
              </div>
              <div className='row'>
                <div className='col-sm-4'>
                    <h4>Tipo de servicio</h4>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccionar servicio</option>
                            <option value="1">Limpieza Dental</option>
                            <option value="2">Extraccion</option>
                            <option value="3">Cirugia</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <br/>
                        <button type="submit"className="btn btn-primary">
                        Agendar cita
                        </button>
                    </div>
                </div>

            </form>
  )
}

export default Schedule;
