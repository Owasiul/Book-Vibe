import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/AddToDB";

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

  const handleRead = (id) =>{
    addToStoreDB(id)
  }
  return (
    <div className="flex flex-col lg:flex-row  items-start gap-8 p-6 rounded-2xl w-full mx-auto h-max">
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

        <p className=" font-medium border-t border-b py-2">{category} </p>

        <p className=" text-sm leading-relaxed">
          <span className="font-semibold text-sm ">Review :</span> {review}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-2 border-b pb-3">
          <span className="font-semibold text-sm ">Tags:</span>
          {tags.map((tag, index) => (
            <span
              className="badge badge-outline badge-success mr-2"
              key={index}
            >
              {tag}{" "}
            </span>
          ))}{" "}
        </div>

        {/* Info Section as Table */}
        <div className="mt-4 text-sm">
          <table className="w-96 text-left border-collapse">
            <tbody>
              <tr>
                <th className=" py-1 font-semibold">Number of Pages:</th>
                <td className="py-1">{totalPages}</td>
              </tr>
              <tr>
                <th className=" py-1 font-semibold">Publisher:</th>
                <td className="py-1">{publisher}</td>
              </tr>
              <tr>
                <th className=" py-1 font-semibold">Year of Publishing:</th>
                <td className="py-1">{yearOfPublishing}</td>
              </tr>
              <tr>
                <th className=" py-1 font-semibold">Rating:</th>
                <td className="py-1">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 mt-5">
          <button onClick={() => handleRead(id)} className="btn btn-primary px-6">Read</button>
          <button className="btn btn-outline btn-secondary px-6">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
