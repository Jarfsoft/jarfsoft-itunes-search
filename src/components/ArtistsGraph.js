import { React, useState, useEffect } from "react";
import Graph from "react-vis-network-graph";

import { getAlbums } from "../apiHelper";

export default function ArtistsGraph({ list }) {
  const [artist1, setArtist1] = useState([]);
  const [artist2, setArtist2] = useState([]);
  const [artist3, setArtist3] = useState([]);
  const [artist4, setArtist4] = useState([]);
  const [artist5, setArtist5] = useState([]);

  const artists = [];
  artists.push(artist1);
  artists.push(artist2);
  artists.push(artist3);
  artists.push(artist4);
  artists.push(artist5);

  useEffect(() => {
    if(list[0]) {
      getAlbums(list[0], setArtist1);
      if(list[1]) {
        getAlbums(list[1], setArtist2);
        if(list[2]) {
          getAlbums(list[2], setArtist3);
          if(list[3]) {
            getAlbums(list[3], setArtist4);
            if(list[4]) getAlbums(list[4], setArtist5);
          }
        }
      }
    }
    
  }, [list]);

  const graph = {
    nodes: [],
    edges: [],
  };

  graph.nodes.push({
    id: 1,
    label: 'Favorite Artists',
    title: "Artists list",
  });

  const windowScreen = window.screen.width;

  let cont = 2;
  let artistID = 0;

  for (let i = 0; i < list.length; i++) {
    artistID = cont;
    graph.nodes.push({
      id: artistID,
      label: list[i].artist,
      title: "Artist",
    });
    graph.edges.push({
      from: 1,
      to: artistID,
      length: windowScreen >= 700 ? 100 : 80,
    });
    
    cont++;

    for (let j = 0; j < artists[i].length; j++) {
      graph.nodes.push({
        id: cont,
        label: '',
        title: artists[i][j].collectionName,
      });
      graph.edges.push({
        from: artistID,
        to: cont,
        length: windowScreen >= 700 ? 100 : 60,
      }); 
      cont++;
    }
  }

  const options = {
    autoResize: false,
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    height: windowScreen >= 700 ? "900px" : "300px",
    width: "100%",
    interaction: {
      dragNodes: false,
      dragView: true,
      zoomView: false,
    },
    nodes: {
      size: 15,

      font: {
        size: windowScreen >= 700 ? 13 : 6,
      },
      borderWidth: 2,
    },
  };

  return <Graph graph={graph} options={options} />;
}
