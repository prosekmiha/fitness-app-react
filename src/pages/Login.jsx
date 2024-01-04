import React, { useContext, useState, useEffect } from 'react';

import Axios from 'axios';
import { Context } from '../App'



export function handleLogout() {
    Axios.get('http://localhost:3001/logout').then((response) => {
        sessionStorage.removeItem('userId')
        location.reload(true);
    }).catch( err => console.log(err))
}


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username, 
            password: password,
        }).then((response)  => {
            console.log(response)
                if(response.data.message) {
                    setLoginStatus(response.data.message)
                } else {
                    setLoginStatus(response.data[0].Username)
                    console.log(response.data)
                    location.reload(true);
                }
                setUsername("");
                setPassword("");
            })

        }

    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {   
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].Username)
                sessionStorage.setItem('userId', response.data.user[0].Username)
            }
        })


    
      }, [])

    



    
  

  return (
    <div className='loginRegister-container'>
        <h2>Login</h2>
        <form className='loginRegisterForm' method='post'>
            <label>Your username:</label>
            <input type="text" placeholder='Username' onChange={(e) => {setUsername(e.target.value)}}/>
            <label>Your password:</label>
            <input type="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={login}>Submit</button>
        </form>
        
    </div>
  )
}

export default Login 
