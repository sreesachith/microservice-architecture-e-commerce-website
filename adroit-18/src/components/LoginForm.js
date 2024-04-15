import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function LoginForm() {
    // State hooks for managing form inputs and login status
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Initialize navigate function from useNavigate hook
    const navigate = useNavigate();

    // Handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents the default form submission behavior
        try {
            const response = await fetch('//127.0.0.1:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                alert('Login successful!');
                // Redirect to the home page upon successful login
                navigate('/home');
            } else {
                throw new Error(data.error || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Network or other error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // Render the login form
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="shadow-2xl p-6 rounded-lg border-t-8 border-green-500 bg-white">
                <h1 className="text-2xl font-bold my-3 text-center text-green-600">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="off"
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold cursor-pointer px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
