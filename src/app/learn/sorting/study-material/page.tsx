"use client"
import React, { useState } from 'react';
import { Book, ArrowUpDown, Clock, Code, Brain, CheckCircle2 } from 'lucide-react';

const SortingAlgorithmsBlog = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showComplexity, setShowComplexity] = useState(false);

  const TabButton = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-font-bold tw-transition-all
        ${activeTab === id ? 'tw-border-b-2 tw-border-blue-500 tw-text-blue-500' : 'tw-text-white'}`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <div className="tw-min-h-screen tw-py-10 tw-px-4">
      <div className="tw-max-w-5xl tw-mx-auto tw-p-6">
        <header className="tw-text-center tw-mb-12">
          <h1 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">
            Sorting Algorithms Guide
            <span className="tw-text-blue-500">.</span>
          </h1>
          <p className="tw-text-xl tw-font-bold tw-text-gray-300">
            Understanding different sorting techniques and their implementations
          </p>
        </header>

        <nav className="tw-flex tw-justify-center tw-gap-4 tw-mb-8 tw-border-b tw-border-gray-700 tw-pb-2">
          <TabButton id="overview" label="Overview" icon={Book} />
          <TabButton id="algorithms" label="Algorithms" icon={Code} />
          <TabButton id="comparison" label="Comparison" icon={Brain} />
        </nav>

        {activeTab === 'overview' && (
          <div className="tw-space-y-8">
            <section className="tw-mb-8">
              <h2 className="tw-text-2xl tw-font-bold tw-text-white tw-mb-4 tw-flex tw-items-center tw-gap-2">
                <ArrowUpDown className="tw-text-blue-500" />
                What are Sorting Algorithms?
              </h2>
              <p className="tw-text-white tw-font-bold tw-leading-relaxed">
                Sorting algorithms are methods used to arrange elements in a specific sequence, typically in numerical or lexicographical order. 
                They are fundamental to computer science and form the basis for many other algorithms.
              </p>
            </section>

            <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Common Algorithms</h3>
                <ul className="tw-space-y-3 tw-text-white tw-font-bold">
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Bubble Sort - Simple but inefficient
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Quick Sort - Efficient divide-and-conquer
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Merge Sort - Stable sorting algorithm
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Selection Sort - In-place comparison
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Insertion Sort - Adaptive algorithm
                  </li>
                </ul>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Key Characteristics</h3>
                <div className="tw-space-y-4 tw-text-white tw-font-bold">
                  <p>• Time Complexity</p>
                  <p>• Space Complexity</p>
                  <p>• Stability</p>
                  <p>• In-place vs Out-of-place</p>
                  <p>• Internal vs External</p>
                  <p>• Recursive vs Iterative</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'algorithms' && (
          <div className="tw-space-y-6">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Quick Sort</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  A highly efficient sorting algorithm that uses divide-and-conquer strategy. It works by selecting a 'pivot' element and partitioning the array around it.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(n log n)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(log n)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Merge Sort</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  A stable sorting algorithm that uses divide-and-conquer. It divides the array into smaller subarrays, sorts them, and then merges them.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(n log n)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(n)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Bubble Sort</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(n²)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(1)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Selection Sort</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  Divides the input list into sorted and unsorted regions, repeatedly selecting the smallest element from the unsorted region.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(n²)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(1)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="tw-space-y-6">
            <h2 className="tw-text-2xl tw-font-bold tw-text-white tw-mb-4 tw-flex tw-items-center tw-gap-2">
              <Clock className="tw-text-blue-500" />
              Algorithm Comparison
            </h2>
            <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
              <table className="tw-w-full tw-text-white tw-font-bold">
                <thead>
                  <tr>
                    <th className="tw-border-b tw-border-gray-700 tw-py-2 tw-text-left">Algorithm</th>
                    <th className="tw-border-b tw-border-gray-700 tw-py-2 tw-text-left">Best Case</th>
                    <th className="tw-border-b tw-border-gray-700 tw-py-2 tw-text-left">Average Case</th>
                    <th className="tw-border-b tw-border-gray-700 tw-py-2 tw-text-left">Worst Case</th>
                    <th className="tw-border-b tw-border-gray-700 tw-py-2 tw-text-left">Space</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tw-py-2">Quick Sort</td>
                    <td className="tw-py-2">O(n log n)</td>
                    <td className="tw-py-2">O(n log n)</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(log n)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">Merge Sort</td>
                    <td className="tw-py-2">O(n log n)</td>
                    <td className="tw-py-2">O(n log n)</td>
                    <td className="tw-py-2">O(n log n)</td>
                    <td className="tw-py-2">O(n)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">Bubble Sort</td>
                    <td className="tw-py-2">O(n)</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(1)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">Selection Sort</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(n²)</td>
                    <td className="tw-py-2">O(1)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortingAlgorithmsBlog;