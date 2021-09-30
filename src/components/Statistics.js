import React from 'react';
import ArtistGraph from './ArtistGraph';

import './Statistics.css';

export default function Statistics() {
  return (
    <div className="statistics">
      <h1>Statistics</h1>
      <ol>
        <li><ArtistGraph /></li>
        <li><ArtistGraph /></li>
        <li><ArtistGraph /></li>
        <li><ArtistGraph /></li>
        <li><ArtistGraph /></li>
      </ol>
    </div>
  )
}
