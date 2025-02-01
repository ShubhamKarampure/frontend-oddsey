"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlatformLogo } from "@/components/ui/platform-logo"
import { Title } from "@radix-ui/react-toast"

interface Problem {
  id: number
  name: string
  difficulty: "Easy" | "Medium" | "Hard"
  platform: "LeetCode" | "HackerRank" | "Codeforces"
  link: string
}

const problems: Problem[] = [
  { id: 1, name: "A* Search Algorithm", difficulty: "Medium", platform: "LeetCode", link: "https://leetcode.com/problems/a-search-algorithm/" },
  { id: 2, name: "Dijkstra's Algorithm", difficulty: "Medium", platform: "LeetCode", link: "https://leetcode.com/problems/dijkstras-algorithm/" },
  { id: 3, name: "Breadth-First Search (BFS)", difficulty: "Easy", platform: "HackerRank", link: "https://www.hackerrank.com/challenges/bfs-shortest-reach/problem" },
  { id: 4, name: "Depth-First Search (DFS)", difficulty: "Easy", platform: "LeetCode", link: "https://leetcode.com/problems/depth-first-search/" },
  { id: 5, name: "Bellman-Ford Algorithm", difficulty: "Hard", platform: "Codeforces", link: "https://codeforces.com/problemset/problem/68/D" },
  { id: 6, name: "Greedy Algorithm for Pathfinding", difficulty: "Medium", platform: "LeetCode", link: "https://leetcode.com/problems/greedy-algorithm-pathfinding/" },
  { id: 7, name: "Dijkstra's Shortest Path", difficulty: "Hard", platform: "Codeforces", link: "https://codeforces.com/problemset/problem/467/C" },
  { id: 8, name: "A* Pathfinding with Heuristics", difficulty: "Medium", platform: "HackerRank", link: "https://www.hackerrank.com/challenges/a-star-pathfinding/problem" },
  { id: 9, name: "Floyd-Warshall Algorithm", difficulty: "Hard", platform: "LeetCode", link: "https://leetcode.com/problems/floyd-warshall-algorithm/" },
  { id: 10, name: "Uniform Cost Search", difficulty: "Medium", platform: "Codeforces", link: "https://codeforces.com/problemset/problem/1365/B" },
]

export default function PathfindingAlgoSheet() {
  const [searchTerm, setSearchTerm] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState<"All" | Problem["difficulty"]>("All")
  const [platformFilter, setPlatformFilter] = useState<"All" | Problem["platform"]>("All")

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === "All" || problem.difficulty === difficultyFilter
    const matchesPlatform = platformFilter === "All" || problem.platform === platformFilter
    return matchesSearch && matchesDifficulty && matchesPlatform
  })

  return (
    <div className="tw-container tw-mx-auto tw-p-8 tw-mt-8">
      <h1 className="tw-mb-8 tw-text-3xl tw-font-bold">Pathfinding Algorithm Problems</h1>
      <div className="tw-mt-2 tw-mb-4 tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row">
        <Input
          placeholder="Search problems..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:tw-w-1/3"
        />
        <Select onValueChange={(value) => setDifficultyFilter(value as any)} defaultValue="All">
          <SelectTrigger className="sm:tw-w-1/4 bg-white">
            <SelectValue placeholder="Filter by difficulty" />
          </SelectTrigger>
          <SelectContent className="bg-white" side="top">
            <SelectItem value="All">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setPlatformFilter(value as any)} defaultValue="All">
          <SelectTrigger className="sm:tw-w-1/4">
            <SelectValue placeholder="Filter by platform" />
          </SelectTrigger>
          <SelectContent className="bg-white" side="top">
            <SelectItem value="All">All Platforms</SelectItem>
            <SelectItem value="LeetCode">LeetCode</SelectItem>
            <SelectItem value="HackerRank">HackerRank</SelectItem>
            <SelectItem value="Codeforces">Codeforces</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="tw-w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead className="tw-text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProblems.map((problem) => (
            <TableRow key={problem.id}>
              <TableCell className="tw-font-medium">{problem.id}</TableCell>
              <TableCell>{problem.name}</TableCell>
              <TableCell>
                <span
                  className={`tw-inline-block tw-rounded tw-px-2 tw-py-1 tw-text-xs tw-font-semibold ${
                    problem.difficulty === "Easy"
                      ? "tw-bg-green-100 tw-text-green-800"
                      : problem.difficulty === "Medium"
                      ? "tw-bg-yellow-100 tw-text-yellow-800"
                      : "tw-bg-red-100 tw-text-red-800"
                  }`}
                >
                  {problem.difficulty}
                </span>
              </TableCell>
              <TableCell>
                <PlatformLogo platform={problem.platform} />
              </TableCell>
              <TableCell className="tw-text-right">
                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-text-blue-600 hover:tw-underline"
                >
                  Solve
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
