import React from "react";

import MusicCard from "./MusicCard";
import "./ResultsCard.css";

export default function ResultsCard({ search }) {
  return (
    <div className="results-card">
      <h1>{search && search.length !== 0 ? search[0].trackName : "Music"}</h1>
      <ul>
        {search && search.length !== 0 ? (
          search.map((i) => (
            <li>
              <MusicCard
                key={i.trackId}
                artist={i.artistName}
                album={i.collectionName}
                image={i.artworkUrl100}
                id={i.trackId}
              />
            </li>
          ))
        ) : (
          <h1>Do a music search in the Navigation bar.</h1>
        )}
      </ul>
    </div>
  );
}
