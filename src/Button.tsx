import React, {useState} from 'react';
import s from './Buttom.module.css'

type ButtonPropsType = {
    name: string
    onClick: () => void
    className?: string
    disabled?:boolean
}
export const Button = (props: ButtonPropsType) => {


    const onClickHandler = () => {
        props.onClick()
    }

    return (

        <span> <button className={props.className} onClick={onClickHandler} disabled={props.disabled}> {props.name}</button> </span>


    );
};

