import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const data = useLoaderData();
  //   console.log(data);
  const bookId = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookId);
  //   console.log(singleBook);
  const { bookName, image, author } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className="w-2/3 mx-auto">
      <div>
        <img className="w-45" src={image} alt="" />
        <h5>
          {bookName} : <br /> <small> {author}</small>
        </h5>
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-accent m-2"
        >
          Mark as Read
        </button>
        <button className="btn btn-info m-2">Add to WshList</button>
      </div>
    </div>
  );
};

export default BookDetails;
