import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function MusicCard({ artist, album, image}) {
  return (
    <>
      <img src={image} alt="img"/>
      <h1>{artist}</h1>
      <p>{album}</p>
      <FontAwesomeIcon className="icon" icon={faThumbsUp} />
      <FontAwesomeIcon className="icon" icon={faThumbsDown} />
    </>
  )
}
