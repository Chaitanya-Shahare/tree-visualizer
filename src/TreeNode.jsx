// src/components/TreeNode.jsx
import React from "react";

const TreeNode = ({ root }) => {
  if (root === null) return null;

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-2">
        <p>{root.value}</p>
      </div>
      <div className="grid grid-cols-2 mt-4">
        {root.left ? (
          <div>
            <TreeNode root={root.left} />
          </div>
        ): <div></div>}
        {root.right && (
          <div>
            <TreeNode root={root.right} />
          </div>
        )}
      </div>

    </div>
  );
};

export default TreeNode;
