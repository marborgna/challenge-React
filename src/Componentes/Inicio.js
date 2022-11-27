import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css'


const Inicio = (props) => {
    const data = props.data
    let index = 0
    return ( 
        <div className='contenedorPrincipal'>
            <div className='contenedorMenu'>
                <h1>Menu de Proyectos</h1>
                {data.map((proyecto) => {
                    index++
                    return(
                        <div key={index}>
                            <Link to={'/' + proyecto.id + '-' + index} className='link'>Opcion {index}</Link>
                        </div>

                    )            
                })}
            </div>
        </div>
     );
}
 
export default Inicio;