import AddCategory from './AddCategory';
import './Api.css';
import { useState } from 'react';
import GifGrid from './GifGrid';


function Api() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

    {/* este if es para que no se repita un mismo
  nombre en la lista*/}
      if(categories.includes(newCategory)){
          return
      };

        setCategories([...categories, newCategory]);
    }

  return (
    <>


<AddCategory 
  onNewCategory = {event => onAddCategory(event)}
// setCategories={ setCategories }
/>
      <h1>Api</h1>


        {/* <button onClick={onAddCategory}>Agregar</button> */}

     
           {categories.map(category=>
           <GifGrid
            key={category}
            category = {category}
           />
        )}
        
    </>
  
  )
}

export default Api
