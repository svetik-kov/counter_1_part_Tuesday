import React, {useState} from 'react';
import s from "./Button.module.css";
import {Button} from "./Button";

type CounterType = {
    counter: number
    setCounter: (counter: number) => void
    maxValue: number
    startValue: number
    setStartValue: (startValue: number) => void
    message: string
}

export const Counter:React.FC<CounterType>  = ({counter,...props}) => {

    /* let [counter, setCounter] = useState(0)*/

    const addButtonInc = () => {
        if (counter < props.maxValue) {
            props.setCounter(++counter)
        }

    }

    const addButtonReset = () => {
        props.setCounter(0)
    }

    const InputClasses = counter === props.maxValue ? s.performance : s.stopPerformance
    const Button1Classes = counter < props.maxValue ? s.active : ''
    const Button2Classes = counter <= props.maxValue ? s.active : ''

    return (
        <div className={s.rectangle}>

            <div><h1 className={InputClasses}>{props.message ? props.message : counter}</h1></div>
            <div className={s.total}>
                <Button className={Button1Classes} name={'inc'} onClick={addButtonInc}/>
                <Button className={Button2Classes} name={'reset'} onClick={addButtonReset}/>
            </div>

        </div>
    );
};

