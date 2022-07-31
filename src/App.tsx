import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./counterSetting";
import s from './Button.module.css'



function App() {
    let [counter, setCounter] = useState(0)
    let [maxValue,setMaxValue]=useState<number>(() => {
        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValueMax = JSON.parse(maxValueString)
            return Number(newValueMax)
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
                counter={counter}
                setCounter={setCounter}
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



