import React from 'react';

import MusicCard from './MusicCard';
import './ResultsCard.css';

export default function ResultsCard({ search }) {
  return (
    <div className="results-card">
      <h1>{search ? search[0].trackName : ''}</h1>
      <ul>
        {search ? search.map((i) => <li><MusicCard key={i.trackId} artist={i.artistName} album={i.collectionName} image={i.artworkUrl100} id={i.trackId}/></li>) : ''}
      </ul>
    </div>
  )
}
