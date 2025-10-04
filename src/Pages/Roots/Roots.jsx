import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Hero from '../../Components/Hero/Hero';

const Roots = () => {
    return (
       <>
        <NavBar></NavBar>
        <Hero></Hero>
        <Outlet></Outlet>
       </>
    );
};

export default Roots;