import React, { useState } from 'react'
import { Display } from './Display'
import { useDispatch} from 'react-redux'
import { showForm } from '../Redux/formSlice'

export const Form = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setData(value);
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        dispatch(showForm(data));
    }
  return (
    <div>
        <form action='' onSubmit={handleOnSubmit}>
            <input type='text' name='text' onChange={handleOnChange}/>
            <button>Submit</button>
        </form>
        <Display data={data}/>
    </div>
  )
}
