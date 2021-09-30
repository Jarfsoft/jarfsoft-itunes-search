import React from 'react';
import { useSelector } from 'react-redux';

import MusicCard from './MusicCard';
import './History.css';

export default function History() {
  const list = useSelector((state) => state.history.list);
  return (
    <div className="history">
      <h1>History</h1>
      <ol>
        {list && list.length !== 0 ? list.map((i) => <li><MusicCard key={i.id} artist={i.artist} album={i.album} image={i.image} id={i.id}/></li>) : <h1>Give a Like to a song from your searches.</h1>}
      </ol>
    </div>
  )
}
