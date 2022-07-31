import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./counterSetting";
import s from './Button.module.css'


function App() {
    let [counter, setCounter] = useState(0)
    let [message, setMessage] = useState('')
    let [maxValue, setMaxValue] = useState<number>(() => {
        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValueMax = JSON.parse(maxValueString)
            return Number(newValueMax)
        } else {
            return 5
        }
    })
    let [startValue, setStartValue] = useState(() => {
        let startValueString = localStorage.getItem('startValue')
        if (startValueString) {
            let newValueStart = JSON.parse(startValueString)
            return newValueStart
        } else {
            return 0
        }
    })


    /*    useEffect(() => {
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
        }*/

    const maxValueHandle = (max: number) => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setMaxValue(max)
        if (max < 0 || max <= startValue) {
            setMessage('Incorrect values')
        } else setMessage('Enter values and press set')
    }

    const startValueHandler = (start: number) => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setStartValue(start)
        if (start < 0 || start <= maxValue) {
            setMessage('Incorrect values')
        } else {
            setMessage('Enter values and press set')
        }
    }
    const setValues = () => {
        setCounter(startValue)
        setMessage('')
    }

    return (
        <div className={s.block}>
            <Counter
                counter={counter}
                setCounter={setCounter}
                maxValue={maxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                message={message}
            />
            <CounterSetting
                maxValue={maxValue}
                setMaxValue={maxValueHandle}
                startValue={startValue}
                setStartValue={startValueHandler}
                setCounter={setValues}


            />
        </div>

    );
}

export default App;



