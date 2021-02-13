import React from 'react';
import { Linkedin } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';

export const Footer = (): JSX.Element => {
    return (
        <div className="footer">
            <div className="footer-content">
                <a href="mailto: carmen.leung@gmail.com">&copy; Carmen Leung</a>
                <div className="float-right">
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/carmen-leung/" target="_blank">
                            <Linkedin size="2rem" />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/carmencarmcarm/" target="_blank">
                            <Instagram size="2rem" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};
