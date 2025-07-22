import React from 'react'
import './css/Login.css'
const Login = () => {
    return (
        <div className='form-container'>

            <div className='login'>

                <label>Username</label>
                <input type='text' placeholder='Enter Your Username' />

                <label>Mobile No.</label>
                <input type='text' placeholder='Enter Your Mobile Number' />
                <button>Login</button>
            </div>

        </div>
    )
}

export default Login
