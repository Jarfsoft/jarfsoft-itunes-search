import React from "react";
import Graph from "react-vis-network-graph";
 
export default function ArtistGraph() {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 3, to: 2 },
      { from: 4, to: 2 },
      { from: 5, to: 2 },
    ]
  };
 
  const options = {
    autoResize: false,
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "500px",
    width: "500px",
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
    nodes : {
      size : 25,

      font : {
        size : 23,
      },
      borderWidth : 2
    },
  };
 
  return (
    <Graph
      graph={graph}
      options={options}
    />
  );
}