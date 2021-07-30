import React from 'react'
import {useSelector } from 'react-redux'


export const TodoList = () => {
    const store = useSelector(state => state.todos)
    // console.log(store)

    return (
        <div>
            <ul>
                {store.todos.map((item,key) => {
                    return <li key={key}> 
                        <div>
                            <h1>Title: {item.title}</h1>
                            <p>Completed: {item.completed === "true" ? "Yes" : "No"} </p>
                        </div>
                    </li>
                })}
            </ul>
            
        </div>
    )
}
