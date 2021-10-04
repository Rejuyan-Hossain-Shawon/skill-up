
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';


const Registration = () => {
    const handleSubmitBtn = () => {
        alert("your Registration Completed");
    }

    return (
        <div className="bg-white pb-3">
            <h1> Registration Form Fill Up  </h1>
            <div >
                <Form className="w-75 mx-auto">
                    <Row>
                        <Col>
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3 w-50" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-50" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Khulna</option>
                                <option>Rajshai</option>
                                <option>Borishal</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>



                    <Button onClick={handleSubmitBtn} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Registration;