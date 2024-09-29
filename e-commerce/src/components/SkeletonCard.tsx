import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative card shadow-lg h-[420px] w-[300px] group flex flex-col justify-between bg-white rounded-lg overflow-hidden">
      <div className="relative h-[200px] bg-gray-300 animate-pulse"></div>

      <div className="p-4 flex flex-col justify-between">
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
      </div>

      <div className="flex gap-2 px-4 mb-4">
        <div className="px-2 py-1 bg-gray-300 text-xs font-medium rounded-md w-12 h-6 animate-pulse"></div>
        <div className="px-2 py-1 bg-gray-300 text-xs font-medium rounded-md w-16 h-6 animate-pulse"></div>
      </div>

      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-10 animate-pulse"></div>
        </div>
        <div className="h-8 w-16 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
