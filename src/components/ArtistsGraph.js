import { React, useState, useEffect } from "react";
import Graph from "react-vis-network-graph";

import { getArtistAlbums } from "../apiHelper";

export default function ArtistsGraph({ list }) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists([]);
    for (let i in list) {
      getArtistAlbums(artists, i.artist, setArtists);
    }
  }, [list, artists]);

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

  if(artists) {
    for (let i in artists) {
      artistID = cont;
      graph.nodes.push({
        id: artistID,
        label: i.artist,
        title: "Artist",
      });
      graph.edges.push({
        from: 1,
        to: artistID,
        length: windowScreen >= 700 ? 250 : 80,
      });
      
      cont++;

      for (let j in i.albums) {
        graph.nodes.push({
          id: cont,
          label: '',
          title: j.collectionName,
        });
        graph.edges.push({
          from: artistID,
          to: cont,
          length: windowScreen >= 700 ? 250 : 80,
        }); 
        cont++;
      }
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
    height: windowScreen >= 700 ? "700px" : "300px",
    width: "100%",
    interaction: {
      dragNodes: false,
      dragView: false,
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
