import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData);
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    console.log(convertedStoredBooks);
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId),
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      sortByPages(sortByPages);
    }
    if (sortType === "rating") {
      const shortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(shortedByRating);
    }
  };
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Short by : {sort ? sort : ""}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List : {readList.length}</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
