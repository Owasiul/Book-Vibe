import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDB";
import ReadListBooks from "../../Components/ReadListBooks/ReadListBooks";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState();
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
       setReadList(sortPage)
    }
    if (type === "ratings") {
      const sortPage = [...readList].sort(
        (a, b) => a.rating - b.rating
      );
       setReadList(sortPage)
    }
  };
  useEffect(() => {
    const bookData = getStoredBook();
    const convertedBookData = bookData.map((book) => parseInt(book));
    const readBooks = data.filter((readBook) =>
      convertedBookData.includes(readBook.bookId)
    );
    setReadList(readBooks);
  }, []);
  return (
    <div>
      <details className="dropdown ">
        <summary className="btn m-1">Sort By {sort ? sort : ""} </summary>
        <ul className="menu dropdown-content bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wished Books</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5 p-4">
            {readList.map((kitab) => (
              <ReadListBooks key={kitab.bookId} kitab={kitab}></ReadListBooks>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
