import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [flag,setFlag] = useState(false);
  const handleClick = ()=>{
    setFlag(true);
  }
  const render = ()=>{
    if(flag){
      return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    }else{
      return <button id="click" onClick={handleClick}>Click</button>
    }
  }
  return (
    <div id="main">
      // Do not alter the main div
      {render()}

    </div>
  );
}


export default App;
