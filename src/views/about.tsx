import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/about.scss';

export const About = (): JSX.Element => {
    return (
        <Container className="about">
            <Row>
                <Col xs={4}>
                    <img src={'images/about.jpg'} />
                </Col>
                <Col>
                    As a Project Management Professional, I worked on large scale projects in the Tech and Nonprofit
                    industries. I am detail oriented and outcome driven. Some of the projects that I had led include: -
                    IT Infrastructure on Workplace Evolving Services and Transition for the Provincial Health Services
                    Authority - COVID 19 Incidents and Claims Dashboard for the Provincial Health Services Authority -
                    Violence Prevention Report Update for the Provincial Health Services Authority - Solution
                    Architecture Redesign for the Provincial Health Services Authority - Change Management on Mission
                    and Vision Statement Renewal for S.U.C.C.E.S.S. - Software Implementation Analysis for the ARC
                    Foundation
                </Col>
            </Row>
        </Container>
    );
};
