import React, { useEffect, useState } from 'react';
import HomeCourses from '../HomeCourses/HomeCourses';
import "./Home.css"

const Home = () => {
    const [courses, setCourse] = useState([])
    // data loading from my local data base 
    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    // short in 4 courses for home component display 
    const homeCourses = courses.slice(0, 4);

    return (
        <div className="home-container">
            {
                homeCourses.map(course => <HomeCourses key={course._id} course={course} ></HomeCourses>)
            }
        </div>
    );
};

export default Home;