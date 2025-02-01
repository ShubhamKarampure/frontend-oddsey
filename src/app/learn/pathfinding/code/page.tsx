import EditorComponent from "@/components/ui/EditorComponent";
import React from "react";
import { Heading } from "@/once-ui/components";

export default function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-7xl tw-mx-auto tw-p-4">
      {/* Problem Description Section */}
      <div className="tw-w-full tw-text-left tw-mb-8">
        <Heading marginBottom="l" variant="display-strong-s" className="tw-text-center">
          Pathfinding Algorithm Problem
        </Heading>

        <div className="tw-prose tw-prose-invert tw-max-w-none tw-mt-6">
          <p className="tw-text-lg">
            In this problem, you are tasked with implementing a pathfinding algorithm to find the shortest path in a grid from a start point to an endpoint, avoiding obstacles.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Problem Statement</h3>
          <p>
            You are given a grid with a start point and an endpoint. Some grid cells are blocked (represented by 1), and others are free (represented by 0). Implement a pathfinding algorithm to find the shortest path from the start point to the endpoint.
            If there is no valid path, return an empty path.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Input</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>
              A 2D grid of integers, where 0 represents an open cell, and 1 represents an obstacle.
            </li>
            <li>
              Coordinates of the start point <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">start</code> and the end point <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">end</code>.
            </li>
          </ul>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Output</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>A list of coordinates representing the shortest path from start to end. If no path exists, return an empty list.</li>
          </ul>

          <div className="tw-mt-8 tw-space-y-6">
            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 1:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]
start = [0, 0]
end = [3, 4]</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">[[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4]]</pre>
              </div>
            </div>

            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 2:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
grid = [
  [0, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]
start = [0, 0]
end = [3, 3]</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">[[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [3, 2], [3, 3]]</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-w-full">
        <EditorComponent />
      </div>
    </div>
  );
}
