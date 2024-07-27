// src/App.jsx
import React from "react";
import "./App.css";
import TreeNode from "./TreeNode";

class TNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function App() {
  const [tree, setTree] = React.useState([3,null,2,null,1]); // Example array representing the tree

  // if (tree.length === 0) return <div>No tree data</div>;

  const root = new TNode(tree[0]);
  let queue = [root];
  let i = 1;

  while (i < tree.length) {
    const current = queue.shift();

    // Assign left child
    if (i < tree.length) {
      if (tree[i] !== null) {
        current.left = new TNode(tree[i]);
        queue.push(current.left);
      } else {
        current.left = null;
      }
      i++;
    }

    // Assign right child
    if (i < tree.length) {
      if (tree[i] !== null) {
        current.right = new TNode(tree[i]);
        queue.push(current.right);
      } else {
        current.right = null;
      }
      i++;
    }
  }

  return (
    <div className="App">
      <h1 className="text-4xl mb-8">Tree Visualizer</h1>
      <div className="flex justify-center">
        <TreeNode root={root} />
      </div>
    </div>
  );
}

export default App;
