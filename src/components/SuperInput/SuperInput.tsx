import React, {ChangeEvent} from "react";


type SuperInputPropsType = {
    value: number
    placeholerValue: string
    changeValue:(e:number)=>void
}
export const SuperInput = (props: SuperInputPropsType) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(Number(e.currentTarget.value))
    }

    return (
        <input placeholder={props.placeholerValue} value={props.value} type='number' onChange={changeHandler}></input>
    )
}
