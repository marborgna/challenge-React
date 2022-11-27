import React from 'react';
import styled from 'styled-components';


const Video = (props) => {
    const proyecto = props.proyecto
    return ( 
        <VideoEstilo src={proyecto.linkVideo}></VideoEstilo>
     );
}
 
const VideoEstilo = styled.iframe`
    height: 530px;
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
`
export default Video;