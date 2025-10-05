import React from "react";

const Book = ({ book }) => {
  const {image,bookName, author} = book
  return (
    <div className="card bg-white text-black w-96 mx-auto shadow-sm border p-5">
      <figure className="px-5 py-10 bg-gray-200  ">
        <img
          src={image}
          alt="Book"
          className="rounded-xl bg-gray-200 object-contain h-[166px]"
        />
      </figure>
      <div className="card-body items-start text-start">
        <div className="flex space-x-4">
            <span className="badge">Badge</span>
            <span className="badge">Badge</span>
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className="text-lg ">
          By: {author}
        </p>
        <div className="card-actions my-2 flex items-center justify-between border-t border-dotted ">
          
        </div>
      </div>
    </div>
  );
};

export default Book;
