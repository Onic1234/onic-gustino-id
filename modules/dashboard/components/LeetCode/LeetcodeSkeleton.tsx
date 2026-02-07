import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LeetcodeSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="space-y-2 rounded-lg border border-neutral-800 p-4"
          >
            <Skeleton height={20} width="80%" />
            <Skeleton height={32} width="60%" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeetcodeSkeleton;
