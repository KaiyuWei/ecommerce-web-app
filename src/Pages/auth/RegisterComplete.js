import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {auth} from '../../firebase';
//import {toast} from 'react-toastify';

const RegisterComplete = ({history}) => {
    // {history} is destructuring the prop passed by BrowserRouter component in index.js
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'));
        // console.log(window.location.href);
        // console.log(window.localStorage.getItem('emailForRegistration'));
    }, []);  // the empty dependecy "[]" means that this use effect will only be called after the initial rendering
                // i.e. the states updating of the components will not call this useEffect.

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // validation
        if (!email || !password) { // where are "email" and "password" from
            toast.error('Email and password is required');
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        try {
            const result = await auth.signInWithEmailLink(
                email, 
                window.location.href
            );
            // console.log('RESULT: ', result);
            if (result.user.emailVerified) {
                // remove user email from local storage
                window.localStorage.removeItem("emailForRigistration");
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                // redux store
                console.log('user', user, "idTokenResult", idTokenResult);
                // redirect
                history.push('/');  // push to the home page
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        };
        
    };

    // the component for fill in the email and submit when a user registers
    const completeRegistrationForm = () => 
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            className="form-control" 
            value={email} 
            disabled
        />
        <br />
        <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
        />
        <br />
        <button type="submit" className="btn btn-rased">
            Complet Regestration
        </button>
    </form>

    return (
            <div className="container p-5">
                <div className="row"> 
                    <div className='col-md-6 offset-md-3'>
                        <h4>Register Complete</h4>
                        <br />
                        {completeRegistrationForm()}  
                    </div>
                </div>
            </div>
    );
};

export default RegisterComplete;