import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export const Collaborate = (): JSX.Element => {
    return (
        <Container className="about">
            <div className="content">
                <div className="question">Are you a Non-Profit?</div>
            </div>
            <div className="content">
                <div className="question">Are you looking for a Certified Project Manager?</div>
            </div>
            <div className="announce">Let's Talk</div>
            <div className="content">
                <div className="centered">
                    <div>
                        If your answer is ‘yes’ to both of the above questions, then you have come to the right place!
                    </div>
                    <div className="contact-info">
                        <div>I am offering pro-bono project management consulting and services to Non-Profits.</div>
                        <div>
                            Email me at carmenleung@outlook.com or fill out the <Link to="/contact">form here</Link>
                        </div>
                        <div>I would love to chat and understand your needs.</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
