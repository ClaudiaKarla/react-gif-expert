import { useState } from 'react'
import './CounterApp.css';
import PropTypes from  'prop-types';

function CounterApp({value}) {


    const [counter, setCounter] = useState (value);

        const handleAdd = () => {
            setCounter(counter + 1);
        }

        const handleSubtract = () => {
            setCounter(counter - 1);
        }

        const handleReset = () => {
            setCounter(value);
        }

  return (
    <>
   <h1>CounterApp</h1>
   <h2>{counter}</h2>

    <div className='botoncito'>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleSubtract}>
            -1
        </button>

        <button onClick={handleReset}>
            reset
        </button>

   </div>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp