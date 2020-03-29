import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import request from './api';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';

const Header = () => {
    const history = useHistory();
    const { user, setUser } = React.useContext(UserContext);

    React.useEffect(() => {
        if (!user) {
            request.getUserProfile().then(user => {
                setUser(user);
            });
        }
    }, []);

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <CustomHeader>
            <p>
                <Link to="/login">Login</Link>
            </p>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/admin">Admin</Link>
            </p>

            <h1>hello {user && user.name}</h1>
            <button onClick={logout}>logout</button>
        </CustomHeader>
    );
};

const CustomHeader = styled.header`
    text-align: right;
`;

export default Header;
