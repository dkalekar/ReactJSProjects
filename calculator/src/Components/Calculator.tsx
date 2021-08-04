import React from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';
import './Css/calculator.css';

export default class Calculator extends React.Component{
    state = {
        input:"0",
    }

  callBackFunc = (val:string):void =>{
    if(this.state.input==='0')
      this.setState({
          input:val,
      });
    else{
      this.setState({
          input: this.state.input + val,
      });
    }
  }

  dotInput = ():void=>{
    if(this.state.input.indexOf('.')=== -1){
        this.setState({
            input: this.state.input + '.',
        });
    }
  }

  evalute = ():void=>{
    this.setState({
        input: eval(this.state.input),
    });
  }

  clearInput =():void=>{
    this.setState({
        input: '0',
    });
  }

    
    render(){

        return(
            <div className="calculator">
            <Display input={this.state.input}/>
            <Keypad callBackFunc={this.callBackFunc.bind(this)} evalute={this.evalute.bind(this)} clearInput={this.clearInput.bind(this)} dotInput={this.dotInput.bind(this)}/>
            </div>
        )

    }
}