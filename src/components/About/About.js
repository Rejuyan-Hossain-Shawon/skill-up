import React from 'react';
import { Card } from 'react-bootstrap';


const About = () => {
    return (
        <div className="m-5">
            <h1>About Skill Update</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <Card style={{ width: '28rem' }}>
                        <Card.Body>
                            <Card.Title>Rejuyan Hossain Shawon</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Founder</Card.Subtitle>
                            <Card.Text>
                                I am from Sylhet,Bangladesh.I am 21 years old and studying at Daffodil International University in CSE Department.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Body>
                            <Card.Title className="fw-bolder">Why Should We Update Our Skill</Card.Title>

                            <Card.Text className="fw-normal">
                                Fundamentally, skill development is the time one invests in to improve their proficiency and to stay future-ready, any agilities that one follows as a passion, and the ability to complete a task with higher rates of success at the right time. It is essential because one’s skills determine their ability to execute their plans with success.

                                In today’s world, lack of proper education and training restricts people from the opportunities for self-advancement by limiting their access to well-paid employment. Eventually, this prevents such individuals from making an influential contribution to economic growth. Thus, adequate education quality and training are recognised as fundamental ways of breaking down the eco-system of poverty. One individual, Sweta Mishra, has rightly said that “Skill development is no longer a matter of choice. It is imperative to adapt, survive and succeed.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default About;