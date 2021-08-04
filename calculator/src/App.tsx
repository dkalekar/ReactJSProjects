import React, { useState } from 'react';
import './App.css';
import { Display } from './Components/Display';
import { Keypad } from './Components/Keypad';

function App() {
  const [input,setInput] = useState<string>("0")

  const callBackFunc = (val:string):void =>{
    if(input==='0')
      setInput(val);
    else{
      setInput(input+val);
    }
  }

  const dotInput = ():void=>{
    if(input.indexOf('.')=== -1){
      setInput(input+'.');
    }
  }

  const evalute = ():void=>{
    setInput(eval(input));
  }

  const clearInput =():void=>{
    setInput("0");
  }

  return (
    <div className="App">
      <Display input={input}/>
      <Keypad callBackFunc={callBackFunc} evalute={evalute} clearInput={clearInput} dotInput={dotInput}/>
    </div>
  );
}

export default App;
