import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-[554px] mx-auto w-fit mt-5 rounded-xl bg-gray-500">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-around">
       
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className=" rounded-lg "
        />
        <div className="lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
