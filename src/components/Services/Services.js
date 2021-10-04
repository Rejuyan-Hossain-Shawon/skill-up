import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeCourses from '../HomeCourses/HomeCourses'

const Services = () => {
    const [courses, setCourse] = useState([])
    // data loading from my local data base 
    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <h1>This is the our  services what we provide</h1>
            <div className="home-container">

                {/* because work is similar thats why we using this HomeCourses components again */}
                {
                    courses.map(course => <HomeCourses course={course}></HomeCourses>)
                }
            </div>
        </div>
    );
};

export default Services;