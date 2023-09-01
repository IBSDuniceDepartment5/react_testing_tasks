import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={handleUsernameChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Login</button>
            {loggedIn && <p>Welcome, {username}!</p>}
        </div>
    );
};

export default Login;