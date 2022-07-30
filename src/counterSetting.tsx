import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Button.module.css'

/*type CounterSettingType={
    name:string
}*/

export const CounterSetting = () => {

    let [maxValue,setMaxValue]=useState<number>(0)

    const addButtonSet=()=>{
        setMaxValue(++maxValue)
    }

    return (
        <div className={s.rectangle}>

            <div  className={s.performance}>
                <h3> {'max value:  '}
                <input className={s.inputNumber} type={"number"}/>
            </h3>
                <h3> {'start value:'}
                    <input className={s.inputNumber} type={"number"}/>
                </h3>
            </div>

            <div className={s.total}>
              <Button name={'set'} onClick={addButtonSet}/>
            </div>
        </div>
    );
};
