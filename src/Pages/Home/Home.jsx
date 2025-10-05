import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';


const Home = () => {
    const bookPromise = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <Books bookPromise={bookPromise}></Books>
        </div>
    );
};

export default Home;