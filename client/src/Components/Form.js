import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { showForm } from '../Redux/formSlice'
import {Typewriter} from 'react-simple-typewriter'

export const Form = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});


    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        console.log(name, value)
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        dispatch(showForm(data));
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type='text' name='task' onChange={handleOnChange} required/>
            <input type='number' name='hr' onChange={handleOnChange} required/>
            <button>Submit</button>
        </form>
        <h1>Example of fruits: <span>
        <Typewriter 
        words={['Apple', 'Banana', 'Mango', 'Graps']}
        loop='false'
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        />
        </span> 
        </h1>
        {/* <Display data={data}/> */}
    </div>
  )
}
