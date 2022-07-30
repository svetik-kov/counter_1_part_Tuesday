import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import s from './Button.module.css'

/*type CounterSettingType={
    name:string
}*/

export const CounterSetting = () => {

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
    const onchangeMaxHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(e.currentTarget.value)
    }


    useEffect(() => {
        startLocalStorageHandler()
    }, [startValue])
    const startLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    const onchangeStartHandler=(e:ChangeEvent<HTMLInputElement>)=>{
       setStartValue(e.currentTarget.value)
    }



     return (
        <div className={s.rectangle}>

            <div  className={s.performance}>
                <h3> {'max value:  '}
                <input className={s.inputNumber} type={"number"} value={maxValue} onChange={onchangeMaxHandler}/>
            </h3>
                <h3> {'start value:'}
                    <input className={s.inputNumber} type={"number"} value={startValue} onChange={onchangeStartHandler}/>
                </h3>
            </div>

            <div className={s.total}>
              <Button name={'set'} onClick={()=>{}}/>
            </div>
        </div>
    );
};
