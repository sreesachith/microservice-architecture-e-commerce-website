import React, { useState } from 'react';

export default function LoginForm() {
    // State hooks for managing form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle name change with console log for debugging
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log('Name:', e.target.value);  // Logs the current name value
    };

    // Handle email change with console log for debugging
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log('Email:', e.target.value);  // Logs the current email value
    };

    // Handle password change with console log for debugging
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log('Password:', e.target.value);  // Logs the current password value
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents the default form submission behavior
        console.log('Submitting Form:', { name, email, password });  // Logs the current state
        // Here, you would typically integrate API calls for registration or login
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">  
            <div className="shadow-2xl p-6 rounded-lg border-t-8 border-green-500 bg-white"> 
                <h1 className="text-2xl font-bold my-3 text-center text-green-600">Sign Up</h1>  
                <p className="text-center text-gray-600 mb-4">Enter your details</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="off"  // Disable autofill
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete="new-password"  // Disable password autofill
                    />
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold cursor-pointer px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
