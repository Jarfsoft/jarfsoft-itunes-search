import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import MusicCard from "./MusicCard";
import "./ResultsCard.css";

export default function ResultsCard({ search }) {
  return (
    <div className="results-card">
      <h1>{search && search.length !== 0 ? search[0].trackName : "Music"}</h1>
      {search && search.length !== 0 && (
        <ul>
          {search.map((i) => (
            <li>
              <MusicCard
                key={i.trackId}
                song={i.trackName}
                artist={i.artistName}
                album={i.collectionName}
                image={i.artworkUrl100}
                id={i.trackId}
              />
            </li>
          ))}
        </ul>
      )}
      {search ? (
        search.length === 0 && <h1 className="no-results">No results! :(</h1>
      ) : (
        <div className="default-text">
          <h1>Do a music search in the Navigation bar.</h1>
          <FontAwesomeIcon className="icon" icon={faMusic} />
        </div>
      )}
    </div>
  );
}
