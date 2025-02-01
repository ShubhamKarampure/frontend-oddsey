import EditorComponent from "@/components/ui/EditorComponent";
import React from "react";
import { Heading } from "@/once-ui/components";

export default function Home() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-max-w-7xl tw-mx-auto tw-p-4">
      {/* Problem Description Section */}
      <div className="tw-w-full tw-text-left tw-mb-8">
        <Heading marginBottom="l" variant="display-strong-s" className="tw-text-center">
          Binary Search Problem
        </Heading>

        <div className="tw-prose tw-prose-invert tw-max-w-none tw-mt-6">
          <p className="tw-text-lg">
            In this problem, you are tasked with implementing a Binary Search algorithm to efficiently search for a target element in a sorted array.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Problem Statement</h3>
          <p>
            You are given a sorted array and a target value. Implement a function to find the index of the target value in the array using Binary Search.
            If the target is found, return the index of the target. If the target is not present, return <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">-1</code>.
          </p>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Input</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>
              A sorted array of integers <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">arr</code> where <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">arr[i] ≤ arr[i + 1]</code> (1 ≤ arr.length ≤ 10^4)
            </li>
            <li>
              An integer <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">target</code> representing the value to be searched for in the array (-10^4 ≤ target ≤ 10^4)
            </li>
          </ul>

          <h3 className="tw-text-xl tw-font-semibold tw-mt-6 tw-mb-4">Output</h3>
          <ul className="tw-list-disc tw-list-inside tw-space-y-2">
            <li>An integer representing the index of the target in the array if found</li>
            <li>
              Otherwise, return <code className="tw-bg-slate-800 tw-px-1.5 tw-py-0.5 tw-rounded">-1</code> if the target is not found
            </li>
          </ul>

          <div className="tw-mt-8 tw-space-y-6">
            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 1:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
arr = [-1, 0, 3, 5, 9, 12]
target = 9</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">4</pre>
              </div>
            </div>

            <div>
              <h4 className="tw-text-lg tw-font-semibold tw-mb-3">Example 2:</h4>
              <div className="tw-bg-slate-800 tw-rounded-lg tw-p-4">
                <p className="tw-font-medium tw-mb-2">Input:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">
arr = [-1, 0, 3, 5, 9, 12]
target = 2</pre>
                <p className="tw-font-medium tw-mt-4 tw-mb-2">Output:</p>
                <pre className="tw-bg-slate-900 tw-p-3 tw-rounded-md">-1</pre>
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