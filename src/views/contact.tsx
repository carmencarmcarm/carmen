import React, { ChangeEvent, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormErrors = Array<keyof FormData>;

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function emailIsValid(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const Contact = (): JSX.Element => {
    const [formData, setFormData] = useState<FormData | undefined>();
    const [formErrors, setFormErrors] = useState<FormErrors>([]);
    const [alertVariant, setAlertVariant] = useState<string | undefined>();

    const onChange = (field: keyof FormData, evt: ChangeEvent<FormControlElement>) => {
        if (!evt.target.value || !evt.target.validity.valid) {
            if (!formErrors.includes(field)) {
                setFormErrors([...formErrors, field]);
            }
        } else {
            const newErrors = formErrors.filter((e) => e !== field);
            setFormErrors(newErrors);
        }

        if (field === 'email' && !emailIsValid(evt.target.value)) {
            setFormErrors([...formErrors, 'email']);
        }

        setFormData({ ...formData, [field]: evt.target.value } as FormData);
    };

    const onSubmitClick = async () => {
        const newErrors = [...formErrors];
        for (const field of ['name', 'email', 'subject', 'message']) {
            if (!formData || !formData[field as keyof FormData]) newErrors.push(field as keyof FormData);
        }
        setFormErrors(newErrors);
        if (newErrors.length > 0) {
            return;
        }

        try {
            await axios.post('https://2m14jsdzib.execute-api.us-east-1.amazonaws.com/prod/email', formData);
            setAlertVariant('success');
            setFormData(undefined);
        } catch (error) {
            console.error(error);
            setAlertVariant('danger');
        }
    };

    const renderAlert = (): JSX.Element => {
        if (!alertVariant) return <div />;

        return (
            <Alert variant={alertVariant} dismissible={true} onClose={() => setAlertVariant(undefined)}>
                {alertVariant === 'success'
                    ? 'Thank you for your message.'
                    : 'Failed to send message. Please try again in a few moments'}
            </Alert>
        );
    };

    return (
        <Container>
            <Form className="contact">
                {renderAlert()}
                <div className="heading">Use the form below to send me an email</div>
                <Form.Group controlId="name">
                    <Form.Label>
                        Name<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={formData?.name || ''}
                        isInvalid={formErrors.includes('name')}
                        onChange={(evt) => onChange('name', evt)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>
                        Email address<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        value={formData?.email || ''}
                        isInvalid={formErrors.includes('email')}
                        onChange={(evt) => onChange('email', evt)}
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>
                        Subject<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={formData?.subject || ''}
                        isInvalid={formErrors.includes('subject')}
                        onChange={(evt) => onChange('subject', evt)}
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>
                        Message<span className="mandatory">*</span>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        className="message"
                        value={formData?.message || ''}
                        isInvalid={formErrors.includes('message')}
                        onChange={(evt) => onChange('message', evt)}
                    />
                </Form.Group>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setFormData(undefined);
                        setFormErrors([]);
                    }}
                >
                    Reset
                </Button>
                <Button className="float-right" onClick={onSubmitClick}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};
