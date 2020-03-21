import React from 'react';

const Register = ({ history }) => {
    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.currentTarget.value });
    };

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.currentTarget.value });
    };

    const handleLogin = async event => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });
            console.log(response);

            const token = await response.text();

            localStorage.setItem('token', token);
        } catch (error) {
            console.error(error);
        }
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

export default Register;
