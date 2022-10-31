import React from "react";

function TabBar() {
  return (
    <div className="bg-white w-screen text-gray-400 z-50">
      <div className="grid grid-cols-2 border border-gray-200">
        <div className="flex justify-center py-3 border-r border-gray-200 hover:text-primary">
          Submission
        </div>
        <div className="flex justify-center py-3 hover:text-primary">
          Engagement
        </div>
      </div>
    </div>
  );
}

export default TabBar;
