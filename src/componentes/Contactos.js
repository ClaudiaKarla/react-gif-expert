import React from 'react';
import './Contactos.css';
import iconoTelefono from '../image/telefono.png';
import iconoWhatsapp from '../image/whatsapp.png';
import iconoCorreo from '../image/correo-electronico.png';
import iconoFacebook from '../image/facebook.png';
import iconoInstagram from '../image/instagram.png';
import iconoIndicador from '../image/grifo.png';

function Contactos() {
  return (
    <div>
        <center>
            <div className='contactosDiferentes'>
                <h3>CONTACTO</h3>
            <p> <img className='iconos' src={iconoTelefono} /> Teléfono: 55 00 00 00 00 </p>
            <p> <img className='iconos' src={iconoWhatsapp} /> Whatsapp: 55 00 00 00 00 </p>
            <p><img className='iconos' src={iconoCorreo} /> Correo: chabela@gmail.com </p>
            </div>

                <div className='facebook'>
                    <a href='https://www.facebook.com/isabel.arciniegagarcia?mibextid=LQQJ4d'> 
                        <img className='iconos' src={iconoFacebook} /> 
                            Facebook
                                <img className='iconos' src={iconoIndicador} />
                    </a>
                </div>

            <div className='instagram'>
                <p> <img className='iconos' src={iconoInstagram} />
                    Instagram
                        <img className='iconos' src={iconoIndicador} />
                </p>
            </div>
        </center>
    </div>
  )
}

export default Contactos