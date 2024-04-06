import React, { useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Home from './home';
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Clear localStorage when the component loads
    localStorage.clear();

    const storedEmail = localStorage.getItem('email');

    if (storedEmail) {
      // User email is stored in localStorage, show the landing page
      setValue(storedEmail);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    const user = auth.currentUser;

    if (user) {
      // User is already signed in, you can use user.email here
      setValue(user.email);
    } else {
      try {
        const result = await signInWithPopup(auth, provider);
        const email = result.user.email;

        setValue(email);
        localStorage.setItem('email', email);
      } catch (error) {
        console.error('Google sign-in error', error);
      }
    }
  }

  const handleEmailSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const email = userCredential.user.email;

      setValue(email);
      localStorage.setItem('email', email);
    } catch (error) {
      console.error('Email sign-up error', error);
    }
  }

  const handleEmailSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const email = userCredential.user.email;

      setValue(email);
      localStorage.setItem('email', email);
    } catch (error) {
      console.error('Email sign-in error', error);
    }
  }

  return (
    <div className='parent'>
      <div className='innerBox'>
        <p className='tt'>SIGN UP!</p>
        <div>
          {value ? (
            <Link to="/home">Go to Home</Link>
          ) : (
            <div>
              <button className='authen' onClick={handleGoogleSignIn}>Sign in with Google</button>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className='authen' onClick={handleEmailSignUp}>Sign Up</button>
                <button className='authen' onClick={handleEmailSignIn}>Sign In</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
