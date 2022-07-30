import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./counterSetting";
import s from './Button.module.css'



function App() {

    let [maxValue,setMaxValue]=useState(() => {
        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValueMax = JSON.parse(maxValueString)
            return newValueMax
        } else {
            return 0
        }
    })
    let [startValue,setStartValue]=useState(() => {
        let startValueString = localStorage.getItem('startValue')
        if (startValueString) {
            let newValueStart = JSON.parse(startValueString)
            return newValueStart
        } else {
            return 0
        }
    })


    useEffect(() => {
        maxValueLocalStorageHandler()
    }, [maxValue])
    const maxValueLocalStorageHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    useEffect(() => {
        startLocalStorageHandler()
    }, [startValue])
    const startLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    return (
        <div className={s.block}>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                setStartValue={setStartValue}
            />
            <CounterSetting
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}

            />
        </div>

    );
}

export default App;



