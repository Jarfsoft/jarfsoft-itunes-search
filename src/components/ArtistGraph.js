import React from "react";
import Graph from "react-vis-network-graph";

export default function ArtistGraph({ artist }) {
  const albums = ["Album1", "Album2", "Album3", "Album4", "Album5"];
  const graph = {
    nodes: [],
    edges: [],
  };

  graph.nodes.push({
    id: 1,
    label: artist,
    title: "Artist",
  });

  for (let i = 0; i < albums.length; i++) {
    graph.nodes.push({
      id: i + 2,
      label: albums[i],
      title: "Album",
    });

    graph.edges.push({
      from: 1,
      to: i + 2,
      length: 150,
    });
  }

  const options = {
    autoResize: false,
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
    width: "500px",
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
    nodes: {
      size: 25,

      font: {
        size: 23,
      },
      borderWidth: 2,
    },
  };

  return <Graph graph={graph} options={options} />;
}
