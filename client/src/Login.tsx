import React from 'react';
import request from './api';

const Login = ({ history }) => {
    const [state, setState] = React.useState({
        email: 'vas',
        password: '1111',
    });

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.currentTarget.value });
    };

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.currentTarget.value });
    };

    const handleLogin = async event => {
        event.preventDefault();

        request.loginUser(state).then(token => {
            localStorage.setItem('token', token);
            history.push('/');
        });
    };

    return (
        <form>
            <p>
                <input type="text" value={state.email} onChange={handleEmailChange} /> email
            </p>
            <p>
                <input type="text" value={state.password} onChange={handlePasswordChange} />
                password
            </p>
            <button onClick={handleLogin}>Login</button>
        </form>
    );
};

export default Login;
