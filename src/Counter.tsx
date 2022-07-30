import React, {useState} from 'react';
import s from "./Button.module.css";
import {Button} from "./Button";

export const Counter = () => {

    let [a, setA] = useState(0)

    const addButtonInc = () => {
        if (a < 5)
        {setA(++a)}

    }
    const addButtonReset = () => {
        setA(0)
    }

    const InputClasses = a === 5 ? s.performance : s.stopPerformance
    const Button1Classes= a<5 ? s.active:''
    const Button2Classes= a>0 ?s.active:''

    return (
        <div className={s.rectangle}>
            <div><h1 className={InputClasses}>{a}</h1></div>
            <div className={s.total}>
                <Button className={Button1Classes} name={'inc'}  onClick={addButtonInc}/>
                <Button className={Button2Classes} name={'reset'} onClick={addButtonReset}/>
            </div>
        </div>
    );
};

