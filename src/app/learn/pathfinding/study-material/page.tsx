"use client"
import React, { useState } from 'react';
import { Book, ArrowUpDown, Clock, Code, Brain, CheckCircle2 } from 'lucide-react';

const PathfindingAlgorithmsBlog = () => {
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
            Pathfinding Algorithms Guide
            <span className="tw-text-blue-500">.</span>
          </h1>
          <p className="tw-text-xl tw-font-bold tw-text-gray-300">
            Exploring popular pathfinding algorithms used in various applications
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
                What are Pathfinding Algorithms?
              </h2>
              <p className="tw-text-white tw-font-bold tw-leading-relaxed">
                Pathfinding algorithms are used to find a path from one point to another, typically on a graph or a grid. 
                They are essential in fields like robotics, gaming, and geographic information systems (GIS).
              </p>
            </section>

            <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Common Algorithms</h3>
                <ul className="tw-space-y-3 tw-text-white tw-font-bold">
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    A* (A-star) - Optimal and popular
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    Dijkstra - Shortest path algorithm
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    BFS (Breadth-First Search) - Explores all neighboring nodes
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-2">
                    <CheckCircle2 size={16} className="tw-text-green-500" />
                    DFS (Depth-First Search) - Explores deep into the graph
                  </li>
                </ul>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Key Characteristics</h3>
                <div className="tw-space-y-4 tw-text-white tw-font-bold">
                  <p>• Time Complexity</p>
                  <p>• Space Complexity</p>
                  <p>• Optimality</p>
                  <p>• Heuristic-based vs Uninformed</p>
                  <p>• Directional vs Non-directional</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'algorithms' && (
          <div className="tw-space-y-6">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">A* (A-star)</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  A* is a popular and optimal pathfinding algorithm. It uses both a heuristic and a cost function to efficiently find the best path.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(E log V)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(E)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">Dijkstra</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  Dijkstra's algorithm finds the shortest path from the source to all other nodes in a weighted graph.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(V²)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(V)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">BFS (Breadth-First Search)</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  BFS is a graph traversal algorithm that explores all the neighbors at the present depth before moving on to nodes at the next depth level.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(V + E)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(V)</p>
                </div>
              </div>

              <div className="tw-border tw-border-gray-700 tw-rounded-lg tw-p-6">
                <h3 className="tw-text-xl tw-font-bold tw-text-white tw-mb-4">DFS (Depth-First Search)</h3>
                <p className="tw-text-white tw-font-bold tw-mb-4">
                  DFS is a graph traversal algorithm that explores as far down a branch as possible before backtracking.
                </p>
                <div className="tw-bg-gray-800 tw-p-4 tw-rounded-lg tw-font-mono">
                  <p className="tw-text-green-400 tw-font-bold">Time Complexity: O(V + E)</p>
                  <p className="tw-text-green-400 tw-font-bold">Space Complexity: O(V)</p>
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
                    <td className="tw-py-2">A*</td>
                    <td className="tw-py-2">O(E log V)</td>
                    <td className="tw-py-2">O(E log V)</td>
                    <td className="tw-py-2">O(E log V)</td>
                    <td className="tw-py-2">O(E)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">Dijkstra</td>
                    <td className="tw-py-2">O(V log V)</td>
                    <td className="tw-py-2">O(V log V)</td>
                    <td className="tw-py-2">O(V²)</td>
                    <td className="tw-py-2">O(V)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">BFS</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V)</td>
                  </tr>
                  <tr>
                    <td className="tw-py-2">DFS</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V + E)</td>
                    <td className="tw-py-2">O(V)</td>
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

export default PathfindingAlgorithmsBlog;
