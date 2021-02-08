import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/header.scss';

export const Header = (): JSX.Element => {
    return (
        <>
            <Navbar sticky="top" className="header">
                <Navbar.Brand href="#">Carmen Leung</Navbar.Brand>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Navbar>
        </>
    );
};
