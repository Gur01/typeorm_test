import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <CustomHeader>
            <h1>hello userName</h1>
        </CustomHeader>
    );
};

const CustomHeader = styled.header`
    text-align: right;
`;

export default Header;
