import './Css/display.css';
import {TextField} from '@fluentui/react';
interface InputProps{
    input : string;
}

export function Display(props : InputProps){
    return(
        <div>
            <TextField value = {props.input} readOnly/>
        </div>
    );
}