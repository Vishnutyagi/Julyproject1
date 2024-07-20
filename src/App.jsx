import { useState } from 'react';
import './App.css';

function App() {
  let [num1,setNum1]=useState("");
  let [num2,setNum2]=useState("");
  let [ans,setAns]=useState(null);
  let [iserror,setIserror]= useState();
  const handleclick1=(e)=>{
    setNum1(e.target.value);
  }
  const handleclick2=(e)=>{
    setNum2(e.target.value);
  }
  const isempty = () => {
    if (num1 === '') {
      setIserror('Num1 Cannot Be Empty');
      return false;
    }
    if (num2==='') {
      setIserror('Num2 Cannot Be Empty');
      return false;
    }
    if(isNaN(parseFloat(num1))||isNaN(parseFloat(num2))){
      setIserror('');
      setAns(null);
      setIserror("Pleaase enter valid numbers!")
      return false
    }
    setIserror('');
    return true;
  };

  function add(event){
    if(isempty()){
      setAns(parseFloat(num1)+parseFloat(num2));
    }
    event.preventDefault();
  }
  function subtract(event){
    if(isempty()){
      setAns(parseFloat(num1)-parseFloat(num2));
    }
    event.preventDefault();
  }
  function mult(event){
    if(isempty()){
      setAns(parseFloat(num1)*parseFloat(num2));
    }
    event.preventDefault();
  }
  function divide(event){
    if(isempty()){
      setIserror('');
      setAns(null);
      if (parseFloat(num2) === 0) {
        setIserror('Num2 Cannot Be Zero');
      } else {
        setAns(parseFloat(num1) / parseFloat(num2));
      }
    }
    event.preventDefault();
  }

  return (
    <div className="main">
      <div className="calculator">
        <h1>React calculator</h1>
        <form>
          <input type="text" placeholder="Num 1" onChange={handleclick1}></input>
          <input type="text" placeholder="Num 2" onChange={handleclick2}></input>
          <div className="buttons">
            <button onClick={add}><b>+</b></button>
            <button onClick={subtract}><b>-</b></button>
            <button onClick={mult}><b>*</b></button>
            <button onClick={divide}><b>/</b></button>
          </div>
          <b>
          {iserror &&<div className="error">
            <p style={{color:"red"}}>Error!</p>
            <p>{iserror}</p>
            </div>}
          {ans !== null && <div className="result"><p style={{color:"Blue"}}>Success!</p>
          <p>Result - {ans}</p></div>}
          </b>
        </form>
      </div>
      
    </div>
  );
}

export default App;
