import Heading from "./components/Heading"
import { useState,useCallback,useEffect,useRef } from "react";
import Button from "./components/Button";
import InputRange from "./components/InputRange";
import InputCheckBox from "./components/InputCheckBox";

function App() {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str=str+"0123456789";
    }
    if(charAllowed){
      str=str+"!@#$%^&*()_+{}[]?";
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass=pass+str.charAt(char)
    }

    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // to select only a given length of password use: passwordlRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordRef=useRef(null);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const show=()=>{
    console.log("hello");
  }

  return (
    <>
    <div className="h-screen overflow-hidden bg-gradient-to-tr from-custom-blue via-blue-500 to-custom-pink">
      <Heading/>
      <div className="absolute flex gap-8"
      style={{top:'300px',left:'400px'}}>
      <input
      ref={passwordRef} 
      type="text"
      value={password}
      className='outline-none text-2xl font-medium w-input-width h-input-height rounded-xl py-1 px-3'
      placeholder='Password'
      readOnly={true}/>
        <button
        className="text-3xl font-semibold text-white bg-red-700 rounded-lg px-3 pt-1 pb-1.5"
          onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="container flex"
      style={{position:'absolute',top:'400px',left:'400px'}}>
          <InputRange
          value={length}
          setLength={setLength}/>
          <InputCheckBox
          defaultCondition={numberAllowed}
          content="Numbers"
          setter={setNumberAllowed}/>
          <InputCheckBox
          defaultCondition={charAllowed}
          content="Characters"
          setter={setCharAllowed}/> 
        </div>

    </div>
    </>
  )
}

export default App
