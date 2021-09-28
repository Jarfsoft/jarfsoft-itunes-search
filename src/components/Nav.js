import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Nav.css';

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <img src="https://www.apple.com/ac/globalnav/6/es_419/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg" alt="logo"/></li>
        <li>
          <input type="text" />
          <FontAwesomeIcon className="icon" icon={faSearch} />
        </li>
      </ul>
    </div>
  )
}
