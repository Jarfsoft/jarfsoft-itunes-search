import { React, useState, useEffect } from "react";
import Graph from "react-vis-network-graph";

import { getAlbums } from "../apiHelper";

export default function ArtistGraph({ artist }) {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    getAlbums(artist, setAlbums);
  }, [artist]);

  const graph = {
    nodes: [],
    edges: [],
  };

  graph.nodes.push({
    id: 1,
    label: artist,
    title: "Artist",
  });

  if(albums) {
    for (let i = 0; i < albums.length; i++) {
      graph.nodes.push({
        id: i + 2,
        label: albums[i].collectionName,
        title: "Album",
      });
  
      graph.edges.push({
        from: 1,
        to: i + 2,
        length: 250,
      });
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
    height: "700px",
    width: "900px",
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
    nodes: {
      size: 15,

      font: {
        size: 13,
      },
      borderWidth: 2,
    },
  };

  return <Graph graph={graph} options={options} />;
}
