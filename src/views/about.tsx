import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const About = (): JSX.Element => {
    return (
        <Container className="about">
            <div className="photo-wrapper">
                <img className="photo" src={'images/about.jpg'} alt="" />
            </div>
            <div className="content">
                As a certified Project Management Professional and Scrum Master, Carmen has helped many clients achieve
                their goals by successfully delivering large-scale projects.
            </div>
            <div className="content">
                She completed her Bachelors of Science and Masters in Business Management at the University of British
                Columbia. Her extensive education, coupled with 4 years of experience in the public and non-profit
                sectors, allows her to be at the forefront in project management methodologies and tools.
            </div>
            <div className="content">
                An engaged and active member of the community, she is serving as the Volunteer Coordinator for the PMI
                Puget Sound Chapter, Mentor for the YWCA Tech Connect Program and Workshop Host for Vantage Point. She
                is also an Account Executive at Project Management Volunteers to source suitable Project Mangers and act
                as a liaison for her clients.
            </div>
            <hr />
            <div className="content">
                <div className="heading">Credentials</div>
                <div>
                    <li>PMP Certified</li>
                    <li>Certified Scrum Master</li>
                    <li>AWS Cloud Practitioner</li>
                    <li>Six Sigma Green Belt</li>
                    <li>ITIL Foundations</li>
                    <li>Certification v4.0</li>
                </div>
            </div>
            <div className="content">
                <div className="heading">Projects</div>
                <div>
                    <li>IT Infrastructure on Workplace Evolving Services and Transition</li>
                    <li>COVID 19 Incidents and Claims Dashboard</li>
                    <li>Violence Prevention Report Update</li>
                    <li>Solution Architecture Redesign</li>
                    <li>Change Management on Mission and Vision Statement Renewal</li>
                    <li>Software Implementation Analysis</li>
                </div>
            </div>
            <div className="content">
                <div className="heading">What my clients are saying</div>
                <Card className="testimonial">
                    <Card.Body>
                        “We were very delighted that Carmen chose to assist our organization in reviewing the current
                        state of our IT infrastructure. Carmen worked with the team ensuring the project was delivered
                        on-time and within scope. As part of the project, Carmen developed an internal needs assessment
                        survey, compiled and analyzed responses, and produced the final recommendations report that was
                        presented to the management team. Carmen exemplified strong organizational skills, time
                        management, and attention to detail that contributed greatly to the team dynamics. I was
                        impressed with her relatability in working with new team members, her ability to assess needs
                        and adjust accordingly. I look forward working with Carmen again should an opportunity arise.”
                    </Card.Body>
                    <Card.Footer>
                        <div className="credit">
                            Maria F.
                            <span className="title">[Director of Finance and Administration, ARC Foundation]</span>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="testimonial">
                    <Card.Body>
                        “It’s been an absolute pleasure working with Carmen! She kept the team on track with
                        deliverables throughout the project. She is detail-oriented and organized. Her contributions
                        were much appreciated.”
                    </Card.Body>
                    <Card.Footer>
                        <div className="credit">
                            Stephanie L.
                            <span className="title">[Co-Founder and Principal, Spotlight West Communications]</span>
                        </div>
                    </Card.Footer>
                </Card>

                <Card className="testimonial">
                    <Card.Body>
                        “Carmen demonstrates professionalism and thought leadership in the mission and vision refresh
                        project. She provided excellent support to data analysis and overall project management of our
                        initiative.”
                    </Card.Body>
                    <Card.Footer>
                        <div className="credit">
                            Queenie C. <span className="title">[CEO, S.U.C.C.E.S.S.]</span>
                        </div>
                    </Card.Footer>
                </Card>

                <Card className="testimonial">
                    <Card.Body>
                        “Carmen was instrumental in our project of refreshing vision and mission statements. From the
                        beginning, she implemented a project management framework to guide high project quality and
                        standards would be delivered within tight timelines. She helped to ensure that all stakeholders
                        were engaged throughout this project. She monitored the responsibilities/tasks and milestones.
                        We were incredibly fortunate to have Carmen’s strong expertise, enthusiasm, and leadership in
                        making this project a success. Carmen, thank you!”
                    </Card.Body>
                    <Card.Footer>
                        <div className="credit">
                            Diane H. <span className="title">[Director of People & Technology, S.U.C.C.E.S.S.]</span>
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        </Container>
    );
};
