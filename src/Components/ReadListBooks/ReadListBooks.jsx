import React from "react";

const ReadListBooks = ({ kitab }) => {
  const {
    image,
    bookName,
    author,
    rating,
    tags,
    category,
    bookId,
    yearOfPublishing,
    publisher,
    totalPages,
  } = kitab;
  return (
    <div class="card card-side shadow-md border p-1 ">
      <figure class="p-4 bg-gray-200">
        <img src={image} alt="Book Cover" class="w-32 rounded-md" />
      </figure>
      <div class="card-body py-4 ">
        <h2 class="card-title text-lg font-semibold">{bookName} </h2>
        <p class="text-sm text-white">By : {author}</p>

        <div class="flex flex-wrap gap-2 my-2">
          <div className="space-x-2">
            {tags.map((tag) => (
              <div key={bookId} class="badge badge-success badge-outline">
                {tag}{" "}
              </div>
            ))}{" "}
          </div>
          <div class="flex items-center gap-1 text-sm text-white">
            Year of Publishing: {yearOfPublishing}
          </div>
        </div>

        <div class="flex flex-wrap gap-4 text-sm text-white">
          <div class="flex items-center gap-1"> Publisher:{" "}
            {publisher}
          </div>
          <div class="flex items-center gap-1">
            <i class="fa-regular fa-file-lines text-white"></i> Page:{" "}
            {totalPages}
          </div>
        </div>

        <div class="divider my-2"></div>

        <div class="flex items-center gap-3">
          <span class="badge badge-info badge-outline">
            Category: {category}{" "}
          </span>
          <span class="badge badge-warning badge-outline">
            Rating: {rating}{" "}
          </span>
          <button class="btn btn-success btn-sm text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadListBooks;
