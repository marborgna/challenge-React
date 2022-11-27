import React from 'react';
import Tareas from './Tareas'
import Transcripcion from './Transcripcion';
import Video from './Video';
import './Proyecto.css'

const Proyecto = (props) => {
    let index = 0
    const proyecto = props.proyecto
    return ( 
        <div>
            <span key={proyecto.id + '-' + index}>
              <h1 className='cliente'>Cliente {proyecto.cliente}</h1>
              <h2 className='test'>Test: Test de usabilidad en el sitio web</h2>
              <h2 className='testeador'>Testeador</h2>
              <Video proyecto={proyecto}/>
              <Transcripcion proyecto={proyecto}/>
              <Tareas proyecto={proyecto}/>
            </span>
        </div>
        
     );
}
 
export default Proyecto;