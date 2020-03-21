import React from 'react';
import styled from 'styled-components';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = React.useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('token');
    };
    return (
        <CustomHeader>
            <p>
                <Link to="/login">Login</Link>
            </p>
            <p>
                <Link to="/home">Home</Link>
            </p>
            <p>
                <Link to="/admin">Admin</Link>
            </p>

            <h1>hello {user.name}</h1>
            <button onClick={logout}>logout</button>
        </CustomHeader>
    );
};

const CustomHeader = styled.header`
    text-align: right;
`;

export default Header;
