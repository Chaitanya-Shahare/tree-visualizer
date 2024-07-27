import React from "react";
import Xarrow from "react-xarrows";

const TreeNode = ({ root }) => {
  if (root === null) return null;

  return (
    <div className="relative flex flex-col items-center">
      <div id={`node-${root.value}`} className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-2">
        <p>{root.value}</p>
      </div>
      <div className="grid grid-cols-2 mt-4">
        {root.left ? (
          <div>
            <TreeNode root={root.left} />
            <Xarrow start={`node-${root.value}`} end={`node-${root.left.value}`} curveness={0} />
          </div>
        ) : (
          <div></div>
        )}
        {root.right ? (
          <div>
            <TreeNode root={root.right} />
            <Xarrow start={`node-${root.value}`} end={`node-${root.right.value}`} curveness={0} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
