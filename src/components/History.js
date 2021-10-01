import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

import MusicCard from "./MusicCard";
import "./History.css";

export default function History() {
  const list = useSelector((state) => state.history.list);
  return (
    <div className="history">
      <h1>History</h1>
      {list && list.length !== 0 && (
        <ol>
          {list.map((i) => (
            <li>
              <MusicCard
                key={i.id}
                song={i.song}
                artist={i.artist}
                album={i.album}
                image={i.image}
                id={i.id}
              />
            </li>
          ))}
        </ol>
      )}
      {list && list.length === 0 && (
        <div className="default-text">
          <h1>Give a Like to a song from your searches.</h1>
          <FontAwesomeIcon className="icon" icon={faHandHoldingHeart} />
        </div>
      )}
    </div>
  );
}
