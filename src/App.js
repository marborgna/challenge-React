import React from 'react';
import data from './db/db.json';
import Proyecto from './Componentes/Proyecto';
import Inicio from './Componentes/Inicio';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  let index = 0
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio data={data}/>} />
          {data.map((proyecto) => {
            index++
            return(
              <Route key={index} path={'/' + proyecto.id + '-' + index} element={<Proyecto proyecto={proyecto}/>}></Route>
            )
          })}
        </Routes>   
      </BrowserRouter>
    </>
    
   );
}

// Estilos:
export default App;