import Heading from "./components/Heading"
import { useState,useCallback,useEffect,useRef } from "react";
import InputRange from "./components/InputRange";
import InputCheckBox from "./components/InputCheckBox";

function App() {

  //Using state to maintain various variables
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  //Use Callback hook should be used whenever functions are passed as props, so that they are not created unnecessarily
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

  //Function to copy generate password to clipboard
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordRef=useRef(null);

  //Use Effect recalls the password Generator function everytime any variable is changed
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const show=()=>{
    console.log("hello");
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-custom-blue via-blue-500 to-custom-pink py-10 px-4">
        <Heading />
        
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 mt-10">
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <input
              ref={passwordRef}
              type="text"
              value={password}
              className="flex-1 outline-none text-xl sm:text-2xl font-medium h-12 rounded-xl py-2 px-4"
              placeholder="Password"
              readOnly
            />
            <button
              onClick={copyPasswordToClipboard}
              className="text-lg sm:text-2xl font-semibold text-white bg-red-700 rounded-lg px-4 py-2"
            >
              Copy
            </button>
          </div>
  
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <InputRange value={length} setLength={setLength} />
            <InputCheckBox
              defaultCondition={numberAllowed}
              content="Numbers"
              setter={setNumberAllowed}
            />
            <InputCheckBox
              defaultCondition={charAllowed}
              content="Characters"
              setter={setCharAllowed}
            />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App
