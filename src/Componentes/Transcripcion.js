import React from 'react';
import styled from 'styled-components';


const Transcripcion = (props) => {
    let proyecto = props.proyecto
    return ( 
        <>
            <Titulo>Transcripcion</Titulo>
            <ContenedorTranscripcion>
                {proyecto.transcripcion}
            </ContenedorTranscripcion>
            
        </>
     );
}
 
const Titulo = styled.h3`
    margin-bottom: 3%;
    margin-top: 3%;
    font-size: 25px;
`

const ContenedorTranscripcion = styled.div`
    height: 400px;
    width: 70%;
    padding: 3%;
    overflow: scroll;
`


export default Transcripcion;