import React from "react";
import booksImg from '../../assets/books.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-[554px] mx-auto w-fit mt-5 rounded-xl bg-gray-500">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-around">
       
        <img
          src={booksImg}
          className=" rounded-lg object-contain w-lg "
        />
        <div className="lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold lg:w-7/8 w-full">Books to freshen up your bookshelf</h1>
          
          <button className="btn btn-primary mt-7">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
