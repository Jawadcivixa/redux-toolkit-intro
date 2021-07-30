import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo,additems} from '../redux/todoSlice'

import {useStateWithLocalStorage} from '../common'

export const TodoForm = () => {
    const [localValues,setLocalValues]= useStateWithLocalStorage("localStorage")
    const [title,setTitle]= useState()

    console.log(sessionStorage.getItem('localStorage'))
    useEffect(() => {
        sessionStorage.setItem('localStorage', JSON.stringify(localValues))
    }, [localValues])

    const dispatch = useDispatch()
    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleAddTodoButton = () => {
        setLocalValues([...localValues, {title}])
        dispatch(addTodo({title: title}))
        dispatch(additems(title))
    }
    return (
        <div>
            <input placeholder="Title" name="title" onChange={handleChange}/>
            <button onClick={handleAddTodoButton}>Add todo</button>
        </div>
    )
}
