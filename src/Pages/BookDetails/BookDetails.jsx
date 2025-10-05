import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookID = parseInt(id);
  const bookData = useLoaderData();
  const singleBook = bookData.find((book) => book.bookId === bookID);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  // console.log(singleBook)
  return (
    <div className="flex flex-col lg:flex-row  items-start gap-8 p-6 rounded-2xl w-full mx-auto h-screen">
      {/* Book Image */}
      <div className="w-full lg:w-1/3 bg-gray-300 p-4 rounded-xl">
        <img
          src={image}
          alt="Book Cover"
          className=" w-full h-[564px] object-contain"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-col gap-3 w-full lg:w-2/3 text-white">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-sm ">
          <span className="font-semibold">By :</span> {author}
        </p>

        <p className=" font-medium">{category} </p>

        <p className=" text-sm leading-relaxed">
          <span className="font-semibold ">Review :</span> {review}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
              <span className="badge badge-outline badge-success mr-2" key={index}>
                {tag}{" "}
              </span>
            ))}{" "}
        </div>

        {/* Info Section */}
        <div className="mt-4 text-sm space-y-1">
          <p>
            <span className="font-semibold">Number of Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button className="btn btn-primary px-6">Read</button>
          <button className="btn btn-outline btn-secondary px-6">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
