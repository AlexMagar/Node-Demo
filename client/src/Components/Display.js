import React from 'react'
import { useSelector } from 'react-redux'

export const Display = () => {
    const { dataList } = useSelector((state) => state.formData)
  return (
    <div>
        <ul>
        {
            dataList.map( (item) => (
            <li>{item}</li>
        ))
        }
        </ul>
    </div>
  )
}
