import React from 'react';

const Register = ()=> {

    const [state, setState] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.currentTarget.value });
    };

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.currentTarget.value });
    };

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.currentTarget.value });
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:4000/api/users', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form>
            <p><input type="text" value={state.name} onChange={handleNameChange} /> name</p>
            <p><input type="text" value={state.email} onChange={handleEmailChange} /> email</p>
            <p><input type="text" value={state.password} onChange={handlePasswordChange} />password</p>
            <button onClick={handleSave}>Create account</button>
        </form>
    )
}

export default Register;