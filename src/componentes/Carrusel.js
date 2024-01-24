import React from 'react';
import './Carrusel.css';
import Carousel from 'react-bootstrap/Carousel';
import O2 from '../image/O2.jpg';
import O3 from '../image/O3.jpg';
import O4 from '../image/O4.jpg';




function Carrusel() {
  return (
    <div className='carrusel'>

    <Carousel>
     
       <Carousel.Item className='primerSlide'>
        <img src={O2}  text="Second slide" />
        <Carousel.Caption className='transparente'>
          <div className='subtitulos'>
          <h3>PRIMER ANUNCIO</h3>
          <style>
                            @import url('https://fonts.cdnfonts.com/css/sansita-one-3');
          </style>
                   
          <p>
            Teléfonos o alguna otra información
            <style>
                            @import url('https://fonts.cdnfonts.com/css/angrela-display');
            </style>
                
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='segundoSlide'>
        <img src={O3} text="Third slide" />
        <Carousel.Caption className='transparente'>
        <div className='subtitulos'>
          <h3>SEGUNDO ANUNCIO</h3>           
          <p>
          Teléfonos o alguna otra información
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='tercerSlide'>
        <img src={O4} text="Artesanias Mexicanas" />
        <Carousel.Caption className='transparente'>
        <div className='subtitulos'>
          <h3>TERCER ANUNCIO</h3>    
          <p>
          Teléfonos o alguna otra información
          </p>
          
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    </div>
  )
}

export default Carrusel