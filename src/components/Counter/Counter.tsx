import React from "react";
import {SuperButton} from "../SuperButton/SuperButton";
import s from './Counter.module.css'
import {SuperInput} from "../SuperInput/SuperInput";


type CounterPropsType = {
    error:string|null
    maxValue:number
    minValue:number
    counterValue:number
    setMinValue:(minValue:number)=>void
    setMaxValue:(maxValue:number)=>void
    setCounterValue:(counterValue:number)=>void
    AddCount:()=>void
    getMaxValue:(max:number)=>void
    getMinValue:(min:number)=>void
    resetHandler:()=>void
}
export const Counter = (props: CounterPropsType) => {

    const setHandler = () => {
        props.setMinValue(0)
        props.setMaxValue(5)
        props.setCounterValue(0)
        localStorage.clear()
    }
    const changeMaxValue = (e:number) => {
        props.getMaxValue(e)
        localStorage.setItem('maxCurrent', JSON.stringify(e))
    }
    const changeMinValue = (e:number) => {
        props.getMinValue(e)
        localStorage.setItem('minCurrent', JSON.stringify(e))

    };


    return (
        <div className={s.CounterComponent}>
            <div className={s.boxCounter}>
                <div className={s.counterDisplay}>
                    <div className={props.counterValue === props.maxValue ? s.error : ''}>{props.counterValue}</div>
                    {props.error && <span>{props.error}</span>}
                </div>
                <div className={s.buttonBox}>
                    <SuperButton name={'inc'} callback={props.AddCount} disable={props.counterValue >= props.maxValue}/>
                    <SuperButton name={'res'} callback={props.resetHandler} disable={props.minValue === props.counterValue}/>
                </div>
            </div>
            <div className={s.boxCounter}>
                <div className={s.counterDisplay}>
                    <div>
                        {/*{props.maxValue < 0 && <p className={s.textError}>{'error'}</p>}*/}
                        {/*{maxValue<minValue&& <p className={s.textError}>{error}</p> }*/}
                        {/*{maxValue<0&& <p className={s.textError}>{error}</p> }*/}
                    </div>
                    <div>
                        <div>Max Value:</div>
                        <SuperInput
                            placeholerValue={'Введите Max Value'}
                            value={props.maxValue}
                            changeValue={changeMaxValue}
                        />
                    </div>
                    <div>
                        <div>Min Value:</div>
                        <SuperInput
                            placeholerValue={'Введите Min Value'}
                            value={props.minValue}
                            changeValue={changeMinValue}
                        />
                        {/*{error && <p className={s.textError}>{error}</p>}*/}

                    </div>
                </div>
                <div className={s.buttonBox}>
                    {/*<button onClick={localHandler}>local</button>*/}
                    <SuperButton name={'set'} callback={setHandler}/>
                </div>
            </div>
        </div>
    )
}
