// // import React,{ useState } from 'react';
// // import './App.css';

// // function App() {
// //   //using hooks
  
// //   // const [email,setEmail] = useState('a@a.com');with default value  //useState  array so we destructured 
// //   const [email,setEmail] = useState('');
// //   //below 3 lines of codes converted into 1 line of code with help of destructuring of array
  
// //   //w/o destructing useState
// //   // const emailState = useState('a@a.com')' // can be filled with default value
// //   // const emailState = useState(''); array of [currentState,functiony]
// //   // const email = emailState[0]; -- arg1 = currentState
// //   // const setEmail = emailState[1]; --arg2 , funtion to change currentState

// //   const [name , setName ] = useState('');

// //   function handleChangeEmail (e) {
// //     setEmail(e.target.value);
// //   }

// //   function handleChangeName (e) {
// //     setName(e.target.value);
// //   }

// //   return (
// //     <div className="App">
// //       <input
// //        value = {email}
// //        onChange = {handleChangeEmail}
// //        />
// //        <br/>
// //        <input
// //        value = {name}
// //        onChange = {handleChangeName}
// //        />
// //        <p>Email: {email}</p>
// //        <p>Name: {name}</p>
// //     </div>
// //   );
// // }

// // export default App;


// //useEffect hooks use

// import React ,{useState , useEffect} from "react";
// import './App.css';


// function App(props){
//   const [userId , setUserId] = useState('1'); //userId set to 1 by default
//   const [data,setData] = useState([]); //data set to empty array

//   useEffect(()=>{
//     // const url = `https://jsonplaceholder.typicode.com/posts?userId=${1}`;
//     const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`; // to change userId post


//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=>{
//       console.log('DATA',data); // will show data in conolse
//       setData(data);  // infine api calls 
//     });
    
//   // },[]); //[] added to stop setDAta infine api calls -- but will show only userId 1 post api
//   // to change user id to 2 posts
//   },[userId]);


//   //adding event listener 
//   useEffect(()=>{
//     document.addEventListener('mousemove',onMouseMove);

//     // to stop event listener after the componenet is destroyed
//     return()=>{
//       document.removeEventListener('mousemove',onMouseMove); // will behave as alternate to componentWillUnmount
//     }
//   });

//   function onMouseMove(event){
//     console.log(event.clientX);
//   }

//   return(
//     <div className="App" style={{paddingLeft :20}}>
//       <h1>App</h1>
//       <button onClick={()=>setUserId('2')}>Change UserId to 2</button>
//       {data.map((user) =>(
//         <div>
//           <p>{user.title}</p>
//         </div>
//       ))}
//     </div>


//   );
// }

// export default App;


//custom hooks

import React , {useState} from "react";

function useFormInputs(initialValue){
  const [value,setValue] = useState('');


  function handleChange(e){
    setValue(e.target.value);
  }

  return {
    value,
    onChange:handleChange,
  };
}


// function LoginForm(){
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');

//   function handleChangeEmail(e){
//     setEmail(e.target.value);
//   }

//   function handleChangePassword(e){
//     setPassword(e.target.value);
//   }

  //changes after using custom hook - useFormInputs()
  
  function LoginForm(){
    const email = useFormInputs('');
    const password = useFormInputs('');
  
    return (
      <form>
        <div>Email</div>
        <div>
          {/* <input */}
          {/* // type="text" value={email} onChange={handleChangeEmail} />
          //after using custom hook
          // type="text" value={email.value} onChange={email.onchange} />
          //using spread operator on above line of code */}
          <input type="text" {...email} />
          <br/>
          <div>Password</div>
          <input
          type="password" 
          // value={password}
          // onChange={handleChangePassword}
          // value={password.value}
          // onChange={password.onchange} 
          {...password}
          />
          <br/>
          
      </div>
      <p>
        <strong><em>Email: </em></strong>
        {email.value} |
        <strong><em>Password: </em></strong>
        {password.value}
        
      </p>
    </form>
  );


}

function SignupForm(){
  const email = useFormInputs('');
  const password = useFormInputs('');
  const confirmPassword = useFormInputs('');

  

  return (
    <form>
      <div>Email</div>
      <div>
        <input
        type="text" 
        {...email}
        />
        <br/>
        <div>Password</div>
        <input
        type="password" 
        {...password}
        />
        <br/>
        <div>Confirm Password</div>
        <input
        type="password" 
        {...confirmPassword} 
        />
      </div>
      <p>
        <strong><em>Email: </em></strong>
        {email.value} |
        <strong><em>Password: </em></strong>
        {password.value} |
        <strong><em>Confirm Password: </em></strong>
        {confirmPassword.value}
      </p>
    </form>
  );


}


function App(props){
  return (
    <div className="App" style={{padding :20}}>
      <h2>Login</h2>
      <LoginForm />
      <br/>
      <h3>Signup</h3>
      <SignupForm />
    </div>
  );
}

export default App;