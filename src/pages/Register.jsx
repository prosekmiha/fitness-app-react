import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Register = () => {

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg, 
            email: emailReg, 
            password: passwordReg,
        }).then((response) => {
            console.log(response)
        })
    }

    
  return (
    <div className='loginRegister-container'>
        <h2>Register</h2>
        <form className='loginRegisterForm'>
            <label>Your username:</label>
            <input type="text" placeholder='Username' onChange={(e) => {setUsernameReg(e.target.value)}}/>
            <label>Your e-mail:</label>
            <input type="email" placeholder='E-mail address' onChange={(e) => {setEmailReg(e.target.value)}}/>
            <label>Your password:</label>
            <input type="password" placeholder='Password' onChange={(e) => {setPasswordReg(e.target.value)}}/>
            <button onClick={register}>Submit</button>
        </form>
    </div>
  )
}

export default Register