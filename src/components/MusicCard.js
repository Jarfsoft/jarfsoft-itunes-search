import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function MusicCard() {
  return (
    <>
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/4a/3b/3d4a3b05-54fb-198b-addd-de92f9d22ccf/source/100x100bb.jpg" alt="img"/>
      <h1>Artist</h1>
      <p>Album</p>
      <FontAwesomeIcon className="icon" icon={faThumbsUp} />
      <FontAwesomeIcon className="icon" icon={faThumbsDown} />
    </>
  )
}
