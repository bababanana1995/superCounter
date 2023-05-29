import React from "react";


type SuperButtonPropsType = {
    name: string
    callback: () => void
    disable?: boolean
}
export const SuperButton = (
    {
        name,
        callback,
        disable,
        
    }:SuperButtonPropsType) => {
    return (
        <button disabled={ disable} onClick={() =>{callback()}}>
            <div>{name}</div>
        </button>
    )
}
