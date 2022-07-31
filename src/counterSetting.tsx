import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import s from './Button.module.css'

type CounterSettingType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void

}

export const CounterSetting = (props: CounterSettingType) => {

    /*  let [maxValue,setMaxValue]=useState(() => {
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
      }*/

    const onchangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const onchangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }
    const setHandler = () => {
        props.setStartValue(props.startValue)
    }


    return (
        <div className={s.rectangle}>

            <div className={s.performance}>
                <h3> {'max value:  '}
                    <input className={s.inputNumber} type={"number"} value={props.maxValue}
                           onChange={onchangeMaxHandler}/>
                </h3>
                <h3> {'start value:'}
                    <input className={s.inputNumber} type={"number"} value={props.startValue}
                           onChange={onchangeStartHandler}/>
                </h3>
            </div>

            <div className={s.total}>
                <Button name={'set'} onClick={setHandler}/>
            </div>
        </div>
    );
};
