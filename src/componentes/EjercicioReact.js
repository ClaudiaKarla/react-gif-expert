import React from 'react'

function EjercicioReact() {



   const getImagen = async() => {

    try{

  

    const apiKey = '71jAp03hmCSyt5yWb0qN4J86ICOKVeU4';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } =data.images.original;

   const img = document.createElement('img');
   img.src = url;
   document.body.append( img );

   } catch(err){
    console.err(err);
   }
   
   }
   getImagen();
    

  return (
    <div>EjercicioReact</div>
  )
}

export default EjercicioReact