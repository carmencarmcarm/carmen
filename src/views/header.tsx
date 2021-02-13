import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Header = (): JSX.Element => {
    return (
        <Navbar className="header">
            <Navbar.Brand className="name" href="#/">
                Carmen Leung
            </Navbar.Brand>
            <Nav.Link className="ml-auto label" href="#/">
                Home
            </Nav.Link>
            <Nav.Link className="label" href="#about">
                About
            </Nav.Link>
            <Nav.Link className="label" href="#collaborate">
                Work with Me
            </Nav.Link>
            <Nav.Link className="label" href="#contact">
                Contact
            </Nav.Link>
        </Navbar>
    );
};
