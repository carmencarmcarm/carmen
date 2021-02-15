import React from 'react';
import { Linkedin } from 'react-bootstrap-icons';

export const Footer = (): JSX.Element => {
    return (
        <div className="footer">
            <div className="footer-content">
                <span className="copy-right">&copy; Carmen Leung</span>
                <div className="float-right">
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/carmen-leung/" target="_blank">
                            <Linkedin size="2rem" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};
