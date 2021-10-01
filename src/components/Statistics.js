import React from "react";
import { useSelector } from "react-redux";

import ArtistGraph from "./ArtistGraph";
import "./Statistics.css";

export default function Statistics() {
  const list = useSelector((state) => state.favorites.list);
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <ol>
        {list.length !== 0 ? (
          list.slice(0, 5).map((a) => (
            <li>
              <ArtistGraph key={a.artist} artist={a.artist} />
            </li>
          ))
        ) : (
          <h1>Most liked artists will be shown here.</h1>
        )}
      </ol>
    </div>
  );
}
