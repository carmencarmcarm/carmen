import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Linkedin } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import '../style/footer.scss';

export const Footer = (): JSX.Element => {
    return (
        <>
            <Navbar className="footer" fixed="bottom">
                <a href="mailto: carmen.leung@gmail.com">&copy; Carmen Leung</a>
                <div className="ml-auto">
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/carmen-leung/" target="_blank">
                            <Linkedin size="2rem" />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/carmen-leung/" target="_blank">
                            <Instagram size="2rem" />
                        </a>
                    </span>
                </div>
            </Navbar>
        </>
    );
};
