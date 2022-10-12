import React, { useState } from 'react';

const Shipping = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser =event=>{
        event.preventDefault();
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label className='form-label' htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} className='form-input' type="text" name="name" placeholder='Enter your name' id="" required />
                    </div>
                    <div className="input-group">
                        <label className='form-label' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='form-input' type="text" name="email" placeholder='Enter your email' id="" required />
                    </div>
                    <div className="input-group">
                        <label className='form-label' htmlFor="address">Your address</label>
                        <input onBlur={handleAddressBlur} className='form-input' type="text" name="Address" placeholder='Enter your address' id="" required />
                    </div>

                    <div className="input-group">
                        <label className='form-label' htmlFor="phone">Your phone number</label>
                        <input onBlur={handlePhoneBlur} className='form-input' type="text" name="phone" placeholder='Enter your phone number' id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='submit-btn' type="submit" value="Add Shipping" />

                </form>
                
            </div>
        </div>
    );
};

export default Shipping;