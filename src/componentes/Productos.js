import React from 'react';
import './Productos.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import iconoLupa from '../image/lupa.png';
import O2 from '../image/O2.jpg';


function Productos() {

    const [contador, setContador] = useState(0);

  return (


    <div className='cardsCompletas'>
<Card style={{ width: '18rem'}}>
        <div className='cards'> 
      <Card.Img variant="top" img src={O2} />
      </div>
      <Card.Body>
        <div className='tituloCarta'>
        <Card.Title>Figuras de Calaveras</Card.Title>
        </div>
        <Card.Text>
          <div className='letreroDeBoton'>
        <p>Conoce más sobre el producto</p>
      {/* <p>#: {contador}</p> */}
        </div>
        </Card.Text>
        <div className='botones'>
      <button  onClick={() => setContador(contador + 1)}> <img className='iconoLupa' src={iconoLupa} /> </button>
      </div>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Productos