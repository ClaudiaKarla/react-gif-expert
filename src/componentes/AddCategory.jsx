import React from 'react'
import { useState } from 'react';

function AddCategory ({onNewCategory})  {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
            event.preventDefault();

            {/*este if es para que tenga como tope que con determinados
        caracteres puede agregar, porque dandole enter, sin poner
    nada agrega en la lista */}
            if(inputValue.trim().length <= 1){
                    return;
            }

            // setCategories( categories => [inputValue, ...categories ]);

            onNewCategory(inputValue.trim());
    
            {/*para limpiar el formulario donde escribimos, 
        después de dar enter */}
        setInputValue('');
        }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
        <input
        type='text'
        placeholder='buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>    
  )
}

export default AddCategory