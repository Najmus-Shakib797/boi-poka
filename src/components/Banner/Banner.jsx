import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1> Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</h1>
        <button className="btn btn-primary">Test</button>
      </div>
      <div>
        <img src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
