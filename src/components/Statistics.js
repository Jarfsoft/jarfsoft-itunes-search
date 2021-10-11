import { React, useState } from "react";
import { useSelector } from "react-redux";

import ArtistGraph from "./ArtistGraph";
import ArtistsGraph from "./ArtistsGraph";
import "./Statistics.css";

export default function Statistics() {
  const list = useSelector((state) => state.favorites.list);
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  }
  return (
    <div className="statistics">
      <h1>Favorite Artists</h1>
      <div className="flex-slide">
        <label className="switch">
          <input type="checkbox" onClick={clickHandler}/>
          <span className="slider round"></span>
        </label>
        <h1>1 Whole Graph</h1>
      </div>
      {clicked ? <div className="whole-graph">
        <ol>
        {list.length !== 0 ? (
          list.slice(0, 5).map((a) => (
            <li>
              <p key={a.artist}>{a.artist}</p>
            </li>
          ))
        ) : (
          <h1 className="no-like">Most liked artists will be shown here.</h1>
        )}
      </ol>
      {list.length !== 0 && <ArtistsGraph list={list.slice(0, 5)} />}
      </div> 
      : 
      <ol className="graph-list no-like">
        {list.length !== 0 ? (
          list.slice(0, 5).map((a) => (
            <li>
              <ArtistGraph key={a.artist} artist={a.artist} />
            </li>
          ))
        ) : (
          <h1 className="no-like">Most liked artists will be shown here.</h1>
        )}
      </ol>}
    </div>
  );
}
