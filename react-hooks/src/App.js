import React,{ useState } from 'react';
import './App.css';

function App() {
  //using hooks
  
  // const [email,setEmail] = useState('a@a.com');with default value  //useState  array so we destructured 
  const [email,setEmail] = useState('');
  //below 3 lines of codes converted into 1 line of code with help of destructuring of array
  
  //w/o destructing useState
  // const emailState = useState('a@a.com')' // can be filled with default value
  // const emailState = useState(''); array of [currentState,functiony]
  // const email = emailState[0]; -- arg1 = currentState
  // const setEmail = emailState[1]; --arg2 , funtion to change currentState

  const [name , setName ] = useState('');

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleChangeName (e) {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <input
       value = {email}
       onChange = {handleChangeEmail}
       />
       <br/>
       <input
       value = {name}
       onChange = {handleChangeName}
       />
       <p>Email: {email}</p>
       <p>Name: {name}</p>
    </div>
  );
}

export default App;
