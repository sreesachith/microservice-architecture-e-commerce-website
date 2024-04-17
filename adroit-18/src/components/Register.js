import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5050/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
    
            const data = await response.json(); // Parse JSON response in every case
    
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed. Please try again.');
            }
    
            console.log('User registered successfully:', data);
            alert(data.message); // Show success message from server
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
        } catch (error) {
            console.error('Network or other error:', error);
            setError(error.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    

    // Input change handlers
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="shadow-2xl p-6 rounded-lg border-t-8 border-green-500 bg-white">
                <h1 className="text-2xl font-bold my-3 text-center text-green-600">Register</h1>
                <p className="text-center text-gray-600 mb-4">Create your account</p>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        disabled={isLoading}
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={isLoading}
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        disabled={isLoading}
                    />
                    <input
                        className="border border-gray-300 py-3 px-4 rounded-lg focus:border-green-500 focus:outline-none w-64"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        disabled={isLoading}
                    />
                    <button type="submit" className={`bg-green-600 hover:bg-green-700 text-white font-bold cursor-pointer px-6 py-3 rounded-md transition duration-300 ease-in-out ${isLoading ? 'opacity-50' : 'hover:-translate-y-1'}`} disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
