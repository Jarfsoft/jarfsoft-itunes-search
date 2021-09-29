import React from 'react';

import MusicCard from './MusicCard';
import './ResultsCard.css'

export default function ResultsCard({ search = "Recent"}) {
  return (
    <div className="results-card">
      <h1>{search}</h1>
      <ul>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
        <li><MusicCard /></li>
      </ul>
    </div>
  )
}
