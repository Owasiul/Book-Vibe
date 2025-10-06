import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { image, bookName, author, rating, tags, category, bookId } = book;
  return (
    <Link to={`/bookDeatails/${bookId}`}>
      <div className="card bg-white text-black lg:w-96 md:w-max w-full mx-auto shadow-sm border p-5">
        <figure className="px-5 py-10 bg-gray-200  ">
          <img
            src={image}
            alt="Book"
            className="rounded-xl  object-contain h-[166px]"
          />
        </figure>
        <div className="card-body items-start text-start">
          <div className="flex justify-around">
            {tags.map((tag, index) => (
              <span className="badge mr-2" key={index}>
                {tag}{" "}
              </span>
            ))}{" "}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="text-lg ">By: {author}</p>
          <div className="card-actions my-2 flex items-center w-full pt-2 justify-between border-t border-dashed ">
            <p>{category} </p>
            <div className="flex items-center space-x-1">
              <span>{rating} </span>{" "}
              <span>
                <Star className="w-10"></Star>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
