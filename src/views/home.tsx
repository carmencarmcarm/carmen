import React from 'react';
import Container from 'react-bootstrap/Container';
import '../style/home.scss';

export const Home = (): JSX.Element => {
    return (
        <div>
            <Container
                fluid
                style={{
                    backgroundImage: `url("images/home.JPG")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '45rem',
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
                <div className="welcome">Welcome to my digital home!</div>
                <div className="intro align-self-center">
                    <div>I am an IT Project Manager</div>
                    <div>in the public and non-profit space.</div>
                </div>
            </Container>
        </div>
    );
};
