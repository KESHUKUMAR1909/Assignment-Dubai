import React, { useState, useEffect } from 'react';
import './css/Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Thunk/authThunk.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, token, error } = useSelector((state) => state.auth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) return;
        dispatch(loginUser({ username, password }));
    };

    useEffect(() => {
        if (token) navigate('/dashboard');
    }, [token, navigate]);

    return (
        <div className="form-container">

            <div className="login">
                <label>Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin} disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
