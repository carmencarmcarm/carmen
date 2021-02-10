import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../style/header.scss';

export const Header = (): JSX.Element => {
    return (
        <Navbar sticky="top" className="header">
            <Navbar.Brand className="name" href="#/">
                Carmen Leung
            </Navbar.Brand>
            <Nav.Link className="ml-auto label" href="#/">
                Home
            </Nav.Link>
            <Nav.Link className="label" href="#about">
                About
            </Nav.Link>
            <Nav.Link className="label" href="#about">
                Work with Me
            </Nav.Link>
            <Nav.Link className="label" href="#contact">
                Contact
            </Nav.Link>
        </Navbar>
    );
};
