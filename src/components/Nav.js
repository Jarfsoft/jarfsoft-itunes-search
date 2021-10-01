import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
import { getContent } from "../apiHelper";

export default function Nav({ change }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (search !== "") getContent(search.replace(/ /g, "+"), change);
  };
  return (
    <div className="nav">
      <ul>
        <li>
          <img
            src="https://www.apple.com/ac/globalnav/6/es_419/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
            alt="logo"
          />
        </li>
        <li>
          <form onSubmit={clickHandler}>
            <input type="text" value={search} onChange={handleChange} />
            <FontAwesomeIcon
              type="submit"
              className="icon"
              onClick={clickHandler}
              icon={faSearch}
            />
          </form>
        </li>
      </ul>
    </div>
  );
}
