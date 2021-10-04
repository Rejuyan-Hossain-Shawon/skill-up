import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=" bg-secondary p-2">

            <h1 className="text-info fw-bolder">Explore Your Creativity Here </h1>
            <NavLink className="text-white fw-bolder text-decoration-none fs-4 me-2" to="/home">Home</NavLink>
            <NavLink className="text-white fw-bolder text-decoration-none fs-4 me-2" to="/services">Services</NavLink>
            <NavLink className="text-white fw-bolder text-decoration-none fs-4 me-2" to="/about">About</NavLink>
            <NavLink className="text-white fw-bolder text-decoration-none  fs-4 me-2" to="/registration">Registration</NavLink>
        </div>
    );
};

export default Header;