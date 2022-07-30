import React, {useState} from 'react';
import s from "./Button.module.css";
import {Button} from "./Button";

type CounterType = {
    maxValue: number
    startValue: number
    setStartValue: (startValue: number) => void
}

export const Counter = (props: CounterType) => {

    let [counter, setCounter] = useState(0)

    const addButtonInc = () => {
        if (counter < props.maxValue) {
            setCounter(++counter)
        }

    }

    const addButtonReset = () => {
        setCounter(0)
    }

    const InputClasses = counter === props.maxValue ? s.performance : s.stopPerformance
    const Button1Classes = counter < props.maxValue ? s.active : ''
    const Button2Classes = counter >= props.maxValue ? s.active : ''

    return (
        <div className={s.rectangle}>

            <div><h1 className={InputClasses}>{counter}</h1></div>
            <div className={s.total}>
                <Button className={Button1Classes} name={'inc'} onClick={addButtonInc}/>
                <Button className={Button2Classes} name={'reset'} onClick={addButtonReset}/>
            </div>

        </div>
    );
};

