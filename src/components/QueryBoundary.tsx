/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description QueryBoundary
 */

import React from "react";
import type { PropsWithChildren } from "react";

interface IProps {
  isLoading: boolean;
  data?: any;
  emptyTitle: string;
  noHeight?: boolean;
}

const QueryBoundary: React.FC<PropsWithChildren<IProps>> = (props) => {
  const {
    data,
    children,
    emptyTitle,
    isLoading = false,
    noHeight = false,
  } = props;

  if (data && data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 p-6 text-center bg-base-300 m-10 rounded-2xl">
        <svg
          className="w-12 h-12 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
        </svg>
        <h2 className="text-lg font-semibold text-gray-700">{emptyTitle}</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-132px)] flex items-center justify-center">
        <span className="loading loading-bars loading-xl" />
      </div>
    );
  }

  return (
    <div className={noHeight ? "" : "h-[calc(100vh-132px)] overflow-auto"}>
      {children}
    </div>
  );
};

export default QueryBoundary;
