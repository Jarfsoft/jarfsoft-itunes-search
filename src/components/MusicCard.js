import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import actions from "../Actions/index";

export default function MusicCard({ song, artist, album, image, id }) {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.history.list);
  const [like, setLike] = useState();
  const onClickLike = () => {
    dispatch(
      actions.add({
        song: song,
        artist: artist,
        album: album,
        image: image,
        id: id,
      })
    );
    dispatch(actions.sum(artist));
  };
  const onClickUnlike = () => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        dispatch(actions.remove(i));
        dispatch(actions.sub(artist));
        break;
      }
    }
  };
  useEffect(() => {
    let found = false;
    for (let i = 0; i < list.length; i++) {
      if (id === list[i].id) {
        found = true;
        break;
      }
    }
    setLike(found);
  }, [list, id]);
  return (
    <>
      <img src={image} alt="img" />
      <h1>{artist.length > 10 ? artist.slice(0, 10) + "..." : artist}</h1>
      <p>{album.length > 10 ? album.slice(0, 10) + "..." : album}</p>
      <p>{song.length > 10 ? song.slice(0, 10) + "..." : song}</p>
      {!like ? (
        <FontAwesomeIcon
          className="icon"
          icon={faThumbsUp}
          onClick={onClickLike}
        />
      ) : (
        <FontAwesomeIcon
          className="icon"
          icon={faThumbsDown}
          onClick={onClickUnlike}
        />
      )}
    </>
  );
}
