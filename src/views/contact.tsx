import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = (): JSX.Element => {
    return (
        <Container>
            <Form className="contact">
                <div className="heading">Use the form below to send me an email</div>
                <Form.Group controlId="name">
                    <Form.Label>
                        Name<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>
                        Email address<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>
                        Subject<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>
                        Message<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control as="textarea" className="message" />
                </Form.Group>
                <Button variant="secondary">Reset</Button>
                <Button className="float-right">Submit</Button>
            </Form>
        </Container>
    );
};
