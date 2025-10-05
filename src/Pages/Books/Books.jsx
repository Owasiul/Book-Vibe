import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ bookPromise }) => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl text-center">Books</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5 px-5 mt-7">
        {
            bookPromise.map(book => <Book key={book.bookId} book={book} ></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
