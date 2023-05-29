import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    let localMaxValue = Number(localStorage.getItem('maxCurrent'))||5
    let localMinValue = Number(localStorage.getItem('minCurrent'))||0
    const [maxValue, setMaxValue] = useState(localMaxValue)
    const [minValue, setMinValue] = useState(localMinValue)


    let [counterValue, setCounterValue] = useState(()=>{
        return Number(localStorage.getItem('localCounterValue'))||0
    })
    useEffect(()=>{
        localStorage.setItem('localCounterValue', JSON.stringify(counterValue))
    },[counterValue])
    const [error, setError] = useState<string | null>(null)

    useEffect(()=>{

    },[minValue])
    useEffect(()=>{

    },[error])
    useEffect(()=>{
        if(counterValue===maxValue){
            setError('Ну чушь же!')
        }else if(counterValue<0){
            setError('только положительные числа')
            setCounterValue(0)
        }else if(maxValue<=minValue){
            setError('Ай-я-яй')

        } else {
            setError('')
        }
    },[counterValue])
    const AddCount = ()=> {

        setCounterValue(counterValue + 1)
    }

    const resetHandler = () => {
       setCounterValue(minValue)
    }
    const getMaxValue = (max:number)=>{

        if(minValue<0||max<=0||max<=minValue){
            // setError('Ну чушь же!')
        }if(max>-1){
            setMaxValue(max)
            setCounterValue(max-=max)
        }

    }
    const getMinValue = (min:number)=>{
        if(min<0||maxValue <= min){
            setError('Давай положительные числа')
        }
        setMinValue(min)
        setCounterValue(min)

    }
    return (
        <div className="App">
            <Counter
                error={error}
                counterValue={counterValue}
                maxValue={maxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                getMaxValue={getMaxValue}
                getMinValue={getMinValue}
                AddCount={AddCount}
                setCounterValue={setCounterValue}
                resetHandler={resetHandler}
            />
        </div>
    );
}

export default App;
