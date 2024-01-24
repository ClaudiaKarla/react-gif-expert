import './App.css';
import React from 'react';
import Components from './componentes/Components';
import Carrusel from './componentes/Carrusel';
import Productos from './componentes/Productos';
import Contactos from './componentes/Contactos';
import EjercicioReact from './componentes/EjercicioReact';
import FirstApp from './componentes/FirstApp';
import CounterApp from './componentes/CounterApp';
import Api from './componentes/Api';
// import AddCategory from './componentes/AddCategory';


function App() {
 
 

  return (
   
    <div>
      <div className='titulo'>
        Artesanías: Isabel Arcienega García
      
            <style>
                                @import url('https://fonts.cdnfonts.com/css/laughter');
              </style>
      </div>
           
        <div className='logo'>
        <img src={'isabel.jpg'}></img>
       

       
       <h3>Hecho a mano es más bonito</h3>
        <style>
                            @import url('https://fonts.cdnfonts.com/css/river-2');
        </style>
        </div>       
      

    <Carrusel/>
      <Components/>
      <Productos/>
      <center>
      <hr size="2px" color="black"  width="90%"/>
      </center>
      <Contactos/>
      {/* <EjercicioReact/>
      <FirstApp/> */}
       
      <Api/>
    
      {/* <CounterApp value={0} /> */}
      </div>


    

    
  );
}

export default App;
