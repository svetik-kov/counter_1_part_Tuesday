import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSetting} from "./counterSetting";
import s from './Button.module.css'

function App() {


    return (
        <div className={s.block}>
            <Counter />
            <CounterSetting/>
        </div>

    );
}

export default App;



