import React from 'react';
import api from './api';

const Login = ({ history }) => {
    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const [errorLogin, setErrorLogin] = React.useState(false);

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.currentTarget.value });
    };

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.currentTarget.value });
    };

    const handleLogin = async event => {
        event.preventDefault();

        api.loginUser(state)
            .then(token => {
                // request.options.headers.Authorization = token
                api.request.options.headers.Authorization = `Bearer ${token}`;
                localStorage.setItem('token', token);
                console.log(api, 'login');

                history.push('/');
            })
            .catch(error => {
                console.log(error);
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
