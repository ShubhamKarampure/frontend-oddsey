import EditorComponent from "@/components/ui/EditorComponent";
import React from "react";
import { Heading } from "@/once-ui/components";

export default function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-7xl tw-mx-auto tw-p-4">
      {/* Problem Description Section */}
      <div className="tw-w-full tw-text-left tw-mb-8">
        <Heading marginBottom="l" variant="display-strong-s" className="tw-text-center">
          Sorting Algorithm Problem
        </Heading>

        <div className="tw-prose tw-prose-invert tw-max-w-none tw-mt-6">
          <p className="tw-text-lg">
            In this problem, you are tasked with implementing a sorting algorithm to sort an array of integers in ascending order.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Problem Statement</h3>
          <p>
            You are given an unsorted array of integers. Implement a function to sort the array in ascending order using a sorting algorithm of your choice.
            After sorting, return the sorted array.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Input</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>
              An array of integers <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">arr</code> (1 ≤ arr.length ≤ 10^4, -10^4 ≤ arr[i] ≤ 10^4)
            </li>
          </ul>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Output</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>A sorted array of integers in ascending order.</li>
          </ul>

          <div className="tw-mt-8 tw-space-y-6">
            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 1:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
arr = [5, 2, 9, 1, 5, 6]</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">[1, 2, 5, 5, 6, 9]</pre>
              </div>
            </div>

            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 2:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
arr = [3, -2, -1, 4, 0]</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">[-2, -1, 0, 3, 4]</pre>
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
