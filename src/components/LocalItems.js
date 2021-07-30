import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const LocalItems = () => {
    const store = useSelector(state => state.todos)
    const [data,setData] = useState(store.selectedItems)
    
    useEffect(() => {
        console.log(store)
        setData(store.selectedItems)
        console.log("data",data)
    }, [store])
    return (
        <>
            <h3>Local Storage items: {data === undefined ? 0 : data.length} </h3>
        </>
    )
}
