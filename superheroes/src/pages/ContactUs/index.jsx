import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ContactUs() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)    

        try{

        const options = {
            method: 'POST',
            headers: { Accept: "application/json" },
            body: formData
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        if (response.ok){
            alert(JSON.stringify(Object.fromEntries(formData), null, 2))
        }

        }catch(err){
            console.log(err.message)
        }
        }
        
    

    return (
        <Container id="contact-us" className="my-5 background">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h2 className="mb-4">Contact Us</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={6} controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First name" name="firstName" />
                            </Form.Group>
                            <Form.Group as={Col} md={6} controlId="lastName" >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" name="lastName"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email'/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="query">
                            <Form.Label>Your query</Form.Label>
                            <Form.Control as="textarea" rows={8} placeholder="How can we help?" name='message' />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}