import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

const handleEmailBlur = (event) =>{
    setEmail(event.target.value);
}

const handlePasswordBlur = (event) =>{
    setPassword(event.target.value);
}
const handleConfirmPasswordBlur = (event) =>{
    setConfirmPassword(event.target.value);
}
const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError('Your two password did not match. Please try again');
        return;
    }
}

    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Sing Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='form-input' type="text" name="email" placeholder='Enter your email' id="" required />
                    </div>
                    <div className="input-group">
                        <label className='form-label' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='form-input' type="password" name="password" placeholder='Enter your password' id="" required />
                    </div>

                    <div className="input-group">
                        <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className='form-input' type="password" name="confirmPassword" placeholder='Enter your confirm password' id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='submit-btn' type="submit" value="Sing Up" />

                </form>
                <p className='form-link'>Already have an account?<Link to="/login">Login</Link></p>
                <div className='or-line'>
                    <div className='div-1'>
                        <hr />
                    </div>
                    <p style={{ margin: '0 10px', fontSize: '24px' }}>or</p>
                    <div className='div-1'><hr /></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;