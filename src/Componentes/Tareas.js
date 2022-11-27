import React from 'react';
import styled from 'styled-components';


const Tareas = (props) => {
    let index = 0 
    const proyecto = props.proyecto
    return(
        <div>
            <TituloTareas>Tareas</TituloTareas>
            {<Escenario>Escenario: {proyecto.escenario}</Escenario>}
            <Separador />
            {proyecto.preguntas.map((pregunta)=> {
 
                index++;
                return (
                    <div  key={index + '-' + proyecto.id}>
                        <TituloIndTarea>Tarea: {index}</TituloIndTarea>
                        <Tarea>
                            {pregunta.texto}
                        </Tarea>
                        <Duracion>La duracion de la tarea: {pregunta.tiempo}</Duracion>
                        <Separador />
                    </div>      
                              
                )
                })
            
            }
        </div>
    )
}

const TituloTareas = styled.h3`
    margin-bottom: 3%;
    margin-top: 7%;
    font-size: 25px;
`
    
const Escenario = styled.h3`
    font-size: 16px;
    width: 45%;
    margin-bottom: 3%
`
const Separador = styled.div`
    background: #FFFF;
    width: 50%;
    height: 1px;
    margin-bottom: 1%;
    margin-top: 1%;
`

const TituloIndTarea = styled.h3`
    margin-top: 3%;
`

const Tarea = styled.p`
    font-size: 20px;
    margin-top: 2%;
    width: 50%;
`

const Duracion = styled.p`
    font-size: 15px;
    color: #D7905B;
    margin-top: 3%;
    margin-bottom: 2%;
`



export default Tareas;