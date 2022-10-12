import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || "/";


const handleEmailBlur = event =>{
    setEmail(event.target.value);
}

const handlePasswordBlur = event =>{
    setPassword(event.target.value);
}


const handleCreateLogin = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
}

if(user){
  navigate(from, {replace: true});
}

    return (
        <div className="form-container">
            <div>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleCreateLogin}>
                <div className="input-group">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='form-input' type="text" name="email" placeholder='Enter your email' id="" required/>
                </div>
                <div className="input-group">
                    <label className='form-label' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='form-input' type="password" name="password" placeholder='Enter your password' id="" required/>
                </div>
                <p style={{color:'red'}}>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
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