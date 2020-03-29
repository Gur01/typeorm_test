import React from 'react';
import Header from './Header';

const Home = ({ history }) => {
    interface Users {
        id: number;
        name: string;
        email: string;
        password: string;
        registerDate: string;
    }

    return (
        <div className="App">
            <Header />
        </div>
    );
};

export default Home;
