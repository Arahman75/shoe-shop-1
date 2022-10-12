import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="form-container">
            <div>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="input-group">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='form-input' type="text" name="email" placeholder='Enter your email' id="" required/>
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='form-input' type="password" name="password" placeholder='Enter your password' id="" required/>
                </div>
                <input className='submit-btn' type="submit" value="Login" />
                
            </form>
            <p className='form-link'>New to shoe shop?<Link to="/signup">Create New Account</Link></p>
            <div className='or-line'>
         <div className='div-1'>
            <hr />
         </div>
       <p style={{margin:'0 10px', fontSize:'24px'}}>or</p>
        <div className='div-1'><hr /></div>
        </div>
        </div>
        </div>
    );
};

export default Login;