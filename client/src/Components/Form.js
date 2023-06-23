import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { showForm } from '../Redux/formSlice'

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
        {/* <Display data={data}/> */}
    </div>
  )
}
