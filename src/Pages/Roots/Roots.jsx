import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const Roots = () => {
    return (
       <>
        <NavBar></NavBar>
        <Outlet></Outlet>
       </>
    );
};

export default Roots;