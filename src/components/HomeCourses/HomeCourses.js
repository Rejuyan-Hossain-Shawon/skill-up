import React from 'react';
import { Button, Card } from 'react-bootstrap';

const HomeCourses = (props) => {

    const { name, price, duration, picture } = props.course;
    return (
        <Card style={{ width: '40rem' }}>
            <Card.Img height="350" variant="top" src={picture} />
            <Card.Body className=" border-primary fs-4 bg-info text-dark">
                <Card.Title className="fs-1">{name}</Card.Title>
                <Card.Text>
                    Price: {price}
                </Card.Text>
                <Card.Text>
                    Duration/month: {duration}
                </Card.Text>
                <Button className="bg-success">Enroll Now</Button>

            </Card.Body>
        </Card>
    );
};

export default HomeCourses;