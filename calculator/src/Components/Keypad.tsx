import React from 'react';
import './Css/keypad.css';
import {DefaultButton,PrimaryButton} from '@fluentui/react';
type ButtonProp = {

    callBackFunc : (arg:string) =>void;
    evalute : () =>void;
    clearInput:() => void;
    dotInput:() => void;

}

export class Keypad extends React.Component<ButtonProp>{
    
    render(){
        const listNumber : Array<string> = ['9','8','7','6','5','4','3','2','1','0'] 
        return(
            <div className="keypad">
            <div className="number">
                
            <DefaultButton onClick={()=>this.props.clearInput()}>AC</DefaultButton>
            <DefaultButton onClick={()=>this.props.dotInput()}>.</DefaultButton>
                {listNumber.map((number)=>(
                    <DefaultButton onClick={()=>this.props.callBackFunc(number)}>{number}</DefaultButton>
                ))}
            </div>

            <div className="operator">
                <PrimaryButton onClick={()=>this.props.callBackFunc("%")}>%</PrimaryButton>
                <PrimaryButton onClick={()=>this.props.callBackFunc("+")}>+</PrimaryButton>
                <PrimaryButton onClick={()=>this.props.callBackFunc("-")}>-</PrimaryButton>
                <PrimaryButton onClick={()=>this.props.callBackFunc("*")}>X</PrimaryButton>
                <PrimaryButton onClick={()=>this.props.callBackFunc("/")}>/</PrimaryButton>
                <PrimaryButton onClick={()=>this.props.evalute()}>=</PrimaryButton>
            </div>
            </div>
        );

    }
}