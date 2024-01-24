import React from 'react'
import { useState } from 'react';
import './Components.css';
import iconoContacto from '../image/contacto.png';

function Components() {

    const [contador, setContador] = useState(0);

  return (
    <div className='componentes'>


      <div className='botones'>
      <button  onClick={() => setContador(contador + 1)}> <img className='iconoContacto' src={iconoContacto} />  </button>
      </div>

      <div className='vistas'>
    <h5>Vistas</h5>
      <p>#: {contador}</p>
      </div>
    
      
    </div>
  )
}

export default Components